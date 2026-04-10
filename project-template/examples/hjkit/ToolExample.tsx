import {
  Callout,
  EmptyState,
  ErrorState,
  FieldGroup,
  LoadingState,
  PageShell,
  Panel,
  PrimaryButton,
  SecondaryButton,
  Section,
  InputResultShell,
  Stack,
  Toolbar,
} from "../../components";

export function ToolExample() {
  return (
    <PageShell width="narrow">
      <Stack gap="xl">
        <Toolbar
          title="Create meeting summary"
          description="Turn a rough transcript into a customer-ready summary with clear next actions."
          right={<PrimaryButton>Generate summary</PrimaryButton>}
        />

        <InputResultShell
          input={
            <Panel padding="lg">
              <Stack gap="lg">
                <Section
                  eyebrow="Input"
                  title="Transcript"
                  description="Keep the primary action in the first view and reduce distractions around it."
                />

                <FieldGroup
                  id="transcript"
                  label="Paste transcript"
                  helperText="One transcript per run. The output should stay structured and concise."
                >
                  <textarea
                    id="transcript"
                    rows={10}
                    className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary"
                    placeholder="Paste a meeting transcript..."
                  />
                </FieldGroup>

                <div className="flex items-center justify-between gap-3">
                  <SecondaryButton>Clear</SecondaryButton>
                  <SecondaryButton>Generate summary</SecondaryButton>
                </div>
              </Stack>
            </Panel>
          }
          result={
            <Stack gap="lg">
              <Section
                eyebrow="Output"
                title="Result preview"
                description="Keep the generated result separate from the form so the task feels finished."
              />

              <Panel padding="lg" className="bg-surface-offset">
                <Callout tone="primary" title="Generated summary">
                  The output should map directly to the core action, with a visible structure and a strong first read.
                </Callout>
              </Panel>

              <Panel padding="lg">
                <Section
                  eyebrow="States"
                  title="Empty, loading, and error coverage"
                  description="The tool should explain what happens before input exists, while work is running, and when the run fails."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <EmptyState
                      title="Nothing generated yet"
                      description="This state keeps the tool feeling finished instead of abandoned."
                      actionLabel="Generate summary"
                      onAction={() => undefined}
                    />

                    <ErrorState
                      description="If generation fails, the retry path should stay obvious and lightweight."
                      onRetry={() => undefined}
                    />
                  </div>
                </Section>
              </Panel>

              <Panel padding="md">
                <LoadingState rows={2} />
              </Panel>
            </Stack>
          }
        />
      </Stack>
    </PageShell>
  );
}
