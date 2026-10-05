import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08090d] border-t border-gray-900/80 text-white py-10 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900/70">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white hover:opacity-90 transition-opacity"
            >
              BISM<span className="text-[#f59e0b]">ILLAH</span>
            </Link>
            <span className="hidden sm:inline-block text-gray-700">|</span>
            <span className="text-xs text-gray-400 font-medium">
              عسل نحل طبيعي 100% ومفحوص مخبرياً
            </span>
          </div>

          {/* Real Existing Navigation Links Only */}
          <nav className="flex items-center gap-8 text-sm font-bold">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#f59e0b] transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-gray-300 hover:text-[#f59e0b] transition-colors"
            >
              جميع المنتجات
            </Link>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>خدمة العملاء</span>
            </a>
          </nav>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[11px] text-gray-400 font-bold">
            <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800">
              الدفع عند الاستلام
            </span>
            <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800 text-[#f59e0b]">
              InstaPay
            </span>
            <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800 text-amber-400">
              فودافون كاش
            </span>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            جميع الحقوق محفوظة © {currentYear} <span className="text-white font-bold">مناحل BISMILLAH</span> لعسل النحل الطبيعي والأعشاب الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>نقاء وجودة طبيعية 100% مضمونة</span>
            <span>🍯</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
