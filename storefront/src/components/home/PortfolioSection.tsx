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
    category: "معرض أعمال الميديا باينج",
    subtitle: "Media Buying Portfolio · Scaling Success",
    title: "إدارة وتوسيع الحملات الإعلانية الممولة",
    description: "نماذج ودراسات حالة تفصيلية لإدارة ميزانيات إعلانية ضخمة وتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS) عبر Meta Ads و TikTok Ads و Google Ads باستراتيجيات التوسع المالي المتسارع.",
    image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
    icon: TrendingUp,
    spanClass: "md:col-span-1",
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
    ctaText: "معرض الميديا باينج",
  },
  {
    id: "motion-video-gallery",
    departmentNumber: "قسم 02",
    field: "Motion Graphics & Video Ads",
    category: "الموشن جرافيك وفيديوهات الإعلانات",
    subtitle: "Motion Graphics · Video Production",
    title: "الموشن جرافيك ومونتاج الفيديوهات الإعلانية",
    description: "معرض الفيديوهات الإعلانية الموجهة لمنصات تيك توك وريلز وموشن جرافيك عالي الدقة مصمم لإيصال فكرة المنتج وسرد قصته بأسلوب مشوق يحقق أعلى مبيعات.",
    image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
    icon: Film,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:rotate-1.5",
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
    ctaText: "معرض الفيديوهات والموشن",
  },
  {
    id: "social-designs-gallery",
    departmentNumber: "قسم 03",
    field: "Social Media & Ad Creatives",
    category: "تصميمات سوشيال",
    subtitle: "Social Media Designs · Creative Ads",
    title: "تصميمات السوشيال ميديا والإعلانات الإبداعية",
    description: "معرض بوستات السوشيال ميديا، البانرات التسويقية، والكرييتفز الإعلانية عالية الجاذبية المصممة لإيقاف التمرير وتحقيق أعلى تفاعل ومعدل نقر (CTR).",
    image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
    icon: Palette,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:-rotate-1.5",
    strategicPillars: [
      "تصميم بوستات وكرييتفز إعلانية بـ Photoshop & Illustrator",
      "ابتكار أفكار بصرية تضاعف التفاعل ومعدل النقر (CTR)",
    ],
    kpiBadges: [
      { text: "+500 بوست وتصميم إعلاني", rotate: "-rotate-2" },
      { text: "Photoshop & Illustrator", rotate: "rotate-2" },
      { text: "زيادة الـ CTR بنسبة 3.4x", rotate: "-rotate-3" },
      { text: "أعلى جودة إبداعية", rotate: "rotate-1.5" },
    ],
    ctaText: "معرض تصميمات السوشيال",
  },
  {
    id: "ecommerce-scaling-gallery",
    departmentNumber: "قسم 04",
    field: "E-Commerce Growth & CRO",
    category: "معرض أعمال المتاجر",
    subtitle: "Store Scaling Portfolio · CRO Mastery",
    title: "توسيع المتاجر وهندسة التحويل الشرائي",
    description: "معرض استراتيجيات مضاعفة مبيعات المتاجر الإلكترونية، تحسين رحلة العميل، ورفع معدل التحويل الشرائي لمعالجة آلاف الطلبات شهرياً وتحقيق هوامش ربحية قياسية.",
    image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
    icon: Target,
    spanClass: "md:col-span-1",
    nudgeClass: "md:translate-y-0",
    cardRotate: "hover:rotate-0 md:rotate-1",
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

        {/* Portfolio Masonry Grid (1 card per row on Mobile, 4 cards on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-5 xl:gap-6 items-stretch">
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
                  className={`relative rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 h-full bg-[#0d0d14]/95 border-2 border-[#FF8B2C] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_18px_45px_rgba(255,139,44,0.25)] transition-all duration-300 flex flex-col justify-between group ${dept.cardRotate}`}
                  style={{ willChange: "transform" }}
                >
                  <div>
                    {/* Top Row: Department Icon Badge & Category Pill */}
                    <div className="flex items-center justify-between gap-2.5 mb-3 sm:mb-3.5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] flex items-center justify-center bg-[#FF8B2C]/10 border-2 border-[#FF8B2C] text-[#FF8B2C] shadow-[0_0_12px_rgba(255,139,44,0.3)] group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-[11px] sm:text-xs font-black px-3 py-1 rounded-full bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/40">
                          {dept.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                          {dept.departmentNumber}
                        </span>
                      </div>
                    </div>

                    {/* Image Preview with Zoom on Hover */}
                    <div className="relative w-full h-44 sm:h-48 md:h-40 rounded-xl overflow-hidden mb-3.5 sm:mb-4 bg-[#060608] border border-white/10 shadow-inner">
                      <Image
                        src={dept.image}
                        alt={dept.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute top-2 left-2 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#060608]/90 text-[#FF8B2C] border border-[#FF8B2C]/30 backdrop-blur-sm">
                        {dept.field}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-black text-white leading-snug mb-2 group-hover:text-[#FF8B2C] transition-colors">
                      {dept.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-3.5">
                      {dept.description}
                    </p>

                    {/* Scope / Strategic Pillars List */}
                    <div className="space-y-1.5 mb-3.5 pb-3.5 border-b border-white/10">
                      {dept.strategicPillars.map((pillar, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-zinc-300 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] mt-1.5 flex-shrink-0" />
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
                          className={`inline-block text-[10px] sm:text-[11px] font-black rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white text-[#060608] border-2 border-[#FF8B2C] shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-105 hover:rotate-0 ${badge.rotate}`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs hover:bg-[#FFA857] transition-all shadow-[0_2px_12px_rgba(255,139,44,0.35)] hover:scale-105 group/btn"
                      >
                        <span>{dept.ctaText}</span>
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1 flex-shrink-0" />
                      </Link>

                      <Link
                        href="#contact"
                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF8B2C] transition-colors flex-shrink-0"
                        title="تفاصيل إضافية"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
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

