"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, ArrowLeft, Sparkles } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { ProductItem } from "@/data/products";

interface ProductCarouselSectionProps {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  badge?: string;
  products: ProductItem[];
  viewAllHref?: string;
  viewAllLabel?: string;
  bgPattern?: string;
}

export default function ProductCarouselSection({
  title,
  highlightedWord,
  subtitle,
  badge,
  products,
  viewAllHref = "/products",
  viewAllLabel = "عرض الكل",
  bgPattern,
}: ProductCarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const currentScroll = Math.abs(scrollLeft);
      
      setCanScrollRight(currentScroll < maxScroll - 10);
      setCanScrollLeft(currentScroll > 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [products]);

  const handleScroll = (direction: "prev" | "next") => {
    if (scrollContainerRef.current) {
      // Scroll by approximately the visible width for clean step scrolling
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
      // In RTL: 'next' moves viewport to the left
      const multiplier = direction === "next" ? -1 : 1;
      scrollContainerRef.current.scrollBy({
        left: multiplier * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 px-2 sm:px-6 md:px-10 lg:px-14 xl:px-16 text-[#221c15] border-t border-[#ebdcc9] overflow-hidden">
      
      {/* Decorative Background Artwork if provided */}
      {bgPattern && (
        <div
          className="absolute -top-10 -left-10 w-72 h-72 bg-contain bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url('${bgPattern}')` }}
        />
      )}

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Header with Title, Subtitle, and View All Link */}
        <div className="flex items-end justify-between mb-6 sm:mb-8 px-2 sm:px-4 gap-4">
          <div>
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] text-[11px] sm:text-xs font-black mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>
            )}
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#221c15]">
              {title}{" "}
              {highlightedWord && (
                <span className="text-[#d97706]">{highlightedWord}</span>
              )}
            </h2>
            
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#5c4f42] font-semibold mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* View All Link */}
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#d97706] hover:text-[#221c15] transition-colors shrink-0"
            >
              <span>{viewAllLabel}</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Carousel Flex Layout with Dedicated Side Buttons on the far Right and Left */}
        <div className="relative flex items-center w-full">
          
          {/* Right Section Button (Prev in RTL) */}
          <button
            onClick={() => handleScroll("prev")}
            aria-label="السابق (يمين)"
            className="shrink-0 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1c1813] hover:bg-[#d97706] text-white border border-[#4a3d2e] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ml-1.5 sm:ml-3"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Scroll Container (2 cards on mobile, 3 on tablet, 4 on desktop) */}
          <div
            ref={scrollContainerRef}
            className="flex-grow flex gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-4 pt-1 px-0.5 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[calc((100%-0.625rem)/2)] sm:w-[calc((100%-2*1rem)/3)] lg:w-[calc((100%-3*1.5rem)/4)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Left Section Button (Next in RTL) */}
          <button
            onClick={() => handleScroll("next")}
            aria-label="التالي (يسار)"
            className="shrink-0 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1c1813] hover:bg-[#d97706] text-white border border-[#4a3d2e] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer mr-1.5 sm:mr-3"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}


