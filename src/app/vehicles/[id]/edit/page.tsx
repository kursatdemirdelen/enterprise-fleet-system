"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Upload,
  Trash2,
  Info,
  Save,
  ChevronLeft,
  Activity
} from "lucide-react";
import Link from "next/link";

import { VEHICLES_DATA, Vehicle } from "@/constants/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { StatusBadge } from "@/components/ui/status-badge";

export default function EditVehiclePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const vehicle = VEHICLES_DATA.find(v => v.id === id);

  if (!vehicle) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-2xl font-bold">Araç Bulunamadı</h1>
          <Link href="/vehicles" className="mt-4">
            <Button variant="outline">Geri Dön</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const handleSave = () => {
    // Mock save
    alert("Değişiklikler kaydedildi (Simüle edildi)");
    router.push(`/vehicles/${id}`);
  };

  const handleDelete = () => {
    if (confirm("Bu aracı filodan silmek istediğinize emin misiniz?")) {
      alert("Araç silindi (Simüle edildi)");
      router.push("/vehicles");
    }
  };

  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-2">
        <Link href={`/vehicles/${id}`}>
          <Button variant="ghost" size="sm" className="rounded-xl h-9">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Detaylara Dön
          </Button>
        </Link>
        <div className="h-4 w-px bg-gray-200" />
        <StatusBadge variant="outline" className="h-6">ID: {vehicle.id}</StatusBadge>
      </div>

      <PageHeader
        title={`Düzenle: ${vehicle.plaka}`}
        description="Araç bilgilerini ve teknik detayları güncelleyin"
        action={
          <div className="flex items-center gap-2">
            <Button variant="destructive" size="sm" onClick={handleDelete} className="rounded-xl">
              <Trash2 className="w-4 h-4 mr-2" />
              Aracı Sil
            </Button>
            <Button variant="premium" size="sm" onClick={handleSave} className="rounded-xl">
              <Save className="w-4 h-4 mr-2" />
              Değişiklikleri Kaydet
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-8 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-6 text-gray-900">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Info className="w-4 h-4 text-primary-600" />
                </div>
                <h3 className="text-base font-bold">Temel Bilgiler</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Plaka</Label>
                  <Input defaultValue={vehicle.plaka} className="font-mono h-11 transition-all focus:ring-4 focus:ring-primary-100/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Marka</Label>
                  <Select defaultValue={vehicle.marka.toLowerCase()}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Model</Label>
                  <Input defaultValue={vehicle.model} className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Yıl</Label>
                  <Input type="number" defaultValue="2024" className="h-11" />
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-gray-900">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-base font-bold">Kilometre ve Bakım</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mevcut Kilometre</Label>
                  <Input type="number" defaultValue={vehicle.mevcutKM} suffix="km" className="h-11 font-mono" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Son Servis Tarihi</Label>
                  <Input type="date" defaultValue="2025-01-10" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Son Servis Kilometresi</Label>
                  <Input type="number" defaultValue={vehicle.sonBakimKM} suffix="km" className="h-11 font-mono" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gelecek Muayene Tarihi</Label>
                  <Input type="date" defaultValue={vehicle.muayeneTarihi} className="h-11" />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Assets & Meta */}
        <div className="space-y-6">
          <div className="card p-6">
            <h4 className="text-sm font-bold text-gray-900 mb-4">Araç Görselleri</h4>
            <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-6 hover:border-primary-500 hover:bg-primary-50/10 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-gray-900">Uğraştırıcı Yükle</p>
              <p className="text-[10px] text-gray-400 mt-1">PNG, JPG veya PDF (Max 5MB)</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
