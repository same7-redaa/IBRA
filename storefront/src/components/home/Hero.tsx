import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  const bgImages = [
    "/hero/hero_1.jpg",
    "/hero/hero_2.jpg",
    "/hero/hero_3.jpg",
    "/hero/hero_4.jpg",
    "/hero/hero_5.jpg",
    "/hero/hero_6.jpg",
    "/hero/hero_7.jpg",
    "/hero/hero_8.jpg",
    "/hero/hero_9.jpg",
    "/hero/hero_10.jpg",
    "/hero/hero_11.jpg",
    "/hero/hero_12.jpg",
    "/hero/hero_13.jpg",
    "/hero/hero_14.jpg",
    "/hero/hero_15.jpg",
    "/hero/hero_16.jpg",
    "/hero/hero_17.jpg",
    "/hero/hero_18.jpg",
    "/hero/hero_19.jpg",
    "/hero/hero_20.jpg",
    "/hero/hero_21.jpg",
    "/hero/hero_22.jpg",
    "/hero/hero_23.jpg",
    "/hero/hero_24.jpg"
  ];

  return (
    <section className="relative w-full min-h-[92vh] pt-32 sm:pt-36 pb-16 overflow-hidden bg-[#f4f8fc] text-[#1e293b] flex items-center justify-center">
      
      {/* Decorative Honey Drip Accent at Top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 opacity-80 z-20" />

      {/* Moving Background Image Strips */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        
        {/* Strip 1 */}
        <div className="absolute top-[-5%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-3xl bg-white bg-cover bg-center shrink-0 border border-amber-200/60 shadow-md" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 2 */}
        <div className="absolute top-[22%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-3xl bg-white bg-cover bg-center shrink-0 border border-amber-200/60 shadow-md" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 3 */}
        <div className="absolute top-[49%] left-[-100%] flex w-max gap-4 animate-slide-right">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages].map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-3xl bg-white bg-cover bg-center shrink-0 border border-amber-200/60 shadow-md" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>

        {/* Strip 4 */}
        <div className="absolute top-[76%] left-[-100%] flex w-max gap-4 animate-slide-left">
           <div className="flex gap-4">
              {[...bgImages, ...bgImages].reverse().map((img, i) => (
                <div key={i} className="w-44 h-56 sm:w-48 sm:h-64 rounded-3xl bg-white bg-cover bg-center shrink-0 border border-amber-200/60 shadow-md" style={{backgroundImage: `url('${img}')`}} />
              ))}
           </div>
        </div>
        
        {/* Layer 1: Soft Light Tint */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        
        {/* Layer 2: Gentle Radial Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(244,248,252,0.95)_70%,#f4f8fc_100%)]" />

        {/* Layer 3: Top and Bottom Smooth Edge Fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f8fc] via-transparent to-[#f4f8fc]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f8fc]/60 via-transparent to-[#f4f8fc]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full">
        {/* Centered Organic Card Content */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#d97706] uppercase mb-2">
            من مناحلنا الطبيعية 100%
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 w-full text-center leading-tight text-[#1e293b]">
            تذوق <span className="text-[#d97706]">نقاء الطبيعة</span> مع أجود أنواع عسل النحل الأصلي
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            نوفر لك أنقى أنواع العسل الجبلي والخلطات الملكية الطبيعية 100% مفحوصة وموثقة مخبرياً. 
            غذاء ودواء يجمع بين أصالة الطعم والفوائد الشفائية الفائقة حتى باب منزلك.
          </p>

          {/* Centered Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              href="/products"
              className={`${styles.button} ${styles.btnPrimary}`}
            >
              <span className={styles.btnTxt}>
                اطلب عسلك الآن
              </span>
            </Link>
            <Link
              href="/products"
              className={`${styles.button} ${styles.btnSecondary}`}
            >
              <span className={styles.btnTxt}>
                تصفح أنواع العسل
              </span>
            </Link>
          </div>

          {/* Centered Stats & Avatars */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 border-t border-slate-200/80 pt-6 w-full">
            
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 space-x-reverse">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=5" alt="user" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="user" />
              </div>
              <div className="text-right text-xs">
                <span className="block font-black text-base text-[#1e293b]">١٠,٠٠٠+</span>
                <span className="text-slate-500">عميل يثق بنا</span>
              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-10 bg-slate-200" />

            {/* Stats */}
            <div className="flex items-center gap-8 text-center">
              <div>
                <h4 className="text-2xl font-black text-[#d97706] mb-0.5">100%</h4>
                <p className="text-slate-500 text-xs font-semibold">طبيعي ومفحوص</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#1e293b] mb-0.5">٢٥K+</h4>
                <p className="text-slate-500 text-xs font-semibold">عبوة تم تسليمها</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
