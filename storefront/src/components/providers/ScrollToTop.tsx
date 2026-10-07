"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Instant zero-scroll reset function
  const resetImmediateTop = () => {
    if (typeof window === "undefined") return;

    // 1. Direct browser standard scroll reset
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Lenis instance instant reset (disable inertia/animation from previous page)
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void; stop: () => void; start: () => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  // 1. Disable browser auto-scroll restoration on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      resetImmediateTop();

      const handleSplashDone = () => resetImmediateTop();
      window.addEventListener("splash-finished", handleSplashDone);
      window.addEventListener("pageshow", resetImmediateTop);
      window.addEventListener("load", resetImmediateTop);

      return () => {
        window.removeEventListener("splash-finished", handleSplashDone);
        window.removeEventListener("pageshow", resetImmediateTop);
        window.removeEventListener("load", resetImmediateTop);
      };
    }
  }, []);

  // 2. Before browser paint and immediately upon pathname change, force instant (0,0)
  useLayoutEffect(() => {
    resetImmediateTop();
    const rafId = requestAnimationFrame(resetImmediateTop);
    const timeoutId = setTimeout(resetImmediateTop, 30);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}

