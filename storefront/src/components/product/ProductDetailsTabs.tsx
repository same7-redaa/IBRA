"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

interface ProductDetailsTabsProps {
  product: ProductItem;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<"details" | "source" | "usage" | "shipping">("details");

  const tabs = [
    { id: "details", label: "الفوائد والمواصفات" },
    { id: "source", label: "المصدر والنقاء المخبري" },
    { id: "usage", label: "طريقة الاستخدام والحفظ" },
    { id: "shipping", label: "الشحن والضمان الذهبي" },
  ];

  return (
    <div className="w-full border-t border-[#ebdcc9] pt-12 mt-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Right Column in RTL: Tabs & Text */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Tab Navigation Header */}
          <div className="flex items-center gap-6 sm:gap-8 border-b border-[#ebdcc9] pb-3 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-sm sm:text-base font-black transition-all cursor-pointer whitespace-nowrap pb-3 -mb-3 relative ${
                  activeTab === tab.id
                    ? "text-[#d97706] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d97706]"
                    : "text-[#8a7a6b] hover:text-[#221c15]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[220px]">
            {activeTab === "details" && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#221c15]">
                      <div className="w-5 h-5 rounded-full bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3 text-[#d97706]" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "source" && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
                  نحن نضمن أن جميع أعسالنا غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-[#ebdcc9] space-y-2 shadow-sm">
                  <span className="text-xs font-bold text-[#d97706] block">المكونات والنقاء:</span>
                  <p className="text-xs text-[#221c15] font-medium">{product.material}</p>
                  <p className="text-[11px] text-[#8a7a6b]">الفحص المخبري: نسبة سكروز 0%، خالٍ تماماً من بقايا المبيدات والمضادات الحيوية والتغذية السكرية.</p>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
                  للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء فاتر.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-[#ebdcc9] text-center shadow-sm">
                    <span className="text-xs font-bold text-[#221c15] block">طريقة الحفظ</span>
                    <span className="text-xs text-[#8a7a6b]">في درجة حرارة الغرفة بعيداً عن الشمس</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#ebdcc9] text-center shadow-sm">
                    <span className="text-xs font-bold text-[#221c15] block">أداة الاستخدام</span>
                    <span className="text-xs text-[#d97706] font-bold">ملعقة خشبية أو بلاستيكية</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
                  تغليف آمن ومقاوم للكسر مع شحن سريع لكافة المحافظات، مع ميزة الضمان الذهبي الكامل (تذوق وافحص قبل الدفع).
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-[#221c15]">
                    <Truck className="w-4 h-4 text-[#d97706]" />
                    <span>توصيل سريع ومغلف بعناية خلال 24-48 ساعة</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#221c15]">
                    <RefreshCw className="w-4 h-4 text-[#d97706]" />
                    <span>الضمان الذهبي: استرجاع فوري إذا لم ينل إعجابك</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#221c15]">
                    <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                    <span>معاينة وتذوق مع المندوب قبل استلام الشحنة</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Left Column in RTL: High-Res Honey Texture Photo */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-[#ebdcc9] shadow-md group bg-white">
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=85"
              alt={`${product.name} - خلايا وشمع العسل الطبيعي`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#f59e0b] mb-1">
                مناحل عسل زوين الفاخرة
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                عسل نحل طبيعي 100% مستخرج مباشرة من الخلايا الجبلية
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

