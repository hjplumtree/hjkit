# Plan Schema Reference

Use this file as the canonical shape for Pseudo-DOM plans.
Plans should be short enough to scan, but complete enough to reject or approve without reading code.

## Required fields
- Candidate name
- Screen type
- Family
- Layout
- Focal point
- Primary action
- Surface roles
- Supporting blocks
- States
- No-Go notes

## Screen-Type Guards
- Landing plans must call out centered-everything, equal-weight feature grids, and extra primary actions as no-go items.
- Dashboard plans must call out hidden queues, equal-weight metric grids, and competing CTAs as no-go items.
- Tool plans must call out mixed input/result surfaces, decorative extras, and missing state coverage as no-go items.
- Settings plans must call out repeated save buttons, noisy auxiliary panels, and grouping by control type only as no-go items.

## Example: Landing
```text
[Candidate A: Landing / Editorial Hero]
├─ Screen Type: Landing
├─ Family: editorial-hero
├─ Layout: PageShell > HeroShell (mode: asymmetric) > ProofRail
├─ Focal Point: Headline
├─ Primary Action: Start with examples
├─ Surface Roles:
│  ├─ Primary: Hero block
│  ├─ Secondary: Proof rail
│  └─ Tension: Do not make the feature cards equal-weight
├─ Supporting Blocks:
│  ├─ Trust badges
│  ├─ Proof rail with structure notes
│  └─ One tension callout
├─ States:
│  ├─ Sparse fallback: keep the hero and proof rail only
│  └─ CTA fallback: keep one button and one secondary link
└─ No-Go Notes:
   ├─ No centered-everything hero
   ├─ No more than one primary action
   └─ No generic 3-card feature grid
```

## Example: Dashboard
```text
[Candidate B: Dashboard / Queue-Led Rail]
├─ Screen Type: Dashboard
├─ Family: queue-led
├─ Layout: PageShell > Toolbar > QueueRail + ProofRail > Exception rail
├─ Focal Point: Queue
├─ Primary Action: New report
├─ Surface Roles:
│  ├─ Primary: Queue rail
│  ├─ Secondary: Proof rail with signals
│  └─ Contrast: Exception rail
├─ Supporting Blocks:
│  ├─ Scanable metrics
│  ├─ Today focus block
│  └─ Exception callout
├─ States:
│  ├─ Default scanable state
│  ├─ Empty state with no items
│  └─ Loading and error states
└─ No-Go Notes:
   ├─ No equal-weight metric grid as the main structure
   ├─ No hidden queue
   └─ No competing primary CTA
```

## Example: Tool
```text
[Candidate C: Tool / Input-Result Split]
├─ Screen Type: Tool
├─ Family: input-result
├─ Layout: PageShell > Toolbar > InputResultShell
├─ Focal Point: Input
├─ Primary Action: Generate summary
├─ Surface Roles:
│  ├─ Primary: Input surface
│  ├─ Secondary: Result surface
│  └─ Tension: Empty / loading / error coverage
├─ Supporting Blocks:
│  ├─ Input field
│  ├─ Result preview
│  └─ State cards
├─ States:
│  ├─ Empty: nothing generated yet
│  ├─ Loading: skeleton rows
│  └─ Error: retry path visible
└─ No-Go Notes:
   ├─ No output before input is clear
   ├─ No decorative extras around the main action
   └─ No mixed input and output surfaces
```

## Example: Settings
```text
[Candidate D: Settings / Task Form]
├─ Screen Type: Settings
├─ Family: task-form
├─ Layout: PageShell > TaskFormShell > grouped field sections
├─ Focal Point: Save path
├─ Primary Action: Save changes
├─ Surface Roles:
│  ├─ Primary: Form sections
│  ├─ Secondary: Guidance and recovery notes
│  └─ Tension: Validation or account-risk states
├─ Supporting Blocks:
│  ├─ Profile section
│  ├─ Notification section
│  └─ One save footer
├─ States:
│  ├─ Saved: success badge or confirmation
│  ├─ Unsaved: visible save path
│  └─ Validation: inline field feedback
└─ No-Go Notes:
   ├─ No repeated save buttons in every section
   ├─ No grouped controls by component type only
   └─ No noisy auxiliary panels
```
