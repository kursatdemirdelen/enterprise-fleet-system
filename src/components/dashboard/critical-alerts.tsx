"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { VEHICLES_DATA, Vehicle } from "@/constants/mockData";
import { getBrandLogo } from "@/lib/brand-utils";

export function CriticalAlerts() {
    const criticalVehicles = VEHICLES_DATA.filter((v: Vehicle) => (v.mevcutKM - v.sonBakimKM) >= 9000);

    return (
        <div className="card overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Önemli Uyarılar
                </h3>
            </div>
            <div className="p-5 space-y-4">
                {criticalVehicles.length > 0 ? (
                    <>
                        <p className="text-xs text-secondary-foreground/60 leading-relaxed">
                            Şu an <span className="font-bold text-gray-900">{criticalVehicles.length} araç</span> acil bakım periyoduna girmiş durumda.
                        </p>
                        <div className="space-y-2">
                            {criticalVehicles.slice(0, 3).map((v) => {
                                const brandLogo = getBrandLogo(v.marka);
                                return (
                                    <Link
                                        key={v.id}
                                        href={`/vehicles/${v.id}`}
                                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                {brandLogo ? (
                                                    <div className="relative w-5 h-5">
                                                        <Image
                                                            src={brandLogo}
                                                            alt={v.marka}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="text-[10px] font-bold text-gray-400">{v.marka.substring(0, 2)}</span>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold font-mono tracking-tight">{v.plaka}</span>
                                                <span className="text-xs text-gray-400 font-medium">{v.marka} {v.model}</span>
                                            </div>
                                        </div>
                                        <StatusBadge variant="danger" className="text-[9px]">Bakım</StatusBadge>
                                    </Link>
                                );
                            })}
                        </div>
                        <Link href="/calendar">
                            <Button variant="outline" size="sm" className="w-full mt-2 text-[11px] h-8 cursor-pointer">
                                Tüm Takvimi İncele
                            </Button>
                        </Link>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <div className="w-10 h-10 rounded-full bg-success-50 flex items-center justify-center mx-auto mb-3">
                            <Activity className="w-5 h-5 text-success-600" />
                        </div>
                        <p className="text-xs font-bold text-success-600">Her Şey Yolunda</p>
                        <p className="text-[10px] text-gray-400 mt-1">Acil müdahale gerektiren araç yok.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
