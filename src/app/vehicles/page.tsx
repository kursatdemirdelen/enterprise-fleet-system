"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  LayoutGrid, 
  List,
  Car,
  Activity,
  AlertTriangle,
  History
} from "lucide-react";
import Link from "next/link";

import { VEHICLES_DATA } from "@/constants/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { VehicleCard } from "@/components/cards/vehicle-card";
import { StatCard } from "@/components/cards/stat-card";
import { cn } from "@/lib/utils";

export default function VehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVehicles = VEHICLES_DATA.filter(v => 
    v.plaka.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.marka.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: "Toplam Filo", value: VEHICLES_DATA.length, icon: Car, color: "blue" },
    { label: "Aktif Kullanım", value: "22", icon: Activity, color: "indigo" },
    { label: "Bakım Bekleyen", value: "2", icon: AlertTriangle, color: "orange" },
    { label: "Yıllık Muayene", value: "1", icon: History, color: "purple" },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Araç Listesi"
        description="Filodaki tüm araçların detaylı envanter ve durum yönetimi"
        action={
          <Link href="/vehicles/new">
            <Button variant="premium">
              <Plus className="w-4 h-4 mr-2" />
              Yeni Araç Kaydet
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
            placeholder="Plaka, marka veya model ara..."
            className="pl-11 h-11 bg-white border-gray-200 focus:border-primary-300 focus:ring-primary-100/50 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
            <Button 
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-8 w-8 p-0 rounded-lg"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="h-8 w-8 p-0 rounded-lg"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="outline" className="h-11 px-4 rounded-xl border-gray-200">
            <Filter className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm font-bold text-gray-700">Filtrele</span>
          </Button>
        </div>
      </div>

      {/* Grid Content */}
      <div className={cn(
        "grid gap-6 transition-all duration-300",
        viewMode === 'grid' 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" 
          : "grid-cols-1"
      )}>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard 
            key={vehicle.id} 
            vehicle={vehicle} 
            variant={viewMode === 'list' ? 'compact' : 'default'}
          />
        ))}
        
        {/* Empty State / Add Card */}
        {filteredVehicles.length === 0 && (
           <div className="col-span-full py-12 flex flex-col items-center justify-center card bg-gray-50/30 border-dashed border-2">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                 <Search className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Araç Bulunamadı</h3>
              <p className="text-sm text-gray-500 mt-1">Arama kriterlerinizi değiştirmeyi deneyin.</p>
           </div>
        )}

        <Link href="/vehicles/new" className="block group h-full">
          <div className="h-full min-h-[280px] border-2 border-dashed border-gray-200 bg-white/50 rounded-2xl flex flex-col items-center justify-center p-8 transition-all hover:border-primary-500 hover:bg-primary-50/30 hover:shadow-lg group-active:scale-[0.98]">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all group-hover:rotate-6 group-hover:scale-110 shadow-sm">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Yeni Araç Ekle</h3>
            <p className="text-xs text-gray-500 text-center max-w-[200px] font-medium leading-relaxed">
              Filoya yeni bir araç kaydederek takibini başlatın
            </p>
          </div>
        </Link>
      </div>
    </PageContainer>
  );
}
