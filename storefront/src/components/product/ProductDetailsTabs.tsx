"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  RefreshCw,
  ChevronDown,
  FileCheck2,
  HelpCircle,
  Award
} from "lucide-react";

interface ProductDetailsTabsProps {
  product: ProductItem;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  // Allow multiple or single open accordion items (default first one open)
  const [openItems, setOpenItems] = useState<string[]>(["details", "source"]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const accordionSections = [
    {
      id: "details",
      title: "الفوائد والمواصفات الغذائية",
      icon: <Sparkles className="w-5 h-5 text-[#d97706]" />,
      content: (
        <div className="space-y-4 pt-2">
          <p className="text-sm text-[#5c4f42] leading-relaxed">
            {product.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs sm:text-sm text-[#221c15]">
                <div className="w-4 h-4 rounded-full bg-white border border-[#ebdcc9] flex items-center justify-center shrink-0">
                  <Sparkles className="w-2.5 h-2.5 text-[#d97706]" />
                </div>
                <span className="font-semibold">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "source",
      title: "المصدر وشهادة الفحص المخبري",
      icon: <FileCheck2 className="w-5 h-5 text-[#d97706]" />,
      content: (
        <div className="space-y-3 pt-2">
          <p className="text-sm text-[#5c4f42] leading-relaxed">
            نحن نضمن أن جميع أعسال مناحل زوين غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
          </p>
          <div className="p-4 rounded-2xl bg-[#fbf7ee] border border-[#ebdcc9] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#d97706]">
              <Award className="w-4 h-4" />
              <span>نتائج الفحص والتحليل المخبري:</span>
            </div>
            <p className="text-xs text-[#221c15] font-medium">{product.material}</p>
            <p className="text-[12px] text-[#5c4f42]">
              • نسبة سكروز 0% • خالٍ تماماً من التغذية السكرية • خالٍ من المبيدات والمضادات الحيوية.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      title: "طريقة الاستخدام وتوصيات الحفظ",
      icon: <HelpCircle className="w-5 h-5 text-[#d97706]" />,
      content: (
        <div className="space-y-3 pt-2">
          <p className="text-sm text-[#5c4f42] leading-relaxed">
            للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء دافئ (أقل من 40 درجة مئوية).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9]">
              <span className="text-xs font-bold text-[#221c15] block mb-1">طريقة الحفظ</span>
              <span className="text-xs text-[#5c4f42]">في مكان جاف بدرجة حرارة الغرفة (20-25° م) بعيداً عن أشعة الشمس المباشرة.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9]">
              <span className="text-xs font-bold text-[#221c15] block mb-1">أداة الاستخدام المثالية</span>
              <span className="text-xs text-[#d97706] font-bold">ملعقة خشبية أو بلاستيكية مخصصة للعسل لتجنب تفاعل الإنزيمات مع المعادن.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "الشحن والضمان الذهبي للاسترجاع",
      icon: <ShieldCheck className="w-5 h-5 text-[#d97706]" />,
      content: (
        <div className="space-y-3 pt-2">
          <p className="text-sm text-[#5c4f42] leading-relaxed">
            شحن فوري ومؤمّن داخل عبوات مخصصة لحماية الزجاج من الكسر، مع ميزة التذوق والمعاينة قبل دفع الحساب.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs text-[#221c15]">
              <Truck className="w-4 h-4 text-[#d97706] shrink-0" />
              <span>توصيل سريع خلال 24-48 ساعة</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs text-[#221c15]">
              <RefreshCw className="w-4 h-4 text-[#d97706] shrink-0" />
              <span>ضمان استرجاع فوري 100%</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs text-[#221c15]">
              <ShieldCheck className="w-4 h-4 text-[#d97706] shrink-0" />
              <span>تذوق وافحص مع المندوب</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full border-t border-[#ebdcc9] pt-12 mt-12 mb-16">
      
      {/* Section Title */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-black text-[#221c15] tracking-tight">
          تفاصيل ومعلومات <span className="text-[#d97706]">المنتج</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#5c4f42] mt-1 font-medium">
          كل ما تحتاج معرفته عن جودة ومصدر وطريقة استخدام هذا العسل
        </p>
      </div>

      {/* Vertical Accordion Stack */}
      <div className="flex flex-col gap-3.5 max-w-4xl">
        {accordionSections.map((sec) => {
          const isOpen = openItems.includes(sec.id);
          return (
            <div
              key={sec.id}
              className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden shadow-sm ${
                isOpen ? "border-[#d97706]/60 shadow-[0_4px_20px_rgba(217,119,6,0.06)]" : "border-[#ebdcc9] hover:border-[#d97706]/40"
              }`}
            >
              {/* Accordion Header Button */}
              <button
                type="button"
                onClick={() => toggleItem(sec.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-right transition-colors hover:bg-[#fbf7ee]/60 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center shrink-0 shadow-sm">
                    {sec.icon}
                  </div>
                  <span className="font-bold text-base sm:text-lg text-[#221c15]">
                    {sec.title}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center text-[#5c4f42] transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#d97706] text-white border-[#d97706]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Body Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-[#ebdcc9]/50 animate-fade-in">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

