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
    category: "معرض حملات الميديا باينج",
    subtitle: "Media Buying Portfolio · Scaling Success",
    title: "إدارة وتوسيع الحملات الإعلانية الممولة",
    description: "نماذج ودراسات حالة تفصيلية لإدارة ميزانيات إعلانية ضخمة وتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS) عبر Meta Ads و TikTok Ads و Google Ads باستراتيجيات التوسع المالي المتسارع.",
    image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
    icon: TrendingUp,
    spanClass: "md:col-span-7",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1",
    strategicPillars: [
      "حملات الـ Full-Funnel (Testing, Optimization, Scaling)",
      "إعادة الاستهداف الذكي وتخفيض تكلفة الاقتناء (CPP)",
    ],
    kpiBadges: [
      { text: "+3.8M EGP مبيعات موثقة", rotate: "-rotate-2" },
      { text: "ROAS استثنائي يصل 15x", rotate: "rotate-2" },
      { text: "خفض تكلفة الطلب 74%", rotate: "-rotate-1" },
      { text: "+25 حملة ناجحة", rotate: "rotate-3" },
    ],
    ctaText: "استكشف معرض الحملات",
  },
  {
    id: "ecommerce-scaling-gallery",
    departmentNumber: "قسم 02",
    field: "E-Commerce Growth & CRO",
    category: "معرض نمو وتوسيع المتاجر",
    subtitle: "Store Scaling Portfolio · CRO Mastery",
    title: "توسيع المتاجر وهندسة التحويل الشرائي",
    description: "معرض استراتيجيات مضاعفة مبيعات المتاجر الإلكترونية، تحسين رحلة العميل، ورفع معدل التحويل الشرائي لمعالجة آلاف الطلبات شهرياً وتحقيق هوامش ربحية قياسية.",
    image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
    icon: Target,
    spanClass: "md:col-span-5",
    nudgeClass: "md:translate-y-8",
    cardRotate: "hover:rotate-0 md:rotate-1.5",
    strategicPillars: [
      "تحسين صفحات الهبوط وتجربة الدفع السريع",
      "هيكلة العروض والباقات الشرائية المغرية",
    ],
    kpiBadges: [
      { text: "+12.5K طلب معالج", rotate: "-rotate-3" },
      { text: "1,546% معدل تحويل CRO", rotate: "rotate-2.5" },
      { text: "مضاعفة المبيعات 3x", rotate: "-rotate-1.5" },
      { text: "+15 متجر تم توسيعه", rotate: "rotate-2" },
    ],
    ctaText: "استكشف معرض المتاجر",
  },
  {
    id: "branding-creatives-gallery",
    departmentNumber: "قسم 03",
    field: "Brand Identity & Ad Creatives",
    category: "معرض التصميم والهوية",
    subtitle: "Visual Identity · High-Converting Creatives",
    title: "الهوية البصرية وتصميم الإعلانات الإبداعية",
    description: "معرض الأعمال الفنية وصياغة الهويات البصرية المتكاملة وتصميم الأصول الإعلانية الجذابة التي توقف التمرير وتحفز الشراء الفوري بأسلوب بصري فريد.",
    image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
    icon: Sparkles,
    spanClass: "md:col-span-5",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1.5",
    strategicPillars: [
      "تصميم الهويات البصرية والأدلة الإرشادية للعلامات",
      "ابتكار كرييتفز إعلانية تحقق أعلى معدل نقر (CTR)",
    ],
    kpiBadges: [
      { text: "+40 هوية بصرية كاملة", rotate: "-rotate-2" },
      { text: "+500 كرييتف إعلاني", rotate: "rotate-2" },
      { text: "Photoshop & Illustrator", rotate: "-rotate-3" },
      { text: "زيادة الـ CTR بنسبة 3.4x", rotate: "rotate-1.5" },
    ],
    ctaText: "استكشف معرض التصاميم",
  },
  {
    id: "motion-video-gallery",
    departmentNumber: "قسم 04",
    field: "Motion Graphics & Video Ads",
    category: "معرض الموشن والفيديو",
    subtitle: "Motion Graphics · Video Production",
    title: "الموشن جرافيك ومونتاج الفيديوهات الإعلانية",
    description: "معرض الفيديوهات الإعلانية الموجهة لمنصات تيك توك وريلز وموشن جرافيك عالي الدقة مصمم لإيصال فكرة المنتج وسرد قصته بأسلوب مشوق يحقق أعلى مبيعات.",
    image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
    icon: Film,
    spanClass: "md:col-span-7",
    nudgeClass: "md:translate-y-8",
    cardRotate: "hover:rotate-0 md:rotate-1",
    strategicPillars: [
      "مونتاج احترافي بـ Premiere Pro و After Effects",
      "سرد بصري وتأثيرات صوتية ترفع معدل المشاهدة",
    ],
    kpiBadges: [
      { text: "+120 فيديو إعلاني ناجح", rotate: "-rotate-2.5" },
      { text: "Premiere & After Effects", rotate: "rotate-2" },
      { text: "ملايين المشاهدات", rotate: "-rotate-1" },
      { text: "معدل استكمال 85%+", rotate: "rotate-3" },
    ],
    ctaText: "استكشف معرض الفيديوهات",
  },
  {
    id: "data-analytics-gallery",
    departmentNumber: "قسم 05",
    field: "Data Tracking & Meta CAPI",
    category: "معرض البيانات والتتبع",
    subtitle: "Advanced Tracking · Conversion API",
    title: "بنية تتبع البيانات المتقدمة وتحليل التحويلات",
    description: "معرض تأسيس وربط البكسلات (Meta CAPI & TikTok Pixel & Google Analytics 4) وتطوير لوحات المتابعة اللحظية لعزل الإعلانات غير المجدية ومضاعفة المبيعات.",
    image: "/portfolio/5a0180169cf5c10d6ae9a4f883938f81.jpg",
    icon: LineChart,
    spanClass: "md:col-span-12",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-0.5",
    strategicPillars: [
      "تثبيت Meta Conversions API وتخطي قيود التتبع",
      "بناء لوحات بيانات دقيقة لمراقبة الـ ROAS والـ CPP",
    ],
    kpiBadges: [
      { text: "دقة تتبع 99.8%", rotate: "-rotate-2" },
      { text: "Meta CAPI Setup", rotate: "rotate-2.5" },
      { text: "Google Analytics 4", rotate: "-rotate-1.5" },
      { text: "تقارير أداء لحظية", rotate: "rotate-2" },
    ],
    ctaText: "استكشف معرض التحليلات",
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

        {/* Sticker Masonry Grid (3 cards per row on Desktop, 2 cards per row on Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-stretch">
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
                  className={`relative rounded-[16px] sm:rounded-[22px] p-3 sm:p-4 md:p-5 lg:p-6 h-full bg-[#0d0d14]/95 border-2 border-[#FF8B2C] shadow-[0_8px_25px_rgba(0,0,0,0.75)] hover:shadow-[0_18px_45px_rgba(255,139,44,0.22)] transition-all duration-300 flex flex-col justify-between group ${dept.cardRotate}`}
                  style={{ willChange: "transform" }}
                >
                  <div>
                    {/* Top Row: Department Icon Badge & Category Pill */}
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-[10px] sm:rounded-[12px] flex items-center justify-center bg-[#FF8B2C]/10 border-2 border-[#FF8B2C] text-[#FF8B2C] shadow-[0_0_10px_rgba(255,139,44,0.25)] group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/40 truncate max-w-[90px] xs:max-w-none">
                          {dept.category}
                        </span>
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 hidden sm:inline-block">
                          {dept.departmentNumber}
                        </span>
                      </div>
                    </div>

                    {/* Image Preview with Zoom on Hover */}
                    <div className="relative w-full h-24 xs:h-28 sm:h-36 md:h-40 rounded-lg sm:rounded-xl overflow-hidden mb-2.5 sm:mb-3.5 bg-[#060608] border border-white/10 shadow-inner">
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#060608]/85 text-[#FF8B2C] border border-[#FF8B2C]/30 backdrop-blur-sm truncate max-w-[120px]">
                        {dept.field}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-black text-white leading-snug mb-1.5 sm:mb-2 group-hover:text-[#FF8B2C] transition-colors line-clamp-2">
                      {dept.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] xs:text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-2.5 sm:mb-3 line-clamp-2">
                      {dept.description}
                    </p>

                    {/* Scope / Strategic Pillars List */}
                    <div className="space-y-1 mb-2.5 sm:mb-3 pb-2.5 sm:pb-3 border-b border-white/10">
                      {dept.strategicPillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 sm:gap-2 text-zinc-300 text-[9px] xs:text-[10px] sm:text-xs">
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#FF8B2C] mt-1 flex-shrink-0" />
                          <span className="leading-tight truncate">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Floating Sticker Badges & CTA */}
                  <div className="mt-auto pt-1">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-3">
                      {dept.kpiBadges.slice(0, 3).map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className={`inline-block text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-black rounded-full px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-white text-[#060608] border-2 border-[#FF8B2C] shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-all duration-200 hover:scale-105 hover:rotate-0 ${badge.rotate}`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 sm:pt-2.5 border-t border-white/10 flex items-center justify-between gap-1.5 sm:gap-2">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-[10px] sm:text-xs hover:bg-[#FFA857] transition-all shadow-[0_2px_10px_rgba(255,139,44,0.3)] hover:scale-105 group/btn"
                      >
                        <span className="truncate">{dept.ctaText}</span>
                        <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:-translate-x-1 flex-shrink-0" />
                      </Link>

                      <Link
                        href="#contact"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8B2C] transition-colors flex-shrink-0"
                        title="تفاصيل إضافية"
                      >
                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </Link>
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

