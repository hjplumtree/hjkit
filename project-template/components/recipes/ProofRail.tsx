import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Panel } from "../primitives/Panel";
import { Section } from "../primitives/Section";

type ProofRailProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
};

export function ProofRail({
  eyebrow,
  title,
  description,
  action,
  children,
  className,
  ...props
}: ProofRailProps) {
  return (
    <Panel padding="lg" className={cn("bg-surface-offset", className)} {...props}>
      <Section eyebrow={eyebrow} title={title} description={description} action={action}>
        {children}
      </Section>
    </Panel>
  );
}
