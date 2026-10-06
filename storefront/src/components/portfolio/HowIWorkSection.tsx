import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface HowIWorkStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  chips: {
    label: string;
    tilt: string; // e.g. "-3deg", "2.2deg", "-1.4deg"
    isFilled: boolean;
  }[];
}

interface HowIWorkSectionProps {
  categorySlug?: string;
  customSteps?: HowIWorkStep[];
}

const DEFAULT_HOW_I_WORK_STEPS: Record<string, HowIWorkStep[]> = {
  "media-buying": [
    {
      number: "01",
      title: "البحث والتحليل أولاً",
      subtitle: "بيانات دقيقة مش افتراضات",
      description: "كل حملة ناجحة تبدأ بفهم عميق لزوايا الجمهور المستهدف وسلوك المنافسين. أحلل الحساب الإعلاني وأحدد الفرص الأعلى عائداً قبل صرف جنيه واحد.",
      chips: [
        { label: "تحليل الحساب وتدقيق البكسل", tilt: "-3deg", isFilled: true },
        { label: "دراسة زوايا المنافسين", tilt: "2.2deg", isFilled: false },
        { label: "خريطة الجماهير المخصصة", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "هندسة القمع الإعلاني",
      subtitle: "استراتيجية تلتقي بالذكاء",
      description: "أصمم مسار شراء متكامل (Full-Funnel) من خطاف الفيديو (Hook) مروراً بصفحة الهبوط وحتى إعادة الاستهداف الديناميكي لضمان أعلى تحويل.",
      chips: [
        { label: "هيكلة الـ Full-Funnel", tilt: "-3deg", isFilled: true },
        { label: "اختبار زوايا الكرييتف A/B", tilt: "2.2deg", isFilled: false },
        { label: "ربط وتفعيل Meta CAPI", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "الإطلاق والتوسع الذكي",
      subtitle: "سرعة في التنفيذ ودقة مالية",
      description: "أطلق الحملات باختبارات سريعة. وبمجرد اكتشاف الإعلان الفائز، نبدأ بالتوسع الأفقي والعمودي لمضاعفة المبيعات مع خفض تكلفة الطلب.",
      chips: [
        { label: "توسع مالي آمن (Scaling)", tilt: "-3deg", isFilled: true },
        { label: "تخفيض تكلفة الطلب (CPP)", tilt: "2.2deg", isFilled: false },
        { label: "إدارة الميزانيات الكبيرة", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "القياس والتحسين المستمر",
      subtitle: "قرارات مبنية على الـ ROAS",
      description: "متابعة دقيقة لكل مؤشر: CTR، CPC، CPP، والعائد الصافي ROAS. نعتمد على البيانات الحية لتطوير الأداء وزيادة الأرباح يومياً.",
      chips: [
        { label: "لوحات تحكم GA4 المباشرة", tilt: "-3deg", isFilled: true },
        { label: "تقارير أداء يومية مفصلة", tilt: "2.2deg", isFilled: false },
        { label: "مضاعفة العائد الصافي ROAS", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "motion-video": [
    {
      number: "01",
      title: "البحث وصياغة السكريبت",
      subtitle: "فهم العميل وصناعة الخطاف",
      description: "كتابة سكريبت إعلاني قوي يركز على أول 3 ثوانٍ (Hook) لكسر التمرير وإثارة فضول المشتري فوراً في شاشات الموبايل.",
      chips: [
        { label: "كتابة سكريبت بيعي مباشر", tilt: "-3deg", isFilled: true },
        { label: "تصميم خطافات بصرية قوية", tilt: "2.2deg", isFilled: false },
        { label: "تريندات التيك توك والريلز", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "المونتاج وهندسة الإيقاع",
      subtitle: "دمج احترافي بالصوت والمؤثرات",
      description: "قص اللقطات بإيقاع سريع وجذاب بـ Premiere Pro، مع إضافة مؤثرات صوتية وبصرية تجعل الفيديو ممتعاً ومحفزاً للشراء الفوري.",
      chips: [
        { label: "مونتاج سريع بـ Premiere", tilt: "-3deg", isFilled: true },
        { label: "مؤثرات صوتية هوليوودية SFX", tilt: "2.2deg", isFilled: false },
        { label: "تعديل ألوان سينمائي", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "الموشن والتايبوجرافي",
      subtitle: "نصوص متحركة تخطف العين",
      description: "تحريك نصوص العروض والأسعار والمميزات الفريدة عبر After Effects بأسلوب عصري واضح وجذاب للمشاهد.",
      chips: [
        { label: "تحريك متقدم After Effects", tilt: "-3deg", isFilled: true },
        { label: "كاينتك تايبوجرافي عربي", tilt: "2.2deg", isFilled: false },
        { label: "عناصر بصرية مخصصة 2D/3D", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "التصدير واختبار المشاهدة",
      subtitle: "أعلى جودة وأعلى تحويل",
      description: "تصدير الفيديوهات بأبعاد مثالية للريلز والتيك توك (9:16) ومتابعة الـ Retention Rate لضمان أعلى مبيعات.",
      chips: [
        { label: "تصدير مخصص للإعلانات", tilt: "-3deg", isFilled: true },
        { label: "متابعة معدل الاحتفاظ", tilt: "2.2deg", isFilled: false },
        { label: "زيادة معدل الشراء الفوري", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "social-designs": [
    {
      number: "01",
      title: "دراسة البراند والجمهور",
      subtitle: "بناء أسس الهوية البصرية",
      description: "دراسة ألوان وهوية البراند ونبرة صوته لابتكار تصاميم توقف التمرير (Thumb-Stopping) وتعبر عن قيمة المنتج الحقيقية.",
      chips: [
        { label: "دراسة هوية البراند", tilt: "-3deg", isFilled: true },
        { label: "أفكار تصاميم تكسر الروتين", tilt: "2.2deg", isFilled: false },
        { label: "تناسق الألوان والخطوط", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "التصميم والدمج الرقمي",
      subtitle: "إتقان أدوات Adobe Photoshop",
      description: "دمج صور المنتجات مع خلفيات احترافية، ضبط الإضاءات والظلال، وتوزيع النصوص لتوجيه عين العميل نحو زر الشراء.",
      chips: [
        { label: "دمج فوتوشوب احترافي", tilt: "-3deg", isFilled: true },
        { label: "فيكتور ورسومات Illustrator", tilt: "2.2deg", isFilled: false },
        { label: "تصحيح إضاءة وظلال المنتج", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "تجهيز البوستات والإعلانات",
      subtitle: "تنسيق متكامل لكافة المنصات",
      description: "توفير كافة المقاسات المطلوبة للإنستجرام والفيسبوك والتيك توك (سكوير، ستوري، بنرات) جاهزة للنشر المباشر.",
      chips: [
        { label: "مقاسات لجميع المنصات", tilt: "-3deg", isFilled: true },
        { label: "بانرات وعروض ترويجية", tilt: "2.2deg", isFilled: false },
        { label: "قوالب قابلة للتكرار السريع", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "قياس التفاعل والـ CTR",
      subtitle: "تصاميم تحقق أرقاماً ومبيعات",
      description: "نقيس نجاح التصميم من خلال معدل النقر (CTR) واستجابة الجمهور للإعلانات مع تجديد الأفكار باستمرار.",
      chips: [
        { label: "مضاعفة معدل النقر CTR", tilt: "-3deg", isFilled: true },
        { label: "تطوير التصاميم الفائزة", tilt: "2.2deg", isFilled: false },
        { label: "جذب انتباه العملاء الجدد", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "ecommerce-scaling": [
    {
      number: "01",
      title: "تدقيق المتجر والزوار",
      subtitle: "كشف أسباب التخلي عن السلة",
      description: "تحليل رحلة العميل من صفحة المنتج حتى الدفع باستخدام خرائط الحرارة لفحص سرعة المتجر ونقاط تسرب الطلبات.",
      chips: [
        { label: "تحليل خرائط الحرارة", tilt: "-3deg", isFilled: true },
        { label: "فحص أسباب ترك السلة", tilt: "2.2deg", isFilled: false },
        { label: "فحص السرعة على الموبايل", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "هندسة صفحات الهبوط CRO",
      subtitle: "صفحات بيع سريعة ومقنعة",
      description: "إعادة بناء صفحات الهبوط بنظام الدفع بصفحة واحدة مع مراجعات العملاء وزر شراء ثابت لتقليل التردد ومضاعفة المبيعات.",
      chips: [
        { label: "صفحات هبوط عالية التحويل", tilt: "-3deg", isFilled: true },
        { label: "الدفع بصفحة واحدة One-Page", tilt: "2.2deg", isFilled: false },
        { label: "إضافة إثبات اجتماعي ومراجعات", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "هيكلة باقات الـ AOV",
      subtitle: "رفع قيمة سلة كل عميل",
      description: "تطبيق استراتيجيات الباقات الذكية (Bundles) وعروض الشراء الفوري (Upsell) لزيادة متوسط قيمة الطلب وهوامش الربح.",
      chips: [
        { label: "باقات وعروض كميات مغرية", tilt: "-3deg", isFilled: true },
        { label: "زيادة متوسط الطلب AOV", tilt: "2.2deg", isFilled: false },
        { label: "حوافز الشحن والتوصيل المجاني", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "الربط التقني والتوسع",
      subtitle: "معالجة آلاف الطلبات بنجاح",
      description: "ربط البكسل بدقة 100% عبر Conversions API وأتمتة تأكيد الطلبات عبر واتساب لتقليل المرتجعات وضمان تسليم ناجح.",
      chips: [
        { label: "تتبع كامل عبر Meta CAPI", tilt: "-3deg", isFilled: true },
        { label: "أتمتة تأكيد الطلبات بالواتساب", tilt: "2.2deg", isFilled: false },
        { label: "توسيع المبيعات 3x باستدامة", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],
};

export default function HowIWorkSection({
  categorySlug = "media-buying",
  customSteps,
}: HowIWorkSectionProps) {
  const steps = customSteps || DEFAULT_HOW_I_WORK_STEPS[categorySlug] || DEFAULT_HOW_I_WORK_STEPS["media-buying"];

  return (
    <section 
      id="how-i-work" 
      className="relative overflow-hidden py-16 sm:py-24 text-white select-none"
      dir="rtl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        
        {/* Section Header */}
        <ScrollReveal direction="up" blurAmount={12}>
          <div className="text-center mb-14 sm:mb-18">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              خـــطـــوات <span className="text-[#FF8B2C] drop-shadow-[0_0_24px_rgba(255,139,44,0.45)]">الـــعـــمـــل</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal Timeline Connector Bar (Desktop) */}
        <div className="relative">
          <div 
            className="hidden lg:block absolute top-[48px] right-[10%] left-[10%] h-[2px] pointer-events-none z-0"
            style={{ 
              background: "linear-gradient(90deg, rgba(255,139,44,0.15), #FF8B2C, rgba(255,139,44,0.15))" 
            }} 
          />

          {/* Horizontal 4-Column Grid (عرضي) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal 
                key={step.number} 
                direction="up" 
                delay={idx * 70} 
                blurAmount={10}
                className="h-full"
              >
                <div className="group relative h-full rounded-2xl sm:rounded-3xl p-6 sm:p-6 bg-[#0d0d14] border-2 border-[#FF8B2C]/30 hover:border-[#FF8B2C] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(255,139,44,0.22)] hover:-translate-y-2 flex flex-col justify-between">
                  
                  {/* Subtle Background Glow on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                    style={{ background: "radial-gradient(circle at top right, rgba(255,139,44,0.08), transparent 70%)" }} 
                  />

                  <div className="relative z-10">
                    {/* Top Row: Giant Number + Connected Glowing Dot */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-black text-5xl sm:text-6xl text-[#FF8B2C] drop-shadow-[0_0_18px_rgba(255,139,44,0.4)] leading-none transition-transform duration-300 group-hover:scale-105">
                        {step.number}
                      </span>
                      
                      {/* Timeline Node Dot */}
                      <div className="w-4 h-4 rounded-full bg-[#0d0d14] border-2 border-[#FF8B2C] shadow-[0_0_10px_#FF8B2C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8B2C] transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF8B2C] group-hover:bg-[#060608]" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-black text-white mb-1.5 transition-colors duration-300 group-hover:text-[#FF8B2C] leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 text-[#FF8B2C] drop-shadow-[0_0_8px_rgba(255,139,44,0.3)]">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300 font-normal mb-5">
                      {step.description}
                    </p>
                  </div>

                  {/* Tilted Chips / Pills Row at Bottom of Card */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {step.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all duration-300 ${
                          chip.isFilled
                            ? "bg-[#FF8B2C] text-[#060608] border border-[#FF8B2C] shadow-[0_2px_10px_rgba(255,139,44,0.25)] hover:brightness-110"
                            : "bg-[#FF8B2C]/10 text-[#FF8B2C] border border-[#FF8B2C]/50 hover:border-[#FF8B2C] hover:bg-[#FF8B2C]/20"
                        }`}
                        style={{
                          transform: `rotate(${chip.tilt})`,
                        }}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
