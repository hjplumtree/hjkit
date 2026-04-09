import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type FieldGroupProps = HTMLAttributes<HTMLDivElement> & {
  id?: string;
  label: string;
  helperText?: string;
  errorText?: string;
  children: ReactNode;
  required?: boolean;
};

export function FieldGroup({
  id,
  label,
  helperText,
  errorText,
  children,
  required,
  className,
  ...props
}: FieldGroupProps) {
  const baseId = (id ?? label).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hintId = helperText ? `${baseId}-helper` : undefined;
  const errorId = errorText ? `${baseId}-error` : undefined;

  return (
    <div className={cn("space-y-2", className)} {...props}>
      <label htmlFor={id} className="block text-sm font-medium text-text">
        {label}
        {required ? <span className="ml-1 text-error">*</span> : null}
      </label>
      <div>{children}</div>
      {helperText ? (
        <p id={hintId} className="text-xs text-text-muted">
          {helperText}
        </p>
      ) : null}
      {errorText ? (
        <p id={errorId} className="text-xs font-medium text-error">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
