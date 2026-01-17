/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { User, Phone, Mail, Award, Star, Car } from "lucide-react";
import { Driver, VEHICLES_DATA } from "@/constants/mockData";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DriverCardProps {
  driver: Driver;
}

const statusMap = {
  on_trip: { label: "Görevde", variant: "success", color: "bg-success-500" },
  available: { label: "Müsait", variant: "primary", color: "bg-blue-500" },
  off_duty: { label: "İzinli", variant: "outline", color: "bg-gray-400" },
};

export function DriverCard({ driver }: DriverCardProps) {
  const assignedVehicle = VEHICLES_DATA.find(
    (v) => v.id === driver.assignedVehicleId
  );

  return (
    <div className="card group hover:shadow-xl transition-all duration-300 overflow-hidden border-none bg-white">
      {/* Driver Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
              <User className="w-8 h-8" />
            </div>
            <div
              className={cn(
                "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ring-2 ring-transparent",
                statusMap[driver.status].color
              )}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 min-w-0">
            <Link
              href={`/drivers/${driver.id}`}
              className="hover:underline decoration-primary-500/30 decoration-2 underline-offset-4"
            >
              <h3 className="text-base font-black text-gray-900 truncate leading-none mb-1 group-hover:text-primary-600 transition-colors uppercase tracking-tight">
                {driver.name}
              </h3>
            </Link>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
              {driver.licenseNumber}
            </p>
          </div>
          <div className="flex items-center gap-1.5 h-6">
            <StatusBadge variant={statusMap[driver.status].variant as any}>
              {statusMap[driver.status].label}
            </StatusBadge>
            <div className="h-4 w-px bg-gray-100 shrink-0" />
            <div className="flex items-center gap-0.5 px-1.5 h-full rounded-md bg-amber-50 text-amber-600 border border-amber-100">
              <Star className="w-2.5 h-2.5 fill-current" />
              <span className="text-[9px] font-black">{driver.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50/30">
        <div className="space-y-1">
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <Award className="w-2.5 h-2.5" /> Tecrübe
          </span>
          <p className="text-xs font-bold text-gray-900">{driver.experience}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <Car className="w-2.5 h-2.5" /> Mevcut Araç
          </span>
          <p className="text-xs font-bold text-gray-900 truncate">
            {assignedVehicle ? assignedVehicle.plate : "Atanmamış"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 flex items-center gap-2 border-t border-gray-50 bg-white">
        <Link href={`/drivers/${driver.id}`} className="flex-1">
          <Button
            variant="ghost"
            className="w-full h-9 rounded-xl text-[10px] font-black uppercase hover:bg-primary-50 hover:text-primary-600 border border-transparent hover:border-primary-100 transition-all"
          >
            Profili Gör
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="h-9 w-9 p-0 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 text-gray-400 group/btn"
          >
            <Phone className="w-4 h-4 group-hover/btn:text-success-500 transition-colors" />
          </Button>
          <Button
            variant="ghost"
            className="h-9 w-9 p-0 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 text-gray-400 group/btn"
          >
            <Mail className="w-4 h-4 group-hover/btn:text-primary-500 transition-colors" />
          </Button>
        </div>
      </div>
    </div>
  );
}
