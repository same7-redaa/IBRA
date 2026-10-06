import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowRight,
  TrendingUp, 
  Film, 
  Palette, 
  Target, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Sparkles,
  BarChart3,
  Calendar,
  DollarSign,
  ShoppingBag,
  Zap,
  ShieldCheck,
  ChevronLeft
} from "lucide-react";
import { PORTFOLIO_DATA, PortfolioCategoryData } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: "media-buying" },
    { category: "motion-video" },
    { category: "social-designs" },
    { category: "ecommerce-scaling" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = PORTFOLIO_DATA[resolvedParams.category];

  if (!category) {
    return {
      title: "معرض الأعمال | إبراهيم علي",
    };
  }

  return {
    title: `${category.title} | إبراهيم علي`,
    description: category.heroDescription,
  };
}

export default async function PortfolioCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = PORTFOLIO_DATA[resolvedParams.category];

  if (!category) {
    notFound();
  }

  const otherCategories = Object.values(PORTFOLIO_DATA).filter(
    (c) => c.slug !== category.slug
  );

  return (
    <main className="min-h-screen pt-28 pb-20 text-white overflow-hidden">
      {/* Background Ambience & Glows */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#FF8B2C]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-10 w-[450px] h-[450px] bg-[#FF8B2C]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Decorative Watermark Arts */}
      <div
        className="absolute top-32 right-6 w-80 h-80 bg-contain bg-no-repeat opacity-[0.06] mix-blend-screen pointer-events-none rotate-12 -z-10"
        style={{ backgroundImage: `url('/bg-art/logo.png')` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1280px]">
        {/* Breadcrumb Bar */}
        <ScrollReveal direction="down" blurAmount={8}>
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-8 sm:mb-12 font-medium">
            <Link href="/" className="hover:text-[#FF8B2C] transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-zinc-600" />
            <Link href="/portfolio" className="hover:text-[#FF8B2C] transition-colors">
              معرض الأعمال
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#FF8B2C] font-bold">{category.categoryName}</span>
          </nav>
        </ScrollReveal>

        {/* Hero Header Section */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" blurAmount={12}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF8B2C]/10 border border-[#FF8B2C]/30 text-[#FF8B2C] text-xs sm:text-sm font-black mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#FF8B2C] animate-ping" />
                  <span>{category.departmentNumber} · {category.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                  {category.title}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#FF8B2C] mb-4">
                  {category.subtitle}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-8 max-w-2xl">
                  {category.heroDescription}
                </p>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-sm hover:bg-[#FFA857] transition-all shadow-[0_4px_20px_rgba(255,139,44,0.4)] hover:scale-105"
                  >
                    <span>استعراض دراسات الحالة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14141f] border border-[#FF8B2C]/40 text-white font-bold text-sm hover:border-[#FF8B2C] hover:bg-[#FF8B2C]/10 transition-all"
                  >
                    <span>طلب استشارة أو خدمة</span>
                    <ExternalLink className="w-4 h-4 text-[#FF8B2C]" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Visual Card / Badge Preview */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" blurAmount={16}>
                <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#FF8B2C]/40 via-white/10 to-transparent shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                  <div className="relative rounded-[22px] overflow-hidden bg-[#0d0d14] border border-white/10 aspect-[4/3] sm:aspect-[16/11]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-[#060608]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-zinc-400 font-bold">التصنيف الرسمي</p>
                        <p className="text-sm font-black text-white">{category.enTitle}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#FF8B2C]/20 border border-[#FF8B2C] text-[#FF8B2C] text-xs font-black">
                        موثق بالأرقام
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core KPI Stats Grid */}
        <section className="mb-20">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {category.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-[#0d0d14] border border-[#FF8B2C]/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:border-[#FF8B2C] transition-all hover:-translate-y-1 group"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF8B2C] drop-shadow-[0_0_15px_rgba(255,139,44,0.35)] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-black text-white mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-snug">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Strategic Pillars & Methodology */}
        <section className="mb-20 sm:mb-28">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="text-center mb-10">
              <p className="text-xs sm:text-sm font-black text-[#FF8B2C] mb-2 tracking-wide">
                المنهجية والمعايير
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                الركائز الاستراتيجية في التنفيذ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.strategicPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#0e0e17] border border-white/10 hover:border-[#FF8B2C]/60 transition-all hover:bg-[#12121f] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF8B2C]/10 border border-[#FF8B2C]/40 flex items-center justify-center text-[#FF8B2C] mb-4 font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#FF8B2C] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools Used Bar */}
            <div className="mt-8 p-5 rounded-2xl bg-[#090910] border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-300">
                <Sparkles className="w-4 h-4 text-[#FF8B2C]" />
                <span>البرامج والمنصات المعتمدة:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {category.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#161624] border border-white/10 text-xs font-semibold text-zinc-300 hover:border-[#FF8B2C]/50 hover:text-white transition-all"
                  >
                    {tool.name} <span className="text-zinc-500 text-[10px]">({tool.type})</span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Case Studies Section (دراسات حالة موثقة) */}
        <section id="case-studies" className="mb-20 sm:mb-28 scroll-mt-24">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="text-center mb-12">
              <p className="text-xs sm:text-sm font-black text-[#FF8B2C] mb-2 tracking-wide">
                دراسات حالة تفصيلية
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                قصص نجاح بالأرقام والاستراتيجيات
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                تحليل دقيق للتحديات، خطة العمل المنفذة، والنتائج المالية المحققة
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {category.caseStudies.map((cs, cIdx) => (
              <ScrollReveal key={cs.id} direction="up" delay={cIdx * 80} blurAmount={14}>
                <div className="rounded-3xl bg-[#0c0c14] border-2 border-[#FF8B2C]/40 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:border-[#FF8B2C] transition-all">
                  
                  {/* Top Case Study Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-[#FF8B2C]/15 border border-[#FF8B2C] text-[#FF8B2C] text-xs font-black">
                          {cs.industry}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-medium">
                          المدة: {cs.period}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        {cs.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {cs.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-[#161624] text-zinc-400 text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-[#14141f] border border-white/10">
                      <p className="text-xs text-zinc-400 mb-1">الميزانية الإعلانية</p>
                      <p className="text-base sm:text-lg font-black text-white">{cs.budget}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#14141f] border border-white/10">
                      <p className="text-xs text-zinc-400 mb-1">المبيعات المحققة</p>
                      <p className="text-base sm:text-lg font-black text-[#FF8B2C]">{cs.revenue}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#14141f] border border-white/10">
                      <p className="text-xs text-zinc-400 mb-1">العائد الإعلاني (ROAS)</p>
                      <p className="text-base sm:text-lg font-black text-white">{cs.roas}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#14141f] border border-white/10">
                      <p className="text-xs text-zinc-400 mb-1">إجمالي الطلبات</p>
                      <p className="text-base sm:text-lg font-black text-white">{cs.orders}</p>
                    </div>
                  </div>

                  {/* Deep Dive: Challenge vs Strategy vs Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Challenge */}
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <p className="text-xs font-black text-red-400 mb-1 flex items-center gap-1.5">
                          <span>⚠️ التحدي التسويقي قبل التدخل:</span>
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>

                      {/* Strategy */}
                      <div>
                        <p className="text-sm font-black text-white mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#FF8B2C]" />
                          <span>الخطة الاستراتيجية المنفذة:</span>
                        </p>
                        <ul className="space-y-2">
                          {cs.strategy.map((st, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div>
                        <p className="text-sm font-black text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>النتائج والأثر المالي المحقق:</span>
                        </p>
                        <ul className="space-y-2">
                          {cs.results.map((res, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 flex-shrink-0" />
                              <span className="leading-relaxed font-semibold">{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Case Study Image Showcase */}
                    <div className="lg:col-span-5">
                      <div className="relative rounded-2xl overflow-hidden bg-[#14141f] border border-white/10 aspect-[4/3] group/img shadow-2xl">
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-3 right-3 left-3 p-3 rounded-lg bg-[#060608]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                          <span className="text-xs font-bold text-white">إثبات النتائج ولوحة التحكم</span>
                          <span className="text-xs text-[#FF8B2C] font-black">{cs.roas} ROAS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Additional Gallery Projects Grid (المشاريع والنماذج الحية) */}
        <section className="mb-20 sm:mb-28">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="text-center mb-12">
              <p className="text-xs sm:text-sm font-black text-[#FF8B2C] mb-2 tracking-wide">
                معرض النماذج الحية
              </p>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                نماذج منتقاة ومشاريع منفذة
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category.galleryProjects.map((project, pIdx) => (
              <ScrollReveal key={project.id} direction="up" delay={pIdx * 60} blurAmount={10}>
                <div className="rounded-2xl bg-[#0d0d14] border border-white/10 hover:border-[#FF8B2C] transition-all overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#161622]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#060608]/85 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-base font-black text-white mb-2 group-hover:text-[#FF8B2C] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-2 rounded-lg bg-[#14141f]">
                            <p className="text-[10px] text-zinc-400">{m.label}</p>
                            <p className="text-xs font-black text-[#FF8B2C]">{m.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] text-zinc-500 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Other Portfolio Departments Navigation (تصفح بقية الأقسام) */}
        <section className="mb-20">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0c14] border border-[#FF8B2C]/30">
              <div className="text-center mb-8">
                <p className="text-xs font-black text-[#FF8B2C] mb-1">أقسام أخرى</p>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  استكشف بقية معارض الأعمال المتخصصة
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherCategories.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/portfolio/${other.slug}`}
                    className="p-4 rounded-2xl bg-[#14141f] border border-white/10 hover:border-[#FF8B2C] transition-all hover:bg-[#1a1a29] flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-[11px] text-[#FF8B2C] font-bold">{other.departmentNumber}</p>
                      <p className="text-sm font-black text-white group-hover:text-[#FF8B2C] transition-colors">
                        {other.categoryName}
                      </p>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-[#FF8B2C] group-hover:-translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Direct CTA Section */}
        <section>
          <ScrollReveal direction="up" blurAmount={14}>
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#12121e] via-[#0d0d14] to-[#18110b] border-2 border-[#FF8B2C] text-center overflow-hidden shadow-[0_20px_60px_rgba(255,139,44,0.25)]">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-4">
                  هل تريد تحقيق نفس النتائج لمتجرك أو علامتك التجارية؟
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-8 leading-relaxed">
                  تواصل معي مباشرة لنبدأ في دراسة حسابك الإعلاني وهيكلة خطة تسويقية تضمن أعلى عائد ROAS ونمو حقيقي للمبيعات.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-sm hover:bg-[#FFA857] transition-all shadow-[0_4px_25px_rgba(255,139,44,0.4)] hover:scale-105"
                  >
                    <span>ابدأ مشروعك الآن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#161624] border border-white/20 text-white font-bold text-sm hover:border-white transition-all"
                  >
                    <span>جميع معارض الأعمال</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
