"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  blur?: boolean;
  blurAmount?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0,
  blur = false,
  blurAmount = 8,
}: ScrollRevealProps) {
  // Always true by default to guarantee 100% visibility during fast mobile fling/scroll
  const [isVisible, setIsVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply scroll animations on desktop screens (>= 768px)
    // On mobile devices, contents are ALWAYS 100% visible with zero blank space during fast scrolls
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setIsVisible(true);
        return;
      }
      setIsDesktop(true);
    }

    const el = ref.current;
    if (!el) return;

    // Check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      setIsVisible(true);
      return;
    }

    // On desktop, set initial hidden state for smooth reveal
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "350px 0px 350px 0px", // 350px eager buffer: elements reveal long before arriving
      }
    );

    observer.observe(el);

    // Unconditional safety timeout: Ensure element is ALWAYS visible even if observer is bypassed
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible || !isDesktop) return "translate3d(0, 0, 0) scale(1)";

    switch (direction) {
      case "up":
        return "translate3d(0, 16px, 0) scale(0.99)";
      case "down":
        return "translate3d(0, -16px, 0) scale(0.99)";
      case "left":
        return "translate3d(16px, 0, 0) scale(0.99)";
      case "right":
        return "translate3d(-16px, 0, 0) scale(0.99)";
      case "none":
        return "translate3d(0, 0, 0) scale(0.99)";
      default:
        return "translate3d(0, 16px, 0) scale(0.99)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible || !isDesktop ? 1 : 0,
        filter: isVisible || !isDesktop ? "none" : blur ? `blur(${blurAmount}px)` : "none",
        transform: getTransformStyle(),
        transition: isDesktop 
          ? `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` 
          : "none",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
