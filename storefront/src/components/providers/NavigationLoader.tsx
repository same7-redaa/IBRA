"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const prevPathRef = useRef(pathname);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger when pathname actually changes
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsVisible(true);
      setIsFadingOut(false);

      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      // Auto dismiss smoothly after 600ms
      hideTimerRef.current = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          setIsFadingOut(false);
        }, 300);
      }, 600);
    }
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1c1813] transition-opacity duration-300 ease-out select-none pointer-events-none ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <Loader text="عسل زوين" />
        <div className="w-32 h-1 bg-[#3d3226] rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d97706] to-transparent animate-pulse w-full h-full" />
        </div>
      </div>
    </div>
  );
}
