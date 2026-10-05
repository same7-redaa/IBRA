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
    <main className="relative flex-grow flex flex-col min-h-screen bg-[#fbf7ee] text-[#221c15] pt-28 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-contain bg-no-repeat opacity-25 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_1.jpg')` }}
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-80 bg-contain bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_3.jpg')` }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#221c15] tracking-tight">
            تصنيفات <span className="text-[#d97706]">أعسال زوين</span> الفاخرة
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#5c4f42] font-semibold">
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
