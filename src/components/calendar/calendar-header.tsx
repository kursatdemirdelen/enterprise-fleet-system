"use client";

import React from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
}: CalendarHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-gray-900 min-w-45">
          {format(currentDate, "MMMM yyyy", { locale: tr })}
        </h2>
        <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevMonth}
            className="h-8 w-8 p-0 rounded-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToday}
            className="text-[11px] font-bold px-3 h-8 rounded-lg uppercase tracking-wider text-gray-500 hover:text-gray-900"
          >
            BUGÜN
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNextMonth}
            className="h-8 w-8 p-0 rounded-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          Bakım
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          Muayene
        </div>
      </div>
    </div>
  );
}
