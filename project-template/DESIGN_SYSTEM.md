# Design System

## Purpose
This file defines the UI contract the target project should follow when Codex
creates or improves screens. It is intentionally opinionated so output stays
consistent, structured, and shipped-looking.

## Core Principles
- Build UI that feels deliberate, structured, and shipped.
- Prefer structural fixes over cosmetic fixes.
- Avoid generic SaaS patterns.

## Layout Responsibility
- Shell: page width, outer spacing, and background.
- Panel: grouping, surface, border, shadow, and internal padding.
- Content: typography, internal spacing, and hierarchy.
- Content must not touch a wrapper edge unless the layout is intentionally full-bleed.
- Every panel must include internal padding.

## Typography Scale
- Title: 28-32px, one per page, page heading only.
- Section: 18-20px by default.
- Body: 14-16px, default content.
- Meta: 12-13px, secondary info only.

## Density Adjustments
- Dashboard: Section 16-18px, compact grouping, high scanability.
- Landing: Section 20-24px, more breathing room, stronger visual pause.
- Tool: Section 18-20px, action-focused, medium density.
- Settings: Section 16-18px, lowest cognitive load, form-grouped.

## Spacing Scale
- 4 / 8 / 12 / 16 / 24 / 32 / 48
- Use values from this scale unless a project-specific override is documented.

## Color Tokens
- background
- surface
- surface-offset
- text
- text-muted
- text-faint
- primary
- primary-hover
- border
- divider
- error
- success
- warning

## Component States
- Interactive components should define: default, hover, active, disabled, loading.
- State-heavy components should also define: empty, error.

## Code Primitives
- Use these before writing raw elements:
- PageShell
- Section
- Panel
- Stack
- Cluster
- PrimaryButton
- SecondaryButton
- Card
- EmptyState
- LoadingState
- ErrorState
- FieldGroup
- Badge
- Callout
- Toolbar

## Failure States
- Content touching a wrapper edge is a layout failure.
- A panel without internal padding is a layout failure.
- Multiple equal-weight primary actions are a hierarchy failure.
- A generic 3-card grid without structural justification is a failure.
- Cramped content with correct alignment is a spacing failure.
- A generic feel on a product-specific screen is a structural failure.
- Competing focal points are a composition failure.
- Orphaned labels, buttons, or cards are a layout failure.
- Mixed spacing or radius systems in one screen are a consistency failure.
- Sections that do not earn their space are a structure failure.
- A hidden primary action is a hierarchy failure.

## Non-Negotiables
- No content block may touch a wrapper edge unless full-bleed is intentional.
- No panel may be missing internal padding.
- No screen may have more than one primary action.
- No screen may have more than one focal point.
- No screen may lack one obvious reading path.
  - The eye should move top-to-bottom or in a clear Z-pattern without confusion.
  - No two elements should compete for equal attention at the same level.
  - Section transitions should feel intentional, not accidental.
- No screen may contain orphaned labels, buttons, or cards.
- No screen may mix spacing rhythms or radius languages without intent.
- No section may exist without a clear reason.
- Every section must earn its space.
  - It introduces new information not present elsewhere.
  - It contains the primary or secondary action.
  - Removing it would make the screen harder to understand.
- Primary action must be visible in the first read.
- If the screen feels generic, fix the structure first.
- Every interactive component must handle required states.
