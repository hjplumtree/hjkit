import {
  Badge,
  Callout,
  Cluster,
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
          <Badge tone="primary">New</Badge>
          <Cluster>
            <SecondaryButton>View demo</SecondaryButton>
            <PrimaryButton>Start free trial</PrimaryButton>
          </Cluster>
        </Cluster>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <Panel padding="lg">
            <Stack gap="lg">
              <Section
                eyebrow="Workflow for teams"
                title="Ship better screens without fighting your UI stack"
                description="hjkit gives Codex a project-level design contract, reusable primitives, and review rules that keep output deliberate."
              />

              <Cluster>
                <PrimaryButton>Start free trial</PrimaryButton>
                <SecondaryButton>See examples</SecondaryButton>
              </Cluster>
            </Stack>
          </Panel>

          <Stack gap="lg">
            <Panel>
              <Section
                eyebrow="Why it works"
                title="Constraints beat generic generation"
                description="The layout should make the value obvious before the details, then keep the CTA visually dominant."
              >
                <Callout tone="primary" title="More than a prompt">
                  The strongest output comes from components, policy, and feedback, not copy alone.
                </Callout>
              </Section>
            </Panel>

            <Panel>
              <Section
                eyebrow="Proof"
                title="Installed into your repo"
                description="Use the same design rules on new screens and legacy improvements."
              />
            </Panel>
          </Stack>
        </section>
      </Stack>
    </PageShell>
  );
}
