"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

export default function Hero() {
  const honeyImages = [
    "/hero/png_1.png",
    "/hero/png_2.png",
    "/hero/png_3.png",
    "/hero/png_4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % honeyImages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [honeyImages.length]);

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden bg-[#fbf7ee] text-[#221c15] flex items-center">
      
      {/* 1. Clear & Pronounced Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 mix-blend-multiply"
          style={{ backgroundImage: `url('/hero_bg.jpg')` }}
        />
        {/* Soft edge fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf7ee] via-transparent to-[#fbf7ee]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7ee]/40 via-transparent to-[#fbf7ee]" />
      </div>

      {/* 2. Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Hero Content & Typography (in RTL layout) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Main Brand Title with Tatweel */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider text-[#221c15] leading-tight select-none">
              عَـــسَـــل زويـــــن
            </h1>

            {/* Subtitle Description */}
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-[#5c4f42] font-semibold leading-relaxed max-w-xl">
              عسل نقي 100%، غني طبيعياً ومختار بعناية
            </p>

            {/* Feature Highlights Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#ebdcc9] shadow-sm text-xs font-bold text-[#221c15]">
                <ShieldCheck className="w-4 h-4 text-[#d97706]" />
                <span>مفحوص وموثق مخبرياً 100%</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#ebdcc9] shadow-sm text-xs font-bold text-[#221c15]">
                <Award className="w-4 h-4 text-[#d97706]" />
                <span>أعلى درجات النقاء الطبيعي</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#ebdcc9] shadow-sm text-xs font-bold text-[#221c15]">
                <Sparkles className="w-4 h-4 text-[#d97706]" />
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
            
            {/* 3D Symmetrical Winged Carousel Container */}
            <div 
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % honeyImages.length)}
              className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-[280px] sm:h-[330px] flex items-center justify-center cursor-pointer group"
              title="انقر لتدوير الصور"
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
                  filterStyle = "drop-shadow(0 20px 35px rgba(180, 83, 9, 0.22)) blur(0px)";
                } else if (offset === 1) {
                  // 2. Right Wing Card (Behind & Soft Blur)
                  transformStyle = { transform: "translate3d(62px, -12px, 0) scale(0.78) rotate(9deg)" };
                  opacityStyle = 0.65;
                  zIndexStyle = 20;
                  filterStyle = "drop-shadow(0 10px 20px rgba(180, 83, 9, 0.10)) brightness(0.92) blur(2.5px)";
                } else if (offset === honeyImages.length - 1) {
                  // 3. Left Wing Card (Behind & Soft Blur)
                  transformStyle = { transform: "translate3d(-62px, -12px, 0) scale(0.78) rotate(-9deg)" };
                  opacityStyle = 0.65;
                  zIndexStyle = 20;
                  filterStyle = "drop-shadow(0 10px 20px rgba(180, 83, 9, 0.10)) brightness(0.92) blur(2.5px)";
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
                    className="absolute inset-0 flex items-center justify-center transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                    style={{
                      ...transformStyle,
                      opacity: opacityStyle,
                      zIndex: zIndexStyle,
                      filter: filterStyle,
                    }}
                  >
                    <img
                      src={img}
                      alt={`عسل زوين - تصميم ${idx + 1}`}
                      className="w-full h-full object-contain pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators */}
            <div className="mt-4 flex items-center gap-2">
              {honeyImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentImageIndex(dotIdx)}
                  aria-label={`عرض الصورة ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    dotIdx === currentImageIndex
                      ? "w-8 bg-[#d97706] shadow-sm"
                      : "w-2 bg-[#ebdcc9] hover:bg-[#d97706]/50"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
