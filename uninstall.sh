#!/usr/bin/env bash
set -euo pipefail

SKILL_NAMES=("ui-builder" "ui-review")
OFFICIAL_SKILLS_DIR="$HOME/.codex/skills"
LEGACY_USER_SKILLS_DIR="$HOME/.agents/skills"
PROJECT_PATH=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --repo)
      if [ -z "${2:-}" ]; then
        echo "--repo requires a path"
        exit 1
      fi
      PROJECT_PATH="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

remove_path() {
  local path="$1"
  rm -rf "$path"
}

remove_current_install() {
  for skill_name in "${SKILL_NAMES[@]}"; do
    remove_path "$OFFICIAL_SKILLS_DIR/hjkit-$skill_name"
  done
}

remove_legacy_user_install() {
  for skill_name in "${SKILL_NAMES[@]}"; do
    remove_path "$LEGACY_USER_SKILLS_DIR/hjkit-$skill_name"
  done
}

remove_project_links() {
  local project_skills_dir="$1"
  for skill_name in "${SKILL_NAMES[@]}"; do
    remove_path "$project_skills_dir/hjkit-$skill_name"
  done
  rmdir "$project_skills_dir" 2>/dev/null || true
}

remove_current_install
remove_legacy_user_install

if [ -d "$OFFICIAL_SKILLS_DIR" ]; then
  rmdir "$OFFICIAL_SKILLS_DIR" 2>/dev/null || true
  rmdir "$(dirname "$OFFICIAL_SKILLS_DIR")" 2>/dev/null || true
fi

if [ -d "$LEGACY_USER_SKILLS_DIR" ]; then
  rmdir "$LEGACY_USER_SKILLS_DIR" 2>/dev/null || true
  rmdir "$(dirname "$LEGACY_USER_SKILLS_DIR")" 2>/dev/null || true
fi

if [ -n "$PROJECT_PATH" ]; then
  PROJECT_SKILLS_DIR="$PROJECT_PATH/.agents/skills"
  remove_project_links "$PROJECT_SKILLS_DIR"
  rmdir "$PROJECT_PATH/.agents" 2>/dev/null || true
  remove_path "$PROJECT_PATH/themes"
fi

# Legacy cleanup only: older installs copied skills into ~/.codex/.agents/skills/hjkit.
remove_path "$HOME/.codex/.agents/skills/hjkit"
remove_path "$HOME/.codex/.agent/skills/hjkit"

echo "✅ Removed:"
for skill_name in "${SKILL_NAMES[@]}"; do
  echo "  - $OFFICIAL_SKILLS_DIR/hjkit-$skill_name"
done
for skill_name in "${SKILL_NAMES[@]}"; do
  echo "  - $LEGACY_USER_SKILLS_DIR/hjkit-$skill_name (legacy)"
done
if [ -n "$PROJECT_PATH" ]; then
  echo "  - $PROJECT_PATH/.agents/skills/hjkit-ui-builder"
  echo "  - $PROJECT_PATH/.agents/skills/hjkit-ui-review"
  echo "  - $PROJECT_PATH/themes"
fi
echo
echo "Note: uninstall does not automatically restore backups."
echo "It does not preserve manual edits made after installation."
echo "If needed, manually restore from any .bak.* files created during install."
