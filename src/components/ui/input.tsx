import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffix, ...props }, ref) => {
    if (suffix) {
      return (
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
              "focus-ring",
              "placeholder:text-gray-400",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "font-mono",
              suffix && "pr-12",
              className
            )}
            ref={ref}
            {...props}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500">
              {suffix}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
          "focus-ring",
          "placeholder:text-gray-400",
          "disabled:cursor-not-allowed disabled:opacity-50",
          type === "number" || type === "date" ? "font-mono" : "",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
