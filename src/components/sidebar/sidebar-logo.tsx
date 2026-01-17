"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Car } from "lucide-react";

interface SidebarLogoProps {
  isCollapsed: boolean;
}

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const SidebarLogo = ({ isCollapsed }: SidebarLogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 px-2 mb-8 mt-2 select-none"
    >
      {/* Logo Icon */}
      <motion.div
        layout
        className="w-9 h-9 rounded-lg bg-linear-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-sm"
        animate={{ scale: isCollapsed ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Car className="w-5 h-5" />
      </motion.div>

      {/* Logo Text */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            key="logo-text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col overflow-hidden whitespace-nowrap"
          >
            <span className="font-extrabold text-xl text-gray-900 tracking-tight leading-tight">
              Enterprise
            </span>
            <span className="text-[9px] uppercase font-black text-primary-600 tracking-[0.2em] ml-1 -mt-1">
              Fleet System
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};
