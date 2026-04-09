#!/usr/bin/env bash
set -euo pipefail

SKILL_NAMES=("ui-builder" "ui-review")
HJKIT_STORE_DIR="$HOME/.codex/.agents/skills/hjkit"
OFFICIAL_SKILLS_DIR="$HOME/.agents/skills"
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

# Legacy path from older installs was ~/.codex/.agent/skills/hjkit; this
# script only removes the paths created by the current setup flow.

for skill_name in "${SKILL_NAMES[@]}"; do
  remove_path "$OFFICIAL_SKILLS_DIR/hjkit-$skill_name"
  remove_path "$HJKIT_STORE_DIR/$skill_name"
done

if [ -n "$PROJECT_PATH" ]; then
  PROJECT_SKILLS_DIR="$PROJECT_PATH/.agents/skills"
  for skill_name in "${SKILL_NAMES[@]}"; do
    remove_path "$PROJECT_SKILLS_DIR/hjkit-$skill_name"
  done
  rmdir "$PROJECT_SKILLS_DIR" 2>/dev/null || true
  rmdir "$PROJECT_PATH/.agents" 2>/dev/null || true
fi

echo "✅ Removed:"
for skill_name in "${SKILL_NAMES[@]}"; do
  echo "  - $OFFICIAL_SKILLS_DIR/hjkit-$skill_name"
  echo "  - $HJKIT_STORE_DIR/$skill_name"
done
if [ -n "$PROJECT_PATH" ]; then
  for skill_name in "${SKILL_NAMES[@]}"; do
    echo "  - $PROJECT_PATH/.agents/skills/hjkit-$skill_name"
  done
fi
echo
echo "Note: uninstall does not automatically restore backups."
echo "It does not preserve manual edits made after installation."
echo "If needed, manually restore from any .bak.* files created during install."
