"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const MIN_DISPLAY_TIME = 750; // Minimum duration for a smooth, premium feel

  // Trigger hide when navigation completes
  const triggerHide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    timeoutRef.current = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsFadingOut(false);
      }, 350); // fade out duration
    }, remaining);
  }, []);

  // When pathname or searchParams change, route transition is done
  useEffect(() => {
    if (isVisible) {
      triggerHide();
    }
  }, [pathname, searchParams, triggerHide]);

  // Global capture click listener to intercept all navigation links across the site
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const el = e.target as HTMLElement | null;
      const target = el?.closest?.("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore hash links, tel, mailto, new tabs, and modifier keys
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      try {
        const targetUrl = new URL(href, window.location.origin);
        if (targetUrl.origin === window.location.origin) {
          const currentFull = window.location.pathname + window.location.search;
          const targetFull = targetUrl.pathname + targetUrl.search;

          if (currentFull !== targetFull) {
            startTimeRef.current = Date.now();
            setIsFadingOut(false);
            setIsVisible(true);
          }
        }
      } catch {
        // ignore invalid urls
      }
    };

    // Use capture phase (true) to intercept clicks before any stopPropagation
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1c1813] transition-opacity duration-350 ease-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{ willChange: "opacity" }}
    >
      {/* Centered Brand Loading Component */}
      <div className="flex flex-col items-center gap-5">
        <Loader text="عسل زوين" />
        
        {/* Subtle Golden Loading Line */}
        <div className="w-32 h-1 bg-[#3d3226] rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d97706] to-transparent animate-pulse w-full h-full" />
        </div>
      </div>
    </div>
  );
}
