import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  TrendingUp, 
  Film, 
  Palette, 
  Target, 
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronLeft
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "معرض الأعمال والنتائج | إبراهيم علي سليم",
  description: "استكشف معارض الأعمال المتخصصة لإبراهيم علي سليم: ميديا باينج، موشن جرافيك، تصاميم سوشيال ميديا، وتوسيع المتاجر الإلكترونية.",
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "media-buying": TrendingUp,
  "motion-video": Film,
  "social-designs": Palette,
  "ecommerce-scaling": Target,
};

export default function PortfolioIndexPage() {
  const categories = Object.values(PORTFOLIO_DATA);

  return (
    <main className="min-h-screen pt-28 pb-20 text-white overflow-hidden">
      {/* Background Ambience & Glows */}
      <div className="absolute top-24 right-1/4 w-[600px] h-[600px] bg-[#FF8B2C]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-24 left-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1280px]">
        {/* Breadcrumbs */}
        <ScrollReveal direction="down" blurAmount={8}>
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-8 sm:mb-12 font-medium">
            <Link href="/" className="hover:text-[#FF8B2C] transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#FF8B2C] font-bold">معرض الأعمال والنتائج</span>
          </nav>
        </ScrollReveal>

        {/* Page Header */}
        <ScrollReveal direction="up" blurAmount={12}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <p className="text-xs sm:text-sm md:text-base font-black text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)] mb-2 tracking-wide">
              سِـــجِـــلّ الـــنـــجـــاحـــات والأرقــــام
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              معرض <span className="text-[#FF8B2C] drop-shadow-[0_0_24px_rgba(255,139,44,0.45)]">الأعمال والنتائج</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
              اختر القسم المتخصص للاطلاع على دراسات الحالة المفصلة، الاستراتيجيات التسويقية، والنماذج الحية الموثقة بالأرقام.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {categories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.slug] || Sparkles;

            return (
              <ScrollReveal key={cat.slug} direction="up" delay={idx * 70} blurAmount={12}>
                <Link
                  href={`/portfolio/${cat.slug}`}
                  className="group block rounded-3xl p-6 sm:p-8 bg-[#0d0d14] border-2 border-[#FF8B2C]/40 hover:border-[#FF8B2C] transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(255,139,44,0.25)] hover:-translate-y-2 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF8B2C]/15 border border-[#FF8B2C] flex items-center justify-center text-[#FF8B2C] group-hover:bg-[#FF8B2C] group-hover:text-[#060608] transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#FF8B2C] block">
                            {cat.departmentNumber}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF8B2C] transition-colors">
                            {cat.categoryName}
                          </h2>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-[#161624] border border-white/10 text-xs font-medium text-zinc-400 group-hover:border-[#FF8B2C]/40 group-hover:text-white transition-colors">
                        {cat.caseStudies.length} دراسات حالة
                      </span>
                    </div>

                    {/* Image Preview Banner */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#161624] mb-5 border border-white/10">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-white">
                        <span className="font-bold">{cat.enTitle}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                      {cat.heroDescription}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                      استكشف جميع الأعمال والدراسات
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs group-hover:bg-[#FFA857] transition-all">
                      <span>عرض المعرض</span>
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <ScrollReveal direction="up" blurAmount={12}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141420] via-[#0d0d14] to-[#141420] border border-[#FF8B2C]/40 text-center">
            <h3 className="text-xl sm:text-3xl font-black text-white mb-3">
              جاهز لرفع أداء حملاتك ومتجرك للمستوى التالي؟
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-6">
              احجز استشارتك التسويقية الآن ودعنا نضع خطة متكاملة لتحقيق نمو سريع ومستدام.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-sm hover:bg-[#FFA857] transition-all shadow-[0_4px_20px_rgba(255,139,44,0.35)] hover:scale-105"
            >
              <span>تواصل معي الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
