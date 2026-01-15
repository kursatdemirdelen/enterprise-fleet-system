"use client";

import { useMemo } from 'react';
import { VEHICLES_DATA, FUEL_LOGS_DATA } from '@/constants/mockData';

export function useFinancials() {
    return useMemo(() => {
        // 1. Total Fleet Value & Purchase Cost
        const totalMarketValue = VEHICLES_DATA.reduce((sum, v) => sum + v.marketValue, 0);
        const totalPurchaseCost = VEHICLES_DATA.reduce((sum, v) => sum + v.purchasePrice, 0);
        const totalDepreciation = totalPurchaseCost - totalMarketValue;

        // 2. Operational Costs (Maintenance + Fuel)
        // Note: In a real app, 'toplamMasraf' would be a sum of Maintenance Records. 
        // Here we assume v.toplamMasraf is accumulated maintenance cost.
        const totalMaintenanceCost = VEHICLES_DATA.reduce((sum, v) => sum + v.toplamMasraf, 0);

        // Sum of all fuel logs
        const totalFuelCost = FUEL_LOGS_DATA.reduce((sum, log) => sum + log.amount, 0);

        // Total Fleet Cost (Historical Maintenance + Fuel Logs)
        const totalFleetCost = totalMaintenanceCost + totalFuelCost;

        // 3. Efficiency Metrics
        // Average Fuel Consumption across fleet (excluding electric/0 consumption for accuracy if needed, 
        // but simple average is fine for high level)
        const activeVehicles = VEHICLES_DATA.filter(v => (v.avgFuelConsumption ?? 0) > 0);
        const avgFuelConsumption = activeVehicles.reduce((sum, v) => sum + (v.avgFuelConsumption || 0), 0) / (activeVehicles.length || 1);

        // Cost Per KM Calculation
        // Formula: Total Costs / Total Kilometers Driven
        // Since we don't have "Total KM Driven since record start", we'll estimate based on 'mevcutKM'.
        // This is a rough approximation. In a real system you'd sum(Trip KMs).
        const totalFleetKM = VEHICLES_DATA.reduce((sum, v) => sum + v.mevcutKM, 0);

        // To be safer/more realistic for "Cost per KM", let's use the maintenance cost / current km 
        // (assuming maintenance spans the life of vehicle)
        // For fuel, we only have recent logs, so we can't do global CPK easily.
        // Let's create a weighted "Asset efficiency" metric.

        const costPerKm = totalFleetKM > 0 ? (totalFleetCost / totalFleetKM) : 0;

        return {
            totalMarketValue,
            totalPurchaseCost,
            totalDepreciation,
            totalMaintenanceCost,
            totalFuelCost,
            totalFleetCost,
            avgFuelConsumption,
            costPerKm,
            vehicleCount: VEHICLES_DATA.length,
            currency: '₺'
        };
    }, []);
}
