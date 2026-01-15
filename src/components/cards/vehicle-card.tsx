"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Car, ChevronRight, Edit3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Vehicle } from '@/constants/mockData';
import { StatusBadge } from '@/components/ui/status-badge';
import { Button } from '@/components/ui/button';
import { getBrandLogo } from '@/lib/brand-utils';

interface VehicleCardProps {
  vehicle: Vehicle;
  variant?: 'default' | 'compact';
  className?: string;
}

export function VehicleCard({ vehicle, variant = 'default', className }: VehicleCardProps) {
  const needsMaintenance = (vehicle.mevcutKM - vehicle.sonBakimKM) >= 9000;
  const brandLogo = getBrandLogo(vehicle.marka);

  if (variant === 'compact') {
    return (
      <Link href={`/vehicles/${vehicle.id}`} className={cn("block group transform transition-all active:scale-[0.98]", className)}>
        <div className="card card-hover p-4 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden",
              needsMaintenance
                ? "bg-amber-100/50"
                : "bg-white border border-gray-100"
            )}>
              {brandLogo ? (
                <div className="relative w-7 h-7">
                  <Image
                    src={brandLogo}
                    alt={vehicle.marka}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <Car className={cn("w-6 h-6", needsMaintenance ? "text-amber-600" : "text-primary-600")} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-gray-900 font-mono tracking-tight">{vehicle.plaka}</h4>
              <p className="text-xs text-secondary-foreground/60 truncate font-medium">{vehicle.marka} {vehicle.model}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Mesafe</p>
              <p className="text-sm font-bold text-gray-900 font-mono">{vehicle.mevcutKM.toLocaleString()} <span className="text-[10px] text-gray-400">KM</span></p>
            </div>
            <StatusBadge variant={needsMaintenance ? "warning" : "success"}>
              {needsMaintenance ? "Aksiyon" : "Uygun"}
            </StatusBadge>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 transition-colors" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className={cn("card card-hover flex flex-col group h-full", className)}>
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-3 group-hover:border-primary-200 transition-colors overflow-hidden">
              {brandLogo ? (
                <div className="relative w-8 h-8">
                  <Image
                    src={brandLogo}
                    alt={vehicle.marka}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <Car className="w-6 h-6 text-gray-400 group-hover:text-primary-600 transition-colors" />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-mono tracking-tighter">{vehicle.plaka}</h3>
            <p className="text-sm font-semibold text-gray-400">{vehicle.marka} {vehicle.model}</p>
          </div>
          <StatusBadge variant={needsMaintenance ? "danger" : "success"}>
            {needsMaintenance ? "Bakım Gerekli" : "Operasyonel"}
          </StatusBadge>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-100">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">Mevcut KM</span>
            <p className="text-lg font-bold text-gray-900 font-mono leading-none">{vehicle.mevcutKM.toLocaleString()}</p>
          </div>
          <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-100">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">Son Bakım</span>
            <p className="text-lg font-bold text-gray-900 font-mono leading-none">{vehicle.sonBakimKM.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 flex items-center justify-between border-t border-gray-100 gap-2">
        <Link href={`/vehicles/${vehicle.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Detaylı Görünüm
          </Button>
        </Link>
        <Link href={`/vehicles/${vehicle.id}/edit`}>
          <Button variant="ghost" size="sm" className="w-10 px-0">
            <Edit3 className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
