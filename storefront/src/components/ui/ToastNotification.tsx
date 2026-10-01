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

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  return (
    <div
      dir="rtl"
      className={`fixed bottom-6 right-6 z-[99999] flex items-center gap-3.5 w-[330px] sm:w-[360px] h-[86px] px-4 py-3 rounded-[5px] bg-[#14161f] border border-[#b0fb30]/40 shadow-[0_12px_35px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300 ease-out select-none ${
        isExiting
          ? "translate-x-full opacity-0 pointer-events-none"
          : "translate-x-0 opacity-100 animate-slide-in-right"
      }`}
    >
      {/* Background Decorative Neon Wave */}
      <svg
        className="absolute -right-8 top-2 w-24 h-24 rotate-90 fill-[#b0fb30]/15 pointer-events-none"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
          fillOpacity={1}
        />
      </svg>

      {/* Glowing Checkmark Icon */}
      <div className="relative z-10 w-9 h-9 rounded-full bg-[#b0fb30]/20 border border-[#b0fb30]/50 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(176,251,48,0.3)]">
        <Check className="w-5 h-5 text-[#b0fb30] stroke-[3]" />
      </div>

      {/* Message Text with Kashida Tatweel */}
      <div className="relative z-10 flex flex-col justify-center flex-grow text-right overflow-hidden pr-0.5">
        <p className="text-[#b0fb30] font-black text-sm sm:text-base leading-tight tracking-wide truncate">
          تـــمَّـــت الإضـــافـــة إلـــى الـسَّـــلَّـــة
        </p>
        <p className="text-gray-300 font-medium text-[11px] sm:text-xs leading-snug truncate mt-0.5">
          {productName ? `${productName}` : "أصـبـحـت الـقـطـعـة فـي سـلَّـتـك الآن بـنـجـاح"}
        </p>
      </div>

      {/* Close Cross Button */}
      <button
        onClick={handleClose}
        aria-label="إغلاق الإشعار"
        className="relative z-10 text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800/60 shrink-0"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Animated Bottom Progress Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#b0fb30] shadow-[0_0_8px_#b0fb30] animate-toast-progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}
