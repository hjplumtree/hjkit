import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import { Stack } from "../primitives/Stack";

type SectionStackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  width?: "narrow" | "balanced" | "wide" | "fluid";
};

const widthClasses = {
  narrow: "max-w-3xl",
  balanced: "max-w-4xl",
  wide: "max-w-5xl",
  fluid: "max-w-none",
};

export function SectionStack({
  children,
  width = "balanced",
  className,
  ...props
}: SectionStackProps) {
  return (
    <Stack gap="xl" className={cn(widthClasses[width], className)} {...props}>
      {children}
    </Stack>
  );
}
