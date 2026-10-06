"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { ShieldCheck, Award, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

export default function Hero() {
  const honeyImages = [
    "/hero/png_1.png",
    "/hero/png_2.png",
    "/hero/png_3.png",
    "/hero/png_4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % honeyImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [honeyImages.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        // Swiped Right -> Previous in RTL
        setCurrentImageIndex((prev) => (prev - 1 + honeyImages.length) % honeyImages.length);
      } else {
        // Swiped Left -> Next in RTL
        setCurrentImageIndex((prev) => (prev + 1) % honeyImages.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden text-white flex items-center">
      
      {/* Ambient Radial Mesh Glow behind Hero */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#FF8B2C]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 2. Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Hero Content with dedicated Text Background */}
          <div className="lg:col-span-7 flex flex-col items-start text-right relative p-2 sm:p-4">
            
            {/* Background Image scoped exclusively behind the Text */}
            <div className="absolute -inset-4 sm:-inset-8 -z-10 rounded-3xl overflow-hidden pointer-events-none">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat opacity-25 mix-blend-screen"
                style={{ backgroundImage: `url('/hero_bg.jpg')` }}
              />
              {/* Soft edge feathering */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent to-[#060608]/80" />
            </div>

            {/* Main Brand Title with Tatweel */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider text-white leading-tight select-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
              عَـــسَـــل <span className="text-[#FF8B2C] drop-shadow-[0_0_30px_rgba(255,139,44,0.4)]">زويـــــن</span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-zinc-300 font-semibold leading-relaxed max-w-xl">
              عسل نقي 100%، غني طبيعياً ومختار بعناية من أصفى المناحل الجبلية
            </p>

            {/* Feature Highlights Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold text-white border border-white/10 hover:border-[#FF8B2C]/40 transition-colors shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#FF8B2C]" />
                <span>مفحوص وموثق مخبرياً 100%</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold text-white border border-white/10 hover:border-[#FF8B2C]/40 transition-colors shadow-sm">
                <Award className="w-4 h-4 text-[#FF8B2C]" />
                <span>أعلى درجات النقاء الطبيعي</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-bold text-white border border-white/10 hover:border-[#FF8B2C]/40 transition-colors shadow-sm">
                <Sparkles className="w-4 h-4 text-[#FF8B2C]" />
                <span>بدون أي تغذية سكرية</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className={`${styles.button} ${styles.btnPrimary} w-full sm:w-auto`}
              >
                <span className={styles.btnTxt}>
                  اطلب عسلك الآن
                </span>
              </Link>
              <Link
                href="/products"
                className={`${styles.button} ${styles.btnSecondary} w-full sm:w-auto`}
              >
                <span className={styles.btnTxt}>
                  تصفح أنواع العسل
                </span>
              </Link>
            </div>

          </div>

          {/* Left Column: 3D Stacked Image Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center select-none">
            
            {/* 3D Symmetrical Winged Carousel Container with Touch Gestures */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % honeyImages.length)}
              className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-[280px] sm:h-[330px] flex items-center justify-center cursor-pointer group touch-manipulation"
              title="انقر أو اسحب لتدوير الصور"
            >
              {honeyImages.map((img, idx) => {
                const offset = (idx - currentImageIndex + honeyImages.length) % honeyImages.length;
                
                // 3D Symmetrical Carousel Styles (Front Center, Left Wing, Right Wing)
                let transformStyle = {};
                let opacityStyle = 0;
                let zIndexStyle = 0;
                let filterStyle = "";

                if (offset === 0) {
                  // 1. Main Center Front Card (Sharp & Focused)
                  transformStyle = { transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)" };
                  opacityStyle = 1;
                  zIndexStyle = 40;
                  filterStyle = "drop-shadow(0 20px 40px rgba(255, 139, 44, 0.35)) blur(0px)";
                } else if (offset === 1) {
                  // 2. Right Wing Card (Behind & Soft Blur)
                  transformStyle = { transform: "translate3d(62px, -12px, 0) scale(0.78) rotate(9deg)" };
                  opacityStyle = 0.65;
                  zIndexStyle = 20;
                  filterStyle = "drop-shadow(0 10px 25px rgba(255, 139, 44, 0.15)) brightness(0.85) blur(2.5px)";
                } else if (offset === honeyImages.length - 1) {
                  // 3. Left Wing Card (Behind & Soft Blur)
                  transformStyle = { transform: "translate3d(-62px, -12px, 0) scale(0.78) rotate(-9deg)" };
                  opacityStyle = 0.65;
                  zIndexStyle = 20;
                  filterStyle = "drop-shadow(0 10px 25px rgba(255, 139, 44, 0.15)) brightness(0.85) blur(2.5px)";
                } else {
                  // 4. Back / Hidden Queue Card
                  transformStyle = { transform: "translate3d(0, -35px, 0) scale(0.58) rotate(0deg)" };
                  opacityStyle = 0;
                  zIndexStyle = 10;
                  filterStyle = "blur(6px)";
                }

                return (
                  <div
                    key={idx}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform pointer-events-none"
                    style={{
                      ...transformStyle,
                      opacity: opacityStyle,
                      zIndex: zIndexStyle,
                      filter: filterStyle,
                    }}
                  >
                    <Image
                      src={img}
                      alt={`عسل زوين - تصميم ${idx + 1}`}
                      fill
                      priority={idx === 0 || idx === 1}
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 480px"
                      className="object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators & Next/Prev Controls */}
            <div className="mt-5 flex items-center gap-3 z-20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + honeyImages.length) % honeyImages.length);
                }}
                aria-label="الصورة السابقة"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white border border-white/15 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer touch-manipulation hover:border-[#FF8B2C]"
              >
                <ChevronRight className="w-4 h-4 pointer-events-none" />
              </button>

              <div className="flex items-center gap-1.5">
                {honeyImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(dotIdx);
                    }}
                    aria-label={`عرض الصورة ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer touch-manipulation ${
                      dotIdx === currentImageIndex
                        ? "w-8 bg-[#FF8B2C] shadow-[0_0_10px_rgba(255,139,44,0.6)]"
                        : "w-2 bg-white/20 hover:bg-[#FF8B2C]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % honeyImages.length);
                }}
                aria-label="الصورة التالية"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white border border-white/15 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer touch-manipulation hover:border-[#FF8B2C]"
              >
                <ChevronLeft className="w-4 h-4 pointer-events-none" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
