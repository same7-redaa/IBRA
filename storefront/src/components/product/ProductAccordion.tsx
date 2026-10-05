"use client";

import React from "react";
import { Sparkles, Droplets, ShieldCheck, Truck, RefreshCw } from "lucide-react";
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
    <Accordion type="single" defaultValue="specs" className="w-full">
      {/* 1. Specifications & Quality */}
      <AccordionItem value="specs">
        <AccordionTrigger icon={<Sparkles className="w-4 h-4" />}>
          المواصفات والنقاء المخبري
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-white font-medium">عسل نحل طبيعي 100% غير مبستر</p>
            <p className="text-gray-400">
              جميع منتجاتنا مفحوصة وموثقة مخبرياً بأعلى معايير الجودة لضمان خلوها التام من أي تغذية سكرية أو إضافات صناعية أو مبسترة.
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

      {/* 2. Ingredients & Origin */}
      <AccordionItem value="fabric">
        <AccordionTrigger icon={<Droplets className="w-4 h-4" />}>
          المصدر والمكونات
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-[#b0fb30] font-bold">
              {product.material}
            </p>
            <p className="text-gray-400">
              مستخرج من مناحل جبلية طبيعية معزولة بيئياً لضمان أعلى تركيز للإنزيمات ومضادات الأكسدة الحيوية.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* 3. Storage & Usage */}
      <AccordionItem value="wash">
        <AccordionTrigger icon={<Sparkles className="w-4 h-4" />}>
          طريقة الحفظ والاستخدام الأمثل
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-xs text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#b0fb30] font-bold">•</span>
              <span>يُحفظ في درجة حرارة الغرفة (20-25 مئوية) في مكان جاف ومظلم بعيداً عن أشعة الشمس المباشرة.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b0fb30] font-bold">•</span>
              <span>تجنب استخدام الملاعق المعدنية واستخدم الملاعق الخشبية أو البلاستيكية للحفاظ على فاعلية الإنزيمات.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b0fb30] font-bold">•</span>
              <span>التبلور في بعض أنواع العسل الخام ظاهرة طبيعية تدل على نقاء العسل وعدم تعرضه للتسخين.</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* 4. Shipping & Delivery */}
      <AccordionItem value="shipping">
        <AccordionTrigger icon={<Truck className="w-4 h-4" />}>
          الشحن والتوصيل الآمن
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-white font-bold">شحن سريع وعبوات معزولة ضد الكسر</p>
            <p className="text-gray-400">
              نوفر خدمة الشحن السريع لكافة المحافظات مع تغليف حراري ووسائد هوائية لحماية البرطمانات الزجاجية.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* 5. Guarantees & Returns */}
      <AccordionItem value="returns">
        <AccordionTrigger icon={<ShieldCheck className="w-4 h-4" />}>
          الضمان الذهبي وتذوق العسل قبل الدفع
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#b0fb30] mt-0.5 shrink-0" />
              <div>
                <span className="text-white font-bold">تذوق وافحص مع المندوب: </span>
                <span className="text-gray-400">يحق لك فتح الشحنة وتذوق العسل والتأكد من الجودة قبل دفع أي جنيه.</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <RefreshCw className="w-4 h-4 text-[#b0fb30] mt-0.5 shrink-0" />
              <div>
                <span className="text-white font-bold">استرجاع فوري مضمون: </span>
                <span className="text-gray-400">ضمان استرجاع القيمة كاملة في حال ثبوت عدم نقاء العسل بأي فحص مخبري.</span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
