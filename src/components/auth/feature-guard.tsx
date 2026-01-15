"use client";

import React from "react";
import { Feature, useFeatures } from "@/context/feature-context";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link"; // Assuming we might want to link to upgrade page

interface FeatureGuardProps {
  feature: Feature;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showUpgradeBanner?: boolean;
}

export function FeatureGuard({ 
  feature, 
  children, 
  fallback = null, 
  showUpgradeBanner = false 
}: FeatureGuardProps) {
  const { hasFeature } = useFeatures();

  if (hasFeature(feature)) {
    return <>{children}</>;
  }

  if (showUpgradeBanner) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 text-center">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
           <Lock className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">Bu Özellik Kilitli</h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto mb-4">
          Bu özelliği kullanmak için lütfen paketinizi yükseltin.
        </p>
        <Link href="/settings">
           <Button variant="premium" size="sm">Paketleri İncele</Button>
        </Link>
      </div>
    );
  }

  return <>{fallback}</>;
}
