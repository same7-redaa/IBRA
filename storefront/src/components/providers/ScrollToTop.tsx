"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Disable browser auto-scroll restoration on mount and on pageshow/load
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const resetToTop = () => {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      };

      // Reset immediately
      resetToTop();

      window.addEventListener("pageshow", resetToTop);
      window.addEventListener("load", resetToTop);

      return () => {
        window.removeEventListener("pageshow", resetToTop);
        window.removeEventListener("load", resetToTop);
      };
    }
  }, []);

  // 2. Force scroll to (0,0) on navigation, initial hydration, and route changes
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash) return;

    // Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Next animation frame
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    // Small delay after full hydration
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, searchParams]);

  return null;
}
