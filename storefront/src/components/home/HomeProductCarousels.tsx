"use client";

import React from "react";
import ProductCarouselSection from "@/components/ui/ProductCarouselSection";
import { sampleProducts, productCategories, CategoryItem } from "@/data/products";

// Metadata mapping for category headers, badges, subtitles, and decorative artwork
const CATEGORY_META: Record<
  string,
  {
    highlightedWord?: string;
    subtitle: string;
    badge: string;
    pattern: string;
  }
> = {
  royal: {
    highlightedWord: "الملكي الفاخر",
    subtitle: "خلاصة الأعسال الملكية الفاخرة الممزوجة بأجود أنواع غذاء الملكات الطبيعي الصافي",
    badge: "مجموعة العسل الملكي",
    pattern: "/pattern_3.jpg",
  },
  offers: {
    highlightedWord: "والباقات الحصرية",
    subtitle: "باقات وعروض توفير استثنائية مع خصومات تصل إلى 40% لفترة محدودة",
    badge: "عروض وباقات التوفير",
    pattern: "/pattern_1.jpg",
  },
  immunity_energy: {
    highlightedWord: "والطاقة الحيوية",
    subtitle: "تركيبات غنية بالمغذيات الحيوية ومضادات الأكسدة لتعزيز النشاط والدفاعات الطبيعية",
    badge: "دعم المناعة والنشاط",
    pattern: "/pattern_4.jpg",
  },
  special_blends: {
    highlightedWord: "الحصرية الفاخرة",
    subtitle: "ابتكارات عسل زوين الخاصة مع الجينسينج الكوري، غذاء الملكات، وحبوب اللقاح",
    badge: "خلطات حصرية مبتكرة",
    pattern: "/pattern_2.jpg",
  },
  cave_honey: {
    highlightedWord: "الجبلي النادر",
    subtitle: "أندر أنواع العسل الجبلي المعتق المستخرج من كهوف الجبال الشاهقة العذراء",
    badge: "قطفات جبلية نادرة",
    pattern: "/pattern_3.jpg",
  },
  honeycomb: {
    highlightedWord: "العضوي النقي",
    subtitle: "أقراص شمع العسل العضوي الصافي مباشرة من خلايا النحل الطبيعية لمائدتك",
    badge: "شمع طبيعي 100%",
    pattern: "/pattern_1.jpg",
  },
  respiratory: {
    highlightedWord: "وللمدخنين",
    subtitle: "تركيبات وأعسال مهدئة للحلق تدعم راحة الشعب الهوائية وتنقية الصدر",
    badge: "الصحة التنفسية",
    pattern: "/pattern_4.jpg",
  },
  digestive: {
    highlightedWord: "والقولون",
    subtitle: "أعسال طبيعية تساهم في تهدئة المعدة ودعم الهضم السليم وراحة الجهاز الهضمي",
    badge: "صحة الجهاز الهضمي",
    pattern: "/pattern_2.jpg",
  },
  diabetic_friendly: {
    highlightedWord: "لمرضى السكري",
    subtitle: "أعسال منتقاة بمؤشر جلايسيمي منخفض تناسب الاستخدام المقنن لمرضى السكري",
    badge: "حميات وسكري",
    pattern: "/pattern_3.jpg",
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
          pattern: index % 2 === 0 ? "/pattern_3.jpg" : "/pattern_1.jpg",
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
            bgPattern={meta.pattern}
          />
        );
      })}
    </div>
  );
}

