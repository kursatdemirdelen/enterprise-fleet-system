"use client";

import React from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  Wrench,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendarEvent {
  date: Date;
  title: string;
  type: "inspection" | "maintenance";
  color: string;
  badge: "danger" | "primary";
}

interface DayEventsPanelProps {
  selectedDate: Date;
  events: CalendarEvent[];
}

export function DayEventsPanel({ selectedDate, events }: DayEventsPanelProps) {
  return (
    <div className="space-y-6">
      <div className="card p-6 border-none shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex flex-col items-center justify-center shadow-lg shadow-primary-200">
            <span className="text-[10px] uppercase font-black leading-none mb-0.5">
              {format(selectedDate, "MMM", { locale: tr })}
            </span>
            <span className="text-lg font-black leading-none">
              {format(selectedDate, "dd")}
            </span>
          </div>
          <div>
            <h3 className="text-base font-black text-gray-900">
              {format(selectedDate, "EEEE", { locale: tr })}
            </h3>
            <p className="text-xs font-bold text-gray-400">
              Günlük Randevu Listesi
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {events.length > 0 ? (
            events.map((event, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-all group cursor-pointer hover:shadow-md hover:border-primary-100"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12",
                      event.type === "maintenance"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    )}
                  >
                    {event.type === "maintenance" ? (
                      <Wrench className="w-5 h-5" />
                    ) : (
                      <ShieldCheck className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h4 className="text-sm font-black text-gray-900 tracking-tight leading-none mb-1.5">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Durum: Beklemede
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-2 mt-3 text-[10px] font-bold h-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Detayları Gör <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center opacity-40">
              <CalendarIcon className="w-12 h-12 text-gray-300 mb-2" />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Randevu Yok
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="card p-6 bg-gradient-premium text-white border-none shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl transition-transform duration-1000 group-hover:scale-150" />
        <h3 className="text-base text-white relative z-10">
          Akıllı Bildirimler
        </h3>
        <p className="text-xs text-white/80 mt-2 leading-relaxed relative z-10 font-medium">
          Bakım zamanı yaklaşan 3 araç için otomatik SMS ve e-posta bildirimleri
          gönderildi.
        </p>
        <Button
          variant="outline"
          className="w-full mt-6 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary-900 border-none transition-all relative z-10"
        >
          Ayarları Yönet
        </Button>
      </div>
    </div>
  );
}
