import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type ToolbarProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  left?: ReactNode;
  right?: ReactNode;
};

export function Toolbar({
  title,
  description,
  left,
  right,
  children,
  className,
  ...props
}: ToolbarProps) {
  return (
    <div className={cn("space-y-3 border-b border-border pb-4", className)} {...props}>
      {(title || description || left || right) && (
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            {title ? <h2 className="text-base font-semibold text-text">{title}</h2> : null}
            {description ? <p className="text-sm text-text-muted">{description}</p> : null}
            {left ? <div>{left}</div> : null}
          </div>
          {right ? <div className="shrink-0">{right}</div> : null}
        </div>
      )}
      {children ? <div className="flex flex-wrap items-center gap-2">{children}</div> : null}
    </div>
  );
}
