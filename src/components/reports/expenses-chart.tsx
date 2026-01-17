"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { MONTHLY_EXPENSES } from "@/constants/mockData";

export function ExpensesChart() {
  return (
    <div className="card p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-none">
              Maliyet Dağılımı
            </h2>
            <p className="text-xs text-gray-400 mt-1 font-medium">
              Aylık toplam bakım ve yakıt gideri
            </p>
          </div>
        </div>
        <StatusBadge variant="outline">2025 Analizi</StatusBadge>
      </div>

      <div className="h-87.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MONTHLY_EXPENSES}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 600 }}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
            />
            <Bar
              dataKey="amount"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
