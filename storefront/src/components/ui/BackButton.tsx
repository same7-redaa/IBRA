"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface BackButtonProps {
  label?: string;
  fallbackHref?: string;
  className?: string;
}

export default function BackButton({
  label = "الـعـــودة",
  fallbackHref = "/products",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-[#f59e0b] text-gray-300 hover:text-[#f59e0b] text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm group select-none ${className}`}
    >
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#f59e0b]" />
      <span>{label}</span>
    </button>
  );
}
