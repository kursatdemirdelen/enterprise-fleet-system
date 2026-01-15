"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { VEHICLES_DATA } from "@/constants/mockData";

export function FleetSummary() {
    const totalVehicles = VEHICLES_DATA.length;

    // This is mock logic for types, assuming distribution for demo
    const mockTypes = [
        { label: "Binek Araç", count: 12, color: "bg-blue-500" },
        { label: "Hafif Ticari", count: 8, color: "bg-purple-500" },
        { label: "Ağır Vasıta", count: 4, color: "bg-amber-500" }
    ];

    return (
        <div className="card p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Filo Özeti</h3>
            <div className="space-y-4">
                {mockTypes.map((type) => (
                    <div key={type.label} className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold">
                            <span className="text-gray-500 uppercase tracking-wider">{type.label}</span>
                            <span className="text-gray-900">{type.count}</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={cn("h-full rounded-full transition-all duration-1000", type.color)}
                                style={{ width: `${(type.count / totalVehicles) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
