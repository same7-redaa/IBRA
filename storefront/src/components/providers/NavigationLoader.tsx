"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const startTimeRef = useRef<number>(0);
  const MIN_DISPLAY_TIME = 1000; // 1 second minimum so the animation completes beautifully

  // Smooth hide with fade-out
  const triggerHide = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsFadingOut(false);
      }, 300); // fade out duration
    }, remaining);
  };

  useEffect(() => {
    // Hide when route change finishes
    if (isVisible) {
      triggerHide();
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore hash links, external links, mailto, tel, target=_blank
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // Check if navigating to a different internal URL
      try {
        const url = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        if (url.origin === currentUrl.origin && (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search)) {
          startTimeRef.current = Date.now();
          setIsFadingOut(false);
          setIsVisible(true);
        }
      } catch {
        // invalid URL ignore
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1c1813]/95 backdrop-blur-lg transition-opacity duration-300 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Loader text="عسل زوين" />
    </div>
  );
}
