"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  Film,
  Palette,
  ShoppingBag
} from "lucide-react";
import { 
  SiMeta, 
  SiTiktok, 
  SiGoogleads, 
  SiGoogle, 
  SiShopify, 
  SiInstagram, 
  SiFacebook, 
  SiYoutube 
} from "react-icons/si";

import ScrollReveal from "@/components/ui/ScrollReveal";

// Crisp SVG Vector Badges for Adobe Suite
function AdobePremiereIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#00005B" stroke="#9999FF" strokeWidth="1.5" />
      <text x="5" y="16.5" fill="#9999FF" fontSize="11" fontWeight="900" fontFamily="sans-serif">Pr</text>
    </svg>
  );
}

function AdobeAfterEffectsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#1B003A" stroke="#D291FF" strokeWidth="1.5" />
      <text x="4" y="16.5" fill="#D291FF" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ae</text>
    </svg>
  );
}

function AdobePhotoshopIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
      <text x="4.5" y="16.5" fill="#31A8FF" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ps</text>
    </svg>
  );
}

function AdobeIllustratorIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#330000" stroke="#FF9A00" strokeWidth="1.5" />
      <text x="5" y="16.5" fill="#FF9A00" fontSize="11" fontWeight="900" fontFamily="sans-serif">Ai</text>
    </svg>
  );
}

interface ToolBadge {
  name: string;
  icon?: React.ElementType;
}

interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  primaryImage: string;
  brandIcons: React.ElementType[];
  toolBadges: ToolBadge[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "meta-ads",
    title: "إدارة إعـــلانـــات مـــيـــتـــا",
    enTitle: "Meta Ads Management",
    description: "إطلاق وتوسيع حملات Facebook & Instagram Ads الشاملة (Full-Funnel) مع إعادة الاستهداف الذكي والـ Scaling لتحقيق أعلى عائد استثماري (ROAS).",
    primaryImage: "/hero-icons/meta.png",
    brandIcons: [SiMeta, SiInstagram],
    toolBadges: [
      { name: "Facebook Ads", icon: SiFacebook },
      { name: "Instagram Ads", icon: SiInstagram },
      { name: "Meta Pixel & CAPI", icon: SiMeta },
    ],
  },
  {
    id: "tiktok-ads",
    title: "إعـــلانـــات تـــيـــك تـــوك الـــمـــمـــولـــة",
    enTitle: "TikTok Ads Specialist",
    description: "استراتيجيات إعلانية متخصصة لمنصة TikTok مع استهداف الشرائح الأعلى تفاعلاً، إدارة Spark Ads، وحملات تحويل ومبيعات سريعة الانتشار.",
    primaryImage: "/hero-icons/tiktok.png",
    brandIcons: [SiTiktok],
    toolBadges: [
      { name: "TikTok Ads", icon: SiTiktok },
      { name: "Spark Ads", icon: Zap },
      { name: "Viral Conversions", icon: TrendingUp },
    ],
  },
  {
    id: "google-ads",
    title: "إعـــلانـــات جـــوجـــل والـــبـــحـــث",
    enTitle: "Google Ads & Search",
    description: "إدارة حملات Google Search و Performance Max و YouTube Ads لاستهداف العملاء ذوي النوايا الشرائية المباشرة وتخفيض تكلفة الاقتناء (CPP).",
    primaryImage: "/hero-icons/google-ads.png",
    brandIcons: [SiGoogleads, SiGoogle],
    toolBadges: [
      { name: "Google Search", icon: SiGoogle },
      { name: "Performance Max", icon: SiGoogleads },
      { name: "YouTube Ads", icon: SiYoutube },
    ],
  },
  {
    id: "ecommerce-scaling",
    title: "تـــوســـيـــع الـــمـــتـــاجـــر وتـــحـــســـيـــن CRO",
    enTitle: "E-Commerce Scaling & CRO",
    description: "تحسين مسار الشراء وصفحات الهبوط لرفع معدل التحويل الشرائي (CRO) ومضاعفة مبيعات وأرباح المتاجر الإلكترونية لمعالجة آلاف الطلبات شهرياً.",
    primaryImage: "/hero-icons/instagram.png",
    brandIcons: [SiShopify, ShoppingBag],
    toolBadges: [
      { name: "Shopify Stores", icon: SiShopify },
      { name: "CRO Testing", icon: Target },
      { name: "AOV Scaling", icon: TrendingUp },
    ],
  },
  {
    id: "motion-video",
    title: "الـــمـــوشـــن والـــفـــيـــديـــوهـــات الإعـــلانـــيـــة",
    enTitle: "Motion Graphics & Video Ads",
    description: "صناعة ومونتاج فيديوهات إعلانية سينمائية وموشن جرافيك للريلز وتيك توك بـ Premiere Pro و After Effects تخطف الانتباه وتحفز الشراء الفوري.",
    primaryImage: "/hero-icons/premiere-pro.png",
    brandIcons: [AdobePremiereIcon, AdobeAfterEffectsIcon],
    toolBadges: [
      { name: "Premiere Pro", icon: AdobePremiereIcon },
      { name: "After Effects", icon: AdobeAfterEffectsIcon },
      { name: "Reels & TikTok", icon: Film },
    ],
  },
  {
    id: "graphic-design",
    title: "الـــتـــصـــمـــيـــم والـــهـــويـــة الـــبـــصـــريـــة",
    enTitle: "Graphic Design & Creatives",
    description: "تصميم بوستات، بانرات، وهوية بصرية كاملة بـ Photoshop و Illustrator توقف التمرير وتحقق أعلى تفاعل ومعدل نقر إعلاني (CTR).",
    primaryImage: "/hero-icons/photoshop.png",
    brandIcons: [AdobePhotoshopIcon, AdobeIllustratorIcon],
    toolBadges: [
      { name: "Photoshop", icon: AdobePhotoshopIcon },
      { name: "Illustrator", icon: AdobeIllustratorIcon },
      { name: "Ad Creatives", icon: Palette },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-24 text-white overflow-hidden">
      
      {/* Ambient Mesh Glows behind Services */}
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF8B2C]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Decorative Background Artworks */}
      <div
        className="absolute top-12 left-6 w-60 h-60 sm:w-80 sm:h-80 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none -rotate-[16deg] -z-10"
        style={{ backgroundImage: `url('/bg-art/logo.png')` }}
      />
      <div
        className="absolute bottom-12 right-6 w-52 h-52 sm:w-72 sm:h-72 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none rotate-[20deg] -z-10"
        style={{ backgroundImage: `url('/bg-art/social-media.png')` }}
      />

      {/* Seamless Top & Bottom Black Gradient Fades */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none z-10" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1440px]">
        
        {/* Section Header with Tatweel */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl text-right">
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-wide text-white leading-tight">
                خـــــدمـــــاتـــــي <span className="text-[#FF8B2C] drop-shadow-[0_0_25px_rgba(255,139,44,0.4)]">الــــاحــــتــــرافــــيــــة</span>
              </h2>
              
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 font-semibold leading-relaxed">
                حـــلـــول تـــســـويـــقـــيـــة مـــتـــكـــامـــلـــة وحـــمـــلات إعـــلانـــيـــة مـــوجـــهـــة بـــالـــبـــيـــانـــات لـــتـــحـــقـــيـــق أعـــلـــى عـــائـــد اســـتـــثـــمـــاري
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF8B2C] hover:text-[#FFA857] transition-all group self-start md:self-end pb-1 border-b border-[#FF8B2C]/30 hover:border-[#FF8B2C]"
            >
              <span>اطـــلـــب خـــدمـــتـــك الآن</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 6 Services Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const PrimaryIcon = service.brandIcons[0];
            const SecondaryIcon = service.brandIcons[1];

            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={idx * 60}
                className="h-full"
              >
                <div
                  className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-[#0e0e14]/90 backdrop-blur-xl border border-white/10 hover:border-[#FF8B2C]/60 transition-all duration-400 hover:shadow-[0_16px_45px_rgba(255,139,44,0.22)] hover:-translate-y-2 overflow-hidden"
                >
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF8B2C]/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                  {/* Large Ambient Brand Icon in Card Background */}
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-36 h-36 sm:w-44 sm:h-44 opacity-[0.06] group-hover:opacity-[0.16] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none select-none z-0">
                    <Image
                      src={service.primaryImage}
                      alt=""
                      fill
                      unoptimized
                      className="object-contain filter"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Multi-Icon Header Capsule */}
                    <div className="flex items-center gap-3 mb-6">
                      {/* Main Service Brand Badge */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF8B2C]/20 to-[#FF8B2C]/5 border border-[#FF8B2C]/40 flex items-center justify-center p-3 shadow-[0_4px_18px_rgba(255,139,44,0.2)] group-hover:scale-110 group-hover:border-[#FF8B2C] group-hover:shadow-[0_10px_28px_rgba(255,139,44,0.35)] transition-all duration-400">
                        <Image
                          src={service.primaryImage}
                          alt={service.title}
                          width={44}
                          height={44}
                          unoptimized
                          className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                        />
                      </div>

                      {/* Tool Brand Icons Pills (Premiere, After Effects, Photoshop, Illustrator, Instagram, YouTube) */}
                      <div className="flex items-center gap-1.5">
                        {service.brandIcons.map((IconComp, bIdx) => (
                          <div 
                            key={bIdx}
                            className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:border-[#FF8B2C]/40 group-hover:text-white transition-all duration-300"
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* English Label Subtitle */}
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF8B2C] mb-1.5">
                      {service.enTitle}
                    </div>

                    {/* Main Arabic Service Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FFA857] transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Tool Badges with Crisp Icons */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/10 group-hover:border-[#FF8B2C]/30 transition-colors">
                    {service.toolBadges.map((badge) => {
                      const BadgeIcon = badge.icon;
                      return (
                        <span
                          key={badge.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/5 text-zinc-300 border border-white/10 group-hover:border-[#FF8B2C]/40 group-hover:text-white group-hover:bg-white/10 transition-all shadow-sm"
                        >
                          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-[#FF8B2C]" />}
                          <span>{badge.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

    </section>
  );
}
