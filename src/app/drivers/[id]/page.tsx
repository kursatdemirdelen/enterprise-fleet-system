"use client";

import React, { use } from "react";
import {
   DRIVERS_DATA,
   VEHICLES_DATA,
} from "@/constants/mockData";
import { notFound } from "next/navigation";
import {
   ChevronLeft,
   Mail,
   Phone,
   Star,
   Award,
   Calendar,
   ShieldCheck,
   Activity,
   MapPin,
   Clock,
   Briefcase
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { DriverVehiclePanel } from "@/components/drivers/driver-vehicle-panel";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

interface PageProps {
   params: Promise<{ id: string }>;
}

export default function DriverDetailPage({ params }: PageProps) {
   const { id } = use(params);
   const driver = DRIVERS_DATA.find((d) => d.id === id);

   if (!driver) {
      notFound();
   }

   const assignedVehicle = VEHICLES_DATA.find(v => v.id === driver.assignedVehicleId);

   const stats = [
      { label: "Toplam Mesafe", value: assignedVehicle ? "12,450 KM" : "0 KM", icon: Activity, color: "blue" },
      { label: "Sürüş Puanı", value: driver.rating, icon: Star, color: "orange" },
      { label: "Tecrübe", value: driver.experience, icon: Award, color: "purple" },
      { label: "Çalışma Süresi", value: "142 Saat", icon: Clock, color: "indigo" },
   ];

   return (
      <PageContainer>
         <div className="flex items-center gap-4 mb-2">
            <Link href="/drivers">
               <Button variant="ghost" size="sm" className="rounded-xl h-9">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Sürücü Listesine Dön
               </Button>
            </Link>
         </div>

         <PageHeader
            title={driver.name}
            description={`Profesyonel Sürücü • ${driver.experience} Tecrübe • ${driver.licenseNumber}`}
            action={
               <div className="flex gap-2">
                  <Button variant="outline" className="h-10 rounded-xl px-4 border-gray-200">
                     Profili Düzenle
                  </Button>
                  <Button variant="premium">
                     Atama Değiştir
                  </Button>
               </div>
            }
         />

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
               {/* Stats Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                     <div key={i} className="card p-4 flex flex-col items-center text-center space-y-2">
                        <div className={cn(
                           "w-10 h-10 rounded-xl flex items-center justify-center mb-2",
                           stat.color === 'blue' ? "bg-blue-50 text-blue-600" :
                              stat.color === 'orange' ? "bg-amber-50 text-amber-600" :
                                 stat.color === 'purple' ? "bg-purple-50 text-purple-600" :
                                    "bg-indigo-50 text-indigo-600"
                        )}>
                           <stat.icon className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
                        <p className="text-xl font-black text-gray-900 leading-none">{stat.value}</p>
                     </div>
                  ))}
               </div>

               {/* Experience & Skills */}
               <div className="card p-8 space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center">
                        <Briefcase className="w-6 h-6" />
                     </div>
                     <div>
                        <h2 className="text-lg font-black text-gray-900">Sürücü Karnesi</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Performans ve Yetkinlik Analizi</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Temel Bilgiler</h3>
                        <div className="space-y-4">
                           {[
                              { label: "E-Posta", value: driver.email, icon: Mail },
                              { label: "Telefon", value: driver.phone, icon: Phone },
                              { label: "Ehliyet Sınıfı", value: "E, D, G", icon: ShieldCheck },
                              { label: "Konum", value: "Gebze / Kocaeli", icon: MapPin },
                           ].map((item, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                    <item.icon className="w-4 h-4" />
                                 </div>
                                 <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase leading-none mb-1">{item.label}</p>
                                    <p className="text-sm font-bold text-gray-900 leading-none">{item.value}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-6">
                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">Performans Skorları</h3>
                        <div className="space-y-5">
                           {[
                              { label: "Güvenli Sürüş", value: 94, color: "bg-success-500" },
                              { label: "Yakıt Verimliliği", value: 88, color: "bg-blue-500" },
                              { label: "Zamanında Teslimat", value: 98, color: "bg-purple-500" },
                           ].map((skill, i) => (
                              <div key={i} className="space-y-2">
                                 <div className="flex justify-between items-end">
                                    <span className="text-xs font-bold text-gray-700">{skill.label}</span>
                                    <span className="text-xs font-black text-gray-900">{skill.value}%</span>
                                 </div>
                                 <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className={cn("h-full rounded-full", skill.color)} style={{ width: `${skill.value}%` }} />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Activity Log */}
               <div className="space-y-4">
                  <h2 className="text-lg font-black text-gray-900">Son Hareketler</h2>
                  <div className="card divide-y divide-gray-100 overflow-hidden">
                     {[
                        { title: "Görev Tamamlandı", desc: "Gebze - Ankara Seferi", date: "Bugün, 14:20", type: "success" },
                        { title: "Araba Ataması", desc: "34 ABC 123 plakalı araç atandı", date: "Dün, 09:15", type: "primary" },
                        { title: "Yıllık İzin", desc: "3 Günlük ücretli izin başlangıcı", date: "12 Şub 2025", type: "warning" },
                     ].map((log, i) => (
                        <div key={i} className="p-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer group">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-white transition-colors">
                                 <Calendar className="w-4 h-4" />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-gray-900">{log.title}</p>
                                 <p className="text-xs text-gray-500">{log.desc}</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <StatusBadge variant={log.type as "success" | "primary" | "warning" | "default" | "danger" | "outline" | "premium" | undefined} className="mb-1 text-[9px]">{log.type.toUpperCase()}</StatusBadge>
                              <p className="text-[10px] font-black text-gray-300 uppercase tracking-tighter">{log.date}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
               <DriverVehiclePanel vehicle={assignedVehicle} />

               <div className="card p-6 space-y-4">
                  <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Sertifika & Belgeler</h3>
                  <div className="space-y-2">
                     {[
                        { label: "Psikoteknik Belgesi", status: "Geçerli" },
                        { label: "SRC 4 Belgesi", status: "Geçerli" },
                        { label: "Adli Sicil Kaydı", status: "Güncel" },
                     ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                           <span className="text-xs font-bold text-gray-600">{doc.label}</span>
                           <StatusBadge variant="success" className="h-5 px-1.5 text-[9px]">{doc.status}</StatusBadge>
                        </div>
                     ))}
                  </div>
                  <Button variant="outline" className="w-full h-10 rounded-xl text-[10px] font-black uppercase border-gray-200 mt-2">Tüm Belgeleri Gör</Button>
               </div>


            </div>
         </div>
      </PageContainer>
   );
}
