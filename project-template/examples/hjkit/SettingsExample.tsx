import {
  Badge,
  Callout,
  Cluster,
  FieldGroup,
  PageShell,
  Panel,
  PrimaryButton,
  SecondaryButton,
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
          <Badge>Saved</Badge>
        </Cluster>

        <Panel>
          <Stack gap="lg">
            <Section
              eyebrow="Account"
              title="Profile and notifications"
              description="Forms should stay easy to scan and the save action should be obvious."
            >
              <Stack gap="md">
                <FieldGroup id="name" label="Display name" helperText="Shown to teammates and collaborators.">
                  <input
                    id="name"
                    className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary"
                    defaultValue="Jordan Lee"
                  />
                </FieldGroup>

                <FieldGroup
                  id="email"
                  label="Email notifications"
                  helperText="Control how often product updates are delivered."
                >
                  <select
                    id="email"
                    className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition focus:border-primary"
                    defaultValue="daily"
                  >
                    <option value="daily">Daily digest</option>
                    <option value="weekly">Weekly digest</option>
                    <option value="none">Off</option>
                  </select>
                </FieldGroup>
              </Stack>
            </Section>

            <Callout tone="neutral" title="One save path">
              Settings screens feel calmer when the save action is grouped once at the end instead of repeated.
            </Callout>

            <Cluster justify="between">
              <SecondaryButton>Cancel</SecondaryButton>
              <PrimaryButton>Save changes</PrimaryButton>
            </Cluster>
          </Stack>
        </Panel>
      </Stack>
    </PageShell>
  );
}
