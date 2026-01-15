"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
  isCollapsed: boolean;
  colorClass: string;
}

const textFadeVariants = {
  hidden: { opacity: 0, x: -10, display: "none" },
  visible: { 
    opacity: 1, 
    x: 0, 
    display: "block",
    transition: { duration: 0.2 }
  },
};

export const SidebarNavItem = ({ 
  label, 
  href, 
  icon: Icon, 
  isActive, 
  isCollapsed,
  colorClass
}: SidebarNavItemProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative group mb-1",
      isActive 
        ? "bg-white text-gray-900 shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100" 
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
    )}
  >
    {isActive && (
      <motion.div 
        layoutId="active-indicator"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-600 rounded-r-full" 
      />
    )}
    <Icon 
      className={cn(
        "w-5 h-5 shrink-0 transition-all duration-300",
        isActive ? colorClass : "text-gray-400 group-hover:scale-110",
        isActive && "scale-110"
      )} 
    />
    <AnimatePresence mode="wait">
      {!isCollapsed && (
        <motion.span 
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="whitespace-nowrap font-semibold"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
    
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-[11px] font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 whitespace-nowrap shadow-2xl border border-gray-800 translate-x-1 group-hover:translate-x-0">
        {label}
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    )}
  </Link>
);
