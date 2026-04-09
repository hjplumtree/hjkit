# hjkit

A design-focused Codex workflow for generating and improving product UI.

## What this is

`hjkit` gives Codex:
* project-level UI guidance
* a lightweight design system reference
* reusable skills for:
  * building new UI
  * reviewing existing UI

This repo uses direct skill folders for local setup and experimentation.

## Discovery layout

Codex reads skills from discovery paths, not from the source folder alone.

This repo keeps the canonical skill source in:

* `skills/`

For repo-local discovery, it also exposes:

* `.agents/skills/`

If you run `./setup`, it additionally creates user-level discovery links in:

* `~/.agents/skills`

## Repo instructions

The root `AGENTS.md` is for working on this repository itself.
It guides Codex when you open `hjkit` as the active repo.

It is different from `project-template/AGENTS.md`, which is a template file
meant to be copied into a separate target project during `./setup --repo`.

## Install

```bash
git clone --single-branch --depth 1 https://github.com/hjplumtree/hjkit.git ~/.codex/.agents/skills/hjkit
cd ~/.codex/.agents/skills/hjkit
chmod +x setup
./setup
```

This installer:

* stores source files under `~/.codex/.agents/skills/hjkit`
* creates discovery symlinks in `~/.agents/skills`
* does **not** modify your global `~/.codex/AGENTS.md`

### Optional install modes

Force install:

```bash
cd ~/.codex/.agents/skills/hjkit
./setup --force
```

Install and also copy project template files:

```bash
cd ~/.codex/.agents/skills/hjkit
./setup --repo /path/to/your-project
```

If project files already exist, they are backed up before overwrite unless you cancel.

## Paths

`hjkit` stores source files under:

* `~/.codex/.agents/skills/hjkit`

For Codex discovery, it creates symlinks in:

* `$HOME/.agents/skills`

This guide follows the current official Codex skills docs convention.

If your Codex surface, wrapper, or installer expects a different path, follow the official docs for your environment.

If symlinks are unavailable in your environment, copy the skill folders manually instead.

## Add to a project

For each project, copy:

* `project-template/AGENTS.md` -> `your-project/AGENTS.md`
* `project-template/DESIGN_SYSTEM.md` -> `your-project/DESIGN_SYSTEM.md`

Example:

```bash
cp ~/.codex/.agents/skills/hjkit/project-template/AGENTS.md /path/to/your-project/AGENTS.md
cp ~/.codex/.agents/skills/hjkit/project-template/DESIGN_SYSTEM.md /path/to/your-project/DESIGN_SYSTEM.md
```

## Use it

This project uses explicit-first invocation by default.

Skills may also be selected implicitly where supported, but trigger reliability depends on the skill description and Codex surface.

For the most reliable experience, use:

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

## Skill boundaries

### hjkit-ui-builder

Use for creating a brand-new UI screen from a product or service description.

### hjkit-ui-review

Use for reviewing or improving an existing UI screen.
Do not use it for creating a new screen from scratch.

## Uninstall

```bash
chmod +x uninstall.sh
./uninstall.sh
```

Note:

* uninstall removes installed skills and symlinks only
* project files copied with `--repo` are not removed automatically
* uninstall does not automatically restore backups
* uninstall does not preserve manual edits made after installation

## Notes

* `DESIGN_SYSTEM.md` is treated as a reference document, not an automatic instruction file
* add repeated issues to the project AGENTS first
* only promote issues to the repo AGENTS when they are truly repo-wide

For wider reusable distribution, Codex docs may favor packaging reusable capabilities as plugins.
