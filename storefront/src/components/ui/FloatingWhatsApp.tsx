"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const whatsappUrl = "https://wa.me/201023160657";

  useEffect(() => {
    if (isDismissed) return;

    // Initial appearance after 1.5 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Periodic appearance & disappearance (5s visible, 6s hidden)
    let hideTimeout: NodeJS.Timeout;
    const cycleInterval = setInterval(() => {
      setIsVisible(true);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 11000);

    // Initial hide after 6.5s
    const firstHideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 6500);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(firstHideTimeout);
      clearTimeout(hideTimeout);
      clearInterval(cycleInterval);
    };
  }, [isDismissed]);

  // Hide floating WhatsApp on Admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const shouldShow = !isDismissed && (isVisible || isHovered);

  return (
    <div 
      className="fixed bottom-5 sm:bottom-7 left-5 sm:left-7 z-50 flex items-center gap-3 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Compact Animated Speech Bubble Popup */}
      <div 
        className={`relative flex items-center gap-2 py-1.5 px-3 sm:px-3.5 rounded-xl bg-[#0e0e14]/95 backdrop-blur-xl border border-[#25D366]/40 text-white shadow-[0_8px_25px_rgba(0,0,0,0.7),0_0_15px_rgba(37,211,102,0.12)] transition-all duration-500 ease-out hover:border-[#25D366] ${
          shouldShow 
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" 
            : "opacity-0 -translate-x-3 scale-95 pointer-events-none"
        }`}
      >
        
        {/* Subtle connecting tail pointing left towards the icon */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#0e0e14] border-l border-b border-[#25D366]/40 rotate-45 pointer-events-none" />

        {/* Active Online Indicator */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366] shadow-[0_0_6px_#25D366]" />
        </span>

        {/* Direct Link to WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-xs font-bold text-white hover:text-[#25D366] transition-colors whitespace-nowrap tracking-wide font-serif"
        >
          تـواصـل مـعـي
        </a>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded-full hover:bg-white/10 transition-colors mr-0.5"
          title="إغلاق"
          aria-label="إغلاق التنبيه"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Pure Floating WhatsApp Icon (Zero Circle / Zero Container) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center p-0.5 text-[#25D366] hover:scale-115 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp className="w-11 h-11 sm:w-13 sm:h-13 filter drop-shadow-[0_4px_16px_rgba(37,211,102,0.65)] transition-transform group-hover:rotate-6" />
      </a>

    </div>
  );
}
