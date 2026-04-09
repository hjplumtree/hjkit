import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
};

export function SecondaryButton({
  children,
  className,
  fullWidth = false,
  type = "button",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition",
        "hover:bg-surface-offset focus:outline-none focus:ring-2 focus:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-60",
        fullWidth && "w-full",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
