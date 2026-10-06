import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent text-white pt-16 pb-8 mt-auto relative z-10 overflow-hidden">
      {/* Seamless Black Gradient Transition at Top */}
      <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/5">
          
          {/* Column 1: Brand & Quality Mission */}
          <div className="space-y-3.5">
            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="عسل زوين"
                width={130}
                height={48}
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,139,44,0.35)]"
              />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-medium">
              نقدم لكم خلاصة الطبيعة النقية من أجود المناحل الطبيعية، مفحوصة وموثقة مخبرياً لضمان أعلى معايير الجودة والأمانة.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FF8B2C] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>نقاء وجودة طبيعية 100% مضمونة</span>
            </div>
          </div>

          {/* Column 2: Natural Honeys & Blends */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">أعسال وخلطات فاخرة</h3>
            <ul className="space-y-2 text-xs font-bold text-zinc-400">
              <li>
                <Link href="/categories/royal" className="hover:text-[#FF8B2C] transition-colors">
                  عسل ملكي فاخر
                </Link>
              </li>
              <li>
                <Link href="/categories/special_blends" className="hover:text-[#FF8B2C] transition-colors">
                  خلطات زوين الخاصة
                </Link>
              </li>
              <li>
                <Link href="/categories/cave_honey" className="hover:text-[#FF8B2C] transition-colors">
                  عسل الكهوف الجبلي
                </Link>
              </li>
              <li>
                <Link href="/categories/honeycomb" className="hover:text-[#FF8B2C] transition-colors">
                  شمع العسل العضوي
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-[#FF8B2C] transition-colors">
                  العروض والباقات الخاصة
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Health Needs */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">حسب احتياجك الصحي</h3>
            <ul className="space-y-2 text-xs font-bold text-zinc-400">
              <li>
                <Link href="/categories/immunity_energy" className="hover:text-[#FF8B2C] transition-colors">
                  المناعة والطاقة الحيوية
                </Link>
              </li>
              <li>
                <Link href="/categories/respiratory" className="hover:text-[#FF8B2C] transition-colors">
                  الصحة التنفسية والمدخنون
                </Link>
              </li>
              <li>
                <Link href="/categories/digestive" className="hover:text-[#FF8B2C] transition-colors">
                  صحة الجهاز الهضمي والقولون
                </Link>
              </li>
              <li>
                <Link href="/categories/diabetic_friendly" className="hover:text-[#FF8B2C] transition-colors">
                  أعسال مناسبة لمرضى السكري
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#FF8B2C] transition-colors">
                  استعراض كافة الفئات
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Payment */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-black text-white tracking-wide">خدمة العملاء والطلب</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              فريقنا جاهز لمساعدتك والرد على استفساراتك على مدار الساعة.
            </p>
            
            <a
              href="https://wa.me/201023160657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] text-xs font-black transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة فورية عبر واتساب</span>
            </a>

            <div className="flex items-center gap-1.5 flex-wrap text-[10px] font-bold text-zinc-300">
              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                الدفع عند الاستلام
              </span>
              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[#FF8B2C]">
                InstaPay
              </span>
              <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-amber-400">
                فودافون كاش
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            جميع الحقوق محفوظة © {currentYear} مناحل الأعسال الطبيعية والخلطات الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF8B2C]" />
            <span>معاينة وتذوق الطلب متاح قبل الاستلام</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


