"use client";

import React from "react";
import { Car, ChevronRight, Activity } from "lucide-react";
import { Vehicle } from "@/constants/mockData";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DriverVehiclePanelProps {
  vehicle?: Vehicle;
}

export function DriverVehiclePanel({ vehicle }: DriverVehiclePanelProps) {
  return (
    <div className="card overflow-hidden group">
      <div className="p-6 border-b border-gray-50 bg-gray-50/30">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
          Atanan Araç
        </h3>
        {vehicle ? (
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 transition-transform group-hover:scale-110">
              <Car className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-black text-gray-900 leading-none mb-1.5 truncate">
                {vehicle.plate}
              </h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {vehicle.brand} {vehicle.model}
              </p>
              <div className="flex gap-1 mt-2">
                <StatusBadge
                  variant="primary"
                  className="text-[9px] h-5 px-1.5"
                >
                  Aktif Kullanımda
                </StatusBadge>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4 text-center">
            <p className="text-xs font-bold text-gray-400">
              Atanmış araç bulunmuyor
            </p>
            <Button
              variant="outline"
              className="h-8 mt-3 rounded-lg text-[10px] font-black uppercase border-gray-200"
            >
              Araç Ata
            </Button>
          </div>
        )}
      </div>

      {vehicle && (
        <div className="p-4 space-y-3 bg-white">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-[9px] font-black text-gray-400 uppercase mb-1">
                Kilometre
              </p>
              <p className="text-sm font-black text-gray-900 font-mono">
                {vehicle.currentKm.toLocaleString()}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-[9px] font-black text-gray-400 uppercase mb-1">
                Durum
              </p>
              <div className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-success-500" />
                <span className="text-[10px] font-black text-gray-700">
                  Online
                </span>
              </div>
            </div>
          </div>

          <Link href={`/vehicles/${vehicle.id}`} className="block">
            <Button
              variant="ghost"
              className="w-full h-10 rounded-xl text-[10px] font-black uppercase hover:bg-primary-50 hover:text-primary-600 border border-transparent hover:border-primary-100 transition-all flex items-center justify-center gap-2"
            >
              Araç Detaylarını Gör <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
