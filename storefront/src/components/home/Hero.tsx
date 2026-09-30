import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function Hero() {
  const bgImages = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550614000-4b95d466f286?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c028b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550614000-4b95d466f286?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop"
  ];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-deep-black pt-20 pb-24 lg:pt-32 lg:pb-32 text-white flex items-center">
      
      {/* Moving Background Image Strips */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        {/* Strip 1 */}
        <div className="absolute top-10 left-[-50%] flex w-[300vw] gap-6 animate-slide-horizontal">
           <div className="flex gap-6">
              {[...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-56 h-72 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800/50" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>
        {/* Strip 2 */}
        <div className="absolute top-[45%] left-[-50%] flex w-[300vw] gap-6 animate-slide-horizontal-reverse">
           <div className="flex gap-6">
              {[...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-56 h-72 rounded-2xl bg-gray-800 bg-cover bg-center shrink-0 border border-gray-800/50" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>
        
        {/* Gradient Overlay to fade edges and keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-deep-black via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-right">
            <h1 className="text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tight mb-8 leading-[1.2]">
              اكتشف أحدث <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] to-[#e2d1f9]">صيحات</span> الموضة <br />
              وتسوق <span className="text-[#b0fb30]">بأناقة</span>
            </h1>
            
            {/* Avatars & Social Proof */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <div className="flex -space-x-4 space-x-reverse">
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=5" alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=3" alt="user" />
                <img className="w-12 h-12 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=4" alt="user" />
              </div>
              <div className="text-sm">
                <span className="block font-bold text-lg text-white">١٠,٠٠٠+</span>
                <span className="text-gray-400">عميل سعيد</span>
              </div>
            </div>

            {/* Stats row resembling the NFT layout */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-16 border-t border-gray-800 pt-8 w-full max-w-2xl">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">٤٠K+</h4>
                <p className="text-gray-400 text-sm">قطعة ملابس</p>
              </div>
              <div className="w-px h-10 bg-gray-800 hidden sm:block" />
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">١٥K+</h4>
                <p className="text-gray-400 text-sm">عملية بيع</p>
              </div>
              <div className="w-px h-10 bg-gray-800 hidden sm:block" />
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">٢٧K+</h4>
                <p className="text-gray-400 text-sm">زائر شهري</p>
              </div>
            </div>
          </div>

          {/* Floating Card Image (Right side) */}
          <div className="w-full lg:w-[40%] relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Glowing background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#b0fb30] rounded-full blur-[100px] opacity-20 animate-pulse" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e2d1f9] rounded-full blur-[120px] opacity-20" />
            
            {/* The Floating Card */}
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square rounded-[2rem] overflow-hidden border border-gray-700 shadow-[0_20px_50px_rgba(176,251,48,0.2)] transform -rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out bg-gray-900 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                alt="Fashion Model" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-4 py-1.5 bg-[#b0fb30] text-deep-black text-xs font-bold rounded-full mb-3 inline-block shadow-[0_0_15px_rgba(176,251,48,0.5)]">
                  حصري
                </span>
                <h3 className="text-2xl font-bold text-white">تشكيلة الشتاء الفاخرة</h3>
                <p className="text-gray-300 mt-1 text-sm text-left font-sans">#Winter2026</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
