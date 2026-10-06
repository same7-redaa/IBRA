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
  ExternalLink
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectCase {
  id: string;
  year: string;
  countryOrPlatform: string;
  category: string;
  clientSubtitle: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  spanClass: string;
  nudgeClass: string;
  cardRotate: string;
  strategicPillars: string[];
  kpiBadges: { text: string; rotate: string }[];
}

const FEATURED_PROJECTS: ProjectCase[] = [
  {
    id: "peak-feb-2026",
    year: "فبراير 2026",
    countryOrPlatform: "Meta & TikTok Ads",
    category: "مبيعات وتوسع استثنائي",
    clientSubtitle: "E-commerce Analytics · Peak Month Record",
    title: "ذروة الأداء التاريخي 1.44M جنيه ومعدل تحويل 1,546%",
    description: "تحقيق أعلى أداء شهري موثق في تاريخ المتجر بإيرادات بلغت 1.44 مليون جنيه من خلال معالجة 5,100 طلب عبر التوسع المالي المدروس وإعادة استهداف عالية الدقة.",
    image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
    icon: TrendingUp,
    spanClass: "md:col-span-7",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1",
    strategicPillars: [
      "استراتيجية التوسع المالي المتسارع (Aggressive Scaling)",
      "هندسة تحسين معدلات التحويل (CRO) وتجربة الشراء",
      "إعادة استهداف ذكية لرواد المتجر والسلات المتروكة",
    ],
    kpiBadges: [
      { text: "1.44M EGP مبيعات", rotate: "-rotate-2" },
      { text: "5,100 طلب معالج", rotate: "rotate-2" },
      { text: "1,546.7% معدل تحويل", rotate: "-rotate-1" },
      { text: "100K+ ذروة يومية", rotate: "rotate-3" },
    ],
  },
  {
    id: "scale-jan-2026",
    year: "يناير 2026",
    countryOrPlatform: "E-Commerce Scaling",
    category: "توسيع المتاجر الإلكترونية",
    clientSubtitle: "E-commerce Growth · Scaling Success",
    title: "مضاعفة المبيعات إلى 1.38M جنيه",
    description: "مضاعفة نتائج المتجر بنجاح في شهر يناير عبر توسيع شرائح الجماهير وتكثيف اختبارات الإعلانات الإبداعية مع معالجة 4,700 طلب بنجاح ومعدل تحويل 359.6%.",
    image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
    icon: Target,
    spanClass: "md:col-span-5",
    nudgeClass: "md:translate-y-8",
    cardRotate: "hover:rotate-0 md:rotate-1.5",
    strategicPillars: [
      "مضاعفة الجلسات النشطة إلى 3,200 جلسة شرائية",
      "إدارة الحملات متعددة الزوايا الإعلانية",
      "تحسين رحلة العميل من الإعلان حتى إتمام الطلب",
    ],
    kpiBadges: [
      { text: "1.38M EGP مبيعات", rotate: "-rotate-3" },
      { text: "4,700 طلب ناجح", rotate: "rotate-2.5" },
      { text: "359.6% Conv. Rate", rotate: "-rotate-1.5" },
      { text: "3.2K جلسة نشطة", rotate: "rotate-2" },
    ],
  },
  {
    id: "olz-meta-ads",
    year: "2025 - 2026",
    countryOrPlatform: "Meta Ads Performance",
    category: "تحسين تكلفة الاقتناء",
    clientSubtitle: "Campaign Breakdown · OLZ Brand",
    title: "تحقيق 960K جنيه مبيعات وخفض الـ CPP",
    description: "إدارة شاملة لميزانيات إعلانية بلغت 70K جنيه وتحقيق عائد إيرادات تجاوز 960K جنيه مع خفض تكلفة الطلب (CPP) من 77 ج.م إلى 20 ج.م فقط وتنفيذ 4,875 طلب.",
    image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
    icon: Sparkles,
    spanClass: "md:col-span-5",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1.5",
    strategicPillars: [
      "خفض تكلفة الطلب (CPP) بنسبة 74%",
      "اختبارات A/B مستمرة على النصوص والعناوين",
      "إدارة ميزانية 70K لتحقيق 960K عائد إعلاني",
    ],
    kpiBadges: [
      { text: "960K EGP مبيعات", rotate: "-rotate-2" },
      { text: "70K EGP إنفاق", rotate: "rotate-2" },
      { text: "CPP: 20 EGP فقط", rotate: "-rotate-3" },
      { text: "4,875 طلب مكتمل", rotate: "rotate-1.5" },
    ],
  },
  {
    id: "dec-2025-sales",
    year: "ديسمبر 2025",
    countryOrPlatform: "E-Commerce Operations",
    category: "كفاءة التشغيل والمبيعات",
    clientSubtitle: "E-commerce Analytics · December 2025",
    title: "مبيعات قياسية واستقرار في ديسمبر",
    description: "بناء وإدارة البنية التحتية للحملات الإعلانية مع الحفاظ على استقرار وثبات المبيعات اليومية، ومعالجة أكثر من 2,700 طلب بمعدل تحويل مرتفع بلغ 107.9%.",
    image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
    icon: BarChart3,
    spanClass: "md:col-span-7",
    nudgeClass: "md:translate-y-8",
    cardRotate: "hover:rotate-0 md:rotate-1",
    strategicPillars: [
      "استقرار معدل التحويل اليومي فوق 100%",
      "معالجة 2,700+ طلب مع هوامش ربحية ممتازة",
      "تجهيز المتجر لمرحلة التوسع الكبرى",
    ],
    kpiBadges: [
      { text: "102.7K+ مبيعات", rotate: "-rotate-2.5" },
      { text: "2.7K+ طلب معالج", rotate: "rotate-2" },
      { text: "107.9% Conv. Rate", rotate: "-rotate-1" },
      { text: "1K ذروة يومية", rotate: "rotate-3" },
    ],
  },
  {
    id: "meta-full-funnel",
    year: "2025 - 2026",
    countryOrPlatform: "Facebook & Instagram",
    category: "إدارة وتوجيه الجماهير",
    clientSubtitle: "Full-Funnel Campaign Management",
    title: "إدارة الحملات الإعلانية الشاملة (Full-Funnel)",
    description: "هيكلة متكاملة للحملات الإعلانية على فيسبوك وإنستغرام باستهداف شرائح متعددة تشمل الجماهير المخصصة والواسعة لتحقيق أعلى معدل محادثات وشراء مباشر.",
    image: "/portfolio/5a0180169cf5c10d6ae9a4f883938f81.jpg",
    icon: Layers,
    spanClass: "md:col-span-12",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-0.5",
    strategicPillars: [
      "تقسيم الجماهير المستهدفة بدقة وتفادي تداخل الإعلانات",
      "تحسين سرعة الاستجابة وتوجيه المحادثات للشراء الفوري",
      "خفض تكلفة المحادثة المؤهلة مع زيادة القيمة الشرائية",
    ],
    kpiBadges: [
      { text: "270 محادثة مباشرة", rotate: "-rotate-2" },
      { text: "112 نتيجة شراء", rotate: "rotate-2.5" },
      { text: "Full-Funnel Strategy", rotate: "-rotate-1.5" },
      { text: "Multi-Audience Setup", rotate: "rotate-2" },
    ],
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
        
        {/* Section Header: Exact Ahmed Ali Services style with Blur Reveal */}
        <ScrollReveal direction="up" blurAmount={16}>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base md:text-lg font-black text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)] mb-2.5 tracking-wide">
              الـــتـــأثـــيـــر والـــنـــمـــو
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              مشاريع <span className="text-[#FF8B2C]">تصنع الفارق</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              دراسات حالة تفصيلية لحملات إعلانية وتوسيع متاجر حققت مبيعات قياسية وعوائد استثنائية موثقة بالأرقام
            </p>
          </div>
        </ScrollReveal>

        {/* Sticker Masonry Grid (Ahmed Ali Services Staggered Layout - Compact Height) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className={`${project.spanClass} ${project.nudgeClass} transition-transform duration-300`}
              >
                <ScrollReveal 
                  direction="up" 
                  delay={idx * 80}
                  blurAmount={14}
                  className="h-full"
                >
                <article
                  className={`relative rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 md:p-6 h-full bg-[#0d0d14]/95 border-2 border-[#FF8B2C] shadow-[0_10px_30px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_50px_rgba(255,139,44,0.2)] transition-all duration-300 flex flex-col justify-between group ${project.cardRotate}`}
                  style={{ willChange: "transform" }}
                >
                  <div>
                    {/* Top Row: Sticker Icon Badge & Category Pill */}
                    <div className="flex items-center justify-between gap-2.5 mb-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] flex items-center justify-center bg-[#FF8B2C]/10 border-2 border-[#FF8B2C] text-[#FF8B2C] shadow-[0_0_12px_rgba(255,139,44,0.25)] group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/40">
                          {project.category}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 hidden sm:inline-block">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Image Preview with Zoom on Hover - Compact Height */}
                    <div className="relative w-full h-32 sm:h-36 md:h-40 rounded-lg sm:rounded-xl overflow-hidden mb-3.5 bg-[#060608] border border-white/10 shadow-inner">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute top-2 left-2 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-[#060608]/85 text-[#FF8B2C] border border-[#FF8B2C]/30 backdrop-blur-sm">
                        {project.countryOrPlatform}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-snug mb-2 group-hover:text-[#FF8B2C] transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description - Concise & Compact */}
                    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Strategic Pillars List */}
                    <div className="space-y-1 mb-3 pb-3 border-b border-white/10">
                      {project.strategicPillars.slice(0, 2).map((pillar, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-zinc-300 text-[11px] sm:text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] mt-1 flex-shrink-0" />
                          <span className="leading-tight truncate">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Floating Sticker KPI Badges & CTA */}
                  <div className="mt-auto pt-1">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                      {project.kpiBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className={`inline-block text-[10px] sm:text-[11px] font-black rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white text-[#060608] border-2 border-[#FF8B2C] shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-all duration-200 hover:scale-105 hover:rotate-0 ${badge.rotate}`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs hover:bg-[#FFA857] transition-all shadow-[0_3px_12px_rgba(255,139,44,0.3)] hover:scale-105 group/btn"
                      >
                        <span>اطـــلـــب مـــثـــل هـــذا الـــمـــشـــروع</span>
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1" />
                      </Link>

                      <Link
                        href="#contact"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8B2C] transition-colors flex-shrink-0"
                        title="تفاصيل إضافية"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
