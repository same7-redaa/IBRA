import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  Target,
  TrendingUp,
  BarChart3,
  Layers,
  Sparkles,
  ExternalLink,
  Film,
  Palette,
  LineChart
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PortfolioCategory {
  id: string;
  slug: string;
  departmentNumber: string;
  field: string;
  category: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  spanClass: string;
  nudgeClass: string;
  cardRotate: string;
  strategicPillars: string[];
  kpiBadges: { text: string; rotate: string }[];
  ctaText: string;
}

const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "media-buying-gallery",
    slug: "media-buying",
    departmentNumber: "قسم 01",
    field: "Meta & TikTok & Google Ads",
    category: "معرض الميديا باينج",
    subtitle: "Media Buying · Scaling Success",
    title: "إدارة وتوسيع الحملات الممولة",
    description: "إطلاق وإدارة حملات Meta و TikTok و Google Ads بميزانيات ضخمة وتحقيق أعلى عائد إعلاني (ROAS).",
    image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
    icon: TrendingUp,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1",
    strategicPillars: [
      "هيكلة الـ Full-Funnel والتوسع المالي",
      "خفض تكلفة الاقتناء (CPP) وإعادة الاستهداف",
    ],
    kpiBadges: [
      { text: "+14.8M EGP مبيعات", rotate: "-rotate-2" },
      { text: "ROAS يصل 15x", rotate: "rotate-2" },
      { text: "خفض التكلفة 74%", rotate: "-rotate-1" },
    ],
    ctaText: "معرض الميديا باينج",
  },
  {
    id: "motion-video-gallery",
    slug: "motion-video",
    departmentNumber: "قسم 02",
    field: "Motion Graphics & Reels",
    category: "الموشن جرافيك والفيديو",
    subtitle: "Motion Graphics · Video Ads",
    title: "الموشن ومونتاج الفيديوهات",
    description: "إنتاج فيديوهات إعلانية وموشن جرافيك للريلز وتيك توك تخطف الانتباه وتحفز الشراء الفوري.",
    image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
    icon: Film,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:rotate-1.5",
    strategicPillars: [
      "مونتاج سينمائي بـ Premiere Pro و AE",
      "مؤثرات بصرية وصوتية ترفع المشاهدة",
    ],
    kpiBadges: [
      { text: "+120 فيديو إعلاني", rotate: "-rotate-2" },
      { text: "Premiere & AE", rotate: "rotate-2" },
      { text: "ملايين المشاهدات", rotate: "-rotate-1" },
    ],
    ctaText: "معرض الموشن والفيديو",
  },
  {
    id: "social-designs-gallery",
    slug: "social-designs",
    departmentNumber: "قسم 03",
    field: "Social Media & Ads",
    category: "تصميمات سوشيال",
    subtitle: "Social Designs · Ad Creatives",
    title: "تصاميم السوشيال ميديا",
    description: "تصميم بوستات وبانرات إعلانية احترافية توقف التمرير وترفع معدلات التفاعل والنقر (CTR).",
    image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
    icon: Palette,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1.5",
    strategicPillars: [
      "تصاميم بـ Photoshop & Illustrator",
      "كرييتفز ترفع معدل النقر (CTR)",
    ],
    kpiBadges: [
      { text: "+500 بوست وتصميم", rotate: "-rotate-2" },
      { text: "Photoshop & AI", rotate: "rotate-2" },
      { text: "CTR مضاعف 3.4x", rotate: "-rotate-1" },
    ],
    ctaText: "معرض تصاميم السوشيال",
  },
  {
    id: "ecommerce-scaling-gallery",
    slug: "ecommerce-scaling",
    departmentNumber: "قسم 04",
    field: "E-Commerce & CRO",
    category: "معرض المتاجر",
    subtitle: "Store Scaling · CRO Mastery",
    title: "توسيع المتاجر وهندسة التحويل",
    description: "تحسين صفحات الهبوط ومسار الشراء لمضاعفة مبيعات المتاجر الإلكترونية ورفع هوامش الربح.",
    image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
    icon: Target,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:rotate-1",
    strategicPillars: [
      "تحسين صفحات الهبوط وتجربة الدفع",
      "هيكلة باقات وعروض تزيد المبيعات",
    ],
    kpiBadges: [
      { text: "+36.3K طلب معالج", rotate: "-rotate-2" },
      { text: "تحويل CRO قياسي", rotate: "rotate-2" },
      { text: "مضاعفة المبيعات 3x", rotate: "-rotate-1" },
    ],
    ctaText: "معرض أعمال المتاجر",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full pt-16 sm:pt-24 pb-16 sm:pb-24 text-white overflow-hidden"
    >
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[#FF8B2C]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Decorative Background Artworks */}
      <div
        className="absolute top-12 right-8 w-64 h-64 sm:w-88 sm:h-88 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none rotate-[15deg] -z-10"
        style={{ backgroundImage: `url('/bg-art/logo.png')` }}
      />
      <div
        className="absolute bottom-12 left-8 w-56 h-56 sm:w-76 sm:h-76 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none -rotate-[20deg] -z-10"
        style={{ backgroundImage: `url('/bg-art/social-media.png')` }}
      />

      {/* Seamless Top Black Gradient Fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none z-10" />

      {/* Section Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12 max-w-[1280px]">
        
        {/* Section Header: Structured for Portfolio Galleries */}
        <ScrollReveal direction="up" blurAmount={16}>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm sm:text-base md:text-lg font-black text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)] mb-2 tracking-wide">
              مـــعـــارض الأعـــمــــال والـــنـــتـــائــــج
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              أقـــســــام <span className="text-[#FF8B2C] drop-shadow-[0_0_24px_rgba(255,139,44,0.45)]">مـــعـــرض الأعـــمــــال</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 font-bold max-w-xl mx-auto leading-relaxed">
              نـــمـــاذج حـــيـــة وحـــمـــلات مـــوثـــقـــة حـــقـــقـــت نـــتـــائـــج اســـتـــثـــنـــائـــيـــة بـــالأرقــــام
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio 2x2 Grid with 3D Stack Fan-Out Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto pt-6 pb-8">
          {PORTFOLIO_CATEGORIES.map((dept, idx) => {
            const Icon = dept.icon;

            return (
              <div
                key={dept.id}
                className="w-full h-full"
              >
                <ScrollReveal 
                  direction="up" 
                  delay={idx * 60}
                  blurAmount={12}
                  className="h-full"
                >
                {/* 3D Stack Card Outer Wrapper */}
                <div className="relative w-full h-full group cursor-pointer transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4">
                  
                  {/* Layer 2 (Deepest Stack Layer - rotates +7deg on hover) */}
                  <div 
                    className="absolute top-[-7%] left-1/2 -translate-x-1/2 w-[82%] h-[82%] rounded-[24px] sm:rounded-[28px] bg-[#0c0c14] border border-[#FF8B2C]/30 shadow-[0_8px_20px_rgba(0,0,0,0.6)] origin-bottom z-0 transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[7deg] group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:border-[#FF8B2C]/60 group-hover:bg-[#FF8B2C]/10 pointer-events-none"
                  />

                  {/* Layer 1 (Middle Stack Layer - rotates -7deg on hover) */}
                  <div 
                    className="absolute top-[-3.5%] left-1/2 -translate-x-1/2 w-[91%] h-[91%] rounded-[24px] sm:rounded-[28px] bg-[#14141f] border border-[#FF8B2C]/50 shadow-[0_10px_25px_rgba(0,0,0,0.7)] origin-bottom z-0 transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[7deg] group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:border-[#FF8B2C] group-hover:bg-[#FF8B2C]/15 pointer-events-none"
                  />

                  {/* Main Front Content Card */}
                  <article
                    className="relative z-10 rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 h-full bg-[#0d0d14] border-2 border-[#FF8B2C] shadow-[0_10px_30px_rgba(0,0,0,0.85)] group-hover:shadow-[0_20px_50px_rgba(255,139,44,0.32)] transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Top Row: Department Icon & Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-[12px] flex items-center justify-center bg-[#FF8B2C]/15 border border-[#FF8B2C] text-[#FF8B2C] shadow-[0_0_12px_rgba(255,139,44,0.3)] group-hover:scale-105 group-hover:bg-[#FF8B2C] group-hover:text-[#060608] transition-all duration-300 flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-white leading-snug group-hover:text-[#FF8B2C] transition-colors">
                          {dept.title}
                        </h3>
                      </div>

                      {/* Original 3D Opening Folder Component (Pure Vector/CSS without images) */}
                      <div className="relative w-full h-36 sm:h-44 flex items-center justify-center overflow-visible mb-3 select-none py-2">
                        <div className="file relative w-48 sm:w-56 h-28 sm:h-32 cursor-pointer origin-bottom [perspective:1500px] z-20">
                          {/* Folder Back Flap (work-5) */}
                          <div className="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-16 sm:after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[60px] sm:before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]" />
                          
                          {/* Inner Document Sheet 4 (work-4) */}
                          <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]" />
                          
                          {/* Inner Document Sheet 3 (work-3) */}
                          <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
                          
                          {/* Inner Document Sheet 2 (work-2) */}
                          <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />

                          {/* Folder Front Flap (work-1) that swings open */}
                          <div className="work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[104px] sm:h-[120px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[110px] sm:after:w-[136px] after:h-[14px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[106px] sm:before:right-[132px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)] shadow-lg" />
                        </div>
                      </div>

                      {/* Concise Description */}
                      <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-3">
                        {dept.description}
                      </p>

                      {/* Scope / Strategic Pillars List */}
                      <div className="space-y-1.5 mb-3.5 pb-3 border-b border-white/10 group-hover:border-[#FF8B2C]/30 transition-colors">
                        {dept.strategicPillars.map((pillar, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-zinc-300 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] mt-1.5 flex-shrink-0 shadow-[0_0_6px_#FF8B2C]" />
                            <span className="leading-snug">{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Direct Action Button */}
                    <div className="pt-2 flex items-center justify-between gap-2">
                      <Link
                        href={`/portfolio/${dept.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs hover:bg-[#FFA857] transition-all shadow-[0_2px_12px_rgba(255,139,44,0.35)] hover:scale-105 group/btn"
                      >
                        <span>{dept.ctaText}</span>
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1 flex-shrink-0" />
                      </Link>

                      <Link
                        href={`/portfolio/${dept.slug}`}
                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8B2C] transition-colors flex-shrink-0 group-hover:border-white/30"
                        title="عرض دراسات الحالة والمعرض"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}


