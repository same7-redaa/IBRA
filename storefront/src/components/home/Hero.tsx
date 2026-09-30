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

          {/* Perfectly Sliced Half-Circle Layout */}
          <div className="w-full lg:w-[40%] relative flex justify-center lg:justify-end mt-12 lg:mt-0 h-[500px] lg:h-[700px] items-center">
            
            {/* The Main Circular Container - Positioned exactly halfway off the screen */}
            <div className="absolute left-[-250px] sm:left-[-350px] lg:left-[-450px] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full overflow-hidden bg-deep-black border-[8px] border-[#0c0c0c] shadow-[0_0_80px_rgba(0,0,0,0.8)]">
              
              {/* Slice 1: Top (0 to 60 degrees) */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 22%)' }}
              >
                <img src="https://picsum.photos/seed/bismillah-m1/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" alt="Model 1" />
              </div>

              {/* Slice 2: Middle (60 to 120 degrees) */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: 'polygon(50% 50%, 100% 21%, 100% 79%)' }}
              >
                <img src="https://picsum.photos/seed/bismillah-m2/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" alt="Model 2" />
              </div>

              {/* Slice 3: Bottom (120 to 180 degrees) */}
              <div 
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: 'polygon(50% 50%, 100% 78%, 100% 100%, 50% 100%)' }}
              >
                <img src="https://picsum.photos/seed/bismillah-m3/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" alt="Model 3" />
              </div>

              {/* Gap Lines to separate slices neatly */}
              {/* Line between Top and Middle (30 degrees UP from horizontal right) */}
              <div className="absolute top-1/2 left-1/2 w-[55%] h-3 bg-deep-black z-20 origin-left" style={{ transform: 'rotate(-30deg)' }} />
              
              {/* Line between Middle and Bottom (30 degrees DOWN from horizontal right) */}
              <div className="absolute top-1/2 left-1/2 w-[55%] h-3 bg-deep-black z-20 origin-left" style={{ transform: 'rotate(30deg)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
