import type { ReactNode } from "react";
import { cn } from "../cn";
import { SecondaryButton } from "../patterns/SecondaryButton";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-surface-offset p-6 text-center", className)}>
      <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
        {icon ? <div className="text-text-muted">{icon}</div> : null}
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-text">{title}</h3>
          <p className="text-sm text-text-muted">{description}</p>
        </div>
        {actionLabel && onAction ? (
          <SecondaryButton onClick={onAction}>{actionLabel}</SecondaryButton>
        ) : null}
      </div>
    </div>
  );
}
