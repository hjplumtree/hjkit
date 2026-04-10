import { cloneElement, isValidElement, useId, type HTMLAttributes, type ReactNode } from "react";
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
  const mergeIds = (...ids: Array<string | undefined>) => ids.filter(Boolean).join(" ") || undefined;
  const reactId = useId().replace(/:/g, "");
  const controlId = id ?? `${reactId}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const hintId = helperText ? `${controlId}-helper` : undefined;
  const errorId = errorText ? `${controlId}-error` : undefined;
  const describedBy = mergeIds(hintId, errorId);

  const control =
    isValidElement(children)
      ? cloneElement(children, {
          id: children.props.id ?? controlId,
          "aria-describedby": mergeIds(children.props["aria-describedby"], describedBy),
          "aria-invalid": errorText ? true : children.props["aria-invalid"],
        })
      : children;

  return (
    <div className={cn("space-y-2", className)} {...props}>
      <label htmlFor={controlId} className="block text-sm font-medium text-text">
        {label}
        {required ? <span className="ml-1 text-error">*</span> : null}
      </label>
      <div>{control}</div>
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
