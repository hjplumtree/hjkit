# hjkit

A design-focused Codex workflow for generating and improving product UI.

## What this is

`hjkit` gives Codex:
- global UI principles
- project-specific UI rules
- a lightweight design system reference
- reusable skills for:
  - building new UI
  - reviewing existing UI

This repo uses direct skill folders for local setup and experimentation.

## Install

```bash
git clone https://github.com/hjplumtree/hjkit.git
cd hjkit
./install.sh
```

This installer:

stores skill files under ~/.codex/.agent/skills/hjkit
creates symlinks in ~/.agents/skills
replaces your current ~/.codex/AGENTS.md after creating a backup

If you already maintain a custom global ~/.codex/AGENTS.md, manual merge may be preferable.

Optional install modes

Force install:

./install.sh --force

Install and also copy the project template:

./install.sh --repo /path/to/your-project
Paths

This project stores its source skills under:

~/.codex/.agent/skills/hjkit

For Codex compatibility, the installer also creates symlinks in the current official skills docs convention location:

$HOME/.agents/skills

This guide follows the current official Codex skills docs convention.

If your Codex surface, wrapper, or installer expects a different path, follow the official docs for your environment.

Add to a project

For each project, copy:

project-template/AGENTS.md → your-project/AGENTS.md
project-template/DESIGN_SYSTEM.md → your-project/DESIGN_SYSTEM.md

Example:

cp project-template/AGENTS.md /path/to/your-project/AGENTS.md
cp project-template/DESIGN_SYSTEM.md /path/to/your-project/DESIGN_SYSTEM.md
Repo-local install (optional)

If you want skills only for one repo instead of your whole environment:

mkdir -p .agents/skills/hjkit-ui-builder
mkdir -p .agents/skills/hjkit-ui-review
cp skills/ui-builder/SKILL.md .agents/skills/hjkit-ui-builder/SKILL.md
cp skills/ui-review/SKILL.md .agents/skills/hjkit-ui-review/SKILL.md
Use it

This project uses explicit-first invocation by default.

Skills may also be selected implicitly where supported, but trigger reliability depends on the skill description and Codex surface.

For the most reliable experience, use:

Use the hjkit-ui-builder skill.
Use the hjkit-ui-review skill.
Build new UI
Use the hjkit-ui-builder skill.

Build UI for:
AI meeting summarizer for teams
Improve existing UI
Use the hjkit-ui-review skill.

Improve this UI:
[paste code or describe the current screen]
Review UI quality
Use the hjkit-ui-review skill.

Review this UI and improve hierarchy, spacing, and clarity.
Skill boundaries
hjkit-ui-builder

Use for creating a brand-new UI screen from a product or service description.

hjkit-ui-review

Use for reviewing or improving an existing UI screen.
Do not use it for creating a new screen from scratch.

Uninstall
./uninstall.sh

Note:

uninstall removes hjkit-managed files and symlinks
uninstall does not automatically restore backups
uninstall does not preserve manual edits made after installation
Notes
DESIGN_SYSTEM.md is treated as a reference document, not an automatic instruction file
add repeated issues to the project AGENTS first
only promote issues to the global AGENTS when they are truly global

For wider reusable distribution, Codex docs may favor packaging reusable capabilities as plugins.
