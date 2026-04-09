import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type CalloutTone = "neutral" | "primary" | "success" | "warning" | "error";

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CalloutTone;
  title?: string;
  icon?: ReactNode;
};

const toneClasses: Record<CalloutTone, string> = {
  neutral: "border-border bg-surface-offset",
  primary: "border-primary/20 bg-primary/5",
  success: "border-success/20 bg-success/5",
  warning: "border-warning/20 bg-warning/5",
  error: "border-error/20 bg-error/5",
};

export function Callout({
  tone = "neutral",
  title,
  icon,
  children,
  className,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("rounded-2xl border p-4 sm:p-5", toneClasses[tone], className)}
      {...props}
    >
      <div className="flex gap-3">
        {icon ? <div className="mt-0.5 shrink-0">{icon}</div> : null}
        <div className="space-y-1">
          {title ? <p className="text-sm font-semibold text-text">{title}</p> : null}
          <div className="text-sm text-text-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
