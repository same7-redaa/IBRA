"use client";

import React from "react";
import ProductCarouselSection, { BackgroundArtItem } from "@/components/ui/ProductCarouselSection";
import { sampleProducts, productCategories, CategoryItem } from "@/data/products";

// Metadata mapping for category headers, badges, subtitles, and decorative artwork
const CATEGORY_META: Record<
  string,
  {
    highlightedWord?: string;
    subtitle: string;
    badge: string;
    bgArt: BackgroundArtItem[];
  }
> = {
  royal: {
    highlightedWord: "الملكي الفاخر",
    subtitle: "خلاصة الأعسال الملكية الفاخرة الممزوجة بأجود أنواع غذاء الملكات الطبيعي الصافي",
    badge: "مجموعة العسل الملكي",
    bgArt: [
      { src: "/bg-art/logo.png", className: "-top-14 -left-10 w-72 h-72 sm:w-96 sm:h-96 -rotate-12 opacity-15" },
      { src: "/bg-art/instagram.png", className: "-bottom-10 -right-8 w-44 h-44 sm:w-56 sm:h-56 rotate-[24deg] opacity-10" },
    ],
  },
  offers: {
    highlightedWord: "والباقات الحصرية",
    subtitle: "باقات وعروض توفير استثنائية مع خصومات تصل إلى 40% لفترة محدودة",
    badge: "عروض وباقات التوفير",
    bgArt: [
      { src: "/bg-art/social-media.png", className: "-top-16 -right-12 w-80 h-80 sm:w-[420px] sm:h-[420px] rotate-[15deg] opacity-15" },
      { src: "/bg-art/facebook.png", className: "-bottom-8 -left-6 w-48 h-48 sm:w-60 sm:h-60 -rotate-[28deg] opacity-10" },
    ],
  },
  immunity_energy: {
    highlightedWord: "والطاقة الحيوية",
    subtitle: "تركيبات غنية بالمغذيات الحيوية ومضادات الأكسدة لتعزيز النشاط والدفاعات الطبيعية",
    badge: "دعم المناعة والنشاط",
    bgArt: [
      { src: "/bg-art/google.png", className: "top-1/4 -right-10 w-64 h-64 sm:w-80 sm:h-80 -rotate-[16deg] opacity-12" },
      { src: "/bg-art/logo.png", className: "-bottom-12 -left-10 w-52 h-52 sm:w-64 sm:h-64 rotate-[35deg] opacity-15" },
    ],
  },
  special_blends: {
    highlightedWord: "الحصرية الفاخرة",
    subtitle: "ابتكارات عسل زوين الخاصة مع الجينسينج الكوري، غذاء الملكات، وحبوب اللقاح",
    badge: "خلطات حصرية مبتكرة",
    bgArt: [
      { src: "/bg-art/facebook-page.png", className: "-top-10 -left-12 w-72 h-72 sm:w-96 sm:h-96 rotate-[18deg] opacity-12" },
      { src: "/bg-art/social-media.png", className: "-bottom-14 -right-10 w-44 h-44 sm:w-56 sm:h-56 -rotate-[12deg] opacity-10" },
    ],
  },
  cave_honey: {
    highlightedWord: "الجبلي النادر",
    subtitle: "أندر أنواع العسل الجبلي المعتق المستخرج من كهوف الجبال الشاهقة العذراء",
    badge: "قطفات جبلية نادرة",
    bgArt: [
      { src: "/bg-art/instagram.png", className: "top-1/3 -left-8 w-60 h-60 sm:w-76 sm:h-76 -rotate-[30deg] opacity-15" },
      { src: "/bg-art/google.png", className: "-top-12 -right-10 w-56 h-56 sm:w-68 sm:h-68 rotate-[22deg] opacity-12" },
    ],
  },
  honeycomb: {
    highlightedWord: "العضوي النقي",
    subtitle: "أقراص شمع العسل العضوي الصافي مباشرة من خلايا النحل الطبيعية لمائدتك",
    badge: "شمع طبيعي 100%",
    bgArt: [
      { src: "/bg-art/facebook.png", className: "-top-14 -right-8 w-72 h-72 sm:w-[400px] sm:h-[400px] -rotate-[10deg] opacity-15" },
      { src: "/bg-art/facebook-page.png", className: "-bottom-10 -left-12 w-48 h-48 sm:w-60 sm:h-60 rotate-[26deg] opacity-10" },
    ],
  },
  respiratory: {
    highlightedWord: "وللمدخنين",
    subtitle: "تركيبات وأعسال مهدئة للحلق تدعم راحة الشعب الهوائية وتنقية الصدر",
    badge: "الصحة التنفسية",
    bgArt: [
      { src: "/bg-art/social-media.png", className: "-bottom-12 -right-8 w-64 h-64 sm:w-80 sm:h-80 rotate-[14deg] opacity-12" },
      { src: "/bg-art/instagram.png", className: "-top-10 -left-10 w-40 h-40 sm:w-52 sm:h-52 -rotate-[24deg] opacity-12" },
    ],
  },
  digestive: {
    highlightedWord: "والقولون",
    subtitle: "أعسال طبيعية تساهم في تهدئة المعدة ودعم الهضم السليم وراحة الجهاز الهضمي",
    badge: "صحة الجهاز الهضمي",
    bgArt: [
      { src: "/bg-art/google.png", className: "-top-16 -left-10 w-68 h-68 sm:w-88 sm:h-88 -rotate-[35deg] opacity-14" },
      { src: "/bg-art/logo.png", className: "-bottom-8 -right-12 w-44 h-44 sm:w-56 sm:h-56 rotate-[16deg] opacity-12" },
    ],
  },
  diabetic_friendly: {
    highlightedWord: "لمرضى السكري",
    subtitle: "أعسال منتقاة بمؤشر جلايسيمي منخفض تناسب الاستخدام المقنن لمرضى السكري",
    badge: "حميات وسكري",
    bgArt: [
      { src: "/bg-art/logo.png", className: "top-1/4 -left-12 w-64 h-64 sm:w-80 sm:h-80 rotate-[22deg] opacity-15" },
      { src: "/bg-art/social-media.png", className: "-top-10 -right-8 w-48 h-48 sm:w-60 sm:h-60 -rotate-[18deg] opacity-12" },
    ],
  },
};

