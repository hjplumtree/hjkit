# Project UI Rules

## Context
This project may be B2B, consumer, or creator-oriented.
UI must match the product's intent, density, and workflow.

## Screen priorities
- Dashboard: scannability and information hierarchy first.
- Landing: value proposition and one dominant CTA first.
- Tool: primary action and task completion first.
- Settings: low cognitive load and clear save flow first.

## Process
1. Read `DESIGN_SYSTEM.md` first.
2. Identify the screen type.
3. Use `components/` before writing raw elements.
4. Rebuild structure before polishing if the screen feels weak.
5. Refine spacing, hierarchy, and grouping.

## Stack
- Use the project's existing stack.
- Default examples may assume Next.js, Tailwind CSS, shadcn/ui, and lucide-react.
- Override these assumptions per project when needed.

## Rules
- Avoid generic layouts.
- Avoid default Tailwind look.
- Prefer reusable components.
- Keep hierarchy obvious.
- Use one primary action per screen.
- Default to left-aligned content unless centered layout is clearly justified.
- Prefer asymmetry or modular grouping over evenly repeated cards.
- Reduce decorative elements before reducing clarity.
- Treat wrapper spacing and panel padding as required, not optional.
- If the screen feels generic, the structure is wrong.

## Read first
- `DESIGN_SYSTEM.md`

## Avoid
- Too many cards.
- Flat empty UI.
- Centered-everything layouts.
- Raw elements where a project primitive exists.
