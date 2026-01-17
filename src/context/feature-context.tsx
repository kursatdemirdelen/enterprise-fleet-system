"use client";

import React, { createContext, useContext, useState } from "react";

// Define the available business models (Plans)
export type BusinessModel = "rent-a-car" | "corporate" | "enterprise";

// Define granular features
export type Feature =
  | "drivers" // Driver management module
  | "fuel_tracking" // Fuel logs and analysis
  | "maintenance_pro" // Advanced maintenance calendar
  | "advanced_reports" // Detailed analytics
  | "inventory" // Detailed vehicle inventory management
  | "financial_widgets"; // Enterprise financial dashboards

interface FeatureContextType {
  businessModel: BusinessModel;
  features: Feature[];
  setBusinessModel: (model: BusinessModel) => void;
  hasFeature: (feature: Feature) => boolean;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

// Define which features are available in which plan
const PLAN_FEATURES: Record<BusinessModel, Feature[]> = {
  "rent-a-car": ["inventory", "maintenance_pro"], // Basic fleet tracking
  corporate: ["inventory", "maintenance_pro", "drivers", "fuel_tracking"], // + Drivers & Fuel
  enterprise: [
    "inventory",
    "maintenance_pro",
    "drivers",
    "fuel_tracking",
    "advanced_reports",
    "financial_widgets",
  ], // + Everything
};

export function FeatureProvider({ children }: { children: React.ReactNode }) {
  const [businessModel, setBusinessModelState] =
    useState<BusinessModel>("corporate");

  // Persist plan selection (client-side only)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedModel = localStorage.getItem(
        "cartrack_business_model"
      ) as BusinessModel;
      if (savedModel && PLAN_FEATURES[savedModel]) {
        setBusinessModelState(savedModel);
      }
    }
  }, []);

  const setBusinessModel = (model: BusinessModel) => {
    setBusinessModelState(model);
    localStorage.setItem("cartrack_business_model", model);
    // Force reload to ensure all components re-render correctly with new context
    window.location.reload();
  };

  const hasFeature = (feature: Feature) => {
    return PLAN_FEATURES[businessModel].includes(feature);
  };

  return (
    <FeatureContext.Provider
      value={{
        businessModel,
        features: PLAN_FEATURES[businessModel],
        setBusinessModel,
        hasFeature,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error("useFeatures must be used within a FeatureProvider");
  }
  return context;
}
