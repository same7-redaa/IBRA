"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import ScaleButton from "@/components/ui/ScaleButton";
import { sampleProducts, productCategories } from "@/data/products";

export default function CategoriesPage() {
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
    <main className="relative flex-grow flex flex-col min-h-screen text-white pt-28 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Background Artworks */}
      <div
        className="absolute -top-10 -left-10 w-60 h-60 sm:w-84 sm:h-84 bg-contain bg-no-repeat opacity-15 mix-blend-screen pointer-events-none -rotate-[22deg]"
        style={{ backgroundImage: `url('/bg-art/logo.png')` }}
      />
      <div
        className="absolute top-1/2 -right-8 w-48 h-48 sm:w-68 sm:h-68 bg-contain bg-no-repeat opacity-12 mix-blend-screen pointer-events-none rotate-[16deg]"
        style={{ backgroundImage: `url('/bg-art/social-media.png')` }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            تصنيفات <span className="text-[#FF8B2C] drop-shadow-[0_0_25px_rgba(255,139,44,0.4)]">أعسال زوين</span> الفاخرة
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-semibold">
            تصفح قطفات العسل حسب الاحتياج الصحي والعلاجي والنوع المفضل لديك
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {productCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? sampleProducts.length
                : sampleProducts.filter(
                    (p) =>
                      p.category === cat.id ||
                      (p.categories && p.categories.includes(cat.id))
                  ).length;

            return (
              <ScaleButton
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant="dark"
                size="sm"
                isActive={activeCategory === cat.id}
                className="whitespace-nowrap flex items-center gap-2"
              >
                <span>{cat.label}</span>
                <span className="text-[11px] opacity-75 font-mono">({count})</span>
              </ScaleButton>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 w-full">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}
