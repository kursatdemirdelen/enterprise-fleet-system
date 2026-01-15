"use client";

import React from "react";
import { Activity, TrendingUp, History } from "lucide-react";
import { StatCard } from "@/components/cards/stat-card";
import { VEHICLES_DATA, Vehicle } from "@/constants/mockData";
import { useFeatures } from "@/context/feature-context";

export function DashboardStats() {
    const { hasFeature } = useFeatures();

    const totalVehicles = VEHICLES_DATA.length;

    const maintenancePending = VEHICLES_DATA.filter(
        (v: Vehicle) => (v.mevcutKM - v.sonBakimKM) >= 9000
    ).length;

    const today = new Date();
    const inspectionPending = VEHICLES_DATA.filter((v: Vehicle) => {
        const inspectionDate = new Date(v.muayeneTarihi);
        const diffDays = Math.ceil((inspectionDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 30;
    }).length;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
                label="Sistemdeki Araç"
                value={totalVehicles}
                icon={Activity}
                detail="Aktif filo birimi"
                colorScheme="blue"
            />
            <StatCard
                label="Bakımı Yaklaşan"
                value={maintenancePending}
                icon={TrendingUp}
                detail="Servis zamanı gelmiş"
                trend={{ value: "+2 bu hafta", isPositive: false }}
                colorScheme="orange"
            />
            <StatCard
                label="Muayene / Sigorta"
                value={inspectionPending}
                icon={History}
                detail="Gelecek 30 gün içinde"
                colorScheme="purple"
            />

            {hasFeature('drivers') ? (
                <StatCard
                    label="Aktif Sürücü"
                    value="18"
                    icon={Activity}
                    detail="Şu an sahada"
                    colorScheme="green"
                />
            ) : (
                <StatCard
                    label="Filo Verimliliği"
                    value="%94"
                    icon={Activity}
                    detail="Aktif kullanım oranı"
                    colorScheme="indigo"
                />
            )}
        </div>
    );
}
