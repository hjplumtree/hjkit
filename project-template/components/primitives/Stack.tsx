import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

const gapClasses = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function Stack({
  children,
  className,
  gap = "md",
  ...props
}: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
