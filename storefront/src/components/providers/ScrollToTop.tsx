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

    // 2. Lenis instance instant reset
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void; stop: () => void; start: () => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
  };

  const scrollToTargetSection = (targetId: string) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: { duration?: number; offset?: number }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(offsetPosition, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 1. Disable browser auto-scroll restoration on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const checkTargetOrReset = () => {
        const storedSection = sessionStorage.getItem("scroll_to_section");
        const hashSection = window.location.hash.replace("#", "");
        const target = storedSection || hashSection;

        if (target && target !== "top") {
          sessionStorage.removeItem("scroll_to_section");
          setTimeout(() => scrollToTargetSection(target), 120);
        } else {
          resetImmediateTop();
        }
      };

      checkTargetOrReset();

      const handleSplashDone = () => checkTargetOrReset();
      window.addEventListener("splash-finished", handleSplashDone);
      window.addEventListener("pageshow", checkTargetOrReset);

      return () => {
        window.removeEventListener("splash-finished", handleSplashDone);
        window.removeEventListener("pageshow", checkTargetOrReset);
      };
    }
  }, []);

  // 2. On route/pathname change: scroll to section or instant (0,0)
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const storedSection = sessionStorage.getItem("scroll_to_section");
    const hashSection = window.location.hash.replace("#", "");
    const target = storedSection || hashSection;

    if (target && target !== "top") {
      sessionStorage.removeItem("scroll_to_section");
      const t1 = setTimeout(() => scrollToTargetSection(target), 80);
      const t2 = setTimeout(() => scrollToTargetSection(target), 220);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      resetImmediateTop();
      const rafId = requestAnimationFrame(resetImmediateTop);
      const timeoutId = setTimeout(resetImmediateTop, 30);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
      };
    }
  }, [pathname]);

  return null;
}


