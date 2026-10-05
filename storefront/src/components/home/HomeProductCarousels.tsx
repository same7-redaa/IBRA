"use client";

import React from "react";
import ProductCarouselSection from "@/components/ui/ProductCarouselSection";
import { sampleProducts } from "@/data/products";

export default function HomeProductCarousels() {
  // 1. أجود أعسال النحل الطبيعية (Pure single-origin honeys, Sidr, Cave, Honeycomb)
  const naturalHoneys = sampleProducts.filter((p) => {
    const isSpecialBlend =
      p.categories?.includes("special_blends") ||
      p.name.includes("خلطة") ||
      p.name.includes("غذاء ملكات");
    return !isSpecialBlend;
  });

  // 2. الخلطات الملكية ومعززات الطاقة والمناعة (Royal Blends & Vitality)
  const royalBlends = sampleProducts.filter((p) => {
    return (
      p.categories?.includes("royal") ||
      p.categories?.includes("special_blends") ||
      p.categories?.includes("immunity_energy") ||
      p.categories?.includes("respiratory") ||
      p.categories?.includes("digestive") ||
      p.name.includes("خلطة") ||
      p.name.includes("الملكي") ||
      p.name.includes("غذاء ملكات")
    );
  });

  // 3. عروض التوفير والباقات الحصرية (Special Offers & Bundles)
  const specialOffers = sampleProducts.filter((p) => {
    return (
      p.categories?.includes("offers") ||
      (p.oldPrice && p.oldPrice > p.price)
    );
  });

  return (
    <div className="w-full flex flex-col space-y-2">
      {/* Section 1: أجود أعسال النحل الطبيعية */}
      <ProductCarouselSection
        title="أجود أعسال النحل"
        highlightedWord="الطبيعية"
        subtitle="قطفات جبلية وبرية نقية 100% مستخلصة من أندر رحيق الزهور البرية ومفحوصة مخبرياً"
        badge="نقاء طبيعي 100%"
        products={naturalHoneys.length > 0 ? naturalHoneys : sampleProducts}
        viewAllHref="/products"
        viewAllLabel="استكشف جميع الأعسال"
        bgPattern="/pattern_3.jpg"
      />

      {/* Section 2: الخلطات الملكية الفاخرة */}
      <ProductCarouselSection
        title="الخلطات الملكية"
        highlightedWord="ومعززات الطاقة"
        subtitle="تركيبات فاخرة مدعمة بغذاء الملكات النقي وحبوب اللقاح والجينسينج للصحة والمناعة والحيوية"
        badge="تركيبات حصرية فاخرة"
        products={royalBlends.length > 0 ? royalBlends : sampleProducts}
        viewAllHref="/categories"
        viewAllLabel="تصفح جميع الخلطات"
        bgPattern="/pattern_4.jpg"
      />

      {/* Section 3: باقات وعروض التوفير الحصرية */}
      <ProductCarouselSection
        title="باقات وعروض"
        highlightedWord="التوفير الخاصة"
        subtitle="وفر أكثر مع باقات عسل زوين المختارة بأسعار استثنائية وخصومات لفترة محدودة"
        badge="خصومات تصل إلى 40%"
        products={specialOffers.length > 0 ? specialOffers : sampleProducts}
        viewAllHref="/offers"
        viewAllLabel="شاهد كافة العروض"
        bgPattern="/pattern_1.jpg"
      />
    </div>
  );
}
