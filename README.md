# hjkit

A compact Codex workflow for generating and improving product UI.

## What this is

`hjkit` gives Codex:
* project-level UI guidance
* a lightweight design system reference
* reusable skills for building new UI and reviewing existing UI

## Discovery layout

Codex reads skills from discovery paths, not from the source folder alone.
The canonical source lives in `skills/`.
Running `./setup` creates user-level discovery links in `~/.agents/skills`.
Running `./setup --repo /path/to/your-project` also creates project-local
discovery links in `your-project/.agents/skills`.

## Repo instructions

The root `AGENTS.md` applies only to this repository.
`project-template/AGENTS.md` is copied into a target project by `./setup --repo`.

## Install

```bash
git clone --single-branch --depth 1 https://github.com/hjplumtree/hjkit.git ~/.codex/.agents/skills/hjkit
cd ~/.codex/.agents/skills/hjkit
chmod +x setup
./setup
```

This installer stores source files under `~/.codex/.agents/skills/hjkit`,
creates discovery symlinks in `~/.agents/skills`, and leaves
`~/.codex/AGENTS.md` untouched.

```bash
cd ~/.codex/.agents/skills/hjkit
./setup --force
```

## Add to a project

```bash
./setup --repo /path/to/your-project
```

This copies the project templates, links skills into
`your-project/.agents/skills`, and adds `.agents/` to the target project's
`.gitignore`.

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

If you used `--repo`, remove the project-local links too:

```bash
./uninstall.sh --repo /path/to/your-project
```

Note:

* uninstall removes installed skills and symlinks only
* project files copied with `--repo` are not removed automatically
* `--repo` cleanup only applies to the same project path
* uninstall does not automatically restore backups
* uninstall does not preserve manual edits made after installation

## Notes

* `DESIGN_SYSTEM.md` is a reference file, not a live instruction source
* keep repo-wide rules in the root `AGENTS.md`
* keep project-specific rules in `project-template/AGENTS.md`
