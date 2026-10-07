"use client";

import React from "react";
import Image from "next/image";
import styles from "./ClientsTickerSection.module.css";

interface BrandLogoItem {
  id: string;
  alt: string;
  logoSrc?: string;
  iconSvg?: React.ReactNode;
}

const LOGOS_ROW_1: BrandLogoItem[] = [
  {
    id: "meta",
    alt: "Meta Ads",
    logoSrc: "/hero-icons/meta.png"
  },
  {
    id: "google-ads",
    alt: "Google Ads",
    logoSrc: "/hero-icons/google-ads.png"
  },
  {
    id: "tiktok",
    alt: "TikTok for Business",
    logoSrc: "/hero-icons/tiktok.png"
  },
  {
    id: "adobe",
    alt: "Adobe Systems",
    logoSrc: "/certificates/adobe.png"
  },
  {
    id: "shopify",
    alt: "Shopify Plus",
    iconSvg: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#95BF47">
        <path d="M12.016 0c-.267 0-.528.093-.736.262-.023.018-4.57 3.593-4.57 3.593l-.409.324L4.85 4.86c-.538.163-.902.66-.902 1.233 0 .093.01.185.031.275l2.457 11.289c.14.64.673 1.114 1.328 1.178l4.248.414.004.045 4.248-.414c.655-.064 1.188-.538 1.328-1.178l2.457-11.289c.021-.09.031-.182.031-.275 0-.573-.364-1.07-.902-1.233l-1.451-.681-.409-.324s-4.547-3.575-4.57-3.593c-.208-.169-.469-.262-.736-.262h-.009zm.004 2.155l3.204 2.519-3.204 1.503-3.204-1.503 3.204-2.519zm-3.987 3.824l3.195 1.498v10.999l-3.921-.382-2.316-10.639 3.042-1.476zm7.974 0l3.042 1.476-2.316 10.639-3.921.382v-10.999l3.195-1.498z" />
      </svg>
    )
  },
  {
    id: "hubspot",
    alt: "HubSpot",
    logoSrc: "/certificates/hubspot.png"
  },
  {
    id: "udacity",
    alt: "Udacity",
    logoSrc: "/certificates/udacity.png"
  }
];

const LOGOS_ROW_2: BrandLogoItem[] = [
  {
    id: "digital-egypt",
    alt: "Digital Egypt",
    logoSrc: "/certificates/digital-egypt.png"
  },
  {
    id: "instagram",
    alt: "Instagram Business",
    logoSrc: "/hero-icons/instagram.png"
  },
  {
    id: "facebook",
    alt: "Facebook",
    logoSrc: "/hero-icons/facebook.png"
  },
  {
    id: "photoshop",
    alt: "Adobe Photoshop",
    logoSrc: "/hero-icons/photoshop.png"
  },
  {
    id: "illustrator",
    alt: "Adobe Illustrator",
    logoSrc: "/hero-icons/illustrator.png"
  },
  {
    id: "premiere",
    alt: "Adobe Premiere Pro",
    logoSrc: "/hero-icons/premiere-pro.png"
  },
  {
    id: "snapchat",
    alt: "Snapchat Ads",
    iconSvg: (
      <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="#FFFC00">
        <path d="M12.003 2c-3.393 0-6.143 2.75-6.143 6.143 0 .42.044.83.128 1.226-.74.347-1.436.9-1.996 1.63-.448.584-.668 1.258-.668 1.951 0 .762.26 1.487.771 2.094.275.328.618.59 1.011.777-.074.453-.082.909-.023 1.359.136 1.039.73 1.932 1.674 2.513.784.484 1.708.745 2.673.756.843.01 1.675-.17 2.443-.532.768.362 1.6.542 2.443.532.965-.011 1.889-.272 2.673-.756.944-.581 1.538-1.474 1.674-2.513.059-.45.051-.906-.023-1.359.393-.187.736-.449 1.011-.777.511-.607.771-1.332.771-2.094 0-.693-.22-1.367-.668-1.951-.56-.73-1.256-1.283-1.996-1.63.084-.396.128-.806.128-1.226 0-3.393-2.75-6.143-6.143-6.143z" />
      </svg>
    )
  }
];

export default function ClientsTickerSection() {
  const repeatedRow1 = [...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1];
  const repeatedRow2 = [...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2];

  return (
    <section className="w-full py-10 sm:py-14 relative overflow-hidden bg-transparent select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-36 bg-[#FF8B2C]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Infinite Scrolling Ticker Area (Pure Logos Only) */}
      <div className="w-full flex flex-col gap-4 sm:gap-5" dir="ltr">
        
        {/* Row 1: Left to Right */}
        <div className={styles.tickerWrapper}>
          {/* Edge Blur Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />

          <div className={styles.tickerTrack}>
            {repeatedRow1.map((item, idx) => (
              <div key={`logo1-${idx}`} className={styles.logoTile} title={item.alt}>
                {item.logoSrc ? (
                  <Image
                    src={item.logoSrc}
                    alt={item.alt}
                    width={80}
                    height={48}
                    unoptimized
                    className={styles.logoImg}
                  />
                ) : (
                  item.iconSvg
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className={styles.tickerWrapper}>
          {/* Edge Blur Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#060608] via-[#060608]/80 to-transparent z-10 pointer-events-none" />

          <div className={styles.tickerTrackReverse}>
            {repeatedRow2.map((item, idx) => (
              <div key={`logo2-${idx}`} className={styles.logoTile} title={item.alt}>
                {item.logoSrc ? (
                  <Image
                    src={item.logoSrc}
                    alt={item.alt}
                    width={80}
                    height={48}
                    unoptimized
                    className={styles.logoImg}
                  />
                ) : (
                  item.iconSvg
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
