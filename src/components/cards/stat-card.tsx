import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ColorScheme = "blue" | "purple" | "orange" | "indigo" | "green";

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  detail?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  colorScheme?: ColorScheme;
  className?: string;
}

const colorSchemes = {
  blue: {
    bg: "bg-primary-50",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    border: "border-primary-100",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    border: "border-purple-100",
  },
  orange: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    border: "border-indigo-100",
  },
  green: {
    bg: "bg-success-50",
    iconBg: "bg-success-100",
    iconColor: "text-success-600",
    border: "border-success-100",
  },
};

export function StatCard({
  label,
  value,
  icon: Icon,
  detail,
  trend,
  colorScheme = "blue",
  className,
}: StatCardProps) {
  const colors = colorSchemes[colorScheme] ?? colorSchemes.blue;

  return (
    <div
      className={cn(
        "card card-hover p-6 transition-all duration-200",
        "hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "p-2.5 rounded-lg transition-transform duration-200",
            colors.iconBg,
            "hover:scale-105"
          )}
        >
          <Icon className={cn("w-5 h-5", colors.iconColor)} />
        </div>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-md",
              trend.isPositive
                ? "bg-success-50 text-success-700"
                : "bg-danger-50 text-danger-700"
            )}
          >
            {trend.value}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {detail && <p className="text-xs text-gray-500">{detail}</p>}
      </div>
    </div>
  );
}
