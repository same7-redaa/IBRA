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
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#fbf7ee] text-[#221c15] border-t border-[#ebdcc9] overflow-hidden">
      
      {/* Cutout Decorative Botanical Illustration Behind Header */}
      <div 
        className="absolute -top-6 -right-6 w-56 h-56 sm:w-72 sm:h-72 bg-contain bg-no-repeat opacity-30 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_3.jpg')` }}
      />

      {/* Cutout Decorative Illustration Bottom Left */}
      <div 
        className="absolute bottom-4 -left-8 w-60 h-60 sm:w-72 sm:h-72 bg-contain bg-no-repeat opacity-25 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_4.jpg')` }}
      />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9 gap-5">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#221c15]">
              أجود <span className="text-[#d97706]">أعسال النحل</span> والخلطات الملكية
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

