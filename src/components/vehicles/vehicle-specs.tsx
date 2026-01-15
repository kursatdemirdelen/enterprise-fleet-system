"use client";

import React from "react";
import { Vehicle } from "@/constants/mockData";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/status-badge";

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const specs = [
    { label: "Plaka", value: vehicle.plaka, mono: true },
    { label: "Üretici", value: vehicle.marka },
    { label: "Model", value: vehicle.model },
    { label: "Yıl", value: "2024" },
    { label: "Şasi", value: "NMTR123456789", mono: true },
    { label: "Motor", value: "ENG987654321", mono: true },
  ];

  return (
    <div className="card overflow-hidden">
      <div className="p-5 border-b border-gray-100 bg-gray-50/30">
        <h2 className="text-sm font-black text-gray-900 uppercase tracking-widest">Araç Künyesi</h2>
      </div>
      <div className="p-5 space-y-4">
        {specs.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
            <span className={cn("text-sm font-bold text-gray-900", item.mono && "font-mono tracking-tight")}>{item.value}</span>
          </div>
        ))}
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Durum</span>
          <StatusBadge variant={(vehicle.mevcutKM - vehicle.sonBakimKM) >= 9000 ? "danger" : "success"}>
            {(vehicle.mevcutKM - vehicle.sonBakimKM) >= 9000 ? "Bakım Gerekli" : "Operasyonel"}
          </StatusBadge>
        </div>
      </div>
    </div>
  );
}
