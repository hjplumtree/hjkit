
#!/usr/bin/env bash
set -euo pipefail

HJKIT_STORE_DIR="$HOME/.codex/.agents/skills/hjkit"
LEGACY_HJKIT_STORE_DIR="$HOME/.codex/.agent/skills/hjkit"
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

rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"
rm -rf "$HJKIT_STORE_DIR/ui-builder"
rm -rf "$HJKIT_STORE_DIR/ui-review"
rm -rf "$LEGACY_HJKIT_STORE_DIR/ui-builder"
rm -rf "$LEGACY_HJKIT_STORE_DIR/ui-review"

if [ -n "$PROJECT_PATH" ]; then
  PROJECT_SKILLS_DIR="$PROJECT_PATH/.agents/skills"
  rm -rf "$PROJECT_SKILLS_DIR/hjkit-ui-builder"
  rm -rf "$PROJECT_SKILLS_DIR/hjkit-ui-review"
  rmdir "$PROJECT_SKILLS_DIR" 2>/dev/null || true
  rmdir "$PROJECT_PATH/.agents" 2>/dev/null || true
fi

echo "✅ Removed:"
echo "  - $OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
echo "  - $OFFICIAL_SKILLS_DIR/hjkit-ui-review"
echo "  - $HJKIT_STORE_DIR/ui-builder"
echo "  - $HJKIT_STORE_DIR/ui-review"
echo "  - $LEGACY_HJKIT_STORE_DIR/ui-builder"
echo "  - $LEGACY_HJKIT_STORE_DIR/ui-review"
if [ -n "$PROJECT_PATH" ]; then
  echo "  - $PROJECT_PATH/.agents/skills/hjkit-ui-builder"
  echo "  - $PROJECT_PATH/.agents/skills/hjkit-ui-review"
fi
echo
echo "Note: uninstall does not automatically restore backups."
echo "It does not preserve manual edits made after installation."
echo "If needed, manually restore from any .bak.* files created during install."
