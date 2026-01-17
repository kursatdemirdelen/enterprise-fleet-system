"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Car,
  LayoutDashboard,
  Calendar,
  Settings,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarLogo } from "./sidebar/sidebar-logo";
import { SidebarNavItem } from "./sidebar/sidebar-nav-item";
import { SidebarUserProfile } from "./sidebar/sidebar-user-profile";
import { useFeatures } from "@/context/feature-context";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    colorClass: "text-blue-600",
  },
  {
    label: "Vehicles",
    icon: Car,
    href: "/vehicles",
    colorClass: "text-indigo-600",
  },
  {
    label: "Drivers",
    icon: Users,
    href: "/drivers",
    colorClass: "text-emerald-600",
  },
  {
    label: "Maintenance",
    icon: Calendar,
    href: "/calendar",
    colorClass: "text-amber-600",
  },
  {
    label: "Reports",
    icon: BarChart3,
    href: "/reports",
    colorClass: "text-purple-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    colorClass: "text-gray-600",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { hasFeature } = useFeatures();

  // Responsive logic: Collapse on small screens (tablet)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setIsCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        setIsCollapsed(false);
      }

      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile Top Bar - Only visible on small screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 z-55 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white">
            <Car className="w-5 h-5" />
          </div>
          <span className="font-bold text-gray-900 tracking-tight">
            Enterprise Fleet
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-60"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={isMobileOpen ? { x: 0 } : { x: 0 }}
        className={cn(
          "fixed md:relative shrink-0 border-r border-gray-100 bg-white flex flex-col z-65 shadow-[1px_0_0_0_rgba(0,0,0,0.02)] h-screen transition-transform duration-300",
          !isMobileOpen && "-translate-x-full md:translate-x-0"
        )}
        style={{
          width: isMobileOpen ? 280 : isCollapsed ? 80 : 256,
        }}
      >
        {/* Collapse Toggle Button - Hidden on mobile */}
        <button
          onClick={toggleSidebar}
          className="hidden md:flex absolute -right-3 top-24 w-6 h-6 rounded-full bg-white border border-gray-100 items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-200 shadow-sm transition-all z-70 hover:scale-110 active:scale-95"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>

        <div className="p-4 flex flex-col h-full overflow-hidden">
          {/* Logo Section */}
          <div className="px-1 flex items-center justify-between mb-2">
            <SidebarLogo isCollapsed={isCollapsed && !isMobileOpen} />
            {isMobileOpen && (
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 mt-4">
            {navItems.map((item) => {
              // Feature Flag Logic
              if (item.label === "Drivers" && !hasFeature("drivers"))
                return null;
              if (item.label === "Reports" && !hasFeature("advanced_reports"))
                return null;

              return (
                <SidebarNavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  colorClass={item.colorClass}
                  isActive={pathname === item.href}
                  isCollapsed={isCollapsed && !isMobileOpen}
                />
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-1">
            <SidebarUserProfile isCollapsed={isCollapsed && !isMobileOpen} />
          </div>
        </div>
      </motion.aside>
    </>
  );
}
