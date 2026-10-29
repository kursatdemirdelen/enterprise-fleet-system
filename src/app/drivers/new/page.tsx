"use client";

import React from "react";
import {
  ChevronLeft,
  UserPlus,
  Shield,
  CreditCard,
  FileText,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NewDriverPage() {
  return (
    <PageContainer>
      <div className="flex items-center gap-4 mb-2">
        <Link href="/drivers">
          <Button variant="ghost" size="sm" className="rounded-xl h-9">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Geri Dön
          </Button>
        </Link>
      </div>

      <PageHeader
        title="Yeni Sürücü Kaydı"
        description="Filo operasyonlarına yeni bir personel ekleyin ve yetkilendirmeleri tanımlayın."
      />

      <div className="max-w-4xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-8 space-y-8">
              <div>
                <h3 className="text-base font-black text-gray-900 mb-6 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-primary-600" />
                  Kişisel Bilgiler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      Ad Soyad
                    </Label>
                    <Input
                      placeholder="Örn: Ahmet Yılmaz"
                      className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      TC Kimlik No
                    </Label>
                    <Input
                      placeholder="11 haneli numara"
                      className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      E-Posta Adresi
                    </Label>
                    <Input
                      type="email"
                      placeholder="ornek@fleet.example.com"
                      className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      Telefon Numarası
                    </Label>
                    <Input
                      placeholder="+90 5xx"
                      className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <h3 className="text-base font-black text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Ehliyet ve Yetkiler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      Ehliyet Sınıfı
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none">
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                        <SelectItem value="b">B Sınıfı</SelectItem>
                        <SelectItem value="c">C Sınıfı</SelectItem>
                        <SelectItem value="d">D Sınıfı</SelectItem>
                        <SelectItem value="e">E Sınıfı</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      Ehliyet No
                    </Label>
                    <Input
                      placeholder="TRxxxxxx"
                      className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase text-gray-400">
                      Atanacak Bölge / Hub
                    </Label>
                    <Select defaultValue="gebze">
                      <SelectTrigger className="h-11 rounded-xl border-gray-100 bg-gray-50/30 focus:bg-white transition-all shadow-none">
                        <SelectValue placeholder="Bölge Seçiniz" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                        <SelectItem value="gebze">
                          Gebze Lojistik Merkezi
                        </SelectItem>
                        <SelectItem value="ankara">
                          Ankara Bölge Müdürlüğü
                        </SelectItem>
                        <SelectItem value="izmir">İzmir Liman Hub</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4">
              <Link href="/drivers">
                <Button
                  variant="ghost"
                  className="h-12 px-8 rounded-xl text-sm font-bold"
                >
                  Vazgeç
                </Button>
              </Link>
              <Button
                variant="premium"
                className="h-12 px-10 rounded-xl text-sm font-bold shadow-lg shadow-primary-200"
              >
                Sürücüyü Kaydet
              </Button>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-6">
            <div className="card p-6 bg-gray-900 text-white border-none shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-primary-400" />
              </div>
              <h4 className="text-sm font-black mb-2 uppercase tracking-widest">
                Önemli Not
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Yeni sürücü kaydı oluşturulduğunda sisteme otomatik olarak
                &quot;Aktif Değil&quot; durumunda eklenir. Sürücüye araç ataması
                yapıldığında durumu otomatik olarak güncellenecektir.
              </p>
            </div>

            <div className="card p-6 space-y-4">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none mb-2">
                Gerekli Belgeler
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Ehliyet Fotokopisi", icon: CreditCard },
                  { label: "Adli Sicil Kaydı", icon: FileText },
                  { label: "Psikoteknik Belgesi", icon: Shield },
                  { label: "Sağlık Raporu", icon: FileText },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 bg-gray-50/30"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-bold text-gray-600">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 text-center font-medium mt-4 italic">
                Belgeleri kayıt sonrası sürücü profilinden yükleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
