"use client";

import React from "react";
import { Fuel, TrendingDown } from "lucide-react";
import { FuelLog } from "@/constants/mockData";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface FuelAnalysisProps {
  logs: FuelLog[];
  avgConsumption?: number;
}

export function FuelAnalysis({ logs, avgConsumption = 0 }: FuelAnalysisProps) {
  // Mock chart data based on logs
  const fuelData =
    logs.length > 0
      ? logs.map((log) => ({
          day: log.date.split("-").slice(1).join("/"),
          l: log.liters,
        }))
      : [{ day: "N/A", l: 0 }];

  return (
    <div className="card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Fuel className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-black text-gray-900">Yakıt Analizi</h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Tüketim ve Maliyet Özeti
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-gray-900 font-mono leading-none">
            {avgConsumption || "0.0"}
          </p>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
            L/100KM ORTALAMA
          </p>
        </div>
      </div>

      <div className="h-50 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={fuelData}>
            <defs>
              <linearGradient id="colorFuel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              dy={10}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="l"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorFuel)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
            Son Akaryakıt Alımları
          </h3>
          <button className="text-[10px] font-black text-primary-600 uppercase hover:underline">
            Tüm Kayıtlar
          </button>
        </div>
        {logs.length > 0 ? (
          logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-emerald-500 transition-colors shadow-sm">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {log.station}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">
                    {log.date} • {log.km.toLocaleString()} KM
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-gray-900">
                  ₺{log.amount.toLocaleString()}
                </p>
                <p className="text-[10px] font-bold text-emerald-600 font-mono">
                  {log.liters} LT
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xs font-bold text-gray-400 text-center py-6 bg-gray-50 rounded-2xl border border-dashed">
            Henüz yakıt kaydı girilmemiş.
          </p>
        )}
      </div>
    </div>
  );
}
