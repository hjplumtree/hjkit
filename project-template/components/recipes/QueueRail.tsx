import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Panel } from "../primitives/Panel";
import { Section } from "../primitives/Section";

type QueueRailProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
};

export function QueueRail({
  eyebrow,
  title,
  description,
  action,
  children,
  className,
  ...props
}: QueueRailProps) {
  return (
    <Panel padding="lg" className={cn(className)} {...props}>
      <Section eyebrow={eyebrow} title={title} description={description} action={action}>
        {children}
      </Section>
    </Panel>
  );
}
