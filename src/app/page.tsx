"use client";

import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { FeatureGuard } from "@/components/auth/feature-guard";
import { FinancialStats } from "@/components/dashboard/financial-stats";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { CostChart } from "@/components/dashboard/cost-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { CriticalAlerts } from "@/components/dashboard/critical-alerts";
import { FleetSummary } from "@/components/dashboard/fleet-summary";

export default function Home() {
  return (
    <PageContainer>
      <PageHeader
        title="Gübretaş Filo"
        description="Filo operasyonları ve araç durum özeti"
        action={
          <Link href="/vehicles/new">
            <Button variant="premium">
              <Plus className="w-4 h-4 mr-2" />
              Yeni Araç Ekle
            </Button>
          </Link>
        }
      />

      {/* Stats Quick View */}
      <DashboardStats />

      <FeatureGuard feature="financial_widgets">
        <FinancialStats />
      </FeatureGuard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <CostChart />
          <RecentActivity />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <CriticalAlerts />
          <FleetSummary />
        </div>
      </div>
    </PageContainer>
  );
}
