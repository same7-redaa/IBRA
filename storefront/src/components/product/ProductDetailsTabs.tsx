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
      artImage: "/bg-art/logo.png",
      artAlt: "لوجو زوين الذهبي",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {product.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl glass-card text-xs sm:text-sm text-white"
              >
                <div className="w-5 h-5 rounded-full bg-[#FF8B2C]/20 border border-[#FF8B2C]/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#FF8B2C] stroke-[3]" />
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
      artImage: "/bg-art/social-media.png",
      artAlt: "فحص وضمان الجودة",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            نحن نضمن أن جميع أعسال مناحل زوين غير مبسترة، خام تماماً، ولم تتعرض لأي درجات حرارة تفقدها الإنزيمات الحية والخصائص العلاجية الطبيعية.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl glass-card space-y-2.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#FF8B2C]">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>نتائج الفحص والتحليل المخبري المعتمد:</span>
            </div>
            <p className="text-xs sm:text-sm text-white font-semibold">{product.material}</p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400">
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
      artImage: "/bg-art/google.png",
      artAlt: "طريقة الاستخدام",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            للحصول على أقصى فائدة صحية وعلاجية، يُنصح بتناول ملعقة طعام صباحاً على الريق إما مباشرة أو مذابة في نصف كوب ماء دافئ (أقل من 40 درجة مئوية).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-4 rounded-xl glass-card">
              <span className="text-xs sm:text-sm font-black text-white block mb-1.5">طريقة الحفظ المثالية</span>
              <span className="text-xs sm:text-sm text-zinc-400 leading-relaxed block">
                في مكان جاف بدرجة حرارة الغرفة (20-25° م) بعيداً عن أشعة الشمس المباشرة.
              </span>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <span className="text-xs sm:text-sm font-black text-white block mb-1.5">أداة الاستخدام الموصى بها</span>
              <span className="text-xs sm:text-sm text-[#FF8B2C] font-bold leading-relaxed block">
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
      artImage: "/bg-art/facebook-page.png",
      artAlt: "الشحن والضمان الذهبي",
      content: (
        <div className="space-y-4 pt-1 pb-4">
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            شحن فوري ومؤمّن داخل عبوات مخصصة لحماية الزجاج من الكسر، مع ميزة التذوق والمعاينة قبل دفع الحساب.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card text-xs sm:text-sm text-white">
              <Truck className="w-5 h-5 text-[#FF8B2C] shrink-0" />
              <span className="font-bold">توصيل سريع خلال 24-48 ساعة</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card text-xs sm:text-sm text-white">
              <RefreshCw className="w-5 h-5 text-[#FF8B2C] shrink-0" />
              <span className="font-bold">ضمان استرجاع فوري 100%</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card text-xs sm:text-sm text-white">
              <ShieldCheck className="w-5 h-5 text-[#FF8B2C] shrink-0" />
              <span className="font-bold">تذوق وافحص مع المندوب</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full pt-12 mt-12 mb-16 relative z-20">
      
      {/* Section Title */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
          تفاصيل ومعلومات <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">المنتج</span>
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
          كل ما تحتاج معرفته عن جودة ومصدر وطريقة استخدام هذا العسل
        </p>
      </div>

      {/* Borderless / Unboxed Accordion Stack */}
      <div className="divide-y divide-white/10 border-y border-white/10 w-full">
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
                className="w-full flex items-center justify-between py-4 sm:py-5 px-1 sm:px-2 text-right transition-colors hover:bg-white/5 active:bg-white/10 cursor-pointer touch-manipulation select-none group relative z-20"
                aria-expanded={isOpen}
              >
                {/* Title + Artwork Drawing Thumbnail */}
                <div className="flex items-center gap-3 sm:gap-4.5 pointer-events-none">
                  {/* Vintage Botanical Artwork Drawing Thumbnail */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0 p-1 flex items-center justify-center shadow-sm group-hover:border-[#FF8B2C]/50 transition-colors">
                    <Image
                      src={sec.artImage}
                      alt={sec.artAlt}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-xl mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <h4 className="font-black text-sm sm:text-lg lg:text-xl text-white group-hover:text-[#FF8B2C] transition-colors leading-snug">
                      {sec.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1 font-medium">
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 mr-1.5 sm:mr-2 pointer-events-none ${
                    isOpen
                      ? "bg-[#FF8B2C] text-black rotate-180 shadow-md shadow-[#FF8B2C]/30"
                      : "bg-white/5 border border-white/10 text-zinc-300 group-hover:border-[#FF8B2C] group-hover:text-[#FF8B2C]"
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

