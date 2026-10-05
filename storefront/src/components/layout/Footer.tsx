import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c1813] border-t border-[#3d3226] text-[#fbf7ee] py-10 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3d3226]">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
              />
              <span className="text-xl sm:text-2xl font-black text-white">عسل زوين</span>
            </Link>
            <span className="hidden sm:inline-block text-[#5c4f42]">|</span>
            <span className="text-xs text-[#c2b5a5] font-medium">
              عسل نحل طبيعي 100% ومفحوص مخبرياً
            </span>
          </div>

          {/* Real Existing Navigation Links Only */}
          <nav className="flex items-center gap-8 text-sm font-bold">
            <Link
              href="/"
              className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors"
            >
              جميع المنتجات
            </Link>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c2b5a5] hover:text-[#f59e0b] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>خدمة العملاء</span>
            </a>
          </nav>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[11px] text-[#c2b5a5] font-bold">
            <span className="px-2.5 py-1 rounded-[5px] bg-[#2a221a] border border-[#4a3d2e]">
              الدفع عند الاستلام
            </span>
            <span className="px-2.5 py-1 rounded-[5px] bg-[#2a221a] border border-[#4a3d2e] text-[#f59e0b]">
              InstaPay
            </span>
            <span className="px-2.5 py-1 rounded-[5px] bg-[#2a221a] border border-[#4a3d2e] text-amber-400">
              فودافون كاش
            </span>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8a7a6b]">
          <p>
            جميع الحقوق محفوظة © {currentYear} <span className="text-white font-bold">مناحل عسل زوين</span> للأعسال الطبيعية والخلطات الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-[#c2b5a5]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>نقاء وجودة طبيعية 100% مضمونة</span>
            <span>🍯</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
