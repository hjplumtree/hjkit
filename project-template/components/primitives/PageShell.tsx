import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type PageShellProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  width?: "narrow" | "default" | "wide";
};

const widthClasses = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function PageShell({
  children,
  className,
  width = "default",
  ...props
}: PageShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-text",
        "px-4 py-6 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full", widthClasses[width])}>{children}</div>
    </div>
  );
}
