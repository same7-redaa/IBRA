import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HowIWorkSection from "@/components/portfolio/HowIWorkSection";
import PortfolioGalleryGrid from "@/components/portfolio/PortfolioGalleryGrid";
import SocialConnect from "@/components/home/SocialConnect";

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
      title: "معرض الأعمال | إبراهيم علي سليم",
    };
  }

  return {
    title: `${category.title} | إبراهيم علي سليم`,
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
        {/* 1. Centered Hero: Pure Page Title Centered + Short Description (No badges/breadcrumbs) */}
        <section className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 pt-4">
          <ScrollReveal direction="up" blurAmount={12}>
            {/* Centered Main Title with Tatweel */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 tracking-tight">
              {category.title}
            </h1>

            {/* Centered Short Description with Tatweel */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
              {category.heroDescription}
            </p>
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

      </div>

      {/* Reused Full SocialConnect Section (تواصل مع إبراهيم علي سليم) */}
      <SocialConnect 
        titlePrefix="هل تريد تحقيق نفس النتائج؟"
        titleHighlight="تواصل مع إبراهيم علي سليم"
        description="تواصل معي مباشرة لنبدأ في دراسة متطلباتك وتطبيق أفضل خطة تسويقية تضمن أعلى عائد ROAS ونمو حقيقي لمبيعاتك."
      />

    </main>
  );
}
