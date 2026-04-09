import type { HTMLAttributes } from "react";
import { cn } from "../cn";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export function Panel({ className, padded = true, ...props }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface text-text shadow-sm",
        padded && "p-4 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
