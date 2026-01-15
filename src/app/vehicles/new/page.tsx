"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Check,
  Upload,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { PageHeader } from "@/components/layout/page-header";
import { PageContainer } from "@/components/layout/page-container";

export default function NewVehiclePage() {
  return (
    <PageContainer>
      <Link href="/vehicles" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Vehicles
      </Link>

      <PageHeader
        title="Add New Vehicle"
        description="Register a new vehicle to your fleet management system"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Vehicle Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">License Plate</Label>
                  <Input placeholder="e.g. 34 ABC 123" className="font-mono" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Manufacturer</Label>
                  <Select>
                    <SelectTrigger className="h-9">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="tesla">Tesla</SelectItem>
                      <SelectItem value="volvo">Volvo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Model</Label>
                  <Input placeholder="e.g. 320i" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Year</Label>
                  <Input type="number" placeholder="2024" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Mileage & Maintenance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Current Mileage</Label>
                  <Input type="number" placeholder="0" suffix="km" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Last Service Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Last Service Mileage</Label>
                  <Input type="number" placeholder="0" suffix="km" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-gray-700">Next Inspection Date</Label>
                  <Input type="date" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
              <Link href="/vehicles">
                <Button variant="outline" className="rounded-md h-9 px-4 text-sm font-medium">
                  Cancel
                </Button>
              </Link>
              <Button className="rounded-md h-9 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium">
                <Check className="w-4 h-4 mr-2" />
                Add Vehicle
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="card p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-success-50 flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">System Ready</h3>
                <p className="text-xs text-gray-600">
                  All systems operational for new vehicle registration
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6 space-y-4">
            <div className="flex items-center justify-center flex-col text-center py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Upload className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Upload Photos</h4>
              <p className="text-xs text-gray-500 max-w-[200px]">
                Add vehicle photos and documents
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
