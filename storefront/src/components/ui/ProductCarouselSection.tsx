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
      // In RTL, scrollLeft can be negative or positive depending on browser implementation
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
      const scrollAmount = 340;
      // For RTL: 'next' scrolls left (revealing more items on the left side)
      const multiplier = direction === "next" ? -1 : 1;
      scrollContainerRef.current.scrollBy({
        left: multiplier * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-[#221c15] border-t border-[#ebdcc9] overflow-hidden">
      
      {/* Decorative Background Artwork if provided */}
      {bgPattern && (
        <div
          className="absolute -top-10 -left-10 w-72 h-72 bg-contain bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url('${bgPattern}')` }}
        />
      )}

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Header with Title, Subtitle, and Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] text-xs font-black mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>
            )}
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#221c15]">
              {title}{" "}
              {highlightedWord && (
                <span className="text-[#d97706]">{highlightedWord}</span>
              )}
            </h2>
            
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#5c4f42] font-semibold mt-1.5">
                {subtitle}
              </p>
            )}
          </div>

          {/* Controls: Next/Prev Arrows & View All */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#d97706] hover:text-[#221c15] transition-colors ml-2"
              >
                <span>{viewAllLabel}</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            )}

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("prev")}
                aria-label="السابق"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#221c15] text-[#221c15] hover:text-white border border-[#ebdcc9] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleScroll("next")}
                aria-label="التالي"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#221c15] text-[#221c15] hover:text-white border border-[#ebdcc9] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="snap-start shrink-0 w-[275px] sm:w-[295px] md:w-[315px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
