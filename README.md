# hjkit

A compact Codex workflow for generating and improving product UI.

## What this is

`hjkit` gives Codex:
* project-level UI guidance
* a lightweight design system reference
* reusable skills for building and reviewing UI

## Quick Start

```text
Install hjkit, then use the hjkit-ui-builder skill.
```

## Install

```bash
git clone --single-branch --depth 1 https://github.com/hjplumtree/hjkit.git ~/.codex/.agents/skills/hjkit
cd ~/.codex/.agents/skills/hjkit
chmod +x setup
./setup
```

This stores source files under `~/.codex/.agents/skills/hjkit`, creates
discovery links in `~/.agents/skills`, and leaves `~/.codex/AGENTS.md`
untouched.

## Add to a project

```bash
./setup --repo /path/to/your-project
```

This copies the project templates, links skills into
`your-project/.agents/skills`, and adds `.agents/` to the target project's
`.gitignore`.

## Use it

```text
Use the hjkit-ui-builder skill.
Use the hjkit-ui-review skill.
```

### Build new UI

```text
Use the hjkit-ui-builder skill.

Build UI for:
AI meeting summarizer for teams
```

### Improve existing UI

```text
Use the hjkit-ui-review skill.

Improve this UI:
[paste code or describe the current screen]
```

### Review UI quality

```text
Use the hjkit-ui-review skill.

Review this UI and improve hierarchy, spacing, and clarity.
```

## Uninstall

```bash
chmod +x uninstall.sh
./uninstall.sh
```

If you used `--repo`, remove the project-local links too:

```bash
./uninstall.sh --repo /path/to/your-project
```
