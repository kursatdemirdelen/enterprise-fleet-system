"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { User, Bell, Shield, Globe } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";
import { useFeatures, BusinessModel } from "@/context/feature-context";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { businessModel, setBusinessModel } = useFeatures();

  return (
    <PageContainer>
      <PageHeader
        title="Ayarlar"
        description="Filo yönetim sistemi tercihlerinizi yönetin"
      />

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-gray-100 p-1 rounded-lg inline-flex h-auto w-auto gap-1">
          {[
            { id: "profile", label: "Profil", icon: User },
            { id: "notifications", label: "Bildirimler", icon: Bell },
            { id: "security", label: "Güvenlik", icon: Shield },
            { id: "system", label: "System", icon: Globe },
          ].map((tab) => (
            <TabsTrigger 
              key={tab.id}
              value={tab.id} 
              className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium flex items-center gap-2"
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="card p-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Profil Bilgileri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Ad Soyad</Label>
                  <Input defaultValue="Ahmet Kürşat Demirdelen" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">E-posta</Label>
                  <Input defaultValue="ahmet@fleet.example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Rol</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Yönetici</SelectItem>
                      <SelectItem value="manager">Filo Yöneticisi</SelectItem>
                      <SelectItem value="viewer">Görüntüleyici</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Dil</Label>
                  <Select defaultValue="tr">
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tr">Türkçe</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-end">
              <Button className="rounded-md h-9 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium">
                Değişiklikleri Kaydet
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="card p-6 space-y-4">
            {[
              { title: "Bakım Uyarıları", desc: "Get notified when vehicles need maintenance" },
              { title: "Muayene Hatırlatıcıları", desc: "Daily countdown for upcoming inspections" },
              { title: "Maliyet Uyarıları", desc: "Notify when expenses exceed budget" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-900">{item.title}</Label>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <Switch defaultChecked={i < 2} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="card p-6 space-y-6">
            <div>
               <h3 className="text-base font-semibold text-gray-900 mb-4">System Configuration</h3>
               <p className="text-sm text-gray-500 mb-6">
                 Filo yönetim sisteminin çalışma modunu seçin. Bu seçim hangi modüllerin (Sürücüler, Raporlar vb.) aktif olacağını belirler.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {[
                   { 
                     id: 'rent-a-car', 
                     label: 'Rent-a-Car Mode', 
                     desc: 'Basic vehicle tracking, tailored for rental companies.',
                     features: ['Inventory', 'Maintenance']
                   },
                   { 
                     id: 'corporate', 
                     label: 'Kurumsal Filo', 
                     desc: 'Full workforce management for company fleets.',
                     features: ['Drivers', 'Fuel Analysis', 'Assignments']
                   },
                   { 
                     id: 'enterprise', 
                     label: 'Enterprise Logistics', 
                     desc: 'Advanced analytics and full audit logs.',
                     features: ['Everything in Corporate', 'Advanced Reports']
                   }
                 ].map((mode) => (
                   <div 
                    key={mode.id} 
                    onClick={() => setBusinessModel(mode.id as BusinessModel)}
                    className={cn(
                      "cursor-pointer rounded-xl border-2 p-4 transition-all hover:bg-gray-50",
                      businessModel === mode.id ? "border-primary-600 bg-primary-50/10 ring-1 ring-primary-600" : "border-gray-100 bg-white"
                    )}
                   >
                     <div className="flex items-center justify-between mb-2">
                       <span className="font-bold text-gray-900">{mode.label}</span>
                       {businessModel === mode.id && <div className="w-2.5 h-2.5 rounded-full bg-primary-600" />}
                     </div>
                     <p className="text-xs text-gray-500 mb-3 min-h-10">{mode.desc}</p>
                     <div className="flex flex-wrap gap-1">
                        {mode.features.map(f => (
                          <span key={f} className="text-[10px] font-medium px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                            {f}
                          </span>
                        ))}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
               <div className="text-yellow-600 shrink-0">
                  <Shield className="w-5 h-5" />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-yellow-800">Demo Modu Aktif</h4>
                 <p className="text-xs text-yellow-700 mt-1">
                   Mod değiştirmek kenar çubuğunu, paneli ve kullanılabilir özellikleri anında günceller. Canlı ortamda bu seçim lisans anahtarınıza bağlı olurdu.
                 </p>
               </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
