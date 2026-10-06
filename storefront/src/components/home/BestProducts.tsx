"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import ScaleButton from "@/components/ui/ScaleButton";
import { sampleProducts, productCategories } from "@/data/products";

export default function BestProducts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? sampleProducts
      : sampleProducts.filter(
          (p) =>
            p.category === activeCategory ||
            (p.categories && p.categories.includes(activeCategory))
        );

  return (
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-white overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FF8B2C]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Background Artworks */}
      <div 
        className="absolute -top-6 -left-6 w-44 h-44 sm:w-60 sm:h-60 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none rotate-[14deg]"
        style={{ backgroundImage: `url('/bg-art/facebook.png')` }}
      />
      <div 
        className="absolute -bottom-10 -right-8 w-60 h-60 sm:w-88 sm:h-88 bg-contain bg-no-repeat opacity-12 mix-blend-screen pointer-events-none -rotate-[22deg]"
        style={{ backgroundImage: `url('/bg-art/facebook-page.png')` }}
      />

      {/* Seamless Black Gradient Transitions (Top & Bottom Fades) */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9 gap-5">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              أجود <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.35)]">أعسال النحل</span> والخلطات الملكية
            </h2>
          </div>

          {/* Categories Tab Filter */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {productCategories.map((cat) => (
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
            variant="neon"
            size="lg"
            className="min-w-[270px] shadow-lg shadow-[#FF8B2C]/25"
          >
            استكشف تشكيلة الأعسال الطبيعية بالكامل
          </ScaleButton>
        </div>

      </div>
    </section>
  );
}

