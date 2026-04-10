import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Panel } from "../primitives/Panel";
import { Section } from "../primitives/Section";
import { Stack } from "../primitives/Stack";

type TaskFormShellProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
};

export function TaskFormShell({
  eyebrow,
  title,
  description,
  footer,
  children,
  className,
  ...props
}: TaskFormShellProps) {
  return (
    <Panel padding="lg" className={cn(className)} {...props}>
      <Stack gap="lg">
        <Section eyebrow={eyebrow} title={title} description={description}>
          {children}
        </Section>
        {footer ? <div>{footer}</div> : null}
      </Stack>
    </Panel>
  );
}
