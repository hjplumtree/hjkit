# Project UI Rules

## Context
This is a [B2B / consumer / creator tool].
UI must match user intent.

## Screen priorities
- Dashboard: information density and scanability first.
- Landing: value proposition and CTA first.
- Tool: primary action and task completion first.
- Settings: simplicity and low cognitive load first.

## Stack
- Next.js
- Tailwind CSS
- shadcn/ui
- lucide-react

## Rules
- Avoid generic layouts
- Avoid default Tailwind look
- Use reusable components
- Keep hierarchy clear
- One primary action per screen
- Default to left-aligned content except where centered layout is clearly justified
- Prefer asymmetry or modular grouping over evenly repeated cards
- When in doubt, reduce decorative elements before reducing clarity

## Process
1. Read DESIGN_SYSTEM.md
2. Match product type
3. Build or improve UI
4. Refine spacing, hierarchy, grouping

## Read first
- DESIGN_SYSTEM.md

## Avoid
- Too many cards
- Flat empty UI
- Centered-everything layouts
