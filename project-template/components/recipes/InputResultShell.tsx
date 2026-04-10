import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

type InputResultShellProps = HTMLAttributes<HTMLElement> & {
  input: ReactNode;
  result: ReactNode;
  aside?: ReactNode;
};

export function InputResultShell({
  input,
  result,
  aside,
  className,
  ...props
}: InputResultShellProps) {
  return (
    <section
      className={cn(
        "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
        className,
      )}
      {...props}
    >
      <div>{input}</div>
      <div className="space-y-6">
        {result}
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}
