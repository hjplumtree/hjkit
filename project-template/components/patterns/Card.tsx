import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  footer?: ReactNode;
};

export function Card({
  title,
  description,
  footer,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <article
      className={cn("rounded-2xl border border-border bg-surface shadow-sm", className)}
      {...props}
    >
      <div className="space-y-4 p-4 sm:p-6">
        {(title || description) && (
          <header className="space-y-1">
            {title ? <h3 className="text-base font-semibold text-text">{title}</h3> : null}
            {description ? <p className="text-sm text-text-muted">{description}</p> : null}
          </header>
        )}
        {children}
        {footer ? <footer>{footer}</footer> : null}
      </div>
    </article>
  );
}
