import React from "react";
import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1c1813] border-t border-[#3d3226] text-[#fbf7ee] py-10 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3d3226]/80">
          
          {/* Logo Only (No text next to it) */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)]"
              />
            </Link>
          </div>

          {/* Clean Horizontal Navigation Links */}
          <nav className="flex items-center flex-wrap justify-center gap-6 sm:gap-8 text-sm font-bold">
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
              المنتجات
            </Link>
            <Link
              href="/categories"
              className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors"
            >
              الفئات
            </Link>
            <Link
              href="/offers"
              className="text-[#c2b5a5] hover:text-[#f59e0b] transition-colors"
            >
              العروض
            </Link>
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c2b5a5] hover:text-[#25d366] flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>تواصل معنا</span>
            </a>
          </nav>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center text-[11px] text-[#c2b5a5] font-bold">
            <span className="px-2.5 py-1 rounded-lg bg-[#2a221a] border border-[#3d3226]">
              الدفع عند الاستلام
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#2a221a] border border-[#3d3226] text-[#f59e0b]">
              InstaPay
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#2a221a] border border-[#3d3226] text-amber-400">
              فودافون كاش
            </span>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8a7a6b]">
          <p>
            جميع الحقوق محفوظة © {currentYear} مناحل الأعسال الطبيعية والخلطات الفاخرة.
          </p>
          <div className="flex items-center gap-1.5 text-[#c2b5a5]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>نقاء وجودة طبيعية 100% مضمونة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

