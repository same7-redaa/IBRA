"use client";

import React, { useState } from "react";
import ProductCard, { ProductProps } from "@/components/ui/ProductCard";
import { ArrowLeft, Sparkles, Flame } from "lucide-react";
import Link from "next/link";

const sampleProducts: (ProductProps & { category: string })[] = [
  {
    id: 1,
    category: "hoodies",
    brand: "ADIDAS ORIGINALS",
    name: "هودي أوفر سايز كلاسيك قطن مصري",
    price: 850,
    oldPrice: 1100,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 142,
    colors: [
      { name: "أسود فحم", hex: "#111111" },
      { name: "ليموني نيون", hex: "#b0fb30" },
      { name: "أوف وايت", hex: "#f3f0e6" },
      { name: "كحلي داكن", hex: "#14213d" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    category: "hoodies",
    brand: "NIKE SPORTSWEAR",
    name: "سويت شيرت تيك فليس أسود بجيوب مخفية",
    price: 990,
    oldPrice: 1350,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80",
    rating: 5.0,
    reviewsCount: 289,
    colors: [
      { name: "رمادي معدني", hex: "#4b5563" },
      { name: "أسود ملكي", hex: "#0a0a0a" },
      { name: "زيتي غامق", hex: "#283618" }
    ],
    sizes: ["M", "L", "XL", "2XL"]
  },
  {
    id: 3,
    category: "tshirts",
    brand: "PUMA SELECT",
    name: "تيشرت ستريت وير بريميوم مطبوع",
    price: 490,
    oldPrice: 650,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewsCount: 95,
    colors: [
      { name: "أبيض ناصع", hex: "#ffffff" },
      { name: "بنفسجي باستيل", hex: "#e2d1f9" },
      { name: "أسود مطفي", hex: "#1f2421" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    category: "jackets",
    brand: "ZARA MAN",
    name: "جاكيت بومبر شتوي مبطن ووتر بروف",
    price: 1450,
    oldPrice: 1850,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 310,
    colors: [
      { name: "كحلي كلاسيك", hex: "#0b1d3a" },
      { name: "أسود جلد", hex: "#181818" },
      { name: "بيج ترابي", hex: "#d4a373" }
    ],
    sizes: ["M", "L", "XL"]
  }
];

export default function BestProducts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "الكل" },
    { id: "hoodies", label: "هوديز وسويت شيرت" },
    { id: "tshirts", label: "تيشرتات" },
    { id: "jackets", label: "جواكت ومعاطف" }
  ];

  const filteredProducts =
    activeCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-deep-black text-white border-t border-gray-900 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#b0fb30]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#e2d1f9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1550px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9 gap-5">
          <div>
            <div className="flex items-center gap-1.5 text-[#b0fb30] text-xs font-bold mb-1.5">
              <Flame className="w-3.5 h-3.5 fill-[#b0fb30]" />
              <span>الأكثر طلباً هذا الأسبوع</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              أفضل <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] to-[#e2d1f9]">المنتجات</span> والتشكيلات
            </h2>
          </div>

          {/* Categories Tab Filter */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-[5px] text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#b0fb30] text-deep-black shadow-[0_0_12px_rgba(176,251,48,0.35)]"
                    : "bg-[#14161f] text-gray-300 border border-gray-800 hover:border-gray-600 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
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
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-[5px] bg-[#14161f] hover:bg-[#1a1d28] text-white border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] font-bold text-sm transition-all duration-200"
          >
            استكشف باقي التشكيلة بالكامل
          </Link>
        </div>

      </div>
    </section>
  );
}
