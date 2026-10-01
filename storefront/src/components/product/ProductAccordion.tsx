"use client";

import React from "react";
import { Sparkles, Shirt, ShieldCheck, Truck, RefreshCw, Droplets } from "lucide-react";
import { ProductItem } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductAccordionProps {
  product: ProductItem;
}

export default function ProductAccordion({ product }: ProductAccordionProps) {
  return (
    <Accordion defaultValue={["specs", "fabric"]} className="w-full">
      {/* 1. Specifications & Quality */}
      <AccordionItem value="specs">
        <AccordionTrigger icon={<Sparkles className="w-4 h-4" />}>
          المواصفات والضمان
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-white font-medium">تفاصيل القطعة والخامة</p>
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
        </AccordionContent>
      </AccordionItem>

      {/* 2. Fabric & Material */}
      <AccordionItem value="fabric">
        <AccordionTrigger icon={<Shirt className="w-4 h-4" />}>
          نوع النسيج والخامة
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-[#b0fb30] font-bold">
              {product.material || "قطن مصري ميلتون مبطن ناعم 100%"}
            </p>
            <p className="text-gray-400">
              نسيج فاخر ناعم الملمس، عالي الكثافة، يمنحك الدفء والراحة الفائقة مع ملمس قطني طبيعي يمنع التحسس ويسمح بتهوية مثالية.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* 3. Washing & Care Instructions */}
      <AccordionItem value="wash">
        <AccordionTrigger icon={<Droplets className="w-4 h-4" />}>
          تعليمات الغسيل والعناية
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
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
        </AccordionContent>
      </AccordionItem>

      {/* 4. Shipping & Delivery */}
      <AccordionItem value="shipping">
        <AccordionTrigger icon={<Truck className="w-4 h-4" />}>
          الشحن والتوصيل السريع
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-white font-bold">شحن سريع خلال 24-48 ساعة</p>
            <p className="text-gray-400">
              نوفر خدمة الشحن الفوري لجميع محافظات جمهورية مصر العربية مع إرسال رسائل تتبع مباشرة لحالة طلبك خطوة بخطوة حتى باب منزلك.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* 5. Guarantees & Returns */}
      <AccordionItem value="returns">
        <AccordionTrigger icon={<ShieldCheck className="w-4 h-4" />}>
          المعاينة قبل الدفع وسياسة الاسترجاع
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
