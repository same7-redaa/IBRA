import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck, Phone, CheckCircle2, Award, Truck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c1813] border-t border-[#3d3226] text-[#fbf7ee] pt-14 pb-8 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Top Features Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 mb-12 border-b border-[#3d3226]">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#2a221a]/40 border border-[#3d3226]">
            <div className="w-10 h-10 rounded-xl bg-[#d97706]/15 border border-[#d97706]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">طبيعي ومفحوص 100%</h4>
              <p className="text-xs text-[#c2b5a5]">مفحوص وموثق بأعلى شهادات الجودة</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#2a221a]/40 border border-[#3d3226]">
            <div className="w-10 h-10 rounded-xl bg-[#d97706]/15 border border-[#d97706]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">توصيل سريع وآمن</h4>
              <p className="text-xs text-[#c2b5a5]">شحن لجميع محافظات جمهورية مصر</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#2a221a]/40 border border-[#3d3226]">
            <div className="w-10 h-10 rounded-xl bg-[#d97706]/15 border border-[#d97706]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">ضمان ذهبي شامل</h4>
              <p className="text-xs text-[#c2b5a5]">معاينة الطلب والتذوق قبل الاستلام</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#2a221a]/40 border border-[#3d3226]">
            <div className="w-10 h-10 rounded-xl bg-[#25d366]/15 border border-[#25d366]/30 flex items-center justify-center text-[#25d366] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">دعم مستمر 24/7</h4>
              <p className="text-xs text-[#c2b5a5]">استشارات وخدمة عملاء عبر واتساب</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3d3226]">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
              />
              <span className="text-2xl font-black text-white">عسل زوين</span>
            </Link>
            <p className="text-xs text-[#c2b5a5] leading-relaxed">
              من أفخر المناحل الطبيعية، نقدم لكم خلاصة الطبيعة النقية بأعلى درجات الجودة والفحص المخبري المعتمد، لنضمن لكم ولعائلتكم صحة ونقاء لا مثيل له.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#f59e0b] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>مرخص وموثق رسميـاً</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-white">روابط سريعة</h3>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <Link href="/" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> كافة الأعسال والمنتجات
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> التصنيفات والمجموعات
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> العروض الحصرية والخصومات
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> إتمام الطلب والدفع
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Category Highlights */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-white">أبرز الأقسام</h3>
            <ul className="space-y-2.5 text-xs font-bold">
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> الأعسال الملكية الفاخرة
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> خلطات المناعة والطاقة
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> عسل الكهوف الطبيعي
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> شمع العسل العضوي
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors flex items-center gap-2">
                  <span>←</span> صحة الجهاز التنفسي والهضمي
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Orders */}
          <div className="space-y-4">
            <h3 className="text-base font-black text-white">خدمة العملاء والطلب</h3>
            <p className="text-xs text-[#c2b5a5]">
              فريقنا متواجد للرد على كافة الاستفسارات ومساعدتك في اختيار العسل الأنسب لاحتياجك.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/40 text-[#25d366] text-xs font-black transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>محادثة فورية عبر واتساب</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#c2b5a5]">
                <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>الخط الساخن: <strong className="text-white">01000000000</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Payments Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8a7a6b]">
          <p className="text-center md:text-right">
            جميع الحقوق محفوظة © {currentYear} <span className="text-white font-bold">مناحل عسل زوين</span> للأعسال الطبيعية والخلطات الفاخرة.
          </p>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center text-[11px] text-[#c2b5a5] font-bold">
            <span className="px-3 py-1.5 rounded-lg bg-[#2a221a] border border-[#4a3d2e] text-[#fbf7ee]">
              الدفع عند الاستلام (COD)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#2a221a] border border-[#4a3d2e] text-[#f59e0b]">
              InstaPay إنستاباي
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#2a221a] border border-[#4a3d2e] text-amber-400">
              فودافون كاش
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
