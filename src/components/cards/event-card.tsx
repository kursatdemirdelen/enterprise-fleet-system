import React from 'react';
import Link from 'next/link';
import { Car, Wrench, FileText, ChevronRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Vehicle } from '@/constants/mockData';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface EventCardProps {
  date: Date;
  type: 'inspection' | 'maintenance';
  title: string;
  vehicle: Vehicle;
  variant?: 'default' | 'compact';
  className?: string;
}

export function EventCard({ date, type, title, vehicle, variant = 'default', className }: EventCardProps) {
  const Icon = type === 'inspection' ? FileText : Wrench;
  const colorClass = type === 'inspection' ? 'danger' : 'primary';
  
  if (variant === 'compact') {
    return (
      <Link href={`/vehicles/${vehicle.id}`} className={cn("block group", className)}>
        <div className="card card-hover p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={cn(
              "w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0",
              type === 'inspection' ? "bg-danger-50 text-danger-600" : "bg-primary-50 text-primary-600"
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 font-mono truncate">{vehicle.plaka}</h4>
              <p className="text-xs text-gray-500 truncate">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-500">Date</p>
              <p className="text-sm font-medium text-gray-900">{format(date, "d MMM", { locale: tr })}</p>
            </div>
            <span className={cn(
              "px-2 py-1 rounded text-xs font-medium",
              type === 'inspection' ? "bg-danger-50 text-danger-700" : "bg-primary-50 text-primary-700"
            )}>
              {type === 'inspection' ? 'Legal' : 'Service'}
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/vehicles/${vehicle.id}`} className={cn("block group", className)}>
      <div className="card card-hover p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            type === 'inspection' ? "bg-danger-50 text-danger-600" : "bg-primary-50 text-primary-600"
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="font-mono">{vehicle.plaka}</span>
              <span>•</span>
              <span>{vehicle.marka} {vehicle.model}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className={cn(
              "px-3 py-1 rounded-md text-xs font-medium",
              type === 'inspection' ? "bg-danger-50 text-danger-700" : "bg-primary-50 text-primary-700"
            )}>
              {type === 'inspection' ? 'Inspection' : 'Maintenance'}
            </span>
          </div>
          <div className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </Link>
  );
}
