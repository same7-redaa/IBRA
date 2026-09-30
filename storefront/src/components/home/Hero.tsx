import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function Hero() {
  const bgImages = [
    "https://picsum.photos/seed/bismillah-1/400/600",
    "https://picsum.photos/seed/bismillah-2/400/600",
    "https://picsum.photos/seed/bismillah-3/400/600",
    "https://picsum.photos/seed/bismillah-4/400/600",
    "https://picsum.photos/seed/bismillah-5/400/600",
    "https://picsum.photos/seed/bismillah-6/400/600",
    "https://picsum.photos/seed/bismillah-7/400/600",
    "https://picsum.photos/seed/bismillah-8/400/600"
  ];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-deep-black pt-20 pb-24 lg:pt-32 lg:pb-32 text-white flex items-center">
      
      {/* Moving Background Image Strips */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-100">
        
        {/* Strip 1 */}
        <div className="absolute top-[-5%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 2 */}
        <div className="absolute top-[22%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 3 */}
        <div className="absolute top-[49%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 4 */}
        <div className="absolute top-[76%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>
        
        {/* Gradient Overlay to fade edges and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-deep-black/60 to-deep-black" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full min-h-[60vh]">
        {/* Centered Text Content */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-10 lg:pt-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 w-full text-center whitespace-nowrap">
            اظبط <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] to-[#e2d1f9]">شياكتك</span> بأحدث ستايلات الموضة
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            هتلاقي عندنا أجدد الستايلات اللي بتجمع بين الشياكة والراحة. 
            قلّب في تشكيلتنا الحصرية اللي متفصلة مخصوص عشان تبرز حلاوة حضورك في أي خروجة.
          </p>

          {/* Centered Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#b0fb30] hover:bg-[#9de42b] text-deep-black font-bold rounded-full transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(176,251,48,0.4)] text-lg">
              تسوق دلوقتي
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white hover:border-[#b0fb30] text-white hover:text-[#b0fb30] font-bold rounded-full transition-colors text-lg">
              شوف التشكيلة
            </button>
          </div>

          {/* Centered Stats & Avatars */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 border-t border-gray-800 pt-8 w-full">
            
            {/* Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4 space-x-reverse">
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=5" alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=3" alt="user" />
              </div>
              <div className="text-right text-sm">
                <span className="block font-bold text-lg text-white">١٠,٠٠٠+</span>
                <span className="text-gray-400">عميل مبسوط</span>
              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-12 bg-gray-800" />

            {/* Stats */}
            <div className="flex items-center gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">٤٠K+</h4>
                <p className="text-gray-400 text-sm">قطعة ملابس</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">١٥K+</h4>
                <p className="text-gray-400 text-sm">عملية بيع</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
