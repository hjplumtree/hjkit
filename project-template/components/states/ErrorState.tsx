import type { ReactNode } from "react";
import { cn } from "../cn";
import { SecondaryButton } from "../patterns/SecondaryButton";

type ErrorStateProps = {
  title?: string;
  description: string;
  actionLabel?: string;
  onRetry?: () => void;
  icon?: ReactNode;
  className?: string;
};

export function ErrorState({
  title = "Something went wrong",
  description,
  actionLabel = "Try again",
  onRetry,
  icon,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn("rounded-2xl border border-error/20 bg-error/5 p-6 text-center", className)}>
      <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
        {icon ? <div className="text-error">{icon}</div> : null}
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-text">{title}</h3>
          <p className="text-sm text-text-muted">{description}</p>
        </div>
        {onRetry ? <SecondaryButton onClick={onRetry}>{actionLabel}</SecondaryButton> : null}
      </div>
    </div>
  );
}
