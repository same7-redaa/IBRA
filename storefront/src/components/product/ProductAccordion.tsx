"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, Shirt, ShieldCheck, Truck, RefreshCw, HelpCircle, Droplets } from "lucide-react";
import { ProductItem } from "@/data/products";

interface ProductAccordionProps {
  product: ProductItem;
}

interface AccordionItemData {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

export default function ProductAccordion({ product }: ProductAccordionProps) {
  // First item open by default
  const [openItems, setOpenItems] = useState<string[]>(["specs", "fabric"]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const items: AccordionItemData[] = [
    {
      id: "specs",
      title: "المواصفات والضمان",
      icon: Sparkles,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p className="text-white font-medium">
            تفاصيل القطعة والخامة
          </p>
          <p className="text-gray-400">
            جميع منتجاتنا مصنعة بأعلى معايير الجودة العالمية لنضمن لك راحة تامة ومظهراً فخماً يدوم طويلاً مع ثبات الألوان وعدم الانكماش بعد الغسيل.
          </p>
          {product.features && product.features.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b0fb30] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ),
    },
    {
      id: "fabric",
      title: "نوع النسيج والخامة",
      icon: Shirt,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p className="text-[#b0fb30] font-bold">
            {product.material || "قطن مصري ميلتون مبطن ناعم 100%"}
          </p>
          <p className="text-gray-400">
            نسيج فاخر ناعم الملمس، عالي الكثافة، يمنحك الدفء والراحة الفائقة مع ملمس قطني طبيعي يمنع التحسس ويسمح بتهوية مثالية.
          </p>
        </div>
      ),
    },
    {
      id: "wash",
      title: "تعليمات الغسيل والعناية",
      icon: Droplets,
      content: (
        <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#b0fb30] font-bold">•</span>
            <span>غسيل في الغسالة بماء بارد (30 درجة مئوية كحد أقصى).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b0fb30] font-bold">•</span>
            <span>يُفضل قلب القطعة على الظهر قبل الغسيل للحفاظ على ثبات الألوان ونعومة السطح.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b0fb30] font-bold">•</span>
            <span>ممنوع استخدام المبيضات أو الكلور.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b0fb30] font-bold">•</span>
            <span>الكي على درجة حرارة منخفضة وتجنب الكي المباشر على الطبعات.</span>
          </li>
        </ul>
      ),
    },
    {
      id: "shipping",
      title: "الشحن والتوصيل السريع",
      icon: Truck,
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p className="text-white font-bold">
            شحن سريع خلال 24-48 ساعة
          </p>
          <p className="text-gray-400">
            نوفر خدمة الشحن الفوري لجميع محافظات جمهورية مصر العربية مع إرسال رسائل تتبع مباشرة لحالة طلبك خطوة بخطوة حتى باب منزلك.
          </p>
        </div>
      ),
    },
    {
      id: "guarantee",
      title: "المعاينة قبل الدفع وسياسة الاسترجاع",
      icon: ShieldCheck,
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#b0fb30] mt-0.5 shrink-0" />
            <div>
              <span className="text-white font-bold">معاينة قبل الدفع: </span>
              <span className="text-gray-400">حق الفحص والمعاينة متاح مع مندوب الشحن للتأكد من المقاس والجودة قبل استلام الطلب ودفع القيمة.</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <RefreshCw className="w-4 h-4 text-[#b0fb30] mt-0.5 shrink-0" />
            <div>
              <span className="text-white font-bold">استرجاع مجاني خلال 14 يوماً: </span>
              <span className="text-gray-400">إمكانية الاستبدال أو الاسترجاع بكل سهولة وبدون أي تعقيدات إذا لم تناسبك القطعة.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className={`rounded-[5px] border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#14161f] border-gray-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                : "bg-[#10121a]/70 border-gray-800/80 hover:border-gray-700"
            }`}
          >
            {/* Header Accordion Button */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 flex items-center justify-between text-right gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-[5px] flex items-center justify-center transition-colors ${
                  isOpen ? "bg-[#b0fb30]/15 text-[#b0fb30]" : "bg-gray-800/60 text-gray-400"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`font-bold text-sm sm:text-base transition-colors ${
                  isOpen ? "text-white" : "text-gray-300"
                }`}>
                  {item.title}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-[5px] flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#b0fb30] bg-[#b0fb30]/10" : "text-gray-400 bg-gray-800/40"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="px-5 pb-5 pt-1 border-t border-gray-800/50 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
