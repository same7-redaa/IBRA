import Link from "next/link";
import styles from "./Hero.module.css";

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
    <section className="relative w-full min-h-screen pt-32 sm:pt-36 pb-14 overflow-hidden bg-deep-black text-white flex items-center justify-center">
      
      {/* Moving Background Image Strips */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-90">
        
        {/* Strip 1 */}
        <div className="absolute top-[-5%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-900 bg-cover bg-center shrink-0 border border-gray-800/80 shadow-lg" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 2 */}
        <div className="absolute top-[22%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-900 bg-cover bg-center shrink-0 border border-gray-800/80 shadow-lg" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 3 */}
        <div className="absolute top-[49%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-900 bg-cover bg-center shrink-0 border border-gray-800/80 shadow-lg" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 4 */}
        <div className="absolute top-[76%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-2xl bg-gray-900 bg-cover bg-center shrink-0 border border-gray-800/80 shadow-lg" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>
        
        {/* Layer 1: Light Tint & Subtle Backdrop Blur */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
        
        {/* Layer 2: Balanced Radial Vignette Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,12,12,0.4)_0%,rgba(12,12,12,0.85)_75%,#0c0c0c_100%)]" />

        {/* Layer 3: Top and Bottom Smooth Edge Fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/60 via-transparent to-[#0c0c0c]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full">
        {/* Centered Text Content */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 w-full text-center leading-tight">
            اظبط <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] to-[#e2d1f9]">شياكتك</span> بأحدث ستايلات الموضة
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            هتلاقي عندنا أجدد الستايلات اللي بتجمع بين الشياكة والراحة. 
            قلّب في تشكيلتنا الحصرية اللي متفصلة مخصوص عشان تبرز حلاوة حضورك في أي خروجة.
          </p>

          {/* Centered Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              href="/products"
              className={`${styles.button} ${styles.btnPrimary}`}
            >
              <span className={styles.btnTxt}>
                تسوق دلوقتي
              </span>
            </Link>
            <Link
              href="/products"
              className={`${styles.button} ${styles.btnSecondary}`}
            >
              <span className={styles.btnTxt}>
                شوف التشكيلة
              </span>
            </Link>
          </div>

          {/* Centered Stats & Avatars */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-t border-gray-800/80 pt-6 w-full">
            
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 space-x-reverse">
                <img className="w-10 h-10 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=5" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-deep-black" src="https://i.pravatar.cc/100?img=3" alt="user" />
              </div>
              <div className="text-right text-xs">
                <span className="block font-black text-base text-white">١٠,٠٠٠+</span>
                <span className="text-gray-400">عميل مبسوط</span>
              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-10 bg-gray-800" />

            {/* Stats */}
            <div className="flex items-center gap-8 text-center">
              <div>
                <h4 className="text-2xl font-black text-white mb-0.5">٤٠K+</h4>
                <p className="text-gray-400 text-xs">قطعة ملابس</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-white mb-0.5">١٥K+</h4>
                <p className="text-gray-400 text-xs">عملية بيع</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
