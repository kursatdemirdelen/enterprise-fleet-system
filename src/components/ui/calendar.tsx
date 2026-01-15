"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

/**
 * Optimized for react-day-picker v9
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-6 w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-8 w-full",
        month_caption: "flex justify-center pt-2 relative items-center mb-8",
        caption_label: "text-lg font-bold text-[#1d1d1f] tracking-tight",
        nav: "flex items-center gap-1",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 opacity-50 hover:opacity-100 hover:bg-[#f5f5f7] rounded-full transition-all absolute left-4"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 opacity-50 hover:opacity-100 hover:bg-[#f5f5f7] rounded-full transition-all absolute right-4"
        ),
        month_grid: "w-full border-collapse space-y-2",
        weekdays: "flex w-full mb-6",
        weekday: "text-[#86868b] w-full font-black text-[10px] uppercase tracking-[0.4em] text-center opacity-60",
        weeks: "space-y-2",
        week: "flex w-full gap-1",
        day: cn(
          "h-14 w-full p-0 font-bold rounded-2xl hover:bg-[#f5f5f7] transition-all flex items-center justify-center text-sm relative group"
        ),
        day_button: "h-14 w-full flex items-center justify-center rounded-2xl",
        selected: "bg-[#1d1d1f] text-white hover:bg-[#1d1d1f] hover:text-white focus:bg-[#1d1d1f] focus:text-white shadow-2xl",
        today: "bg-[#f5f5f7] text-[#1d1d1f] border border-black/5",
        outside: "text-[#d2d2d7] opacity-20 pointer-events-none",
        disabled: "text-[#d2d2d7] opacity-50",
        range_middle: "bg-[#f5f5f7] text-[#1d1d1f]",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => {
          if (props.orientation === "left") return <ChevronLeft className="h-5 w-5" />;
          return <ChevronRight className="h-5 w-5" />;
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
