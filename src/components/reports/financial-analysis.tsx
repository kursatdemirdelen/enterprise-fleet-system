"use client";

import React from "react";
import { Wallet } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { VEHICLES_DATA } from "@/constants/mockData";

export function FinancialAnalysis() {
    // Top 5 vehicles by purchase price
    const assetData = [...VEHICLES_DATA]
        .sort((a, b) => b.purchasePrice - a.purchasePrice)
        .slice(0, 5)
        .map(v => ({
            name: v.plaka,
            alis: v.purchasePrice,
            piyasa: v.marketValue,
            model: `${v.marka} ${v.model}`
        }));

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                    <Wallet className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-900">Varlık Değerleme Analizi</h2>
                    <p className="text-xs text-gray-500">Araç bazlı değer kaybı ve amortisman raporu (Top 5)</p>
                </div>
            </div>

            <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-base font-bold text-gray-900">Araç Değer Karşılaştırması</h3>
                        <p className="text-xs text-gray-500">Alış Fiyatı vs Güncel Piyasa Değeri</p>
                    </div>
                </div>

                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={assetData} barGap={8}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#64748b' }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#64748b' }}
                                tickFormatter={(value) => `₺${value / 1000}k`}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                formatter={(value: any) => [`₺${Number(value).toLocaleString()}`, ""]}
                            />
                            <Legend iconType="circle" />
                            <Bar name="Alış Fiyatı" dataKey="alis" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} />
                            <Bar name="Güncel Değer" dataKey="piyasa" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
