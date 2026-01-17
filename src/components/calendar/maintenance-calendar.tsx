"use client";

import React from "react";
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  format,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarHeader } from "./calendar-header";

interface CalendarEvent {
  date: Date;
  title: string;
  type: "inspection" | "maintenance";
  color: string;
  badge: "danger" | "primary";
}

interface MaintenanceCalendarProps {
  currentDate: Date;
  selectedDate: Date;
  events: CalendarEvent[];
  onDateSelect: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export function MaintenanceCalendar({
  currentDate,
  selectedDate,
  events,
  onDateSelect,
  onPrevMonth,
  onNextMonth,
  onToday,
}: MaintenanceCalendarProps) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const getDayEvents = (day: Date) =>
    events.filter((e) => isSameDay(e.date, day));

  return (
    <div className="lg:col-span-3 card overflow-hidden shadow-lg border-none bg-white">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
        onToday={onToday}
      />

      <div className="grid grid-cols-7 bg-gray-50/50">
        {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => (
          <div
            key={day}
            className="py-3 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {calendarDays.map((day, idx) => {
          const currentDayEvents = getDayEvents(day);
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, monthStart);

          return (
            <div
              key={idx}
              onClick={() => onDateSelect(day)}
              className={cn(
                "min-h-35 p-2 border-r border-b border-gray-50 transition-all cursor-pointer relative group",
                !isCurrentMonth
                  ? "bg-gray-50/20 opacity-40"
                  : "bg-white hover:bg-primary-50/30",
                isSelected &&
                  "bg-primary-50/50 ring-2 ring-inset ring-primary-500/20 z-10"
              )}
            >
              <div className="flex justify-between items-start mb-2 pt-1 px-1">
                <span
                  className={cn(
                    "text-xs font-bold w-7 h-7 flex items-center justify-center rounded-lg transition-all",
                    isToday(day)
                      ? "bg-primary-600 text-white shadow-md shadow-primary-200"
                      : "text-gray-900 group-hover:text-primary-600",
                    isSelected &&
                      !isToday(day) &&
                      "bg-white text-primary-600 shadow-sm"
                  )}
                >
                  {format(day, "d")}
                </span>
              </div>

              <div className="space-y-1 overflow-y-auto max-h-21.25 scrollbar-hide">
                {currentDayEvents.map((event, i) => (
                  <div
                    key={i}
                    className={cn(
                      "px-2 py-1.5 rounded-md text-[10px] font-bold truncate transition-all hover:scale-[1.02] shadow-sm flex items-center gap-1.5 border-l-2",
                      event.type === "inspection"
                        ? "bg-red-50 text-red-700 border-red-500"
                        : "bg-blue-50 text-blue-700 border-blue-500"
                    )}
                    title={event.title}
                  >
                    {event.title.split(" - ")[0]}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
