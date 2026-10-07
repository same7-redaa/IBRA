"use client";

import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

interface ToastProps {
  productName?: string;
  onClose: () => void;
  duration?: number;
}

export default function ToastNotification({
  productName,
  onClose,
  duration = 3500,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = React.useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  return (
    <div
      dir="rtl"
      className={`fixed bottom-5 right-5 z-[99999] flex items-center gap-3 w-auto min-w-[280px] max-w-[330px] h-[58px] sm:h-[62px] px-3.5 py-2 rounded-[5px] bg-[#12141a]/95 backdrop-blur-md border border-[#f59e0b]/35 shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-200 ease-out select-none ${
        isExiting
          ? "translate-x-full opacity-0 pointer-events-none"
          : "translate-x-0 opacity-100 animate-slide-in-right"
      }`}
    >
      {/* Clean Glowing Checkmark Icon */}
      <div className="w-7 h-7 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/40 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.35)]">
        <Check className="w-4 h-4 text-[#f59e0b] stroke-[3]" />
      </div>

      {/* Message Text with Kashida Tatweel */}
      <div className="flex flex-col justify-center flex-grow text-right overflow-hidden pr-0.5">
        <p className="text-[#f59e0b] font-black text-xs sm:text-sm leading-tight tracking-wide truncate">
          تـــمَّـــت الإضـــافـــة إلـــى الـسَّـــلَّـــة
        </p>
        <p className="text-gray-300 font-medium text-[10px] sm:text-[11px] leading-snug truncate mt-0.5">
          {productName ? `${productName}` : "أصـبـح الـمـنـتـج فـي سـلَّـتـك الآن بـنـجـاح"}
        </p>
      </div>

      {/* Close Cross Button */}
      <button
        onClick={handleClose}
        aria-label="إغلاق الإشعار"
        className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800/60 shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Animated Bottom Progress Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b] shadow-[0_0_6px_#f59e0b] animate-toast-progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
