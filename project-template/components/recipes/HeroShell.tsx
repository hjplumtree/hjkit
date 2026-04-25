import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Cluster } from "../primitives/Cluster";
import { Panel } from "../primitives/Panel";
import { Section } from "../primitives/Section";
import { Stack } from "../primitives/Stack";

type HeroShellProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  supporting?: ReactNode;
  badges?: ReactNode;
  aside?: ReactNode;
  mode?: "stacked" | "asymmetric";
};

export function HeroShell({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  supporting,
  badges,
  aside,
  mode = "stacked",
  className,
  ...props
}: HeroShellProps) {
  const hasAside = mode === "asymmetric" && aside;

  return (
    <Panel padding="lg" className={cn("relative overflow-hidden", className)} {...props}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-primary/25 to-transparent" />
      <div className={cn("relative", hasAside && "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]")}>
        <Stack gap="lg">
          <Section density="tight" eyebrow={eyebrow} title={title} description={description} />

          {(primaryAction || secondaryAction) ? (
            <Cluster>
              {primaryAction}
              {secondaryAction}
            </Cluster>
          ) : null}

          {supporting ? <div className="text-sm text-text-muted">{supporting}</div> : null}
          {badges ? <div>{badges}</div> : null}
        </Stack>

        {hasAside ? <div>{aside}</div> : null}
      </div>
    </Panel>
  );
}
