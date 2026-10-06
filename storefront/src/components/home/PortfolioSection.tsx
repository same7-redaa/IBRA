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
      { text: "+3.8M EGP مبيعات", rotate: "-rotate-2" },
      { text: "ROAS يصل 15x", rotate: "rotate-2" },
      { text: "خفض التكلفة 74%", rotate: "-rotate-1" },
    ],
    ctaText: "معرض الميديا باينج",
  },
  {
    id: "motion-video-gallery",
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
      { text: "+12.5K طلب معالج", rotate: "-rotate-2" },
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
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base md:text-lg font-black text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)] mb-2.5 tracking-wide">
              مـــعـــارض الأعـــمـــال والـــنـــتـــائـــج
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              أقسام <span className="text-[#FF8B2C]">معرض الأعمال</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              تصفح معارض الأعمال المتخصصة لكل خدمة، والتي تضم نماذج حية وحملات إعلانية موثقة حققت نتائج استثنائية بالأرقام
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio 2x2 Grid (1 card per row on Mobile, 2 cards over 2 cards on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {PORTFOLIO_CATEGORIES.map((dept, idx) => {
            const Icon = dept.icon;

            return (
              <div
                key={dept.id}
                className="w-full h-full transition-transform duration-300"
              >
                <ScrollReveal 
                  direction="up" 
                  delay={idx * 60}
                  blurAmount={12}
                  className="h-full"
                >
                <article
                  className={`relative rounded-[22px] sm:rounded-[28px] p-6 sm:p-7 md:p-8 h-full bg-[#0d0d14]/95 border-2 border-[#FF8B2C] shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_22px_55px_rgba(255,139,44,0.32)] transition-all duration-500 overflow-hidden flex flex-col justify-between group ${dept.cardRotate}`}
                  style={{ willChange: "transform" }}
                >
                  {/* Top-Right Expanding Corner (matches user CSS .card::before) */}
                  <div 
                    className="absolute top-0 right-0 w-[22%] h-[22%] bg-gradient-to-bl from-[#FF8B2C]/45 via-[#FF8B2C]/15 to-transparent border-b-2 border-l-2 border-[#FF8B2C]/60 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full group-hover:border-transparent group-hover:bg-[#FF8B2C]/15 pointer-events-none z-0"
                    style={{
                      borderRadius: "0 22px 0 100%",
                    }}
                  />

                  {/* Bottom-Left Expanding Corner (matches user CSS .card::after) */}
                  <div 
                    className="absolute bottom-0 left-0 w-[22%] h-[22%] bg-gradient-to-tr from-[#FF8B2C]/45 via-[#FF8B2C]/15 to-transparent border-t-2 border-r-2 border-[#FF8B2C]/60 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full group-hover:border-transparent group-hover:bg-[#FF8B2C]/15 pointer-events-none z-0"
                    style={{
                      borderRadius: "0 100% 0 22px",
                    }}
                  />

                  {/* Inner Content Layer (elevated above hover corners) */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Department Icon Badge & Category Pill */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center bg-[#FF8B2C]/15 border-2 border-[#FF8B2C] text-[#FF8B2C] shadow-[0_0_15px_rgba(255,139,44,0.35)] group-hover:scale-110 group-hover:bg-[#FF8B2C] group-hover:text-[#060608] transition-all duration-400 flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-black px-3.5 py-1 rounded-full bg-[#FF8B2C]/20 text-[#FF8B2C] border border-[#FF8B2C]/50 group-hover:border-[#FF8B2C] group-hover:shadow-[0_0_12px_rgba(255,139,44,0.3)] transition-all">
                            {dept.category}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                            {dept.departmentNumber}
                          </span>
                        </div>
                      </div>

                      {/* Image Preview with Zoom on Hover */}
                      <div className="relative w-full h-44 sm:h-52 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-[#060608] border border-white/10 shadow-inner group-hover:border-[#FF8B2C]/40 transition-colors">
                        <Image
                          src={dept.image}
                          alt={dept.title}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 600px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-60 pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md bg-[#060608]/90 text-[#FF8B2C] border border-[#FF8B2C]/30 backdrop-blur-sm">
                          {dept.field}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-2 group-hover:text-[#FF8B2C] transition-colors">
                        {dept.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
                        {dept.description}
                      </p>

                      {/* Scope / Strategic Pillars List */}
                      <div className="space-y-2 mb-4 pb-4 border-b border-white/10 group-hover:border-[#FF8B2C]/30 transition-colors">
                        {dept.strategicPillars.map((pillar, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] mt-2 flex-shrink-0 shadow-[0_0_8px_#FF8B2C]" />
                            <span className="leading-snug">{pillar}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Floating Sticker Badges & CTA */}
                    <div className="mt-auto pt-1">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5">
                        {dept.kpiBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className={`inline-block text-[10px] sm:text-[11px] font-black rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white text-[#060608] border-2 border-[#FF8B2C] shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:rotate-0 group-hover:border-[#FF8B2C] group-hover:shadow-[0_2px_12px_rgba(255,139,44,0.3)] ${badge.rotate}`}
                          >
                            {badge.text}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-3 border-t border-white/10 group-hover:border-[#FF8B2C]/30 transition-colors flex items-center justify-between gap-2">
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs hover:bg-[#FFA857] transition-all shadow-[0_2px_12px_rgba(255,139,44,0.35)] hover:scale-105 group/btn"
                        >
                          <span>{dept.ctaText}</span>
                          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1 flex-shrink-0" />
                        </Link>

                        <Link
                          href="#contact"
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8B2C] transition-colors flex-shrink-0 group-hover:border-white/30"
                          title="تفاصيل إضافية"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

