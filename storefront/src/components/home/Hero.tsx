"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

export default function Hero() {
  const honeyImages = [
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % honeyImages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [honeyImages.length]);

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden bg-[#fbf7ee] text-[#221c15] flex items-center">
      
      {/* 1. Transparent Honey Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply transition-opacity"
          style={{ backgroundImage: `url('/hero_bg.jpg')` }}
        />

        {/* Ambient Warm Honey Glows */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#f59e0b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#d97706]/10 rounded-full blur-3xl" />
        
        {/* Subtle Edge Fades for Smooth Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf7ee] via-transparent to-[#fbf7ee]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7ee]/60 via-transparent to-[#fbf7ee]" />
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

          {/* Left Column: Interactive Auto-Changing Honey Image Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Decorative Honeycomb Ring / Aura */}
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#d97706]/20 via-[#f59e0b]/30 to-[#fbbf24]/20 rounded-[2rem] blur-lg opacity-70" />

            {/* Showcase Card Frame (Compact & Refined) */}
            <div className="relative w-full max-w-[290px] sm:max-w-[330px] lg:max-w-[340px] aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-white border-2 border-[#ebdcc9] shadow-[0_15px_35px_rgba(180,83,9,0.1)] p-2 sm:p-2.5">
              
              {/* Image Transition Box */}
              <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-[#fbf7ee]">
                {honeyImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`عسل زوين - صورة ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                      idx === currentImageIndex
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}

                {/* Subtle Inner Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#ebdcc9] shadow-md text-[11px] font-extrabold text-[#221c15]">
                  <span className="w-2 h-2 rounded-full bg-[#d97706] animate-ping" />
                  <span>قطفات طبيعية طازجة</span>
                </div>

                {/* Counter / Indicator Pill */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  {currentImageIndex + 1} / {honeyImages.length}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
