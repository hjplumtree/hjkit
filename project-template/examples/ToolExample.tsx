import {
  Callout,
  Cluster,
  EmptyState,
  ErrorState,
  FieldGroup,
  PageShell,
  Panel,
  PrimaryButton,
  SecondaryButton,
  Section,
  Stack,
  Toolbar,
} from "../components";

export function ToolExample() {
  return (
    <PageShell width="narrow">
      <Stack gap="xl">
        <Toolbar
          title="Create meeting summary"
          description="Turn a rough transcript into a customer-ready summary with clear next actions."
          right={<PrimaryButton>Generate summary</PrimaryButton>}
        />

        <Panel>
          <Section
            eyebrow="Input"
            title="Transcript"
            description="Keep the primary action in the first view and reduce distractions around it."
          >
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

            <Cluster justify="between">
              <SecondaryButton>Clear</SecondaryButton>
              <PrimaryButton>Generate summary</PrimaryButton>
            </Cluster>
          </Section>
        </Panel>

        <Panel>
          <Section eyebrow="Output" title="Result preview">
            <Callout tone="primary" title="Generated summary">
              The output should map directly to the core action, with a visible structure and a strong
              first read.
            </Callout>
          </Section>
        </Panel>

        <ErrorState
          description="If generation fails, the screen should keep the retry path obvious and lightweight."
          onRetry={() => undefined}
        />

        <EmptyState
          title="Nothing generated yet"
          description="This state helps the tool feel finished instead of empty."
          actionLabel="Generate summary"
          onAction={() => undefined}
        />
      </Stack>
    </PageShell>
  );
}
