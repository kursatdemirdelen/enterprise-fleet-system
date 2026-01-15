"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-600",
        primary: "bg-primary-50 text-primary-600",
        success: "bg-success-50 text-success-600",
        warning: "bg-amber-50 text-amber-600",
        danger: "bg-danger-50 text-danger-600",
        outline: "border border-gray-100 text-gray-500 bg-white",
        premium: "bg-gradient-premium text-white shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export function StatusBadge({ className, variant, icon, children, ...props }: StatusBadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && <span className="mr-1.5 opacity-80">{icon}</span>}
      {children}
    </div>
  );
}
