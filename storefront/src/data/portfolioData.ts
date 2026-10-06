export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  period: string;
  budget: string;
  revenue: string;
  roas: string;
  orders: string;
  challenge: string;
  strategy: string[];
  results: string[];
  image: string;
  tags: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  image: string;
  metrics: { label: string; value: string }[];
  summary: string;
  tags: string[];
}

export interface PortfolioCategoryData {
  slug: string;
  departmentNumber: string;
  categoryName: string;
  title: string;
  enTitle: string;
  subtitle: string;
  heroDescription: string;
  badge: string;
  image: string;
  stats: { label: string; value: string; desc: string }[];
  strategicPillars: { title: string; desc: string }[];
  toolsUsed: { name: string; type: string }[];
  caseStudies: CaseStudy[];
  galleryProjects: GalleryProject[];
}

export const PORTFOLIO_DATA: Record<string, PortfolioCategoryData> = {
  "media-buying": {
    slug: "media-buying",
    departmentNumber: "قسم 01",
    categoryName: "الميديا باينج وإدارة الحملات",
    title: "معرض أعمال الميديا باينج والحملات الممولة",
    enTitle: "Media Buying & Performance Marketing",
    subtitle: "Scaling High-ROAS Campaigns Across Meta, TikTok & Google Ads",
    heroDescription: "نماذج حية ودراسات حالة تفصيلية لإدارة ميزانيات إعلانية ضخمة وتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS) عبر Meta Ads و TikTok Ads و Google Ads مع هندسة مسارات الشراء والاستهداف الذكي.",
    badge: "Media Buying Portfolio",
    image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
    stats: [
      { label: "إجمالي المبيعات المحققة", value: "+14.8M EGP", desc: "مبيعات موثقة ومحققة للمتاجر" },
      { label: "أعلى عائد إعلاني (ROAS)", value: "15.4x", desc: "في حملات التوسع المتسارع" },
      { label: "طلبات معالجة وناجحة", value: "+36.3K", desc: "بأقل تكلفة استحواذ CPP" },
      { label: "نسبة خفض تكلفة الطلب", value: "74%", desc: "عبر إعادة الاستهداف المتقدم" },
    ],
    strategicPillars: [
      { title: "هندسة القمع الإعلاني (Full-Funnel)", desc: "مراحل متكاملة لاختبار الزوايا الإعلانية، تحسين معدلات التحويل، والتوسع المالي الآمن." },
      { title: "الاستهداف السلوكي وإعادة الاستهداف", desc: "تخصيص جماهير مخصصة (Custom & Lookalike Audiences) واستبعاد العملاء غير المهتمين." },
      { title: "إدارة البكسل و Meta CAPI", desc: "تتبع بيانات الشراء بنسبة دقة 99.8% لتخطي قيود التتبع على iOS والأنظمة الحديثة." },
    ],
    toolsUsed: [
      { name: "Meta Ads Manager", type: "Ad Network" },
      { name: "TikTok Ads Manager", type: "Ad Network" },
      { name: "Google Ads & PMax", type: "Ad Network" },
      { name: "Meta Conversions API", type: "Tracking" },
      { name: "Google Analytics 4", type: "Analytics" },
    ],
    caseStudies: [
      {
        id: "cs-fashion-scaling",
        title: "دراسة حالة: مضاعفة مبيعات براند ملابس وأزياء 4 أضعاف في 60 يوماً",
        client: "متجر أزياء محلي",
        industry: "Fashion & Apparel",
        period: "60 يوماً",
        budget: "185,000 EGP",
        revenue: "2,480,000 EGP",
        roas: "13.4x",
        orders: "4,920 طلب",
        challenge: "ارتفاع تكلفة الشراء (CPP) وضعف ثقة العملاء في مرحلة الدفع مع تشبع الحملات الإعلانية القديمة.",
        strategy: [
          "إعادة صياغة العروض التسويقية وتفعيل باقات التوفير (Bundles).",
          "إنتاج 15 كرييتف إعلاني فيديو للريلز وتيك توك مع خطافات بصرية قوية (Hooks).",
          "تطبيق استراتيجية الـ Horizontal & Vertical Scaling لمضاعفة الميزانية اليومية دون رفع الـ CPP.",
        ],
        results: [
          "تحقيق عائد إعلاني ROAS استثنائي وصل إلى 13.4x.",
          "تخفيض تكلفة الطلب من 92 EGP إلى 37 EGP.",
          "معالجة 4,920 طلب بنسبة تسليم فعلية تجاوزت 91%.",
        ],
        image: "/portfolio/2a9b34945a84d3883bef59ee57fb0121.jpg",
        tags: ["Meta Ads", "Scaling", "Fashion CRO"],
      },
      {
        id: "cs-cosmetics-launch",
        title: "دراسة حالة: إطلاق حملة منتجات عناية وتجميل وتحقيق 1.8M EGP في شهر الإطلاق",
        client: "براند مستحضرات تجميل",
        industry: "Beauty & Cosmetics",
        period: "30 يوماً",
        budget: "140,000 EGP",
        revenue: "1,820,000 EGP",
        roas: "13.0x",
        orders: "3,150 طلب",
        challenge: "دخول سوق تنافسي بشدة وحاجة البراند إلى بناء مصداقية سريعة وتحقيق مبيعات فورية.",
        strategy: [
          "التركيز على إعلانات تجارب الاستخدام ومقارنات قبل وبعد بالفيديو (UGC).",
          "استهداف دقيق للمهتمين بالعناية عبر TikTok Spark Ads و Instagram Reels.",
          "تحسين صفحة المنتج وتقديم ضمان استرجاع حقيقي رفع معدل التحويل.",
        ],
        results: [
          "توليد 1,820,000 EGP مبيعات في الشهر الأول فقط.",
          "معدل تحويل لصفحة الهبوط وصل 4.8%.",
          "قاعدة بيانات عملاء تزيد عن 3,000 عميل لإعادة الاستهداف المجاني.",
        ],
        image: "/portfolio/project-1.jpg",
        tags: ["TikTok Ads", "Meta Ads", "Beauty & Care"],
      },
    ],
    galleryProjects: [
      {
        id: "gp-1",
        title: "حملة التوسع الموسمي لمستلزمات المنزل",
        category: "Meta & Google Ads",
        image: "/portfolio/project-6.jpg",
        metrics: [
          { label: "ROAS", value: "11.8x" },
          { label: "المبيعات", value: "1.4M EGP" },
          { label: "الطلبات", value: "2,840" },
        ],
        summary: "حملة إعلانية شاملة لزيادة مبيعات الأدوات المنزلية عبر إعلانات الريلز وبحث جوجل.",
        tags: ["Meta Ads", "Google Ads", "Home Decor"],
      },
      {
        id: "gp-2",
        title: "إطلاق حملة إكسسوارات وساعات رجالية",
        category: "TikTok & Meta Ads",
        image: "/portfolio/project-2.jpg",
        metrics: [
          { label: "ROAS", value: "14.2x" },
          { label: "المبيعات", value: "980K EGP" },
          { label: "الطلبات", value: "1,620" },
        ],
        summary: "استهداف الشباب عبر إعلانات تيك توك الديناميكية ورفع متوسط قيمة الطلب (AOV).",
        tags: ["TikTok Ads", "Accessories", "AOV Scaling"],
      },
    ],
  },

  "motion-video": {
    slug: "motion-video",
    departmentNumber: "قسم 02",
    categoryName: "الموشن جرافيك ومونتاج الفيديوهات",
    title: "معرض أعمال الموشن وفيديوهات الإعلانات",
    enTitle: "Motion Graphics & Commercial Video Ads",
    subtitle: "High-Converting Video Production & Visual Storytelling",
    heroDescription: "معرض الفيديوهات الإعلانية المصممة لمنصات تيك توك، ريلز، وسناپ شات، مع موشن جرافيك عالي الدقة ومونتاج سينمائي بـ Premiere Pro و After Effects يخطف الانتباه ويحفز الشراء.",
    badge: "Motion Video Portfolio",
    image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
    stats: [
      { label: "إجمالي الفيديوهات المنتجة", value: "+120 فيديو", desc: "إعلانات سينمائية وترويجية" },
      { label: "إجمالي المشاهدات المحققة", value: "+8.5M", desc: "عبر منصات الفيديو القصير" },
      { label: "معدل استكمال المشاهدة", value: "+85%", desc: "بفضل الخطافات البصرية القوية" },
      { label: "مضاعفة معدل النقر (CTR)", value: "3.8x", desc: "مقارنة بالإعلانات الثابتة" },
    ],
    strategicPillars: [
      { title: "هندسة أول 3 ثوانٍ (Visual Hooks)", desc: "ابتكار خطافات بصرية وصوتية مفاجئة توقف التمرير وتمنع تخطي الإعلان." },
      { title: "السرد البصري السريع (Fast-Paced Editing)", desc: "مونتاج إيقاعي يبرز مميزات المنتج وحلوله لمشاكل العميل بوضوح." },
      { title: "المؤثرات الحركية والصوتية (SFX & VFX)", desc: "دمج عناصر الموشن ثلاثية الأبعاد والمؤثرات الصوتية لتعزيز الاحترافية." },
    ],
    toolsUsed: [
      { name: "Adobe Premiere Pro", type: "Video Editing" },
      { name: "Adobe After Effects", type: "Motion Graphics & VFX" },
      { name: "Adobe Audition", type: "Sound Design" },
      { name: "CapCut Pro", type: "Fast Mobile Editing" },
    ],
    caseStudies: [
      {
        id: "cs-viral-ad-campaign",
        title: "دراسة حالة: إنتاج سلسلة فيديوهات إعلانية حققت 2.2M مشاهدة و 840 ألف جنيه مبيعات",
        client: "براند إلكترونيات وأجهزة ذكية",
        industry: "Consumer Electronics",
        period: "45 يوماً",
        budget: "60,000 EGP",
        revenue: "840,000 EGP",
        roas: "14.0x",
        orders: "1,200 طلب",
        challenge: "صعوبة شرح مميزات الجهاز في صورة ثابتة وضعف معدل النقر على الإعلانات السابقة.",
        strategy: [
          "إنتاج فيديو موشن جرافيك تفصيلي 3D يوضح طريقة عمل الجهاز والمشاكل التي يحلها.",
          "تصميم نسختين فيديو (أحدهما 15 ثانية للريلز والآخر 30 ثانية لتيك توك).",
          "إضافة مؤثرات صوتية تحفيزية مع Call to Action واضح في نهاية الفيديو.",
        ],
        results: [
          "تحقيق أكثر من 2,200,000 مشاهدة أورجانيك وممولة.",
          "رفع معدل النقر CTR إلى 4.6%.",
          "مبيعات تجاوزت 840 ألف جنيه بعائد إعلاني 14x.",
        ],
        image: "/portfolio/8d26727dd84afc3d2d99da81126bdcfe.jpg",
        tags: ["After Effects", "Premiere Pro", "Electronics Video"],
      },
    ],
    galleryProjects: [
      {
        id: "gp-motion-1",
        title: "إعلان موشن جرافيك ثلاثي الأبعاد لتطبيق توصيل",
        category: "3D Motion Graphics",
        image: "/portfolio/project-4.jpg",
        metrics: [
          { label: "المشاهدات", value: "+1.8M" },
          { label: "معدل الإكمال", value: "88%" },
          { label: "التحميلات", value: "+14K" },
        ],
        summary: "فيديو موشن جرافيك ديناميكي يشرح خطوات الطلب في التطبيق في 20 ثانية فقط.",
        tags: ["After Effects", "App Promo", "Motion 3D"],
      },
      {
        id: "gp-motion-2",
        title: "فيديو إعلاني سينمائي لبراند عطور فاخرة",
        category: "Cinematic Video Ad",
        image: "/portfolio/project-5.jpg",
        metrics: [
          { label: "المشاهدات", value: "+950K" },
          { label: "معدل النقر CTR", value: "3.9%" },
          { label: "المبيعات", value: "620K EGP" },
        ],
        summary: "مونتاج سينمائي مع تصحيح ألوان وإبراز فخامة زجاجة العطر والمكونات الطبيعية.",
        tags: ["Premiere Pro", "Color Grading", "Luxury Perfumes"],
      },
    ],
  },

  "social-designs": {
    slug: "social-designs",
    departmentNumber: "قسم 03",
    categoryName: "تصميمات السوشيال ميديا والهوية",
    title: "معرض تصميمات السوشيال ميديا والإعلانات",
    enTitle: "Social Media Designs & Creative Ad Assets",
    subtitle: "Thumb-Stopping Creatives & Brand Identity That Drive Clicks",
    heroDescription: "معرض بوستات السوشيال ميديا، البانرات التسويقية، وتصميمات الهوية البصرية الكاملة المصممة بـ Photoshop و Illustrator لإيقاف التمرير ورفع معدل التفاعل والنقر (CTR).",
    badge: "Creative Designs Portfolio",
    image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
    stats: [
      { label: "إجمالي التصاميم المنجزة", value: "+500 تصميم", desc: "بوستات وبانرات إعلانية" },
      { label: "هويات بصرية متكاملة", value: "+35 براند", desc: "أدلة ألوان، خطوط، ولوجوهات" },
      { label: "زيادة معدل النقر (CTR)", value: "3.4x", desc: "بفضل التباين البصري والتركيب" },
      { label: "برامج التصميم المستخدمة", value: "Adobe Suite", desc: "Photoshop & Illustrator" },
    ],
    strategicPillars: [
      { title: "التسلسل الهرمي البصري (Visual Hierarchy)", desc: "ترتيب العناصر لجذب عين العميل للعنوان والمنتج وزر الشراء في أجزاء من الثانية." },
      { title: "علم نفس الألوان والتباين (Color Psychology)", desc: "استخدام ألوان محفزة للشراء وتباين عالٍ يبرز في الخلفيات الداكنة والفاتحة." },
      { title: "التناسق الكامل للهوية (Brand Consistency)", desc: "الحفاظ على خطوط وأسلوب بصري موحد يرسخ في ذهن العميل ويمنحه الثقة." },
    ],
    toolsUsed: [
      { name: "Adobe Photoshop", type: "Photo Manipulation & Retouching" },
      { name: "Adobe Illustrator", type: "Vector & Branding" },
      { name: "Figma", type: "UI & Layout Prototyping" },
    ],
    caseStudies: [
      {
        id: "cs-branding-redesign",
        title: "دراسة حالة: إعادة تصميم الهوية البصرية وكرييتفز الإعلانات لمتجر إلكتروني ورفع المبيعات 180%",
        client: "متجر منتجات عضوية وصحية",
        industry: "Health & Organic Goods",
        period: "30 يوماً",
        budget: "45,000 EGP",
        revenue: "580,000 EGP",
        roas: "12.8x",
        orders: "1,140 طلب",
        challenge: "تصاميم قديمة وغير متناسقة كانت تعطي انطباعاً بضعف جودة المنتج وانخفاض الثقة.",
        strategy: [
          "بناء هوية بصرية متميزة بألوان طبيعية وخطوط عربية حديثة.",
          "تصميم 24 قالباً إعلانيًا عالي الجودة يبرز شهادات الجودة والمكونات الطبيعية.",
          "إعادة تصميم بنرات المتجر الإلكتروني لزيادة مدة بقاء العميل.",
        ],
        results: [
          "ارتفاع معدل النقر CTR على الإعلانات بنسبة 3.4x.",
          "زيادة متوسط قيمة الطلب بنسبة 38%.",
          "مبيعات 580 ألف جنيه بعائد استثماري 12.8x.",
        ],
        image: "/portfolio/0eb69c9aba3b9e587f00ebb3976d7cb1.jpg",
        tags: ["Photoshop", "Illustrator", "Brand Identity"],
      },
    ],
    galleryProjects: [
      {
        id: "gp-design-1",
        title: "مجموعة بوستات إعلانية لبراند أحذية رياضية",
        category: "Social Media Ads",
        image: "/portfolio/project-3.jpg",
        metrics: [
          { label: "زيادة التفاعل", value: "+240%" },
          { label: "معدل النقر CTR", value: "3.7%" },
          { label: "التصاميم", value: "18 بوست" },
        ],
        summary: "تصاميم حركية بألوان نيون قوية ودمج فوتوشوب احترافي يبرز راحة وخفة الحذاء.",
        tags: ["Photoshop", "Footwear", "Social Ads"],
      },
      {
        id: "gp-design-2",
        title: "هوية بصرية كاملة لشركة استشارات وحلول أعمال",
        category: "Full Brand Identity",
        image: "/portfolio/project-1.jpg",
        metrics: [
          { label: "أصول البراند", value: "+45 أصل" },
          { label: "دليل الهوية", value: "شامل 100%" },
          { label: "التقييم", value: "5/5 نجوم" },
        ],
        summary: "تصميم الشعار، بطاقات الأعمال، بروفايل الشركة، وقوالب السوشيال ميديا.",
        tags: ["Illustrator", "Corporate Identity", "Brand Guide"],
      },
    ],
  },

  "ecommerce-scaling": {
    slug: "ecommerce-scaling",
    departmentNumber: "قسم 04",
    categoryName: "معرض نمو وتوسيع المتاجر",
    title: "معرض أعمال المتاجر وتوسيع المبيعات",
    enTitle: "E-Commerce Growth & Conversion Rate Optimization (CRO)",
    subtitle: "Full-Funnel Store Architecture, Fast Checkout & AOV Maximization",
    heroDescription: "معرض استراتيجيات مضاعفة مبيعات المتاجر الإلكترونية، تحسين صفحات الهبوط ومسار الشراء السريع، ورفع معدل التحويل الشرائي (CRO) لمعالجة آلاف الطلبات شهرياً وتحقيق هوامش ربحية قياسية.",
    badge: "E-Commerce Growth Portfolio",
    image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
    stats: [
      { label: "إجمالي الطلبات المعالجة", value: "+36.3K طلب", desc: "بنسبة تسليم فعلية تتجاوز 90%" },
      { label: "معدل تحسين التحويل (CRO)", value: "+1,546%", desc: "عبر هندسة صفحات الهبوط السريعة" },
      { label: "مضاعفة مبيعات المتاجر", value: "3.2x", desc: "في فترات قياسية 30-90 يوماً" },
      { label: "متاجر تم بناؤها وتوسيعها", value: "+28 متجر", desc: "في مختلف القطاعات التجارية" },
    ],
    strategicPillars: [
      { title: "تصميم صفحات الهبوط عالية التحويل (High-Converting Landing Pages)", desc: "صفحات مصممة لعرض المنتج بأسلوب مقنع وطلب فوري بدون تشتيت العميل." },
      { title: "تسريع مسار الدفع بنقرة واحدة (One-Page Checkout)", desc: "تقليل الحقول المطلوبة لتخفيض نسبة التخلي عن سلة الشراء بنسبة تصل إلى 65%." },
      { title: "هيكلة العروض والباقات (Upsell & Cross-Sell)", desc: "زيادة متوسط قيمة الطلب (AOV) من خلال تقديم باقات شرائية مغرية عند إتمام الطلب." },
    ],
    toolsUsed: [
      { name: "Shopify & Custom Stores", type: "E-Commerce Platform" },
      { name: "Meta Conversions API", type: "Tracking & Pixel" },
      { name: "Hotjar & Microsoft Clarity", type: "User Behavior & Heatmaps" },
      { name: "Google Analytics 4 & Tag Manager", type: "Data Analytics" },
    ],
    caseStudies: [
      {
        id: "cs-store-scaling-3x",
        title: "دراسة حالة: توسيع متجر منتجات جلدية من 150 طلب شهرياً إلى أكثر من 2,800 طلب شهرياً",
        client: "براند مصنوعات جلدية طبيعية",
        industry: "Leather Goods & Accessories",
        period: "90 يوماً",
        budget: "120,000 EGP",
        revenue: "1,650,000 EGP",
        roas: "13.7x",
        orders: "3,400 طلب",
        challenge: "تشتت العميل في متجر بطيء وكثرة الخطوات لإتمام الطلب مع انخفاض نسبة استكمال الشراء.",
        strategy: [
          "إعادة بناء المتجر بنظام الدفع في صفحة واحدة وسرعة تحميل فائقة تحت 1.2 ثانية.",
          "إضافة مراجعات العملاء الموثقة بالفيديو وصور حقيقية للمنتج.",
          "تفعيل باقات (اشتري 2 واحصل على شحن مجاني) لرفع الـ AOV.",
        ],
        results: [
          "ارتفاع معدل التحويل الشرائي (Conversion Rate) من 1.2% إلى 4.4%.",
          "تجاوز المبيعات 1.65 مليون جنيه خلال 3 أشهر.",
          "معالجة أكثر من 3,400 طلب بنجاح.",
        ],
        image: "/portfolio/a6d2c954f419aa7199d41d1bdf61f9de.jpg",
        tags: ["Shopify", "CRO Mastery", "AOV Booster"],
      },
    ],
    galleryProjects: [
      {
        id: "gp-store-1",
        title: "بناء وتوسيع متجر ساعات وإكسسوارات رجالية",
        category: "Full E-Commerce Build",
        image: "/portfolio/project-2.jpg",
        metrics: [
          { label: "معدل التحويل", value: "4.7%" },
          { label: "الطلبات الشهرية", value: "+1,800" },
          { label: "متوسط الطلب AOV", value: "520 EGP" },
        ],
        summary: "متجر بتصميم مظلم فخم ودفع سريع حقق مبيعات متسارعة منذ الأسبوع الأول.",
        tags: ["Fast Checkout", "Luxury Theme", "Scaling"],
      },
      {
        id: "gp-store-2",
        title: "تحسين وتوسيع متجر مستلزمات العناية والجمال",
        category: "CRO & Scaling",
        image: "/portfolio/project-1.jpg",
        metrics: [
          { label: "رفع الـ AOV", value: "+45%" },
          { label: "الطلبات", value: "+3,200" },
          { label: "المبيعات", value: "1.2M EGP" },
        ],
        summary: "إعادة هيكلة صفحات الهبوط وإضافة عروض الـ Upsell لرفع ربحية كل طلب إعلاني.",
        tags: ["Landing Pages", "Upsell Funnels", "Beauty"],
      },
    ],
  },
};
