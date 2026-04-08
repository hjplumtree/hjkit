
#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
FORCE=0
PROJECT_PATH=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --force)
      FORCE=1
      shift
      ;;
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

GLOBAL_AGENTS_DIR="$HOME/.codex"
HJKIT_STORE_DIR="$HOME/.codex/.agent/skills/hjkit"
OFFICIAL_SKILLS_DIR="$HOME/.agents/skills"

mkdir -p "$GLOBAL_AGENTS_DIR"
mkdir -p "$HJKIT_STORE_DIR"
mkdir -p "$OFFICIAL_SKILLS_DIR"

backup_if_exists() {
  local target="$1"
  if [ -e "$target" ] || [ -L "$target" ]; then
    local backup="${target}.bak.$(date +%Y%m%d%H%M%S)"
    cp -R "$target" "$backup" 2>/dev/null || cp -RL "$target" "$backup"
    echo "Backed up existing path to: $backup"
  fi
}

confirm_overwrite() {
  local target="$1"
  if [ -e "$target" ] || [ -L "$target" ]; then
    if [ "$FORCE" -ne 1 ]; then
      echo "Existing path found: $target"
      echo "A backup will be created before overwrite."
      read -r -p "Continue? [y/N] " ans
      if [ "$ans" != "y" ] && [ "$ans" != "Y" ]; then
        echo "Cancelled."
        exit 1
      fi
    fi
  fi
}

confirm_overwrite "$GLOBAL_AGENTS_DIR/AGENTS.md"
confirm_overwrite "$HJKIT_STORE_DIR/ui-builder"
confirm_overwrite "$HJKIT_STORE_DIR/ui-review"
confirm_overwrite "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
confirm_overwrite "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"

backup_if_exists "$GLOBAL_AGENTS_DIR/AGENTS.md"
backup_if_exists "$HJKIT_STORE_DIR/ui-builder"
backup_if_exists "$HJKIT_STORE_DIR/ui-review"
backup_if_exists "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
backup_if_exists "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"

cp "$ROOT_DIR/global/AGENTS.md" "$GLOBAL_AGENTS_DIR/AGENTS.md"

rm -rf "$HJKIT_STORE_DIR/ui-builder"
rm -rf "$HJKIT_STORE_DIR/ui-review"
mkdir -p "$HJKIT_STORE_DIR/ui-builder"
mkdir -p "$HJKIT_STORE_DIR/ui-review"

cp "$ROOT_DIR/skills/ui-builder/SKILL.md" "$HJKIT_STORE_DIR/ui-builder/SKILL.md"
cp "$ROOT_DIR/skills/ui-review/SKILL.md" "$HJKIT_STORE_DIR/ui-review/SKILL.md"

rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"

ln -s "$HJKIT_STORE_DIR/ui-builder" "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
ln -s "$HJKIT_STORE_DIR/ui-review" "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"

if [ -n "$PROJECT_PATH" ]; then
  mkdir -p "$PROJECT_PATH"
  cp "$ROOT_DIR/project-template/AGENTS.md" "$PROJECT_PATH/AGENTS.md"
  cp "$ROOT_DIR/project-template/DESIGN_SYSTEM.md" "$PROJECT_PATH/DESIGN_SYSTEM.md"
  echo "✅ Project template copied to: $PROJECT_PATH"
fi

echo "✅ Installed:"
echo "  - $GLOBAL_AGENTS_DIR/AGENTS.md"
echo "  - $HJKIT_STORE_DIR/ui-builder/SKILL.md"
echo "  - $HJKIT_STORE_DIR/ui-review/SKILL.md"
echo "  - symlinked to $OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
echo "  - symlinked to $OFFICIAL_SKILLS_DIR/hjkit-ui-review"
echo
echo "Next:"
echo "1. Copy project-template/AGENTS.md into your project root (if not already copied)"
echo "2. Copy project-template/DESIGN_SYSTEM.md into your project root"
echo "3. In Codex, start with:"
echo "   Use the hjkit-ui-builder skill."
