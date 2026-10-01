"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import {
  Sparkles,
  Shirt,
  Scissors,
  Truck,
  CheckCircle2,
  Package,
  Layers,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

interface ProductDetailsTabsProps {
  product: ProductItem;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<"details" | "materials" | "fit" | "shipping">("details");

  const tabs = [
    { id: "details", label: "تفاصيل القطعة" },
    { id: "materials", label: "الخامة والتصنيع" },
    { id: "fit", label: "المقاس والقصة" },
    { id: "shipping", label: "الشحن والاسترجاع" },
  ];

  return (
    <div className="w-full border-t border-gray-900/80 pt-12 mt-16 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column (in RTL: Right visual column): Tabs & Text */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Tab Navigation Header */}
          <div className="flex items-center gap-6 sm:gap-8 border-b border-gray-800 pb-3 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-sm sm:text-base font-black transition-all cursor-pointer whitespace-nowrap pb-3 -mb-3 relative ${
                  activeTab === tab.id
                    ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[220px]">
            {activeTab === "details" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  تم تصميم هذه القطعة بعناية فائقة من القطن المصري فائق النعومة، لتمنحك متانة تدوم وراحة استثنائية طوال اليوم مع الحفاظ على رونقها وألوانها بعد الغسيل المتكرر.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Package className="w-3 h-3 text-[#b0fb30]" />
                    </div>
                    <span>قصة أوفر سايز (Oversized Fit) عصرية ومريحة</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Layers className="w-3 h-3 text-[#b0fb30]" />
                    </div>
                    <span>نسيج قطني ثقيل وفاخر فائق النعومة (Heavyweight Cotton)</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Shirt className="w-3 h-3 text-[#b0fb30]" />
                    </div>
                    <span>غطاء رأس واسع ومزدوج مع حبال تضييق محكمة</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Scissors className="w-3 h-3 text-[#b0fb30]" />
                    </div>
                    <span>أساور وحواف سفلية مضلعة عالية المرونة</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  نعتمد حصرياً على أجود خامات القطن المصري طويل التيلة مع معالجة خاصة تمنع الانكماش وتضمن ملمساً قطنياً طبيعياً يتيح تنفس البشرة.
                </p>
                <div className="p-4 rounded-xl bg-[#14161f] border border-gray-800 space-y-2">
                  <span className="text-xs font-bold text-[#b0fb30] block">مواصفات النسيج:</span>
                  <p className="text-xs text-gray-300">{product.material || "قطن مصري ميلتون مبطن ناعم 100%"}</p>
                  <p className="text-[11px] text-gray-400">تعليمات الغسيل: غسيل بماء بارد (30 درجة)، مقلوب على الظهر، الكي بدرجة حرارة منخفضة.</p>
                </div>
              </div>
            )}

            {activeTab === "fit" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  القطعة تأتي بقصة مريحة وفضفاضة (Oversized Cut). إذا كنت تفضل مظهراً أكثر إحكاماً على الجسم، ننصحك باختيار مقاس أقل بدرجة واحدة من مقاسك المعتاد.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#14161f] border border-gray-800 text-center">
                    <span className="text-xs font-bold text-white block">طول الموديل</span>
                    <span className="text-xs text-gray-400">182 سم (يرتدي مقاس L)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161f] border border-gray-800 text-center">
                    <span className="text-xs font-bold text-white block">نوع القصة</span>
                    <span className="text-xs text-[#b0fb30]">Relaxed / Oversized</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  توصيل سريع وآمن لجميع محافظات جمهورية مصر العربية مع إمكانية المعاينة والفحص الكامل مع المندوب قبل دفع أي مبالغ.
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <Truck className="w-4 h-4 text-[#b0fb30]" />
                    <span>توصيل خلال 24 إلى 48 ساعة فقط</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <RefreshCw className="w-4 h-4 text-[#b0fb30]" />
                    <span>استبدال واسترجاع مجاني وسلس خلال 14 يوماً</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-[#b0fb30]" />
                    <span>معاينة حقيقية قبل الاستلام والدفع</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (in RTL: Left visual column): High-Res Texture Macro Photo (Matches Reference Image) */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl group bg-[#14161f]">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=85"
              alt={`${product.name} - جودة وخامة النسيج`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#b0fb30] mb-1">
                BISMILLAH ESSENTIALS
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                خامة قطنية ثقيلة بحياكة مصرية فاخرة
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
