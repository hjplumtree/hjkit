import type { ReactNode } from "react";
import { cn } from "../cn";

export type DataListItem = {
  label: string;
  value: ReactNode;
  meta?: ReactNode;
};

type DataListProps = {
  items: DataListItem[];
  className?: string;
};

export function DataList({ items, className }: DataListProps) {
  return (
    <dl className={cn("divide-y divide-divider rounded-2xl border border-border bg-surface", className)}>
      {items.map((item) => (
        <div key={item.label} className="flex items-start justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <dt className="text-sm font-medium text-text">{item.label}</dt>
            {item.meta ? <dd className="mt-1 text-xs text-text-muted">{item.meta}</dd> : null}
          </div>
          <dd className="text-sm font-medium text-text">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
