"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./ClientsTickerSection.module.css";

interface BrandItem {
  name: string;
  enName: string;
  tag: string;
  logoSrc?: string;
  iconSvg?: React.ReactNode;
}

const BRANDS_ROW_1: BrandItem[] = [
  {
    name: "إعلانات ميتا",
    enName: "Meta Ads",
    tag: "Partner",
    logoSrc: "/hero-icons/meta.png"
  },
  {
    name: "إعلانات جوجل",
    enName: "Google Ads",
    tag: "Certified",
    logoSrc: "/hero-icons/google-ads.png"
  },
  {
    name: "تيك توك للأعمال",
    enName: "TikTok for Business",
    tag: "Ads Manager",
    logoSrc: "/hero-icons/tiktok.png"
  },
  {
    name: "أدوبي سيستمز",
    enName: "Adobe Systems",
    tag: "Expert Certified",
    logoSrc: "/certificates/adobe.png"
  },
  {
    name: "شوبيفاي",
    enName: "Shopify Plus",
    tag: "E-commerce",
    iconSvg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#95BF47">
        <path d="M12.016 0c-.267 0-.528.093-.736.262-.023.018-4.57 3.593-4.57 3.593l-.409.324L4.85 4.86c-.538.163-.902.66-.902 1.233 0 .093.01.185.031.275l2.457 11.289c.14.64.673 1.114 1.328 1.178l4.248.414.004.045 4.248-.414c.655-.064 1.188-.538 1.328-1.178l2.457-11.289c.021-.09.031-.182.031-.275 0-.573-.364-1.07-.902-1.233l-1.451-.681-.409-.324s-4.547-3.575-4.57-3.593c-.208-.169-.469-.262-.736-.262h-.009zm.004 2.155l3.204 2.519-3.204 1.503-3.204-1.503 3.204-2.519zm-3.987 3.824l3.195 1.498v10.999l-3.921-.382-2.316-10.639 3.042-1.476zm7.974 0l3.042 1.476-2.316 10.639-3.921.382v-10.999l3.195-1.498z" />
      </svg>
    )
  },
  {
    name: "هاب سبوت",
    enName: "HubSpot",
    tag: "Inbound Certified",
    logoSrc: "/certificates/hubspot.png"
  },
  {
    name: "يوداسيتي العالمية",
    enName: "Udacity",
    tag: "Nanodegree",
    logoSrc: "/certificates/udacity.png"
  }
];

const BRANDS_ROW_2: BrandItem[] = [
  {
    name: "مبادرة مصر الرقمية",
    enName: "Digital Egypt (MCIT)",
    tag: "FWD Track",
    logoSrc: "/certificates/digital-egypt.png"
  },
  {
    name: "إنستجرام للأعمال",
    enName: "Instagram Business",
    tag: "Creator & Ads",
    logoSrc: "/hero-icons/instagram.png"
  },
  {
    name: "فيسبوك بريميوم",
    enName: "Facebook Ads",
    tag: "Scaling",
    logoSrc: "/hero-icons/facebook.png"
  },
  {
    name: "فوتوشوب برو",
    enName: "Adobe Photoshop",
    tag: "Creative Ads",
    logoSrc: "/hero-icons/photoshop.png"
  },
  {
    name: "أدوبي إليستريتور",
    enName: "Adobe Illustrator",
    tag: "Branding",
    logoSrc: "/hero-icons/illustrator.png"
  },
  {
    name: "سناب شات",
    enName: "Snapchat Ads",
    tag: "E-Commerce",
    iconSvg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FFFC00">
        <path d="M12.003 2c-3.393 0-6.143 2.75-6.143 6.143 0 .42.044.83.128 1.226-.74.347-1.436.9-1.996 1.63-.448.584-.668 1.258-.668 1.951 0 .762.26 1.487.771 2.094.275.328.618.59 1.011.777-.074.453-.082.909-.023 1.359.136 1.039.73 1.932 1.674 2.513.784.484 1.708.745 2.673.756.843.01 1.675-.17 2.443-.532.768.362 1.6.542 2.443.532.965-.011 1.889-.272 2.673-.756.944-.581 1.538-1.474 1.674-2.513.059-.45.051-.906-.023-1.359.393-.187.736-.449 1.011-.777.511-.607.771-1.332.771-2.094 0-.693-.22-1.367-.668-1.951-.56-.73-1.256-1.283-1.996-1.63.084-.396.128-.806.128-1.226 0-3.393-2.75-6.143-6.143-6.143z" />
      </svg>
    )
  },
  {
    name: "جريترز للحلول",
    enName: "Greaters Solutions",
    tag: "Marketing",
    iconSvg: (
      <div className="w-5 h-5 rounded-full bg-[#FF8B2C]/20 border border-[#FF8B2C]/50 flex items-center justify-center font-bold text-[9px] text-[#FF8B2C]">
        G
      </div>
    )
  }
];

export default function ClientsTickerSection() {
  const repeatedRow1 = [...BRANDS_ROW_1, ...BRANDS_ROW_1, ...BRANDS_ROW_1];
  const repeatedRow2 = [...BRANDS_ROW_2, ...BRANDS_ROW_2, ...BRANDS_ROW_2];

  return (
    <section className="w-full py-12 sm:py-16 relative overflow-hidden bg-transparent select-none">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-44 bg-[#FF8B2C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10 text-center">
        <ScrollReveal direction="up">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-wide">
              شُـــرَكَـــاء الـــنَّـــجَـــاح <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.45)]">والـــعَـــلامَـــات الـــتِّـــجَـــارِيَّـــة</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed">
              منصات وشركات عالمية ومحلية تشرفت بإدارة حملاتها وبناء شراكات نمو استراتيجية معها.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Scrolling Ticker Area (2 Rows) */}
      <div className="w-full flex flex-col gap-4 sm:gap-5" dir="ltr">
        
        {/* Row 1: Left to Right */}
        <div className={styles.tickerWrapper}>
          {/* Edge Blur Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />

          <div className={styles.tickerTrack}>
            {repeatedRow1.map((brand, idx) => (
              <div key={`b1-${idx}`} className={styles.brandPill}>
                {/* Brand Logo Container */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                  {brand.logoSrc ? (
                    <Image
                      src={brand.logoSrc}
                      alt={brand.name}
                      width={28}
                      height={28}
                      unoptimized
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  ) : (
                    brand.iconSvg
                  )}
                </div>

                {/* Brand Arabic & English Name */}
                <div className="flex items-center gap-2">
                  <span className={styles.brandName}>{brand.name}</span>
                  <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block font-normal">
                    ({brand.enName})
                  </span>
                </div>

                {/* Tag */}
                <span className={styles.brandTag}>{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (Reverse) */}
        <div className={styles.tickerWrapper}>
          {/* Edge Blur Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />

          <div className={styles.tickerTrackReverse}>
            {repeatedRow2.map((brand, idx) => (
              <div key={`b2-${idx}`} className={styles.brandPill}>
                {/* Brand Logo Container */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                  {brand.logoSrc ? (
                    <Image
                      src={brand.logoSrc}
                      alt={brand.name}
                      width={28}
                      height={28}
                      unoptimized
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  ) : (
                    brand.iconSvg
                  )}
                </div>

                {/* Brand Arabic & English Name */}
                <div className="flex items-center gap-2">
                  <span className={styles.brandName}>{brand.name}</span>
                  <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline-block font-normal">
                    ({brand.enName})
                  </span>
                </div>

                {/* Tag */}
                <span className={styles.brandTag}>{brand.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
