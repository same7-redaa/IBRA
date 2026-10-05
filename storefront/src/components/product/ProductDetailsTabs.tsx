"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem } from "@/data/products";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  RefreshCw,
  ChevronDown,
  FileCheck2,
  HelpCircle,
  Award,
  Check
} from "lucide-react";

interface ProductDetailsTabsProps {
  product: ProductItem;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  // Single-open accordion state (first item open by default)
  const [openItem, setOpenItem] = useState<string | null>("details");

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const accordionSections = [
    {
      id: "details",
      title: "الفوائد والمواصفات الغذائية",
      subtitle: "المكونات، الفوائد الصحية والخصائص الفريدة",
      artImage: "/prod_art_1.jpg",
      artAlt: "رسمة نباتات طبيعية",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
            {product.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs sm:text-sm text-[#221c15]"
              >
                <div className="w-5 h-5 rounded-full bg-[#d97706]/15 border border-[#d97706]/30 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#d97706] stroke-[3]" />
                </div>
                <span className="font-bold">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "source",
      title: "المصدر وشهادة الفحص المخبري",
      subtitle: "نقاء تام، خام 100% وبأعلى معايير الجودة العالمية",
      artImage: "/prod_art_2.jpg",
      artAlt: "رسمة مناحل وأزهار برية",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
            نحن نضمن أن جميع أعسال مناحل زوين غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fbf7ee] border border-[#ebdcc9] space-y-2.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#d97706]">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>نتائج الفحص والتحليل المخبري المعتمد:</span>
            </div>
            <p className="text-xs sm:text-sm text-[#221c15] font-semibold">{product.material}</p>
            <div className="pt-2 border-t border-[#ebdcc9] flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5c4f42]">
              <span>• نسبة سكروز 0% طبيعية</span>
              <span>• خالٍ تماماً من التغذية السكرية</span>
              <span>• خالٍ من المبيدات والمضادات الحيوية</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      title: "طريقة الاستخدام وتوصيات الحفظ",
      subtitle: "الجرعة اليومية المثالية وأفضل طرق التخزين للحفاظ على الإنزيمات",
      artImage: "/prod_art_3.jpg",
      artAlt: "رسمة خلايا العسل التراثية",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
            للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء دافئ (أقل من 40 درجة مئوية).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9]">
              <span className="text-xs sm:text-sm font-black text-[#221c15] block mb-1.5">طريقة الحفظ المثالية</span>
              <span className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed block">
                في مكان جاف بدرجة حرارة الغرفة (20-25° م) بعيداً عن أشعة الشمس المباشرة.
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9]">
              <span className="text-xs sm:text-sm font-black text-[#221c15] block mb-1.5">أداة الاستخدام الموصى بها</span>
              <span className="text-xs sm:text-sm text-[#d97706] font-bold leading-relaxed block">
                ملعقة خشبية أو بلاستيكية مخصصة للعسل لتجنب تفاعل الإنزيمات الحية مع المعادن.
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "الشحن والضمان الذهبي للاسترجاع",
      subtitle: "شحن آمن وتجربة التذوق قبل الاستلام مع ضمان الاسترجاع الفوري",
      artImage: "/pattern_1.jpg",
      artAlt: "رسمة نقشة العسل الطبيعي",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-[#5c4f42] leading-relaxed">
            شحن فوري ومؤمّن داخل عبوات مخصصة لحماية الزجاج من الكسر، مع ميزة التذوق والمعاينة قبل دفع الحساب.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs sm:text-sm text-[#221c15]">
              <Truck className="w-5 h-5 text-[#d97706] shrink-0" />
              <span className="font-bold">توصيل سريع خلال 24-48 ساعة</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs sm:text-sm text-[#221c15]">
              <RefreshCw className="w-5 h-5 text-[#d97706] shrink-0" />
              <span className="font-bold">ضمان استرجاع فوري 100%</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs sm:text-sm text-[#221c15]">
              <ShieldCheck className="w-5 h-5 text-[#d97706] shrink-0" />
              <span className="font-bold">تذوق وافحص مع المندوب</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full border-t border-[#ebdcc9] pt-12 mt-12 mb-16 relative z-20">
      
      {/* Section Title */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#221c15] tracking-tight">
          تفاصيل ومعلومات <span className="text-[#d97706]">المنتج</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#5c4f42] mt-1 font-medium">
          كل ما تحتاج معرفته عن جودة ومصدر وطريقة استخدام هذا العسل
        </p>
      </div>

      {/* Borderless / Unboxed Accordion Stack */}
      <div className="divide-y divide-[#ebdcc9] border-y border-[#ebdcc9] w-full">
        {accordionSections.map((sec) => {
          const isOpen = openItem === sec.id;
          return (
            <div
              key={sec.id}
              className="w-full transition-colors duration-200"
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(sec.id);
                }}
                className="w-full flex items-center justify-between py-4 sm:py-5 px-1 sm:px-2 text-right transition-colors hover:bg-[#fbf7ee]/60 active:bg-[#fbf7ee] cursor-pointer touch-manipulation select-none group relative z-20"
                aria-expanded={isOpen}
              >
                {/* Title + Artwork Drawing Thumbnail */}
                <div className="flex items-center gap-3 sm:gap-4.5 pointer-events-none">
                  {/* Vintage Botanical Artwork Drawing Thumbnail */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-[#fbf7ee] border border-[#ebdcc9] shrink-0 p-1 flex items-center justify-center shadow-sm group-hover:border-[#d97706]/50 transition-colors">
                    <Image
                      src={sec.artImage}
                      alt={sec.artAlt}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-xl mix-blend-multiply opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <h4 className="font-black text-sm sm:text-lg lg:text-xl text-[#221c15] group-hover:text-[#d97706] transition-colors leading-snug">
                      {sec.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5c4f42] mt-0.5 line-clamp-1 font-medium">
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 mr-1.5 sm:mr-2 pointer-events-none ${
                    isOpen
                      ? "bg-[#d97706] text-white rotate-180 shadow-md shadow-[#d97706]/20"
                      : "bg-[#fbf7ee] border border-[#ebdcc9] text-[#221c15] group-hover:border-[#d97706] group-hover:text-[#d97706]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
              </button>

              {/* Accordion Body Content */}
              {isOpen && (
                <div className="px-1 sm:px-2 pb-6 pt-1 sm:pr-[4.5rem]">
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

