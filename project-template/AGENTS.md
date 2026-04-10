# Project UI Rules

## Purpose
Use this template in the target project as the local UI operating guide for Codex.
It should steer new screens, design improvements, and review decisions without
overriding the project's own product logic.

## Process
1. Read `DESIGN_SYSTEM.md` first.
2. Read the project profile and backend as environment, not as a choice.
3. Identify the screen type.
4. Choose the strongest composition family for that screen type before touching components.
5. Write a Pseudo-DOM plan before any code, matching `examples/plan-schema.md`.
6. Define the width, density, contrast budget, focal point, primary action, dominant surface, and supporting surfaces in the plan.
7. Stop here and apply the review filter before proceeding to build.
8. Use the project's existing shadcn/ui and Tailwind stack before writing raw elements.
9. Rebuild structure before polishing if the screen feels weak.
10. Refine spacing, hierarchy, grouping, amplitude, and contrast.

## Project Profile Reading Rules
- Treat backend as fixed for the project, not per screen.
- Treat the tone preset as fixed unless the project owner changes it.
- Treat allowed families as the design boundary for the project.
- Treat color values as project-owned theme data, not global hjkit defaults.

## Screen priorities
- Dashboard: scannability and information hierarchy first.
- Landing: value proposition and one dominant CTA first.
- Tool: primary action and task completion first.
- Settings: low cognitive load and clear save flow first.
- Landing should usually be asymmetric or editorial, not centered-everything.
- Dashboard should surface one scanable queue plus a secondary exception rail.
- Tool should show the input and the result as distinct surfaces.
- Settings should group by task and keep one save path.

## Stack
- Prefer the project's existing stack.
- Default examples assume shadcn/ui and Tailwind CSS.
- Override these assumptions per project when needed.

## Required Order
- Screen type first.
- Tone preset second.
- Composition family third.
- Plan fourth.
- Stop here and apply the review filter before proceeding to build.
- Code fifth.
- Review sixth.

## Rules
- Avoid generic layouts.
- Avoid default Tailwind look.
- Prefer reusable components.
- Keep hierarchy obvious.
- Use one primary action per screen.
- Keep one clear focal point and one obvious reading path per screen.
- Remove sections that do not earn their space.
- Do not let decorative elements compete with the primary action.
- Default to left-aligned content unless centered layout is clearly justified.
- Prefer asymmetry or modular grouping over evenly repeated cards.
- Prefer one strong recipe over mixing several weak ones.
- Reduce decorative elements before reducing clarity.
- Treat wrapper spacing and panel padding as required, not optional.
- Keep spacing rhythm and radius language consistent within a screen.
- If the screen feels generic, the structure is wrong.
- If the project already has `components/` or `examples/`, use the closest matching local composition as a baseline.
- If the project has `themes/`, use its preset files instead of inventing new tone defaults.
- Do not make backend decisions inside a screen implementation task.

## Read first
- `DESIGN_SYSTEM.md`

## Avoid
- Too many cards.
- Flat empty UI.
- Centered-everything layouts.
- Raw elements where a shadcn/ui component exists.
