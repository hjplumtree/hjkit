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
  ProofRail,
  QueueRail,
  SectionStack,
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

        <section className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
          <SectionStack className="max-w-none">
            <QueueRail
              eyebrow="Queue"
              title="Tasks that need attention"
              description="Keep the highest-value work visible first so the team can scan and act without digging through a flat grid."
              action={<SecondaryButton>View all</SecondaryButton>}
            >
              <DataList
                items={[
                  { label: "Unread notes", value: "18", meta: "Mostly from customer escalations" },
                  { label: "Pending review", value: "7", meta: "Waiting on approval" },
                  { label: "Blocked items", value: "2", meta: "Need a product decision" },
                ]}
              />
            </QueueRail>

            <ProofRail
              eyebrow="Signals"
              title="What changed today"
              description="A compact scan of the day keeps the dashboard from turning into a second home for every chart and card."
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Priority", value: "High", meta: "2 tasks moved up" },
                  { label: "Owner", value: "Design Ops", meta: "Current queue owner" },
                  { label: "Next check-in", value: "2:30 PM", meta: "Review the open blockers" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-surface-offset p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-text">{item.value}</p>
                    <p className="mt-1 text-xs text-text-muted">{item.meta}</p>
                  </div>
                ))}
              </div>
            </ProofRail>
          </SectionStack>

          <SectionStack className="max-w-none">
            <Panel padding="lg" className="bg-surface-offset">
              <Section
                eyebrow="Exceptions"
                title="Needs a decision"
                description="Use a stronger, quieter surface for anything that would otherwise get buried in the queue."
              >
                <Callout tone="warning" title="Release note draft is missing a fallback">
                  Add the customer-safe fallback before publishing today's update.
                </Callout>
              </Section>
            </Panel>

            <ProofRail
              eyebrow="Today"
              title="Focus"
              description="This block should make it obvious where the team should look next."
              action={
                <Cluster>
                  <SecondaryButton>Export</SecondaryButton>
                  <SecondaryButton>Open queue</SecondaryButton>
                </Cluster>
              }
            >
              <DataList
                items={[
                  { label: "Priority", value: "High" },
                  { label: "Owner", value: "Design Ops" },
                  { label: "Next step", value: "Open the queue" },
                ]}
              />
            </ProofRail>
          </SectionStack>
        </section>
      </Stack>
    </PageShell>
  );
}
