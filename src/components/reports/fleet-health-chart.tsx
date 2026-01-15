"use client";

import React from "react";
import { 
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer 
} from "recharts";
import { FileBarChart } from "lucide-react";
import { VEHICLES_DATA } from "@/constants/mockData";

export function FleetHealthChart() {
  const statusData = [
    { name: "Operasyonel", value: VEHICLES_DATA.filter(v => (v.mevcutKM - v.sonBakimKM) < 8000).length, color: "#22c55e" },
    { name: "Bakım Yaklaştı", value: VEHICLES_DATA.filter(v => (v.mevcutKM - v.sonBakimKM) >= 8000 && (v.mevcutKM - v.sonBakimKM) < 9500).length, color: "#f59e0b" },
    { name: "Hemen Servis", value: VEHICLES_DATA.filter(v => (v.mevcutKM - v.sonBakimKM) >= 9500).length, color: "#ef4444" },
  ];

  return (
    <div className="card p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
         <h2 className="text-base font-bold text-gray-900">Filo Sağlığı</h2>
         <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
           <FileBarChart className="w-4 h-4" />
         </div>
      </div>

      <div className="h-[220px] w-full relative mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={6}
              dataKey="value"
              strokeWidth={0}
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mb-1">
           <span className="text-4xl font-black text-gray-900 font-mono tracking-tighter leading-none">{VEHICLES_DATA.length}</span>
           <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mt-1">TOPLAM</span>
        </div>
      </div>

      <div className="space-y-3 mt-auto">
         {statusData.map((s, i) => (
           <div key={i} className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-200 transition-all group cursor-pointer">
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: s.color }} />
                 <span className="text-xs font-bold text-gray-600 group-hover:text-gray-900 transition-colors uppercase tracking-wider">{s.name}</span>
              </div>
              <span className="text-sm font-black text-gray-900 font-mono">{s.value}</span>
           </div>
         ))}
      </div>
    </div>
  );
}
