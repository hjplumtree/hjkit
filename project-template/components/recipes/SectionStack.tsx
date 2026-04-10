import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Stack } from "../primitives/Stack";

type SectionStackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SectionStack({ children, className, ...props }: SectionStackProps) {
  return (
    <Stack gap="xl" className={cn("max-w-3xl", className)} {...props}>
      {children}
    </Stack>
  );
}
