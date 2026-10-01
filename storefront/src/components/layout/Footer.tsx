import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#08090d] border-t border-gray-900 text-white pt-16 pb-12 mt-auto">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-gray-900/80">
          <div className="flex items-center gap-4 p-4 rounded-[5px] bg-[#10121a]/80 border border-gray-800/60">
            <div className="w-12 h-12 rounded-[5px] bg-[#b0fb30]/10 border border-[#b0fb30]/20 flex items-center justify-center text-[#b0fb30] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">شحن سريع</h4>
              <p className="text-xs text-gray-400">توصيل لكافة المحافظات خلال 24-48 ساعة</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-[5px] bg-[#10121a]/80 border border-gray-800/60">
            <div className="w-12 h-12 rounded-[5px] bg-[#b0fb30]/10 border border-[#b0fb30]/20 flex items-center justify-center text-[#b0fb30] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">معاينة قبل الدفع</h4>
              <p className="text-xs text-gray-400">حق فحص واستلام المنتجات بأمان تام</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-[5px] bg-[#10121a]/80 border border-gray-800/60">
            <div className="w-12 h-12 rounded-[5px] bg-[#b0fb30]/10 border border-[#b0fb30]/20 flex items-center justify-center text-[#b0fb30] shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">استرجاع مجاني</h4>
              <p className="text-xs text-gray-400">استبدال واسترجاع سهل خلال 14 يوماً</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-[5px] bg-[#10121a]/80 border border-gray-800/60">
            <div className="w-12 h-12 rounded-[5px] bg-[#b0fb30]/10 border border-[#b0fb30]/20 flex items-center justify-center text-[#b0fb30] shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">دعم متواصل</h4>
              <p className="text-xs text-gray-400">فريق خدمة عملاء متاح على مدار الساعة</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-900/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="text-3xl font-black tracking-tight text-white inline-block">
              بسم <span className="text-[#b0fb30]">الله</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              براند مصري راقٍ يقدم أرقى تصميمات الأزياء الكاجوال والأوفر سايز بخامات قطن مصري 100% وتفاصيل حصرية تليق بإطلالتك الفريدة.
            </p>

            {/* Social Icons with Clean SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.84 1.55-.02 2.96-.98 3.48-2.42.27-.67.36-1.4.35-2.12V.02h-2.52z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-sm font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#b0fb30] after:mt-1">
              تسوق الآن
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#b0fb30] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#b0fb30] transition-colors">
                  كافة المنتجات
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#b0fb30] transition-colors">
                  هوديز وسويت شيرت
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#b0fb30] transition-colors">
                  تيشرتات أوفر سايز
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#b0fb30] transition-colors">
                  جواكت ومعاطف
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Service (2.5 cols) */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-sm font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#b0fb30] after:mt-1">
              خدمة العملاء
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <a href="#" className="hover:text-[#b0fb30] transition-colors">
                  تتبع حالة طلبك
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b0fb30] transition-colors">
                  سياسة الشحن والتسليم
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b0fb30] transition-colors">
                  سياسة الاستبدال والاسترجاع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b0fb30] transition-colors">
                  دليل المقاسات المعتمد
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b0fb30] transition-colors">
                  الأسئلة الشائعة (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Help (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-4 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#b0fb30] after:mt-1">
              تواصل معنا
            </h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#b0fb30] mt-0.5 shrink-0" />
                <span>القاهرة، جمهورية مصر العربية</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#b0fb30] shrink-0" />
                <span dir="ltr" className="text-gray-300 font-mono">+20 100 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#b0fb30] shrink-0" />
                <span className="text-gray-300">support@bismillah-store.com</span>
              </div>
            </div>

            {/* Accepted Payments Icons */}
            <div className="pt-5">
              <span className="text-[11px] text-gray-400 block mb-2 font-bold">طرق الدفع المتاحة:</span>
              <div className="flex items-center gap-2 flex-wrap text-[10px] text-gray-300 font-bold">
                <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800">الدفع عند الاستلام</span>
                <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800 text-[#b0fb30]">InstaPay</span>
                <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800 text-red-400">فودافون كاش</span>
                <span className="px-2.5 py-1 rounded-[5px] bg-[#14161f] border border-gray-800">Visa / MasterCard</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            جميع الحقوق محفوظة © {currentYear} <span className="text-white font-bold">متجر بسم الله</span> للأزياء الراقية.
          </p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>صُنع بكل فخر وحرفية في مصر</span>
            <span>🇪🇬</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
