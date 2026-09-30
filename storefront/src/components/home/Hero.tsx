import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Decorative Blur Background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-[#b0fb30] opacity-20 blur-[100px]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-right">
            <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 mb-6 border border-gray-200">
              🚀 إطلاق النسخة الجديدة
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-deep-black mb-6 leading-tight">
              صمم متجرك بأعلى مقاييس <br/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-[#b0fb30] px-3 py-1 rounded-lg">السرعة والأناقة</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              منصة الجيل القادم لإنشاء المتاجر الإلكترونية. نجمع بين التصميم الفاخر (ثمانية) والأداء الخارق بدون رسوم شهرية.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products" 
                className="group flex items-center gap-2 bg-[#b0fb30] hover:bg-[#9eea29] text-deep-black font-bold text-lg px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(176,251,48,0.3)] transition-all hover:-translate-y-1"
              >
                تصفح المنتجات
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link 
                href="/about" 
                className="flex items-center justify-center bg-white border-2 border-gray-200 hover:border-gray-300 text-deep-black font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                المزيد عنا
              </Link>
            </div>
          </div>

          {/* Hero Image / Visual Element */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden bg-deep-black shadow-2xl flex items-center justify-center border border-gray-800 group">
              {/* Abstract element inside the dark box representing product/showcase */}
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-black via-gray-900 to-[#1a2512] opacity-80" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-12 h-12 bg-[#b0fb30] rounded-full shadow-[0_0_30px_#b0fb30]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">تجربة تسوق فريدة</h3>
                <p className="text-gray-400">واجهة مظلمة متناسقة</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
