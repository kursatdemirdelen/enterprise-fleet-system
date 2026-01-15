"use client";

import React from "react";
import { TrendingUp, TrendingDown, DollarSign, Wallet, CreditCard, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFinancials } from "@/hooks/use-financials";

export function FinancialStats() {
    const {
        totalMarketValue,
        totalFleetCost,
        totalDepreciation,
        costPerKm
    } = useFinancials();

    const metrics = [
        {
            label: "Toplam Varlık Değeri",
            value: `₺${(totalMarketValue / 1000000).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}M`,
            trend: `-₺${(totalDepreciation / 1000).toFixed(0)}k Değer Kaybı`,
            isPositive: false,
            icon: Wallet,
            color: "bg-blue-500"
        },
        {
            label: "Toplam İşletme Gideri",
            value: `₺${(totalFleetCost / 1000).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}K`,
            trend: "Tüm Zamanlar",
            isPositive: false,
            icon: CreditCard,
            color: "bg-orange-500"
        },
        {
            label: "KM Başına Maliyet",
            value: `₺${costPerKm.toFixed(2)}`,
            trend: "Verimlilik Skoru",
            isPositive: true,
            icon: Activity,
            color: "bg-purple-500"
        },
        {
            label: "Amortisman / Değer Kaybı",
            value: `%${((totalDepreciation / (totalMarketValue + totalDepreciation)) * 100).toFixed(1)}`,
            trend: "Varlık Erimesi",
            isPositive: false,
            icon: TrendingDown,
            color: "bg-red-500"
        }
    ];

    return (
        <div className="card p-6 border-l-4 border-l-indigo-500">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-base font-bold text-gray-900">Kurumsal Finansal Özet</h3>
                    <p className="text-xs text-gray-500">Enterprise modülü canlı verileri</p>
                </div>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase rounded-full">
                    Canlı
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {metrics.map((m, i) => (
                    <div key={i} className={cn("flex flex-col gap-1 p-2", i > 0 && "md:pl-6")}>
                        <div className="flex items-center gap-2 mb-1">
                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center bg-gray-50", m.color.replace('bg-', 'text-'))}>
                                <m.icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-medium text-gray-500">{m.label}</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-black text-gray-900 tracking-tight">{m.value}</span>
                            <span className={cn(
                                "text-[10px] font-bold flex items-center",
                                m.isPositive ? "text-emerald-600" : "text-gray-500"
                            )}>
                                {m.label.includes("Değer Kaybı") || m.label.includes("Maliyet") ? null : (
                                    m.isPositive ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />
                                )}
                                {m.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
