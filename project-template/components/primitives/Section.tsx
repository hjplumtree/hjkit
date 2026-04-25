import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  eyebrow?: string;
  description?: string;
  action?: ReactNode;
  density?: "tight" | "default" | "spacious";
};

const densityClasses = {
  tight: "py-4 sm:py-6",
  default: "py-6 sm:py-8",
  spacious: "py-8 sm:py-12",
};

export function Section({
  title,
  eyebrow,
  description,
  action,
  density = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(densityClasses[density], "space-y-4", className)} {...props}>
      {(eyebrow || title || description || action) && (
        <header className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="text-lg font-semibold text-text">{title}</h2> : null}
            {description ? <p className="max-w-2xl text-sm text-text-muted">{description}</p> : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </header>
      )}
      {children}
    </section>
  );
}
