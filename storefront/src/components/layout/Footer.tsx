import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 text-[#1e293b] py-12 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(217,119,6,0.25)]"
              />
            </Link>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-bold">
              عسل نحل طبيعي 100% ومفحوص مخبرياً
            </span>
          </div>

          {/* Real Existing Navigation Links Only */}
          <nav className="flex items-center gap-8 text-sm font-bold">
            <Link
              href="/"
              className="text-slate-600 hover:text-[#d97706] transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-slate-600 hover:text-[#d97706] transition-colors"
            >
              جميع المنتجات
            </Link>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#d97706] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>خدمة العملاء</span>
            </a>
          </nav>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-600 font-bold">
            <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
              الدفع عند الاستلام
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
              InstaPay
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
              فودافون كاش
            </span>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>
            جميع الحقوق محفوظة © {currentYear} <span className="text-slate-900 font-bold">مناحل عسل زوين</span> للأعسال الطبيعية والخلطات الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-slate-600 font-bold">
            <ShieldCheck className="w-4 h-4 text-[#d97706]" />
            <span>نقاء وجودة طبيعية 100% مضمونة</span>
            <span>🍯</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

