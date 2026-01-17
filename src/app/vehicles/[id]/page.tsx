"use client";

import React, { use } from "react";
import {
  VEHICLES_DATA,
  DRIVERS_DATA,
  FUEL_LOGS_DATA,
} from "@/constants/mockData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Droplets,
  CalendarClock,
  History,
  Edit,
  ArrowUpRight,
  ShieldCheck,
  ChevronLeft,
  Fuel,
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/status-badge";
import { FeatureGuard } from "@/components/auth/feature-guard";

// Modular Components
import { FuelAnalysis } from "@/components/vehicles/fuel-analysis";
import { VehicleDriverPanel } from "@/components/vehicles/vehicle-driver-panel";
import { VehicleSpecs } from "@/components/vehicles/vehicle-specs";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function VehicleDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const vehicle = VEHICLES_DATA.find((v) => v.id === id);

  if (!vehicle) {
    notFound();
  }

  const driver = DRIVERS_DATA.find((d) => d.id === vehicle.currentDriverId);
  const fuelLogs = FUEL_LOGS_DATA.filter((f) => f.vehicleId === vehicle.id);

  const today = new Date();
  const inspectionDate = new Date(vehicle.inspectionDate);
  const diffTime = inspectionDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const kmSinceMaintenance = vehicle.currentKm - vehicle.lastMaintenanceKm;
  const oilLifePercentage = Math.max(0, 100 - kmSinceMaintenance / 100);

  const serviceHistory = [
    {
      date: "12 Şub 2025",
      action: "Fren Balatası Değişimi",
      km: "52,400 KM",
      type: "Onarım",
      status: "Tamamlandı",
    },
    {
      date: "10 Oca 2025",
      action: "Periyodik Bakım",
      km: "45,000 KM",
      type: "Servis",
      status: "Tamamlandı",
    },
    {
      date: "05 Kas 2024",
      action: "Lastik Rotasyonu",
      km: "40,000 KM",
      type: "Bakım",
      status: "Onaylandı",
    },
    {
      date: "20 Ağu 2024",
      action: "Yağ ve Filtre Değişimi",
      km: "35,000 KM",
      type: "Servis",
      status: "Tamamlandı",
    },
  ];

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-2">
        <Link href="/vehicles">
          <Button variant="ghost" size="sm" className="rounded-xl h-9">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Araç Listesine Dön
          </Button>
        </Link>
      </div>

      <PageHeader
        title={vehicle.plate}
        description={`${vehicle.brand} ${vehicle.model} • 2024 Model Filo Aracı`}
        action={
          <div className="flex gap-2">
            <Link href={`/vehicles/${id}/edit`}>
              <Button
                variant="outline"
                className="h-10 rounded-xl px-4 border-gray-200"
              >
                <Edit className="w-4 h-4 mr-2" />
                Düzenle
              </Button>
            </Link>
            <Button variant="premium">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Sertifika İndir
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
        {/* Left Column: Metrics & Analysis */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Status Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100/50 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    Yağ Ömrü
                  </span>
                </div>
                <span className="text-2xl font-black text-gray-900 font-mono">
                  {Math.round(oilLifePercentage)}%
                </span>
              </div>
              <Progress value={oilLifePercentage} className="h-2 bg-gray-100" />
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                Son servis üzerinden {kmSinceMaintenance.toLocaleString()} KM
                geçti
              </p>
            </div>

            <div className="card p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/50 flex items-center justify-center">
                    <CalendarClock className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    Yaklaşan Muayene
                  </span>
                </div>
                <span
                  className={cn(
                    "text-2xl font-black font-mono",
                    diffDays <= 30 ? "text-danger-600" : "text-gray-900"
                  )}
                >
                  {diffDays} Gün
                </span>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge
                  variant={diffDays <= 30 ? "danger" : "warning"}
                  className="h-6"
                >
                  Randevu Bekleniyor
                </StatusBadge>
                <span className="text-xs font-bold text-gray-400">
                  {vehicle.inspectionDate}
                </span>
              </div>
            </div>
          </div>

          <FuelAnalysis
            logs={fuelLogs}
            avgConsumption={vehicle.avgFuelConsumption}
          />

          {/* Service History */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-gray-900">
                Servis Geçmişi
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-bold text-primary-600"
              >
                Tümünü İncele <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="card overflow-hidden">
              <div className="divide-y divide-gray-100">
                {serviceHistory.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-5 hover:bg-gray-50/50 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white transition-colors">
                        <History className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-0.5">
                          {item.action}
                        </h4>
                        <div className="flex items-center gap-2">
                          <StatusBadge
                            variant="outline"
                            className="h-5 px-1.5 text-[9px]"
                          >
                            {item.type}
                          </StatusBadge>
                          <span className="text-xs font-bold text-gray-400 font-mono tracking-tight">
                            {item.km}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <StatusBadge variant="success" className="mb-1">
                        {item.status}
                      </StatusBadge>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Driver & Specs */}
        <div className="space-y-6">
          <FeatureGuard feature="drivers">
            <VehicleDriverPanel driver={driver} />
          </FeatureGuard>

          <VehicleSpecs vehicle={vehicle} />

          <div className="card p-5 space-y-4">
            <h3 className="text-sm font-black text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-500" />
              Hızlı İşlemler
            </h3>
            <div className="space-y-2">
              <Link href="/calendar" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full h-10 rounded-xl border-gray-200 justify-start hover:border-primary-200 hover:bg-primary-50/30"
                >
                  <CalendarClock className="w-4 h-4 mr-2 text-primary-500" />
                  Bakım Randevusu
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full h-10 rounded-xl border-gray-200 justify-start hover:border-primary-200 hover:bg-primary-50/30"
              >
                <Fuel className="w-4 h-4 mr-2 text-emerald-500" />
                Yakıt Girişi Yap
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
