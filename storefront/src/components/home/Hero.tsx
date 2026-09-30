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
              🌟 تشكيلة الموسم الجديد متوفرة الآن
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-deep-black mb-6 leading-tight">
              بسم الله، وجهتك الأولى <br/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-[#b0fb30] px-3 py-1 rounded-lg">للأناقة العصرية</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              اكتشف أحدث صيحات الموضة التي تجمع بين الجودة العالية والتصاميم الفاخرة. ملابس صُممت لتعكس ذوقك الرفيع.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products" 
                className="group flex items-center gap-2 bg-[#b0fb30] hover:bg-[#9eea29] text-deep-black font-bold text-lg px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(176,251,48,0.3)] transition-all hover:-translate-y-1"
              >
                تصفح الأزياء
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link 
                href="/about" 
                className="flex items-center justify-center bg-white border-2 border-gray-200 hover:border-gray-300 text-deep-black font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                اكتشف قصتنا
              </Link>
            </div>
          </div>

          {/* Hero Image / Visual Element */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden bg-deep-black shadow-2xl flex items-center justify-center border border-gray-800 group">
              {/* Placeholder for Fashion Image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-black via-transparent to-transparent opacity-90" />
              <div className="relative z-10 text-center translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-24 h-24 mx-auto bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#b0fb30] rounded-full shadow-[0_0_30px_#b0fb30]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">كوليكشن 2026</h3>
                <p className="text-gray-300">تصاميم استثنائية، خامات عالمية.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
