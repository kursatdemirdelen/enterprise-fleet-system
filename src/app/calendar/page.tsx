"use client";

import React, { useState } from "react";
import { 
  addMonths, 
  subMonths,
  parseISO,
  isSameDay
} from "date-fns";
import { 
  Plus,
  Filter
} from "lucide-react";

import { VEHICLES_DATA } from "@/constants/mockData";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { MaintenanceCalendar } from "@/components/calendar/maintenance-calendar";
import { DayEventsPanel } from "@/components/calendar/day-events-panel";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate events from data
  const events = [
    ...VEHICLES_DATA.map(v => ({
      date: parseISO(v.muayeneTarihi),
      title: `${v.plaka} - Muayene`,
      type: 'inspection' as const,
      color: 'bg-red-500',
      badge: 'danger' as const
    })),
    ...VEHICLES_DATA.filter(v => (v.mevcutKM - v.sonBakimKM) >= 8000).map((v, i) => ({
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 10 + (i * 2)),
      title: `${v.plaka} - Periyodik Bakım`,
      type: 'maintenance' as const,
      color: 'bg-blue-500',
      badge: 'primary' as const
    }))
  ];

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const dayEvents = events.filter(e => isSameDay(e.date, selectedDate));

  return (
    <PageContainer>
      <PageHeader
        title="Operasyon Takvimi"
        description="Filo bakım ve muayene randevularının merkezi yönetimi"
        action={
          <div className="flex items-center gap-2">
             <Button variant="outline" className="h-10 px-4 rounded-xl border-gray-200">
               <Filter className="w-4 h-4 mr-2 text-gray-400" />
               Filtrele
             </Button>
             <Button variant="premium">
               <Plus className="w-4 h-4 mr-2" />
               Randevu Oluştur
             </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <MaintenanceCalendar 
           currentDate={currentDate}
           selectedDate={selectedDate}
           events={events}
           onDateSelect={setSelectedDate}
           onPrevMonth={prevMonth}
           onNextMonth={nextMonth}
           onToday={goToToday}
        />

        <DayEventsPanel 
           selectedDate={selectedDate}
           events={dayEvents}
        />
      </div>
    </PageContainer>
  );
}
