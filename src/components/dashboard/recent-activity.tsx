"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VehicleCard } from "@/components/cards/vehicle-card";
import { VEHICLES_DATA } from "@/constants/mockData";

export function RecentActivity() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Son Hareketler</h2>
                <Link href="/vehicles" className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1 group">
                    Hepsini Gör <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VEHICLES_DATA.slice(0, 4).map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} variant="compact" />
                ))}
            </div>
        </div>
    );
}
