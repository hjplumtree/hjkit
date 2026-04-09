import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
};

export function PrimaryButton({
  children,
  className,
  disabled,
  loading = false,
  fullWidth = false,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition",
        "hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-60",
        fullWidth && "w-full",
        className,
      )}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
