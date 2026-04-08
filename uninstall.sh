
#!/usr/bin/env bash
set -e

GLOBAL_AGENTS_DIR="$HOME/.codex"
HJKIT_STORE_DIR="$HOME/.codex/.agent/skills/hjkit"
OFFICIAL_SKILLS_DIR="$HOME/.agents/skills"

rm -f "$GLOBAL_AGENTS_DIR/AGENTS.md"
rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
rm -rf "$OFFICIAL_SKILLS_DIR/hjkit-ui-review"
rm -rf "$HJKIT_STORE_DIR/ui-builder"
rm -rf "$HJKIT_STORE_DIR/ui-review"

echo "✅ Removed:"
echo "  - $GLOBAL_AGENTS_DIR/AGENTS.md"
echo "  - $OFFICIAL_SKILLS_DIR/hjkit-ui-builder"
echo "  - $OFFICIAL_SKILLS_DIR/hjkit-ui-review"
echo "  - $HJKIT_STORE_DIR/ui-builder"
echo "  - $HJKIT_STORE_DIR/ui-review"
echo
echo "Note: uninstall does not automatically restore backups."
echo "It does not preserve manual edits made after installation."
echo "If needed, manually restore from any .bak.* files created during install."
