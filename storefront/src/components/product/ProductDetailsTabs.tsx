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
                  {product.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3 h-3 text-[#f59e0b]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "source" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  نحن نضمن أن جميع أعسالنا غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
                </p>
                <div className="p-4 rounded-xl bg-[#14161f] border border-gray-800 space-y-2">
                  <span className="text-xs font-bold text-[#f59e0b] block">المكونات والنقاء:</span>
                  <p className="text-xs text-gray-300">{product.material}</p>
                  <p className="text-[11px] text-gray-400">الفحص المخبري: نسبة سكروز 0%، خالٍ تماماً من بقايا المبيدات والمضادات الحيوية والتغذية السكرية.</p>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء فاتر.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#14161f] border border-gray-800 text-center">
                    <span className="text-xs font-bold text-white block">طريقة الحفظ</span>
                    <span className="text-xs text-gray-400">في درجة حرارة الغرفة بعيداً عن الشمس</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#14161f] border border-gray-800 text-center">
                    <span className="text-xs font-bold text-white block">أداة الاستخدام</span>
                    <span className="text-xs text-[#f59e0b]">ملعقة خشبية أو بلاستيكية</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  تغليف آمن ومقاوم للكسر مع شحن سريع لكافة المحافظات، مع ميزة الضمان الذهبي الكامل (تذوق وافحص قبل الدفع).
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <Truck className="w-4 h-4 text-[#f59e0b]" />
                    <span>توصيل سريع ومغلف بعناية خلال 24-48 ساعة</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <RefreshCw className="w-4 h-4 text-[#f59e0b]" />
                    <span>الضمان الذهبي: استرجاع فوري إذا لم ينل إعجابك</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                    <span>معاينة وتذوق مع المندوب قبل استلام الشحنة</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Column (in RTL: Left visual column): High-Res Honey Texture Photo */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl group bg-[#14161f]">
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=85"
              alt={`${product.name} - خلايا وشمع العسل الطبيعي`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#f59e0b] mb-1">
                BISMILLAH PURE HONEY
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

