"use client";

import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { sampleProducts } from "@/data/products";
import { Sparkles, Percent } from "lucide-react";

export default function OffersPage() {
  // Show products that are in the "offers" collection or have an active oldPrice discount
  const offerProducts = sampleProducts.filter(
    (p) =>
      p.category === "offers" ||
      (p.categories && p.categories.includes("offers")) ||
      (p.oldPrice && p.oldPrice > p.price)
  );

  return (
    <main className="relative flex-grow flex flex-col min-h-screen text-white pt-28 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF8B2C]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Background Artworks */}
      <div
        className="absolute -top-12 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-contain bg-no-repeat opacity-15 mix-blend-screen pointer-events-none rotate-[15deg]"
        style={{ backgroundImage: `url('/bg-art/social-media.png')` }}
      />
      <div
        className="absolute top-1/2 -left-8 w-44 h-44 sm:w-64 sm:h-64 bg-contain bg-no-repeat opacity-12 mix-blend-screen pointer-events-none -rotate-[24deg]"
        style={{ backgroundImage: `url('/bg-art/facebook.png')` }}
      />

      {/* Seamless Black Gradient Transitions */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-36 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#FF8B2C]/40 text-xs font-black text-[#FF8B2C] shadow-sm mb-4">
            <Percent className="w-3.5 h-3.5" />
            <span>خصومات حصرية لفترة محدودة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            العروض وباقات <span className="text-[#FF8B2C] drop-shadow-[0_0_25px_rgba(255,139,44,0.4)]">التوفير الملكية</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-semibold">
            استمتع بأقوى باقات التوفير على أجود قطفات عسل النحل الطبيعي مع شحن مجاني
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 w-full">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}
