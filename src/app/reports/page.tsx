"use client";

import React from "react";
import { TrendingUp, AlertCircle, Download, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { StatCard } from "@/components/cards/stat-card";
import { ExpensesChart } from "@/components/reports/expenses-chart";
import { FleetHealthChart } from "@/components/reports/fleet-health-chart";
import { FeatureGuard } from "@/components/auth/feature-guard";
import { FinancialAnalysis } from "@/components/reports/financial-analysis";
import { useFinancials } from "@/hooks/use-financials";

export default function ReportsPage() {
  const {
    totalFleetCost,
    totalMarketValue,
    totalDepreciation,
    avgFuelConsumption,
    costPerKm
  } = useFinancials();

  return (
    <PageContainer>
      <PageHeader
        title="Raporlar ve Maliyet Analizi"
        description="Filo giderleri, verimlilik ve varlık yönetimi analizleri"
        action={
          <Button variant="outline" className="h-10 px-4 rounded-xl border-gray-200">
            <Download className="w-4 h-4 mr-2 text-gray-400" />
            Veri Aktar (CSV)
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Toplam Filo Değeri"
          value={`₺${(totalMarketValue / 1000000).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}M`}
          icon={TrendingUp}
          trend={{ value: `-₺${(totalDepreciation / 1000).toFixed(0)}k Değer Kaybı`, isPositive: false }}
          colorScheme="indigo"
          detail="Güncel Pazar Değeri"
        />
        <StatCard
          label="KM Başına Maliyet"
          value={`₺${costPerKm.toFixed(2)}`}
          icon={Activity}
          detail="Bakım + Yakıt / Toplam KM"
          colorScheme="blue"
        />
        <StatCard
          label="Toplam İşletme Gideri"
          value={`₺${(totalFleetCost / 1000).toLocaleString('tr-TR', { maximumFractionDigits: 1 })}k`}
          icon={AlertCircle}
          trend={{ value: "Kümülatif", isPositive: false }}
          colorScheme="orange"
          detail="Tüm zamanlar"
        />
        <StatCard
          label="Ort. Yakıt Tüketimi"
          value={`${avgFuelConsumption.toFixed(1)} L/100km`}
          icon={TrendingUp}
          detail="Filo Ortalaması"
          colorScheme="purple"
        />
      </div>

      {/* Financial Analysis (Enterprise Only) */}
      <div className="mb-8">
        <FeatureGuard feature="financial_widgets">
          <FinancialAnalysis />
        </FeatureGuard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expenses Chart */}
        <div className="lg:col-span-2 space-y-4">
          <ExpensesChart />
        </div>

        {/* Fleet Health */}
        <div className="space-y-4">
          <FleetHealthChart />
        </div>
      </div>
    </PageContainer>
  );
}
