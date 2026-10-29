"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarUserProfileProps {
  isCollapsed: boolean;
}

const textFadeVariants = {
  hidden: { opacity: 0, x: -10, display: "none" },
  visible: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: { duration: 0.2 },
  },
};

export const SidebarUserProfile = ({
  isCollapsed,
}: SidebarUserProfileProps) => (
  <div className="pt-4 mt-auto">
    <div
      className={cn(
        "flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-100",
        isCollapsed && "justify-center"
      )}
    >
      <div className="relative shrink-0">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <UserCircle className="w-9 h-9 text-gray-400 translate-y-0.5" />
          </div>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm" />
      </div>

      <AnimatePresence mode="wait">
        {!isCollapsed && (
          <motion.div
            variants={textFadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col flex-1 min-w-0"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900 truncate tracking-tight">
                Ahmet K. Demirdelen
              </span>
              <Settings2 className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Filo Yöneticisi
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);
