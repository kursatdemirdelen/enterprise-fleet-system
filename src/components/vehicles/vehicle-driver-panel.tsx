"use client";

import React from "react";
import { User, Phone, Mail, ChevronRight } from "lucide-react";
import { Driver } from "@/constants/mockData";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VehicleDriverPanelProps {
  driver?: Driver;
}

export function VehicleDriverPanel({ driver }: VehicleDriverPanelProps) {
  return (
    <div className="card overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Link href="/drivers">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg">
            <User className="w-4 h-4 text-gray-400" />
          </Button>
        </Link>
      </div>
      <div className="p-6 border-b border-gray-50 bg-gray-50/30">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
          Görevli Sürücü
        </h3>
        {driver ? (
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-300">
              <User className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-black text-gray-900 leading-none mb-1.5 truncate">
                {driver.name}
              </h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {driver.licenseNumber}
              </p>
              <div className="flex gap-1 mt-2">
                <StatusBadge
                  variant="success"
                  className="text-[9px] h-5 px-1.5"
                >
                  Aktif Görevde
                </StatusBadge>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4 text-center">
            <p className="text-xs font-bold text-gray-400">
              Atanmış sürücü bulunmuyor
            </p>
            <Button
              variant="outline"
              className="h-8 mt-3 rounded-lg text-[10px] font-black uppercase border-gray-200"
            >
              Sürücü Ata
            </Button>
          </div>
        )}
      </div>
      {driver && (
        <div className="p-4 grid grid-cols-2 gap-2 bg-white">
          <Link
            href={`/drivers/${driver.id}`}
            className="w-full col-span-2 mb-2"
          >
            <Button
              variant="ghost"
              className="w-full h-9 rounded-xl text-[10px] font-black uppercase hover:bg-primary-50 hover:text-primary-600 border border-transparent hover:border-primary-100 transition-all flex items-center justify-center gap-2"
            >
              Sürücü Profilini Gör <ChevronRight className="w-3 h-3" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="h-9 rounded-xl text-[10px] font-bold hover:bg-gray-50 border border-transparent hover:border-gray-100 gap-2"
          >
            <Phone className="w-3 h-3" /> Ara
          </Button>
          <Button
            variant="ghost"
            className="h-9 rounded-xl text-[10px] font-bold hover:bg-gray-50 border border-transparent hover:border-gray-100 gap-2"
          >
            <Mail className="w-3 h-3" /> Mesaj
          </Button>
        </div>
      )}
    </div>
  );
}
