# Examples

These are reference compositions for the repo-local `project-template/components/` set.
They show structural patterns only and are not meant to be installed into target projects.
Each example is a screen family, not a generic layout:
- `LandingExample` shows an asymmetric landing composition family with hero, proof, and tension surfaces.
- `DashboardExample` shows a queue-led dashboard family with a summary rail and exception rail.
- `ToolExample` shows an action-led tool family with input, result, and state coverage.
- `SettingsExample` shows a form-led settings family with one save path.
- `plan-schema.md` shows the canonical Pseudo-DOM format that builder and review must use for landing, dashboard, tool, and settings screens.
- The code examples live in `hjkit/` so they stay separate from the docs and plan reference.

Use them as:
- structural baselines for new screens
- layout amplitude references for how wide or contained each screen type should feel
- density references for dashboard, landing, tool, and settings layouts
- contrast references for how strongly the primary action should lead
- family references for choosing the right composition before writing code
- a quick check that the primitives actually compose into shipped-looking UI

Included examples:
- `hjkit/DashboardExample.tsx`
- `hjkit/LandingExample.tsx`
- `hjkit/ToolExample.tsx`
- `hjkit/SettingsExample.tsx`
- `plan-schema.md`

They are intentionally small and framework-agnostic enough to adapt into a real app.
Treat them as reference, not as a source of runtime dependencies for target apps.
