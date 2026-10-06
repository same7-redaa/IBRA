import React from "react";
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function HoneyFeatures() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-white overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF8B2C]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Background Artworks */}
      <div
        className="absolute top-1/3 -right-8 w-56 h-56 sm:w-80 sm:h-80 bg-contain bg-no-repeat opacity-12 mix-blend-screen pointer-events-none rotate-[25deg]"
        style={{ backgroundImage: `url('/bg-art/google.png')` }}
      />
      <div
        className="absolute -top-6 -left-6 w-36 h-36 sm:w-52 sm:h-52 bg-contain bg-no-repeat opacity-10 mix-blend-screen pointer-events-none -rotate-[16deg]"
        style={{ backgroundImage: `url('/bg-art/instagram.png')` }}
      />
      {/* Seamless Black Gradient Transitions (Top & Bottom Fades) */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            لماذا يثق بنا <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">آلاف العملاء؟</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-semibold">
            نلتزم بأعلى معايير الجودة والأمانة في إنتاج وتعبئة عسل النحل الطبيعي
          </p>
        </div>

        {/* 3 Value Proposition Cards in Dark Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="relative glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#FF8B2C]/30 flex items-center justify-center text-[#FF8B2C] shadow-[0_0_15px_rgba(255,139,44,0.2)] mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              مفحوص وموثق مخبرياً 100%
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              تخضع جميع قطفاتنا لأدق الفحوصات المخبرية للتأكد من خلوها من أي سكريات مضافة أو مبيدات.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#FF8B2C]/30 flex items-center justify-center text-[#FF8B2C] shadow-[0_0_15px_rgba(255,139,44,0.2)] mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              قطفات جبلية نقية وطبيعية
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              نستخرج العسل من أفضل المناحل الطبيعية في مواسم الإزهار البرية والجبلية البكر.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#FF8B2C]/30 flex items-center justify-center text-[#FF8B2C] shadow-[0_0_15px_rgba(255,139,44,0.2)] mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              ضمان ذهبي للاسترجاع
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              ثقتنا في منتجاتنا مطلقة؛ يحق لك استرجاع كامل المبلغ إذا لم يكن العسل طبيعياً 100%.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
