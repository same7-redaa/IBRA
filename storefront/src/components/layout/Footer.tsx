import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c1813] border-t border-[#3d3226] text-[#fbf7ee] pt-12 pb-8 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-[#3d3226]/80">
          
          {/* Column 1: Brand & Quality Mission */}
          <div className="space-y-3.5">
            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)]"
              />
            </Link>
            <p className="text-xs text-[#c2b5a5] leading-relaxed max-w-xs font-medium">
              نقدم لكم خلاصة الطبيعة النقية من أجود المناحل الطبيعية، مفحوصة وموثقة مخبرياً لضمان أعلى معايير الجودة والأمانة.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#f59e0b] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>نقاء وجودة طبيعية 100% مضمونة</span>
            </div>
          </div>

          {/* Column 2: Natural Honeys & Blends */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">أعسال وخلطات فاخرة</h3>
            <ul className="space-y-2 text-xs font-bold text-[#c2b5a5]">
              <li>
                <Link href="/categories/royal" className="hover:text-[#f59e0b] transition-colors">
                  عسل ملكي فاخر
                </Link>
              </li>
              <li>
                <Link href="/categories/special_blends" className="hover:text-[#f59e0b] transition-colors">
                  خلطات زوين الخاصة
                </Link>
              </li>
              <li>
                <Link href="/categories/cave_honey" className="hover:text-[#f59e0b] transition-colors">
                  عسل الكهوف الجبلي
                </Link>
              </li>
              <li>
                <Link href="/categories/honeycomb" className="hover:text-[#f59e0b] transition-colors">
                  شمع العسل العضوي
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-[#f59e0b] transition-colors">
                  العروض والباقات الخاصة
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Health Needs */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">حسب احتياجك الصحي</h3>
            <ul className="space-y-2 text-xs font-bold text-[#c2b5a5]">
              <li>
                <Link href="/categories/immunity_energy" className="hover:text-[#f59e0b] transition-colors">
                  المناعة والطاقة الحيوية
                </Link>
              </li>
              <li>
                <Link href="/categories/respiratory" className="hover:text-[#f59e0b] transition-colors">
                  الصحة التنفسية والمدخنون
                </Link>
              </li>
              <li>
                <Link href="/categories/digestive" className="hover:text-[#f59e0b] transition-colors">
                  صحة الجهاز الهضمي والقولون
                </Link>
              </li>
              <li>
                <Link href="/categories/diabetic_friendly" className="hover:text-[#f59e0b] transition-colors">
                  أعسال مناسبة لمرضى السكري
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#f59e0b] transition-colors">
                  استعراض كافة الفئات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Payment */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-black text-white tracking-wide">خدمة العملاء والطلب</h3>
            <p className="text-xs text-[#c2b5a5] leading-relaxed">
              فريقنا جاهز لمساعدتك والرد على استفساراتك على مدار الساعة.
            </p>
            
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] text-xs font-black transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة فورية عبر واتساب</span>
            </a>

            <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-bold text-[#c2b5a5]">
              <span className="px-2 py-1 rounded-md bg-[#2a221a] border border-[#3d3226]">
                الدفع عند الاستلام
              </span>
              <span className="px-2 py-1 rounded-md bg-[#2a221a] border border-[#3d3226] text-[#f59e0b]">
                InstaPay
              </span>
              <span className="px-2 py-1 rounded-md bg-[#2a221a] border border-[#3d3226] text-amber-400">
                فودافون كاش
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8a7a6b]">
          <p>
            جميع الحقوق محفوظة © {currentYear} مناحل الأعسال الطبيعية والخلطات الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-[#c2b5a5]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>معاينة وتذوق الطلب متاح قبل الاستلام</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


