import {
  Badge,
  Callout,
  Cluster,
  FieldGroup,
  PageShell,
  PrimaryButton,
  SecondaryButton,
  TaskFormShell,
  Section,
  Stack,
} from "../../components";

export function SettingsExample() {
  return (
    <PageShell width="narrow">
      <Stack gap="xl">
        <Cluster justify="between" align="center">
          <Section
            eyebrow="Preferences"
            title="Settings"
            description="Keep the screen low-noise, grouped, and predictable."
          />
          <Badge tone="success">Saved</Badge>
        </Cluster>

        <section className="grid gap-6">
          <TaskFormShell
            eyebrow="Account"
            title="Profile"
            description="Keep identity and contact details together so the form reads like one task."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FieldGroup id="name" label="Display name" helperText="Shown to teammates and collaborators.">
                <input
                  id="name"
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary"
                  defaultValue="Jordan Lee"
                />
              </FieldGroup>

              <FieldGroup id="email" label="Email" helperText="Used for notifications and account recovery.">
                <input
                  id="email"
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary"
                  defaultValue="jordan@example.com"
                />
              </FieldGroup>
            </div>
          </TaskFormShell>

          <TaskFormShell
            eyebrow="Notifications"
            title="Delivery preferences"
            description="Control when the product gets out of your way."
            footer={
              <Cluster justify="between">
                <SecondaryButton>Cancel</SecondaryButton>
                <PrimaryButton>Save changes</PrimaryButton>
              </Cluster>
            }
          >
            <Stack gap="md">
              <FieldGroup
                id="digest"
                label="Email digest"
                helperText="Choose how often update summaries are delivered."
              >
                <select
                  id="digest"
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition focus:border-primary"
                  defaultValue="daily"
                >
                  <option value="daily">Daily digest</option>
                  <option value="weekly">Weekly digest</option>
                  <option value="none">Off</option>
                </select>
              </FieldGroup>

              <FieldGroup
                id="security"
                label="Security alerts"
                helperText="Use a second channel for high-priority notifications."
              >
                <select
                  id="security"
                  className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition focus:border-primary"
                  defaultValue="on"
                >
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              </FieldGroup>

              <Callout tone="neutral" title="One save path">
                Settings screens feel calmer when the save action is grouped once at the end instead of repeated in every section.
              </Callout>
            </Stack>
          </TaskFormShell>
        </section>
      </Stack>
    </PageShell>
  );
}
