"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import {
  Sparkles,
  Droplets,
  HeartPulse,
  Truck,
  Package,
  Layers,
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
    <div className="w-full border-t border-slate-200/80 pt-12 mt-16 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column (in RTL: Right visual column): Tabs & Text */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Tab Navigation Header */}
          <div className="flex items-center gap-6 sm:gap-8 border-b border-slate-200 pb-3 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-sm sm:text-base font-black transition-all cursor-pointer whitespace-nowrap pb-3 -mb-3 relative ${
                  activeTab === tab.id
                    ? "text-[#d97706] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d97706]"
                    : "text-slate-500 hover:text-slate-800"
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
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "source" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  نحن نضمن أن جميع أعسالنا غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
                </p>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <span className="text-xs font-bold text-[#d97706] block">المكونات والنقاء:</span>
                  <p className="text-xs text-slate-800 font-bold">{product.material}</p>
                  <p className="text-[11px] text-slate-500">الفحص المخبري: نسبة سكروز 0%، خالٍ تماماً من بقايا المبيدات والمضادات الحيوية والتغذية السكرية.</p>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء فاتر.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                    <span className="text-xs font-bold text-slate-900 block">طريقة الحفظ</span>
                    <span className="text-xs text-slate-500">في درجة حرارة الغرفة بعيداً عن الشمس</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
                    <span className="text-xs font-bold text-slate-900 block">أداة الاستخدام</span>
                    <span className="text-xs text-[#d97706] font-bold">ملعقة خشبية أو بلاستيكية</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  تغليف آمن ومقاوم للكسر مع شحن سريع لكافة المحافظات، مع ميزة الضمان الذهبي الكامل (تذوق وافحص قبل الدفع).
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <Truck className="w-4 h-4 text-[#d97706]" />
                    <span>توصيل سريع ومغلف بعناية خلال 24-48 ساعة</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <RefreshCw className="w-4 h-4 text-[#d97706]" />
                    <span>الضمان الذهبي: استرجاع فوري إذا لم ينل إعجابك</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                    <span>معاينة وتذوق مع المندوب قبل استلام الشحنة</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (in RTL: Left visual column): High-Res Honey Texture Photo */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.06)] group bg-white">
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=85"
              alt={`${product.name} - خلايا وشمع العسل الطبيعي`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#fbbf24] mb-1">
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
