import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ChevronLeft,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HowIWorkSection from "@/components/portfolio/HowIWorkSection";
import PortfolioGalleryGrid from "@/components/portfolio/PortfolioGalleryGrid";

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
    <main className="min-h-screen pt-28 pb-20 text-white overflow-hidden selection:bg-[#FF8B2C]/30 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#FF8B2C]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-10 w-[450px] h-[450px] bg-[#FF8B2C]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Decorative Watermark Arts */}
      <div
        className="absolute top-32 right-6 w-80 h-80 bg-contain bg-no-repeat opacity-[0.05] mix-blend-screen pointer-events-none rotate-12 -z-10"
        style={{ backgroundImage: `url('/bg-art/logo.png')` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1280px]">
        {/* Breadcrumb Navigation */}
        <ScrollReveal direction="down" blurAmount={8}>
          <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 mb-8 sm:mb-10 font-medium">
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

        {/* 1. Centered Hero: Page Title Centered + Short Description */}
        <section className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal direction="up" blurAmount={12}>
            {/* Centered Department Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8B2C]/10 border border-[#FF8B2C]/30 text-[#FF8B2C] text-xs sm:text-sm font-black mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF8B2C] animate-pulse" />
              <span>{category.departmentNumber} · {category.categoryName}</span>
            </div>

            {/* Centered Page Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 tracking-tight">
              {category.title.replace("معرض أعمال ", "")}
            </h1>

            {/* Centered Short Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto mb-8">
              {category.heroDescription}
            </p>

            {/* Quick Primary Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                href="#how-i-work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs sm:text-sm hover:bg-[#FFA857] transition-all shadow-[0_4px_20px_rgba(255,139,44,0.35)] hover:scale-105"
              >
                <span>المنهجية: كيف أشتغل</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14141f] border border-[#FF8B2C]/40 text-white font-bold text-xs sm:text-sm hover:border-[#FF8B2C] hover:bg-[#FF8B2C]/10 transition-all"
              >
                <span>معرض صور الأعمال</span>
              </a>
            </div>

            {/* Centered 4 Key Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-4 border-t border-white/10">
              {category.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#0d0d14] border border-[#FF8B2C]/25 text-center shadow-md hover:border-[#FF8B2C] transition-colors"
                >
                  <p className="text-lg sm:text-2xl font-black text-[#FF8B2C] drop-shadow-[0_0_12px_rgba(255,139,44,0.3)]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-bold text-zinc-300 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 2. قسم كيف أشتغل (How I Work) - In exact Ahmed Ali Style */}
        <HowIWorkSection categorySlug={category.slug} />

        {/* 3. معرض صور الأعمال (Portfolio Image Gallery) */}
        <PortfolioGalleryGrid
          projects={category.galleryProjects}
          categoryTitle={category.title}
        />

        {/* 4. Other Portfolio Categories Navigation */}
        <section className="my-16 sm:my-20">
          <ScrollReveal direction="up" blurAmount={12}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0c14] border border-[#FF8B2C]/30 text-center">
              <div className="max-w-md mx-auto mb-8">
                <p className="text-xs font-black text-[#FF8B2C] mb-1">أقسام أخرى</p>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  استكشف بقية معارض الأعمال
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherCategories.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/portfolio/${other.slug}`}
                    className="p-4 rounded-2xl bg-[#14141f] border border-white/10 hover:border-[#FF8B2C] transition-all hover:bg-[#1a1a29] flex items-center justify-between group text-right"
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

        {/* 5. Direct CTA Section */}
        <section>
          <ScrollReveal direction="up" blurAmount={14}>
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#12121e] via-[#0d0d14] to-[#18110b] border-2 border-[#FF8B2C] text-center overflow-hidden shadow-[0_20px_60px_rgba(255,139,44,0.25)]">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-3">
                  هل تريد تحقيق نفس النتائج لمشروعك؟
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-8 leading-relaxed">
                  تواصل معي مباشرة لنبدأ في دراسة متطلباتك وتطبيق أفضل خطة تسويقية تضمن أعلى عائد ROAS ونمو حقيقي للمبيعات.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs sm:text-sm hover:bg-[#FFA857] transition-all shadow-[0_4px_25px_rgba(255,139,44,0.4)] hover:scale-105"
                  >
                    <span>ابدأ مشروعك الآن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#161624] border border-white/20 text-white font-bold text-xs sm:text-sm hover:border-white transition-all"
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
