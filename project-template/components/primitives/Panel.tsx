import type { HTMLAttributes } from "react";
import { cn } from "../cn";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  padding?: "sm" | "md" | "lg";
};

const paddingClasses = {
  sm: "p-3 sm:p-4",
  md: "p-4 sm:p-6",
  lg: "p-6 sm:p-8",
};

export function Panel({ className, padding = "md", ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface text-text shadow-sm",
        paddingClasses[padding],
        className,
      )}
      {...props}
    />
  );
}
