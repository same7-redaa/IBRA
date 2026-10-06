"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  TrendingUp, 
  BarChart3, 
  Compass, 
  Palette, 
  LineChart, 
  Share2, 
  ArrowLeft,
  Sparkles
} from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  iconImage: string;
  tags: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "media-buying",
    title: "شـــراء وإدارة الـــحـــمـــلات",
    enTitle: "Media Buying",
    description: "إدارة الحملات الإعلانية الشاملة (Full-Funnel) عبر منصات Meta و TikTok و Google باستراتيجية ثلاثية المراحل: الاختبار، التحسين، والتوسع لضمان أعلى عائد استثماري.",
    iconImage: "/hero-icons/meta.png",
    tags: ["Meta Ads", "TikTok Ads", "Google Ads", "Scaling"],
  },
  {
    id: "campaign-optimization",
    title: "تـــحـــســـيـــن أداء الـــحـــمـــلات",
    enTitle: "Campaign Optimization",
    description: "خفض تكلفة الاقتناء (CPP) ومضاعفة العائد على الإنفاق الإعلاني (ROAS) عبر التحليل المستمر للبيانات واختبارات A/B المتقدمة وإدارة دقيقة لكافة مراحل القمع البيعي.",
    iconImage: "/hero-icons/google-ads.png",
    tags: ["CPP Reduction", "ROAS Max", "A/B Testing"],
  },
  {
    id: "brand-strategy",
    title: "اســـتـــراتـــيـــجـــيـــة الـــبـــرانـــد",
    enTitle: "Brand Strategy",
    description: "صناعة الهوية البصرية المتكاملة، صياغة أطر الرسائل التسويقية المؤثرة، وبناء استراتيجيات علامة تجارية راسخة تقود لنمو تجاري مستدام ومبيعات قياسية.",
    iconImage: "/hero-icons/illustrator.png",
    tags: ["Visual Identity", "Messaging Framework", "Brand Growth"],
  },
  {
    id: "graphic-design",
    title: "الـــتـــصـــمـــيـــم الـــجـــرافـــيـــكـــي",
    enTitle: "Graphic Design",
    description: "ابتكار الأصول الإبداعية والتصاميم البصرية الفائقة باستخدام Photoshop و Illustrator و InDesign الموجهة للحملات الإعلانية ومواقع التواصل وبناء الهوية.",
    iconImage: "/hero-icons/photoshop.png",
    tags: ["Photoshop", "Illustrator", "Ad Creatives"],
  },
  {
    id: "analytics-reporting",
    title: "الـــتـــحـــلـــيـــلات والـــتـــقـــاريـــر",
    enTitle: "Analytics & Reporting",
    description: "استخراج الرؤى الدقيقة عبر Google Analytics و Meta Insights وتحويل البيانات الرقمية المعقدة إلى قرارات تسويقية واضحة واستراتيجيات نمو قابلة للتنفيذ.",
    iconImage: "/hero-icons/tiktok.png",
    tags: ["Google Analytics", "Meta Insights", "Data Decisions"],
  },
  {
    id: "social-media-strategy",
    title: "اســـتـــراتـــيـــجـــيـــات الـــســـوشـــيـــال",
    enTitle: "Social Media Strategy",
    description: "تحسين محركات البحث (SEO/SEM)، التخطيط الهندسي للمحتوى، والإدارة الكاملة للحسابات الرقمية لضمان تفاعل مستدام وبناء مجتمع مخلص للعلامة التجارية.",
    iconImage: "/hero-icons/instagram.png",
    tags: ["SEO & SEM", "Content Strategy", "Engagement"],
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
            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={idx * 60}
                className="h-full"
              >
                <div
                  className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-[#0e0e14]/85 backdrop-blur-xl border border-white/10 hover:border-[#FF8B2C]/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,139,44,0.18)] hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF8B2C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Large Transparent Ambient Brand Icon in Background / Bottom-Left */}
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-36 h-36 sm:w-44 sm:h-44 opacity-[0.07] group-hover:opacity-[0.16] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-400 pointer-events-none select-none z-0">
                    <Image
                      src={service.iconImage}
                      alt=""
                      fill
                      unoptimized
                      className="object-contain filter"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Service Icon Badge with Hero Brand Image */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FF8B2C]/20 to-[#FF8B2C]/5 border border-[#FF8B2C]/35 flex items-center justify-center p-3 shadow-[0_6px_20px_rgba(255,139,44,0.15)] mb-6 group-hover:scale-110 group-hover:border-[#FF8B2C] group-hover:shadow-[0_10px_28px_rgba(255,139,44,0.3)] transition-all duration-300">
                      <Image
                        src={service.iconImage}
                        alt={service.title}
                        width={44}
                        height={44}
                        unoptimized
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                      />
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

                  {/* Service Tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/5 text-zinc-300 border border-white/10 group-hover:border-[#FF8B2C]/30 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
