import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sampleProducts, productCategories } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Sparkles, ArrowRight, ChevronLeft } from "lucide-react";

// Category metadata for rich presentation
const CATEGORY_DETAILS: Record<
  string,
  {
    title: string;
    subtitle: string;
    badge: string;
    pattern: string;
  }
> = {
  royal: {
    title: "عسل ملكي",
    subtitle: "خلاصة الأعسال الملكية الفاخرة الممزوجة بأجود أنواع غذاء الملكات الطبيعي الصافي",
    badge: "مجموعة العسل الملكي",
    pattern: "/pattern_3.jpg",
  },
  offers: {
    title: "العروض الخاصة",
    subtitle: "باقات وعروض توفير استثنائية مع خصومات حصرية لفترة محدودة",
    badge: "عروض وباقات التوفير",
    pattern: "/pattern_1.jpg",
  },
  immunity_energy: {
    title: "المناعة والطاقة",
    subtitle: "تركيبات غنية بالمغذيات الحيوية ومضادات الأكسدة لتعزيز النشاط والدفاعات الطبيعية",
    badge: "دعم المناعة والنشاط",
    pattern: "/pattern_4.jpg",
  },
  special_blends: {
    title: "خلطات مميزة",
    subtitle: "ابتكارات عسل زوين الخاصة مع الجينسينج الكوري، غذاء الملكات، وحبوب اللقاح",
    badge: "خلطات حصرية مبتكرة",
    pattern: "/pattern_2.jpg",
  },
  cave_honey: {
    title: "عسل الكهوف",
    subtitle: "أندر أنواع العسل الجبلي المعتق المستخرج من كهوف الجبال الشاهقة العذراء",
    badge: "قطفات جبلية نادرة",
    pattern: "/pattern_3.jpg",
  },
  honeycomb: {
    title: "شمع العسل",
    subtitle: "أقراص شمع العسل العضوي الصافي مباشرة من خلايا النحل الطبيعية لمائدتك",
    badge: "شمع طبيعي 100%",
    pattern: "/pattern_1.jpg",
  },
  respiratory: {
    title: "الصحة التنفسية والمدخنون",
    subtitle: "تركيبات وأعسال مهدئة للحلق تدعم راحة الشعب الهوائية وتنقية الصدر",
    badge: "الصحة التنفسية",
    pattern: "/pattern_4.jpg",
  },
  digestive: {
    title: "صحة الجهاز الهضمي",
    subtitle: "أعسال طبيعية تساهم في تهدئة المعدة ودعم الهضم السليم وراحة الجهاز الهضمي",
    badge: "صحة الجهاز الهضمي",
    pattern: "/pattern_2.jpg",
  },
  diabetic_friendly: {
    title: "مناسب لمرضى السكري",
    subtitle: "أعسال منتقاة بمؤشر جلايسيمي منخفض تناسب الاستخدام المقنن لمرضى السكري",
    badge: "حميات وسكري",
    pattern: "/pattern_3.jpg",
  },
};

export function generateStaticParams() {
  return productCategories
    .filter((cat) => cat.id !== "all")
    .map((cat) => ({
      category: cat.id,
    }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;

  const currentCategory = productCategories.find((cat) => cat.id === categoryId);

  if (!currentCategory && categoryId !== "all") {
    notFound();
  }

  // Filter matching products
  const categoryProducts = sampleProducts.filter(
    (p) =>
      p.category === categoryId ||
      (p.categories && p.categories.includes(categoryId))
  );

  const meta = CATEGORY_DETAILS[categoryId] || {
    title: currentCategory?.label || "منتجات الفئة",
    subtitle: "أجود قطفات العسل الطبيعي المفحوص والموثق مخبرياً",
    badge: "عسل زوين الطبيعي",
    pattern: "/pattern_3.jpg",
  };

  const otherCategories = productCategories.filter(
    (cat) => cat.id !== "all" && cat.id !== categoryId
  );

  return (
    <main className="relative flex-grow flex flex-col min-h-screen bg-[#fbf7ee] text-[#221c15] pt-28 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-contain bg-no-repeat opacity-25 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('${meta.pattern}')` }}
      />
      <div 
        className="absolute bottom-10 left-0 w-80 h-80 bg-contain bg-no-repeat opacity-20 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_1.jpg')` }}
      />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#8a7a6b] mb-6">
          <Link href="/" className="hover:text-[#d97706] transition-colors">
            الرئيسية
          </Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <Link href="/categories" className="hover:text-[#d97706] transition-colors">
            الفئات
          </Link>
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="text-[#d97706] font-black">{meta.title}</span>
        </div>

        {/* Category Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d97706]/10 border border-[#d97706]/30 text-[#d97706] text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#221c15] tracking-tight">
            {meta.title}
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-[#5c4f42] font-semibold leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Category Switcher Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <Link
            href="/categories"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#5c4f42] border border-[#ebdcc9] hover:border-[#d97706] hover:text-[#221c15] whitespace-nowrap transition-all"
          >
            كافة الفئات
          </Link>
          {otherCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#5c4f42] border border-[#ebdcc9] hover:border-[#d97706] hover:text-[#221c15] whitespace-nowrap transition-all"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#ebdcc9] rounded-3xl p-8 max-w-md mx-auto shadow-sm">
            <p className="text-sm font-bold text-[#5c4f42] mb-4">
              سيتم إضافة المزيد من منتجات هذا القسم قريباً
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#221c15] text-white text-xs font-black hover:bg-[#d97706] transition-colors"
            >
              <span>تصفح كافة المنتجات</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 w-full">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
