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
      subtitle: "بيانات دقيقة مش مجرد افتراضات",
      description: "كل حملة ناجحة تبدأ بفهم عميق لزوايا الجمهور المستهدف وسلوك المنافسين. أحلل الحساب الإعلاني، أراجع معدلات التحويل السابقة، وأحدد الفرص الأعلى عائداً قبل صرف جنيه واحد في الإعلانات.",
      chips: [
        { label: "تحليل الحساب وتدقيق البكسل", tilt: "-3deg", isFilled: true },
        { label: "دراسة زوايا المنافسين الإعلانية", tilt: "2.2deg", isFilled: false },
        { label: "هندسة خريطة الجماهير المخصصة", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "هندسة القمع الإعلاني",
      subtitle: "استراتيجية مدروسة تلتقي بالذكاء الاصطناعي",
      description: "لا أطلق إعلانات عشوائية. أصمم مسار شراء متكامل (Full-Funnel) من خطاف الفيديو (Hook) مروراً بصفحة الهبوط وحتى إعادة الاستهداف الديناميكي لضمان أعلى معدل إتمام شراء.",
      chips: [
        { label: "هيكلة الـ Full-Funnel", tilt: "-3deg", isFilled: true },
        { label: "اختبار زوايا الكرييتف A/B", tilt: "2.2deg", isFilled: false },
        { label: "ربط وتفعيل Meta CAPI", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "الإطلاق والتوسع الذكي",
      subtitle: "سرعة في التنفيذ مع انضباط مالي",
      description: "أطلق الحملات باختبارات سريعة لعدة زوايا إعلانية وجمهور محدد. بمجرد اكتشاف الإعلان الفائز (Winning Ad)، أبدأ بالتوسع الأفقي والعمودي لمضاعفة المبيعات مع الحفاظ على تكلفة الشراء منخفضة.",
      chips: [
        { label: "توسع مالي آمن (Scaling)", tilt: "-3deg", isFilled: true },
        { label: "تخفيض تكلفة الطلب (CPP)", tilt: "2.2deg", isFilled: false },
        { label: "إدارة الميزانيات الكبيرة", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "القياس والتحسين المستمر",
      subtitle: "قرارات مبنية على الأرقام والعائد ROAS",
      description: "أتابع كل مؤشر دقيقة بدقيقة: معدل النقر CTR، تكلفة الزيارة CPC، تكلفة الطلب CPP، والعائد الصافي على الإنفاق الإعلاني ROAS. لا نترك مجالاً للصدفة بل نعتمد على البيانات لتطوير النتائج يومياً.",
      chips: [
        { label: "لوحات تحكم مباشرة GA4", tilt: "-3deg", isFilled: true },
        { label: "تقارير أداء يومية ومفصلة", tilt: "2.2deg", isFilled: false },
        { label: "مضاعفة العائد الصافي ROAS", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "motion-video": [
    {
      number: "01",
      title: "البحث وصياغة السكريبت",
      subtitle: "فهم العميل وصناعة الخطاف الإعلاني",
      description: "يبدأ كل فيديو بفهم عميق للمنتج والمشكلة التي يعالجها. نقوم بكتابة سكريبت إعلاني قوي يركز على أول 3 ثوانٍ (Hook) لكسر التمرير وإثارة فضول المشتري فوراً.",
      chips: [
        { label: "كتابة سكريبت بيعي مباشر", tilt: "-3deg", isFilled: true },
        { label: "تصميم خطافات بصرية قوية", tilt: "2.2deg", isFilled: false },
        { label: "دراسة تريندات التيك توك والريلز", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "المونتاج وهندسة الإيقاع",
      subtitle: "دمج احترافي بالصوت والمؤثرات",
      description: "أستخدم Premiere Pro و After Effects لقص اللقطات بإيقاع سريع وجذاب، مع إضافة مؤثرات صوتية وبصرية (SFX & VFX) تجعل تجربة المشاهدة ممتعة ومحفزة للطلب.",
      chips: [
        { label: "مونتاج سريع بـ Premiere Pro", tilt: "-3deg", isFilled: true },
        { label: "مؤثرات صوتية هوليوودية SFX", tilt: "2.2deg", isFilled: false },
        { label: "تعديل ألوان سينمائي (Color Grading)", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "الموشن جرافيك والتايبوجرافي",
      subtitle: "نصوص متحركة وتأثيرات تخطف العين",
      description: "تحريك نصوص العروض الترويجية والأسعار والمميزات الفريدة عبر After Effects بطريقة عصرية وواضحة تناسب شاشات الموبايل حتى بدون تشغيل الصوت.",
      chips: [
        { label: "تحريك متقدم بـ After Effects", tilt: "-3deg", isFilled: true },
        { label: "كاينتك تايبوجرافي عربي", tilt: "2.2deg", isFilled: false },
        { label: "عناصر بصرية مخصصة 3D/2D", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "التصدير واختبار معدل المشاهدة",
      subtitle: "أعلى جودة وأعلى معدل تحويل",
      description: "تصدير الفيديوهات بأبعاد مثالية للريلز والتيك توك (9:16) وبأعلى جودة ضغط 4K/1080p، ومتابعة مؤشرات الـ Retention Rate لضمان تحقيق أعلى معدل مبيعات ممكن.",
      chips: [
        { label: "تصدير مخصص لمنصات الإعلانات", tilt: "-3deg", isFilled: true },
        { label: "متابعة معدل المشاهدة والاحتفاظ", tilt: "2.2deg", isFilled: false },
        { label: "زيادة معدل الشراء الفوري", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "social-designs": [
    {
      number: "01",
      title: "دراسة البراند والجمهور",
      subtitle: "بناء أسس الهوية والرسالة البصرية",
      description: "أدرس هوية البراند، ألوانه، ونبرة صوته لابتكار أفكار تصاميم توقف التمرير (Thumb-Stopping Creatives) وتعبر عن قيمة المنتج الحقيقية بأناقة ووضوح.",
      chips: [
        { label: "دراسة نبرة وهوية البراند", tilt: "-3deg", isFilled: true },
        { label: "أفكار تصاميم تكسر الروتين", tilt: "2.2deg", isFilled: false },
        { label: "تناسق الألوان والخطوط", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "التصميم والدمج الرقمي",
      subtitle: "إتقان أدوات Adobe Photoshop & Illustrator",
      description: "دمج صور المنتجات مع خلفيات احترافية، ضبط الإضاءات والظلال، وتوزيع النصوص بشكل يوجه عين العميل مباشرة إلى العرض وزر اتخاذ القرار.",
      chips: [
        { label: "دمج وتعديل احترافي فوتوشوب", tilt: "-3deg", isFilled: true },
        { label: "فيكتور ورسومات Illustrator", tilt: "2.2deg", isFilled: false },
        { label: "تصحيح إضاءة وظلال المنتجات", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "تجهيز البوستات والإعلانات",
      subtitle: "تنسيق متكامل لكافة منصات السوشيال",
      description: "توفير كافة المقاسات المطلوبة للإنستجرام والفيسبوك والتيك توك (سكوير، ستوري، بنرات عريضة) مع باقات التصاميم الجاهزة للنشر المباشر.",
      chips: [
        { label: "مقاسات مخصصة لجميع المنصات", tilt: "-3deg", isFilled: true },
        { label: "بانرات وعروض ترويجية", tilt: "2.2deg", isFilled: false },
        { label: "قوالب قابلة للتكرار السريع", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "قياس التفاعل ومعدل النقر CTR",
      subtitle: "تصاميم تحقق أرقاماً لا مجرد شكل",
      description: "نقيس نجاح التصميم من خلال معدل التفاعل والنقر (CTR) واستجابة الجمهور للإعلانات، مع تحديث الأفكار باستمرار لتفادي تشبع الحملات.",
      chips: [
        { label: "مضاعفة معدل النقر (CTR)", tilt: "-3deg", isFilled: true },
        { label: "تطوير التصاميم الفائزة", tilt: "2.2deg", isFilled: false },
        { label: "جذب انتباه العملاء الجدد", tilt: "-1.4deg", isFilled: true },
      ],
    },
  ],

  "ecommerce-scaling": [
    {
      number: "01",
      title: "تدقيق المتجر وسلوك الزوار",
      subtitle: "اكتشاف نقاط تسرب العملاء والطلبات",
      description: "أحلل مسار رحلة العميل من دخوله لصفحة المنتج حتى زر الدفع باستخدام خرائط الحرارة (Heatmaps) وسجلات الجلسات لتحديد أسباب التخلي عن السلة.",
      chips: [
        { label: "تحليل خرائط الحرارة والتمرير", tilt: "-3deg", isFilled: true },
        { label: "كشف أسباب التخلي عن السلة", tilt: "2.2deg", isFilled: false },
        { label: "فحص سرعة المتجر على الموبايل", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "02",
      title: "هندسة صفحات الهبوط (CRO)",
      subtitle: "صفحات بيع سريعة ومقنعة",
      description: "إعادة تصميم صفحات الهبوط لتركز على فوائد المنتج، آراء العملاء الموثقة، عروض الباقات، وزر الشراء الثابت لتقليل التردد ورفع التحويل.",
      chips: [
        { label: "صفحات هبوط عالية التحويل", tilt: "-3deg", isFilled: true },
        { label: "نظام الدفع في صفحة واحدة", tilt: "2.2deg", isFilled: false },
        { label: "إضافة إثبات اجتماعي ومراجعات", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "03",
      title: "هيكلة العروض وزيادة الـ AOV",
      subtitle: "رفع قيمة سلة الشراء لكل زائر",
      description: "تطبيق استراتيجيات الباقات الذكية (Bundles) وعروض الشراء الفوري (Upsell & Cross-sell) لزيادة متوسط قيمة الطلب ومضاعفة هوامش الربح الصافية.",
      chips: [
        { label: "باقات وعروض كميات مغرية", tilt: "-3deg", isFilled: true },
        { label: "زيادة متوسط قيمة الطلب (AOV)", tilt: "2.2deg", isFilled: false },
        { label: "حوافز الشحن والتوصيل المجاني", tilt: "-1.4deg", isFilled: true },
      ],
    },
    {
      number: "04",
      title: "الربط التقني والتوسع في المبيعات",
      subtitle: "معالجة آلاف الطلبات بأعلى كفاءة",
      description: "ربط البكسل بدقة 100% عبر Conversions API، وأتمتة تأكيد الطلبات عبر واتساب لتقليل المرتجعات وضمان تسليم ناجح لآلاف الطلبات شهرياً.",
      chips: [
        { label: "تتبع كامل عبر Meta CAPI", tilt: "-3deg", isFilled: true },
        { label: "أتمتة تأكيد الطلبات وتتبعها", tilt: "2.2deg", isFilled: false },
        { label: "توسيع المبيعات 3x بشكل مستدام", tilt: "-1.4deg", isFilled: true },
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
      className="relative overflow-hidden py-20 sm:py-28 text-white select-none"
      dir="rtl"
    >
      {/* Background Subtle Gradient */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header: Styled exactly like Ahmed Ali */}
        <ScrollReveal direction="up" blurAmount={12}>
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-[#FF8B2C] mb-3 tracking-wide drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">
              المنهجية
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight">
              كيف أشتغل
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps Container with Timeline Connector Line */}
        <div className="relative">
          {/* Vertical Connector Line (Desktop) */}
          <div 
            className="hidden md:block absolute top-0 bottom-0 w-[2px] pointer-events-none" 
            style={{ 
              right: "156px", 
              background: "rgba(255, 139, 44, 0.15)" 
            }} 
          />
          <div 
            className="hidden md:block absolute top-0 bottom-0 w-[2px] origin-top pointer-events-none" 
            style={{ 
              right: "156px", 
              background: "linear-gradient(to bottom, #FF8B2C, rgba(255,139,44,0.4))" 
            }} 
          />

          <div className="flex flex-col">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;

              return (
                <ScrollReveal 
                  key={step.number} 
                  direction="up" 
                  delay={idx * 70} 
                  blurAmount={12}
                >
                  <div className="group relative">
                    <div 
                      className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12 items-start py-10 md:py-14 relative ${
                        !isLast ? "border-b border-[#FF8B2C]/15" : "border-b-0"
                      }`}
                    >
                      {/* Hover Backdrop Glass Highlight */}
                      <div 
                        className="absolute -inset-x-4 sm:-inset-x-6 inset-y-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                        style={{ background: "rgba(255, 139, 44, 0.05)" }} 
                      />

                      {/* Number + Indicator Node Column */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                          {/* Giant Step Number */}
                          <span 
                            className="font-black text-5xl sm:text-6xl md:text-[84px] text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.35)] leading-[1.1] transition-transform duration-300 group-hover:scale-105"
                          >
                            {step.number}
                          </span>

                          {/* Node Dot on Desktop Timeline */}
                          <div 
                            className="hidden md:block absolute" 
                            style={{ right: "149px", top: "27px" }}
                          >
                            <div className="w-3.5 h-3.5 rounded-full bg-[#FF8B2C] border-2 border-[#FF8B2C] shadow-[0_0_10px_#FF8B2C] group-hover:scale-125 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Step Content Column */}
                      <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 transition-colors duration-300 group-hover:text-[#FF8B2C]">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 text-[#FF8B2C] drop-shadow-[0_0_10px_rgba(255,139,44,0.3)]">
                          {step.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl text-zinc-300 font-normal">
                          {step.description}
                        </p>

                        {/* Tilted Chips / Pills Row */}
                        <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                          {step.chips.map((chip, cIdx) => (
                            <span
                              key={cIdx}
                              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 shadow-sm ${
                                chip.isFilled
                                  ? "bg-[#FF8B2C] text-[#060608] border border-[#FF8B2C] shadow-[0_2px_12px_rgba(255,139,44,0.3)] hover:brightness-110"
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

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
