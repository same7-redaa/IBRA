import React from "react";
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function HoneyFeatures() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-b border-[#ebdcc9] overflow-hidden">
      
      {/* Standalone Cutout Decorative Illustration on White Background (Left Side) */}
      <div 
        className="absolute -bottom-8 -left-8 w-56 h-56 sm:w-72 sm:h-72 bg-contain bg-no-repeat opacity-35 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_1.jpg')` }}
      />

      {/* Standalone Cutout Decorative Illustration on White Background (Right Side) */}
      <div 
        className="absolute -top-8 -right-8 w-56 h-56 sm:w-72 sm:h-72 bg-contain bg-no-repeat opacity-35 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url('/pattern_2.jpg')` }}
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#221c15] tracking-tight">
            لماذا يثق بنا <span className="text-[#d97706]">آلاف العملاء؟</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5c4f42] font-semibold">
            نلتزم بأعلى معايير الجودة والأمانة في إنتاج وتعبئة عسل النحل الطبيعي
          </p>
        </div>

        {/* 3 Value Proposition Cards on White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="relative bg-[#fbf7ee] border border-[#ebdcc9] rounded-2xl p-6 sm:p-8 flex flex-col items-start hover:border-[#d97706] transition-all hover:shadow-[0_10px_25px_rgba(180,83,9,0.08)]">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#ebdcc9] flex items-center justify-center text-[#d97706] shadow-sm mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#221c15] mb-2.5">
              مفحوص وموثق مخبرياً 100%
            </h3>
            <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
              تخضع جميع قطفاتنا لأدق الفحوصات المخبرية للتأكد من خلوها من أي سكريات مضافة أو مبيدات.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#fbf7ee] border border-[#ebdcc9] rounded-2xl p-6 sm:p-8 flex flex-col items-start hover:border-[#d97706] transition-all hover:shadow-[0_10px_25px_rgba(180,83,9,0.08)]">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#ebdcc9] flex items-center justify-center text-[#d97706] shadow-sm mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#221c15] mb-2.5">
              قطفات جبلية نقية وطبيعية
            </h3>
            <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
              نستخرج العسل من أفضل المناحل الطبيعية في مواسم الإزهار البرية والجبلية البكر.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#fbf7ee] border border-[#ebdcc9] rounded-2xl p-6 sm:p-8 flex flex-col items-start hover:border-[#d97706] transition-all hover:shadow-[0_10px_25px_rgba(180,83,9,0.08)]">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#ebdcc9] flex items-center justify-center text-[#d97706] shadow-sm mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#221c15] mb-2.5">
              ضمان ذهبي للاسترجاع
            </h3>
            <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed">
              ثقتنا في منتجاتنا مطلقة؛ يحق لك استرجاع كامل المبلغ إذا لم يكن العسل طبيعياً 100%.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
