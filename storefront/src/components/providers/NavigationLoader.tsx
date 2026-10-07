"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "@/components/ui/Loader";

// One full cycle of the Loader text animation (see Loader.module.css -> 2s)
const FULL_CYCLE_MS = 2000;
const FADE_OUT_MS = 400;
// Safety net: never keep the overlay forever if a navigation is cancelled
const MAX_VISIBLE_MS = 8000;

type Phase = "hidden" | "visible" | "fading";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams?.toString() ?? ""}`;

  const [phase, setPhase] = useState<Phase>("hidden");
  const startedAtRef = useRef(0);
  const pendingRef = useRef(false);
  const lastRouteRef = useRef(routeKey);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  // Hide only after the animation has completed full cycles, then fade out
  const finish = () => {
    clearTimers();
    const elapsed = Date.now() - startedAtRef.current;
    const cycles = Math.max(1, Math.ceil(elapsed / FULL_CYCLE_MS));
    const wait = cycles * FULL_CYCLE_MS - elapsed;

    timersRef.current.push(
      setTimeout(() => {
        setPhase("fading");
        timersRef.current.push(
          setTimeout(() => {
            setPhase("hidden");
            pendingRef.current = false;
          }, FADE_OUT_MS)
        );
      }, wait)
    );
  };

  const start = () => {
    clearTimers();
    startedAtRef.current = Date.now();
    pendingRef.current = true;
    setPhase("visible");
    timersRef.current.push(setTimeout(finish, MAX_VISIBLE_MS));
  };

  // 1. Show the loader immediately when an internal link is clicked
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        const current = window.location.pathname + window.location.search;
        if (url.pathname + url.search === current) return;
        // Never trigger navigation loader when navigating to or within admin
        if (url.pathname.startsWith("/admin") || window.location.pathname.startsWith("/admin")) {
          return;
        }
        start();
      } catch {
        /* ignore malformed urls */
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. When the new route is rendered, let the animation finish completely
  useEffect(() => {
    if (lastRouteRef.current === routeKey) return;
    lastRouteRef.current = routeKey;

    // Never trigger on admin routes
    if (pathname?.startsWith("/admin")) {
      clearTimers();
      setPhase("hidden");
      pendingRef.current = false;
      return;
    }

    // Navigation triggered without a link click (router.push / back / forward)
    if (!pendingRef.current) start();
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey, pathname]);

  if (pathname?.startsWith("/admin") || phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="جاري التحميل"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#060608] select-none transition-opacity ease-out ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{ transitionDuration: `${FADE_OUT_MS}ms` }}
    >
      <div className="flex flex-col items-center gap-5">
        <Loader text="إبراهيم علي سليم" />
        {/* Progress line that fills exactly over one animation cycle */}
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF8B2C] rounded-full origin-right"
            style={{ animation: `loaderProgress ${FULL_CYCLE_MS}ms linear infinite` }}
          />
        </div>
      </div>
    </div>
  );
}
