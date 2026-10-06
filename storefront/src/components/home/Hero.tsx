"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

// 8 Exact Icons orbiting continuously around the hero portrait
const CIRCLE_ICONS = [
  { src: "/hero-icons/meta.png", alt: "Meta", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/facebook.png", alt: "Facebook", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/instagram.png", alt: "Instagram", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/tiktok.png", alt: "TikTok", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/google-ads.png", alt: "Google Ads", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/photoshop.png", alt: "Adobe Photoshop", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/premiere-pro.png", alt: "Adobe Premiere Pro", size: "w-9 h-9 sm:w-14 sm:h-14" },
  { src: "/hero-icons/illustrator.png", alt: "Adobe Illustrator", size: "w-9 h-9 sm:w-14 sm:h-14" },
];

import HeroTickerTape from "./HeroTickerTape";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(195);

  // Handle responsive radius calculation and trigger entrance + opening animations synchronized with Splash
  useEffect(() => {
    const updateRadius = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 400) {
          setRadius(110);
        } else if (window.innerWidth < 640) {
          setRadius(135);
        } else if (window.innerWidth < 1024) {
          setRadius(165);
        } else {
          setRadius(195);
        }
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    // Trigger the staggered blur entrance when splash plunges
    const triggerHeroEntrance = () => {
      setTimeout(() => {
        setMounted(true);
      }, 50);

      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    };

    // Check if splash already completed or listen for hero-ready event
    if (typeof window !== "undefined" && (window as unknown as { __heroReady?: boolean }).__heroReady) {
      triggerHeroEntrance();
    } else if (typeof window !== "undefined") {
      const onHeroReady = () => {
        triggerHeroEntrance();
      };
      window.addEventListener("hero-ready", onHeroReady);

      // Fallback safety timeout in case splash was skipped or already gone
      const fallbackTimer = setTimeout(() => {
        triggerHeroEntrance();
      }, 2000);

      return () => {
        window.removeEventListener("resize", updateRadius);
        window.removeEventListener("hero-ready", onHeroReady);
        clearTimeout(fallbackTimer);
      };
    }

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  return (
    <section className="relative w-full pt-24 sm:pt-32 lg:pt-28 pb-12 sm:pb-16 overflow-hidden text-white flex items-center">
      
      {/* Ambient Radial Mesh Glow behind Hero */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/15 rounded-full blur-[140px] pointer-events-none -z-10 transition-opacity duration-1000"
        style={{ opacity: mounted ? 1 : 0 }}
      />
      <div 
        className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#FF8B2C]/10 rounded-full blur-[120px] pointer-events-none -z-10 transition-opacity duration-1000 delay-200"
        style={{ opacity: mounted ? 1 : 0 }}
      />

      {/* Decorative Background Artworks */}
      <div
        className="absolute top-8 right-6 w-52 h-52 sm:w-80 sm:h-80 bg-contain bg-no-repeat opacity-15 mix-blend-screen pointer-events-none -rotate-[14deg] -z-10 transition-all duration-1000"
        style={{ 
          backgroundImage: `url('/bg-art/logo.png')`,
          opacity: mounted ? 0.15 : 0,
          transform: mounted ? "rotate(-14deg) scale(1)" : "rotate(-14deg) scale(0.85)",
        }}
      />
      <div
        className="absolute bottom-12 left-8 w-44 h-44 sm:w-64 sm:h-64 bg-contain bg-no-repeat opacity-12 mix-blend-screen pointer-events-none rotate-[22deg] -z-10 transition-all duration-1000 delay-150"
        style={{ 
          backgroundImage: `url('/bg-art/social-media.png')`,
          opacity: mounted ? 0.12 : 0,
          transform: mounted ? "rotate(22deg) scale(1)" : "rotate(22deg) scale(0.85)",
        }}
      />

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-14 items-center">
          
          {/* Right Column: Hero Text Content with Tatweel (Lifted higher on Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-right w-full lg:-translate-y-8 xl:-translate-y-10">
            
            {/* Main Brand Title with Tatweel on Single Line + Entrance Blur Animation */}
            <div 
              style={{
                opacity: mounted ? 1 : 0,
                filter: mounted ? "blur(0px)" : "blur(18px)",
                transform: mounted ? "translate3d(0,0,0)" : "translate3d(0, 32px, 0)",
                transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s",
              }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-normal sm:tracking-wide text-white leading-tight select-none drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
                ابـــراهـــيـــم <span className="text-[#FF8B2C] drop-shadow-[0_0_30px_rgba(255,139,44,0.4)]">عـــلـــي</span>
              </h1>
            </div>

            {/* Subtitle Description with Tatweel + Entrance Blur Animation */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                filter: mounted ? "blur(0px)" : "blur(14px)",
                transform: mounted ? "translate3d(0,0,0)" : "translate3d(0, 24px, 0)",
                transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.22s, filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.22s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.22s",
              }}
            >
              <p className="mt-3 sm:mt-5 text-base sm:text-xl lg:text-2xl text-zinc-300 font-bold leading-relaxed">
                أفـــكـــار إبـــداعـــيـــة.
                <br />
                نـــتـــائـــج مـــلـــمـــوســـة.
              </p>
            </div>

            {/* Action Buttons + Entrance Blur Animation */}
            <div 
              className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{
                opacity: mounted ? 1 : 0,
                filter: mounted ? "blur(0px)" : "blur(12px)",
                transform: mounted ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 20px, 0) scale(0.96)",
                transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s, filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.36s",
              }}
            >
              <Link
                href="#services"
                className={`${styles.button} ${styles.btnPrimary} w-full sm:w-auto`}
              >
                <span className={styles.btnTxt}>
                  خـــدمـــاتـــي
                </span>
              </Link>
              <Link
                href="#contact"
                className={`${styles.button} ${styles.btnSecondary} w-full sm:w-auto`}
              >
                <span className={styles.btnTxt}>
                  تـــواصـــل مـــعـــي
                </span>
              </Link>
            </div>

          </div>

          {/* Left Column: Hero Image with 10 Orbiting Icons Streaming Behind Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none mt-4 sm:mt-8 lg:mt-0">
            
            {/* Ambient Backglow behind person */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#FF8B2C]/20 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 delay-200"
              style={{ opacity: mounted ? 1 : 0 }}
            />

            {/* Relative Image Stage (Enlarged on mobile) + Entrance Blur Animation */}
            <div 
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] flex items-center justify-center scale-105 sm:scale-100"
              style={{
                opacity: mounted ? 1 : 0,
                filter: mounted ? "blur(0px)" : "blur(18px)",
                transform: mounted ? "translate3d(0,0,0) scale(1)" : "translate3d(0, 24px, 0) scale(0.92)",
                transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, filter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              }}
            >
              
              {/* 8 Orbiting Icons Spinning Continuously BEHIND the person from Top Center */}
              <div 
                className={styles.orbitTrack}
                style={{
                  opacity: isOpen ? 1 : 0,
                  filter: isOpen ? "blur(0px)" : "blur(14px)",
                  transform: isOpen ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.4)",
                  transition: "opacity 0.9s ease-out 0.3s, filter 0.9s ease-out 0.3s, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
                }}
              >
                {CIRCLE_ICONS.map((icon, idx) => {
                  // Evenly distributed angles starting from top center (-90deg)
                  const angleDeg = -90 + idx * (360 / CIRCLE_ICONS.length);
                  const angleRad = (angleDeg * Math.PI) / 180;
                  
                  const targetX = Math.round(Math.cos(angleRad) * radius);
                  const targetY = Math.round(Math.sin(angleRad) * radius);

                  return (
                    <div
                      key={idx}
                      className={styles.radialItem}
                      style={{
                        transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px))`,
                      }}
                    >
                      <div
                        className={`${icon.size} ${styles.iconBadge}`}
                        title={icon.alt}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={icon.src}
                            alt={icon.alt}
                            fill
                            sizes="64px"
                            className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Solid Black Blocker Silhouette (z-[8]) - Blocks orbiting icons from shining through the body */}
              <div className="absolute inset-0 flex items-center justify-center z-[8] pointer-events-none">
                <Image
                  src="/hero-main.png"
                  alt=""
                  fill
                  unoptimized
                  aria-hidden="true"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 440px"
                  className="object-contain filter brightness-0"
                />
              </div>

              {/* Visible Person Image Container in front (z-10) */}
              <div className="relative w-full h-full flex items-center justify-center z-10 pointer-events-none">
                <Image
                  src="/hero-main.png"
                  alt="ابراهيم علي"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 440px"
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 pointer-events-auto hover:scale-[1.02]"
                />
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* Seamless Deep Rich Black Gradient Transition across the entire section width (z-30 in front of image) */}
      <div 
        className="absolute inset-x-0 bottom-0 h-40 sm:h-64 pointer-events-none z-30" 
        style={{
          background: "linear-gradient(to top, #060608 0%, #060608 30%, rgba(6,6,8,0.95) 60%, rgba(6,6,8,0.5) 82%, transparent 100%)",
        }}
      />

      {/* Moving Text Chips Ticker Tape (First layer applied directly on bottom fade, lifted higher) */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 md:bottom-12 z-35 pointer-events-auto">
        <HeroTickerTape />
      </div>

    </section>
  );
}
