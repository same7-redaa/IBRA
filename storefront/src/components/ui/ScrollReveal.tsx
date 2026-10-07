"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms (e.g. 50, 100)
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number; // kept for API compatibility
  blur?: boolean;
  blurAmount?: number; // in px
}

type Phase = "hidden" | "animating" | "done";

/* ------------------------------------------------------------------
 * Shared reveal scheduler
 * One IntersectionObserver + one rAF-throttled scroll check for ALL
 * ScrollReveal instances. The scroll check guarantees that elements
 * skipped during a fast fling (never "intersecting" in a sampled frame)
 * are still revealed, so content is never missing when scrolling back.
 * ------------------------------------------------------------------ */
const pending = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;
let scrollBound = false;
let ticking = false;

function unregister(el: Element) {
  pending.delete(el);
  observer?.unobserve(el);
}

function flushPending() {
  ticking = false;
  if (pending.size === 0) return;
  // Reveal everything above the viewport or within 1.5 screens below it
  const limit = window.innerHeight * 1.05;
  pending.forEach((reveal, el) => {
    if (el.getBoundingClientRect().top < limit) reveal();
  });
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(flushPending);
  }
}

function register(el: Element, reveal: () => void) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            pending.get(entry.target)?.();
          }
        });
      },
      { rootMargin: "0px 0px -30px 0px", threshold: 0.05 }
    );
  }
  if (!scrollBound) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    scrollBound = true;
  }
  pending.set(el, reveal);
  observer.observe(el);
}

const HIDDEN_TRANSFORMS: Record<NonNullable<ScrollRevealProps["direction"]>, string> = {
  // 2D transforms while hidden: no forced GPU layer for off-screen elements
  up: "translate(0, 16px) scale(0.99)",
  down: "translate(0, -16px) scale(0.99)",
  left: "translate(16px, 0) scale(0.99)",
  right: "translate(-16px, 0) scale(0.99)",
  none: "translate(0, 0) scale(0.99)",
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = true,
  blurAmount = 6,
}: ScrollRevealProps) {
  const [phase, setPhase] = useState<Phase>("hidden");
  const ref = useRef<HTMLDivElement>(null);

  // Register with the shared scheduler
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      unregister(el);
      setPhase((p) => (p === "hidden" ? "animating" : p));
    };

    // Already visible in upper viewport on initial load -> reveal immediately
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      reveal();
      return;
    }

    register(el, reveal);
    return () => unregister(el);
  }, []);

  // After the animation completes, drop filter/transform/will-change so the
  // element stops holding its own GPU layer (visually identical result).
  useEffect(() => {
    if (phase !== "animating") return;
    const t = setTimeout(() => setPhase("done"), delay + 600);
    return () => clearTimeout(t);
  }, [phase, delay]);

  const isVisible = phase !== "hidden";
  const isDone = phase === "done";
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isDone
          ? "none"
          : isVisible
            ? "blur(0px)"
            : blur
              ? `blur(${blurAmount}px)`
              : "none",
        transform: isDone
          ? "none"
          : isVisible
            ? "translate3d(0, 0, 0) scale(1)"
            : HIDDEN_TRANSFORMS[direction],
        transition: isDone
          ? "none"
          : `opacity 0.5s ${easing} ${delay}ms, transform 0.5s ${easing} ${delay}ms, filter 0.5s ${easing} ${delay}ms`,
        willChange: phase === "animating" ? "opacity, transform, filter" : "auto",
      }}
    >
      {children}
    </div>
  );
}
