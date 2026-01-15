"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Users,
  UserCheck,
  UserX,
  Clock
} from "lucide-react";
import { DRIVERS_DATA } from "@/constants/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { DriverCard } from "@/components/cards/driver-card";
import { StatCard } from "@/components/cards/stat-card";

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDrivers = DRIVERS_DATA.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.licenseNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: "Toplam Sürücü", value: DRIVERS_DATA.length, icon: Users, color: "blue" },
    { label: "Görevde", value: DRIVERS_DATA.filter(d => d.status === 'on_trip').length, icon: UserCheck, color: "green" },
    { label: "Müsait", value: DRIVERS_DATA.filter(d => d.status === 'available').length, icon: Clock, color: "indigo" },
    { label: "İzinli", value: DRIVERS_DATA.filter(d => d.status === 'off_duty').length, icon: UserX, color: "purple" },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Sürücü Yönetimi"
        description="Filo sürücülerinin durumu, performans takibi ve atama yönetimi"
        action={
          <Link href="/drivers/new">
            <Button variant="premium">
              <Plus className="w-4 h-4 mr-2" />
              Yeni Sürücü Ekle
            </Button>
          </Link>
        }
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            colorScheme={stat.color as any}
            className="flex-1"
          />
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
        <div className="relative flex-1 max-w-lg group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
          <Input
            placeholder="İsim veya ehliyet no ile ara..."
            className="pl-11 h-11 bg-white border-gray-200 focus:border-primary-300 focus:ring-primary-100/50 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Button variant="outline" className="h-11 px-4 rounded-xl border-gray-200">
          <Filter className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm font-bold text-gray-700">Filtrele</span>
        </Button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {filteredDrivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}

        {/* Empty State */}
        {filteredDrivers.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center card bg-gray-50/30 border-dashed border-2">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Sürücü Bulunamadı</h3>
            <p className="text-sm text-gray-500 mt-1">Arama kriterlerinizi değiştirmeyi deneyin.</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
