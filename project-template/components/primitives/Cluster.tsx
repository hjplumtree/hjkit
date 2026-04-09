import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type ClusterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "end";
  wrap?: boolean;
};

const gapClasses = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  end: "justify-end",
};

export function Cluster({
  children,
  className,
  gap = "sm",
  align = "center",
  justify = "start",
  wrap = true,
  ...props
}: ClusterProps) {
  return (
    <div
      className={cn(
        "flex",
        wrap && "flex-wrap",
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
