import { cn } from "../cn";

type LoadingStateProps = {
  rows?: number;
  className?: string;
};

export function LoadingState({ rows = 3, className }: LoadingStateProps) {
  return (
    <div className={cn("space-y-3 rounded-2xl border border-border bg-surface p-4 sm:p-6", className)}>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="animate-pulse space-y-2">
          <div className="h-4 w-1/3 rounded bg-surface-offset" />
          <div className="h-3 w-full rounded bg-surface-offset" />
        </div>
      ))}
    </div>
  );
}
