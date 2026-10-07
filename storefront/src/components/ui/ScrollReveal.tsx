"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms (e.g. 50, 100)
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  blur?: boolean;
  blurAmount?: number; // in px, default 12
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.01,
  blur = true,
  blurAmount = 10,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in or above viewport on mount, reveal immediately
    if (typeof window !== "undefined") {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 120) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // trigger once for zero overhead
        }
      },
      {
        threshold,
        rootMargin: "140px 0px 80px 0px", // Eager anticipation: elements reveal before reaching screen edge
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";

    switch (direction) {
      case "up":
        return "translate3d(0, 20px, 0) scale(0.99)";
      case "down":
        return "translate3d(0, -20px, 0) scale(0.99)";
      case "left":
        return "translate3d(20px, 0, 0) scale(0.99)";
      case "right":
        return "translate3d(-20px, 0, 0) scale(0.99)";
      case "none":
        return "translate3d(0, 0, 0) scale(0.98)";
      default:
        return "translate3d(0, 20px, 0) scale(0.99)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : blur ? `blur(${blurAmount}px)` : "none",
        transform: getTransformStyle(),
        transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

