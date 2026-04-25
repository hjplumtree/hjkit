export * from "./cn";

// Core layout primitives.
export * from "./primitives/PageShell"; // every page. outermost wrapper. never skip.
export * from "./primitives/Section"; // every major content block. controls vertical rhythm.
export * from "./primitives/Panel"; // grouped surface with border or shadow. always include padding.
export * from "./primitives/Stack"; // vertical list. consistent gap between items.
export * from "./primitives/Cluster"; // horizontal inline group. tags, buttons, badges.

// Reusable patterns.
export * from "./patterns/PrimaryButton"; // one per screen. the only dominant action.
export * from "./patterns/SecondaryButton"; // suppressed visually relative to primary.
export * from "./patterns/Card"; // grouped content surface. always has padding.
export * from "./patterns/Badge"; // inline label. status or category only.
export * from "./patterns/Callout"; // prominent inline message. warning or tip.
export * from "./patterns/FieldGroup"; // labeled input group. settings and forms.
export * from "./patterns/Toolbar"; // top action bar. filter and command row.
export * from "./patterns/DataList"; // key-value or labeled data rows.

// Approved screen recipes.
export * from "./recipes";

// State components.
export * from "./states/EmptyState"; // no data yet. always show a recovery action.
export * from "./states/LoadingState"; // skeleton or spinner. never show blank space.
export * from "./states/ErrorState"; // failure. always show a retry or fallback path.
