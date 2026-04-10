import {
  Badge,
  Callout,
  Cluster,
  DataList,
  HeroShell,
  ProofRail,
  PageShell,
  Panel,
  PrimaryButton,
  SecondaryButton,
  Section,
  Stack,
} from "../../components";

export function LandingExample() {
  return (
    <PageShell width="wide">
      <Stack gap="xl">
        <Cluster justify="between" align="center">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-text">hjkit</p>
            <p className="text-sm text-text-muted">Design system for product teams</p>
          </div>

          <Cluster>
            <SecondaryButton>Read the rules</SecondaryButton>
            <SecondaryButton>Start with examples</SecondaryButton>
          </Cluster>
        </Cluster>

        <HeroShell
          eyebrow="For product builders"
          title="Ship screens that feel specific, not templated"
          description="hjkit gives Codex the structure, rules, and examples it needs to make better layout decisions before the visuals take over."
          primaryAction={<PrimaryButton>Start with examples</PrimaryButton>}
          secondaryAction={<SecondaryButton>Browse the system</SecondaryButton>}
          badges={
            <Cluster gap="sm">
              <Badge tone="primary">One recipe per screen</Badge>
              <Badge>Reuse the same primitives</Badge>
              <Badge>Keep one focal point</Badge>
            </Cluster>
          }
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ProofRail
            eyebrow="What it changes"
            title="The structure carries the design"
            description="The screen should already feel like a real product before copy polish, iconography, or color accents do any work."
          >
            <DataList
              items={[
                {
                  label: "Layout",
                  value: "Asymmetric editorial read",
                  meta: "Not centered-everything by default.",
                },
                {
                  label: "CTA",
                  value: "One dominant action",
                  meta: "Visible in the first read.",
                },
                {
                  label: "Surface",
                  value: "One clear primary block",
                  meta: "Support panels stay secondary.",
                },
              ]}
            />
          </ProofRail>

          <Callout tone="primary" title="Why it stays flexible">
            The rules are strict about hierarchy and structure, but loose enough to fit a dashboard,
            a landing page, a tool, or a settings screen without forcing one visual style.
          </Callout>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Panel padding="lg" className="bg-surface-offset">
            <Section
              eyebrow="Do not"
              title="Do not make every block look equal"
              description="Repeated cards at the same weight are what make generated UI feel generic, even when the spacing is technically correct."
            />
          </Panel>

          <Panel padding="lg">
            <Section
              eyebrow="Do"
              title="Let one surface lead"
              description="Reserve contrast for the main read, the blocker, or the proof. Everything else should support that choice."
            />
          </Panel>
        </section>
      </Stack>
    </PageShell>
  );
}
