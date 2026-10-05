"use client";

import React, { useRef, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, ArrowLeft } from "lucide-react";
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
  products,
  viewAllHref = "/products",
  viewAllLabel = "عرض الكل",
  bgPattern,
}: ProductCarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicate items so products repeat infinitely in the carousel
  const repeatedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    // Repeat enough times so users can scroll seamlessly in an infinite loop
    const repeatCount = products.length <= 2 ? 8 : products.length <= 4 ? 6 : 4;
    const list: { item: ProductItem; key: string }[] = [];
    for (let r = 0; r < repeatCount; r++) {
      products.forEach((prod, idx) => {
        list.push({ item: prod, key: `${prod.id}-rep-${r}-${idx}` });
      });
    }
    return list;
  }, [products]);

  const handleScroll = (direction: "prev" | "next") => {
    const el = scrollContainerRef.current;
    if (!el || repeatedProducts.length === 0) return;

    const scrollAmount = Math.max(el.clientWidth * 0.85, 280);
    const currentScroll = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const isNegativeRtl = el.scrollLeft <= 0;

    if (direction === "next") {
      // In RTL, 'next' (left arrow) moves viewport leftward
      if (currentScroll >= maxScroll - 30) {
        // Reached end -> loop smoothly back to start
        el.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        el.scrollBy({
          left: isNegativeRtl ? -scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      // In RTL, 'prev' (right arrow) moves viewport rightward towards 0
      if (currentScroll <= 30) {
        // Reached start -> loop smoothly to the end
        el.scrollTo({
          left: isNegativeRtl ? -maxScroll : maxScroll,
          behavior: "smooth",
        });
      } else {
        el.scrollBy({
          left: isNegativeRtl ? scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
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
        
        {/* Header with Title and Subtitle */}
        <div className="mb-6 sm:mb-8 px-2 sm:px-4 text-center sm:text-right">
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

        {/* Carousel Flex Layout with Dedicated Side Buttons on the far Right and Left */}
        <div className="relative flex items-center w-full">
          
          {/* Right Section Button (Prev in RTL) */}
          <button
            type="button"
            onClick={() => handleScroll("prev")}
            aria-label="السابق (يمين)"
            className="shrink-0 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1c1813] hover:bg-[#d97706] text-white border border-[#4a3d2e] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ml-1.5 sm:ml-3"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex-grow flex gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-4 pt-1 px-0.5 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {repeatedProducts.map(({ item, key }) => (
              <div
                key={key}
                className="snap-start shrink-0 w-[calc((100%-0.625rem)/2)] sm:w-[calc((100%-2*1rem)/3)] lg:w-[calc((100%-3*1.5rem)/4)]"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Left Section Button (Next in RTL) */}
          <button
            type="button"
            onClick={() => handleScroll("next")}
            aria-label="التالي (يسار)"
            className="shrink-0 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1c1813] hover:bg-[#d97706] text-white border border-[#4a3d2e] shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer mr-1.5 sm:mr-3"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* Bottom Center Action Button */}
        {viewAllHref && (
          <div className="mt-8 flex justify-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-white hover:bg-[#221c15] text-[#221c15] hover:text-white border border-[#ebdcc9] hover:border-[#221c15] text-xs sm:text-sm font-black shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
            >
              <span>{viewAllLabel}</span>
              <ArrowLeft className="w-4 h-4 text-[#d97706]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}


