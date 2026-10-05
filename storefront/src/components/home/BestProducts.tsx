"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import ScaleButton from "@/components/ui/ScaleButton";
import { sampleProducts } from "@/data/products";

export default function BestProducts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "الكل" },
    { id: "sidr", label: "عسل سدر جبلي" },
    { id: "black_seed", label: "عسل حبة البركة" },
    { id: "royal", label: "خلطات ملكية" },
    { id: "citrus", label: "عسل الموالح والزهور" }
  ];

  const filteredProducts =
    activeCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-deep-black text-white border-t border-gray-900 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9 gap-5">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              أجود <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#f59e0b] via-[#fbbf24] to-[#ffffff]">أعسال النحل</span> والخلطات الملكية
            </h2>
          </div>

          {/* Categories Tab Filter */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <ScaleButton
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant="dark"
                size="sm"
                isActive={activeCategory === cat.id}
                className="whitespace-nowrap"
              >
                {cat.label}
              </ScaleButton>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 w-full">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner / View All Link */}
        <div className="mt-12 text-center">
          <ScaleButton
            href="/products"
            variant="dark"
            size="lg"
            className="min-w-[270px]"
          >
            استكشف تشكيلة الأعسال الطبيعية بالكامل
          </ScaleButton>
        </div>

      </div>
    </section>
  );
}