export default function HomeProductCarousels() {
  // Get all active categories except "all"
  const activeCategories = productCategories.filter((cat) => cat.id !== "all");

  return (
    <div className="w-full flex flex-col space-y-1">
      {activeCategories.map((cat, index) => {
        // Filter products belonging to this category
        const categoryProducts = sampleProducts.filter(
          (p) =>
            p.category === cat.id ||
            (p.categories && p.categories.includes(cat.id))
        );

        // Fallback if empty to ensure every category always showcases matching products
        const productsToDisplay =
          categoryProducts.length > 0 ? categoryProducts : sampleProducts.slice(0, 4);

        const meta = CATEGORY_META[cat.id] || {
          highlightedWord: "الفاخر",
          subtitle: `تصفح أجود منتجات ${cat.label} الطبيعية والمفحوصة مخبرياً`,
          bgArt: [
            {
              src: index % 2 === 0 ? "/bg-art/logo.png" : "/bg-art/social-media.png",
              className: index % 2 === 0 ? "-top-10 -left-10 w-72 h-72 -rotate-12 opacity-15" : "-bottom-10 -right-10 w-64 h-64 rotate-12 opacity-15",
            },
          ],
        };

        const targetHref = cat.id === "offers" ? "/offers" : `/categories/${cat.id}`;

        return (
          <ProductCarouselSection
            key={cat.id}
            title={cat.label}
            highlightedWord={meta.highlightedWord}
            subtitle={meta.subtitle}
            products={productsToDisplay}
            viewAllHref={targetHref}
            viewAllLabel={`تصفح قسم ${cat.label}`}
            bgArt={meta.bgArt}
          />
        );
      })}
    </div>
  );
}

