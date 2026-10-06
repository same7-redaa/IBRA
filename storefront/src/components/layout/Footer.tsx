import React from "react";
import Link from "next/link";
import { MessageCircle, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent text-white pt-16 pb-8 mt-auto relative z-10 overflow-hidden">
      {/* Seamless Black Gradient Transition at Top */}
      <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/5">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3.5">
            <Link
              href="/"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <span className="text-xl sm:text-2xl font-black text-white tracking-wider">
                ابـــراهـــيــــم <span className="text-[#FF8B2C] drop-shadow-[0_0_14px_rgba(255,139,44,0.55)]">عـــــلــــي</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-300 leading-relaxed max-w-xs font-medium">
              خبير تسويق رقمي، إدارة الحملات الإعلانية وتوسيع المتاجر الإلكترونية. بناء استراتيجيات نمو تعتمد على تحليل البيانات لتعظيم العائد الاستثماري (ROAS).
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FF8B2C] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>نتائج موثقة بالأرقام ومعدلات تحويل قياسية</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">خـــدمـــاتـــي</h3>
            <ul className="space-y-2 text-xs font-bold text-zinc-400">
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>شراء وإدارة الحملات (Media Buying)</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>تحسين معدلات التحويل (CRO)</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>استراتيجيات البراند وتوسيع المتاجر</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>التصميم الجرافيكي والإعلاني</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>التحليلات المتقدمة والتقارير</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-black text-white tracking-wide">أقـــســـام الـــمـــوقـــع</h3>
            <ul className="space-y-2 text-xs font-bold text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>خدماتي الاحترافية</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>معارض الأعمال ودراسات الحالة</span>
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>أثر يُثبت بالأرقام</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#FF8B2C] transition-colors flex items-center gap-1">
                  <span>تواصل معي واطلب مشروعك</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Consultation */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-black text-white tracking-wide">اســـتـــشـــارة وتـــواصـــل</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              هل ترغب في مضاعفة مبيعات متجرك وتوسيع حملاتك الإعلانية؟ دعنا نبدأ الآن.
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

            <div className="flex items-center gap-2 pt-1">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8B2C] hover:text-[#FFA857] transition-colors"
              >
                <span>حجز جلسة استراتيجية</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-medium">
          <p>
            جميع الحقوق محفوظة © {currentYear} إبراهيم علي | خبير التسويق الرقمي وتوسيع المتاجر.
          </p>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span className="text-[#FF8B2C] font-bold">●</span>
            <span>جاهز لاستقبال المشروعات والشراكات الجديدة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


