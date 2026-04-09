import {
  Badge,
  Callout,
  Cluster,
  DataList,
  PageShell,
  Panel,
  PrimaryButton,
  SecondaryButton,
  Section,
  Stack,
  Toolbar,
} from "../../components";

export function DashboardExample() {
  return (
    <PageShell>
      <Stack gap="xl">
        <Toolbar
          title="Workspace overview"
          description="Track activity, prioritize follow-ups, and keep the main queue moving."
          right={<PrimaryButton>New report</PrimaryButton>}
        >
          <Badge tone="primary">Live</Badge>
          <Badge>Last sync 4m ago</Badge>
        </Toolbar>

        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Stack gap="lg">
            <Panel>
              <Section
                eyebrow="Queue"
                title="Tasks that need attention"
                description="The highest-value work stays visible first so the team can scan and act quickly."
                action={<SecondaryButton>View all</SecondaryButton>}
              >
                <DataList
                  items={[
                    { label: "Unread notes", value: "18", meta: "Mostly from customer escalations" },
                    { label: "Pending review", value: "7", meta: "Waiting on approval" },
                    { label: "Blocked items", value: "2", meta: "Need a product decision" },
                  ]}
                />
              </Section>
            </Panel>

            <Panel>
              <Section
                eyebrow="Exceptions"
                title="Needs a decision"
                description="Use this area for situations that would otherwise get buried in a flat dashboard."
              >
                <Callout tone="warning" title="Release note draft is missing a fallback">
                  Add the customer-safe fallback before publishing today's update.
                </Callout>
              </Section>
            </Panel>
          </Stack>

          <Panel>
            <Stack gap="lg">
              <Section
                eyebrow="Focus"
                title="Today"
                description="The dashboard should make it obvious what matters right now."
              >
                <DataList
                  items={[
                    { label: "Priority", value: "High" },
                    { label: "Owner", value: "Design Ops" },
                    { label: "Next check-in", value: "2:30 PM" },
                  ]}
                />
              </Section>

              <Cluster justify="between">
                <SecondaryButton>Export</SecondaryButton>
                <PrimaryButton>Open queue</PrimaryButton>
              </Cluster>
            </Stack>
          </Panel>
        </section>
      </Stack>
    </PageShell>
  );
}
