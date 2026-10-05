export interface ProductItem {
  id: string | number;
  category: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  material: string;
  colors: { name: string; hex: string; image?: string }[];
  sizes: string[];
  inStock: boolean;
}

export const sampleProducts: ProductItem[] = [
  {
    id: 1,
    category: "sidr",
    brand: "مناحل عسل زوين",
    name: "عسل سدر جبلي ملكي خام طبيعي 100%",
    price: 650,
    oldPrice: 850,
    image: "/hero/png_1.png",
    gallery: ["/hero/png_1.png"],
    rating: 4.9,
    reviewsCount: 384,
    description: "عسل سدر جبلي أصيل مفحوص مخبرياً ومستخرج من أزهار شجر السدر في أعالي الجبال. يتميز برائحة عطرية زكية وطعم غني مع قوام لزج كثيف، معروف بخصائصه الفعالة في تقوية المناعة وتعزيز صحة الجهاز الهضمي والنشاط البدني.",
    material: "عسل نحل سدر جبلي خام نقي 100% غير مبستر وبدون أي تغذية سكرية",
    features: [
      "مفحوص وموثق مخبرياً لضمان النقاء بنسبة 100%",
      "غني بالإنزيمات الحية ومضادات الأكسدة القوية",
      "قوام لزج ذهبي نقي بدون أي إضافات صناعية",
      "يأتي في عبوة زجاجية فاخرة محكمة الغلق تحافظ على القيمة الغذائية"
    ],
    colors: [
      { name: "عسل سدر ملكي ذهبي", hex: "#d97706" },
      { name: "سدر جبلي معتق", hex: "#92400e" },
      { name: "سدر مع شمع النحل", hex: "#f59e0b" }
    ],
    sizes: ["250 جم", "500 جم", "1 كجم", "2 كجم عائلي"],
    inStock: true
  },
  {
    id: 2,
    category: "black_seed",
    brand: "مناحل عسل زوين",
    name: "عسل حبة البركة الخام للوقاية والمناعة",
    price: 490,
    oldPrice: 650,
    image: "/hero/png_2.png",
    gallery: ["/hero/png_2.png"],
    rating: 5.0,
    reviewsCount: 295,
    description: "مستخرج من رحيق زهور نبات حبة البركة (الحبة السوداء)، يجمع بين مذاق العسل الطبيعي الدافئ وفوائد الحبة السوداء العلاجية. مثالي لرفع كفاءة الجهاز المناعي وصحة الصدر والتنفس.",
    material: "عسل نحل حبة البركة الطبيعي 100% غني بزيوت الثيموكينون الفعالة",
    features: [
      "داعم قوي ومثبت للجهاز المناعي ومكافحة نزلات البرد",
      "يحتوي على خلاصة الزيوت الطيارة المفيدة لحبة البركة",
      "مذاق دافئ ومميز مناسب لجميع أفراد الأسرة",
      "خام تماماً بدون معالجة حرارية أو تصفية زائدة"
    ],
    colors: [
      { name: "عنبري داكن غني", hex: "#78350f" },
      { name: "ذهبي نقي دافئ", hex: "#b45309" }
    ],
    sizes: ["500 جم", "1 كجم", "2 كجم"],
    inStock: true
  },
  {
    id: 3,
    category: "royal",
    brand: "خلطات عسل زوين الملكية",
    name: "خلطة الطاقة والمناعة مع غذاء الملكات والبروبوليس",
    price: 890,
    oldPrice: 1200,
    image: "/hero/png_3.png",
    gallery: ["/hero/png_3.png"],
    rating: 4.9,
    reviewsCount: 420,
    description: "تركيبة حصرية تجمع بين عسل السدر الجبلي وغذاء ملكات النحل الطازج وحبوب اللقاح وصمغ النحل (البروبوليس) ومسحوق الجنسنج الكوري. قنبلة طاقة طبيعية ونشاط وحيوية للجسم والتركيز الذهني.",
    material: "عسل سدر + غذاء ملكات النحل (20 جم) + صمغ العكبر + حبوب لقاح + جنسنج أحمر",
    features: [
      "تجديد طاقة وحيوية الجسم ومكافحة الإرهاق اليومي",
      "أقوى مضاد حيوي طبيعي من صمغ النحل النقي (العكبر)",
      "تعزيز الخصوبة والنشاط البدني والذهني",
      "مكونات طازجة 100% تخلط يدوياً بأعلى درجات العناية"
    ],
    colors: [
      { name: "خلطة ملكية ممزوجة", hex: "#d97706" },
      { name: "خلطة مضاعفة الغذاء الملكي", hex: "#fbbf24" }
    ],
    sizes: ["500 جم", "1 كجم"],
    inStock: true
  },
  {
    id: 4,
    category: "citrus",
    brand: "مناحل عسل زوين",
    name: "عسل زهور الموالح والليمون النقي خفيف القوام",
    price: 350,
    oldPrice: 480,
    image: "/hero/png_4.png",
    gallery: ["/hero/png_4.png"],
    rating: 4.8,
    reviewsCount: 180,
    description: "عسل خفيف وسلس القوام مستخرج من بساتين البرتقال والليمون، يتميز برائحة حمضية منعشة وطعم محبب جداً للأطفال والكبار، ممتاز للتحلية اليومية ومهدئ للأعصاب قبل النوم.",
    material: "عسل نحل زهور موالح طبيعي 100% غني بفيتامين C والمعادن",
    features: [
      "خفيف على المعدة وسريع الامتصاص ومثالي للأطفال",
      "غني بمضادات الأكسدة وفيتامين C الطبيعي",
      "بديل مثالي وصحي لتحلية المشروبات والعصائر",
      "رائحة زكية منعشة مستوحاة من بساتين الموالح"
    ],
    colors: [
      { name: "ذهبي فاتح نقي", hex: "#fcd34d" },
      { name: "عنبري خفيف", hex: "#f59e0b" }
    ],
    sizes: ["500 جم", "1 كجم", "2 كجم عائلي"],
    inStock: true
  }
];

export function getProductById(id: string | number): ProductItem | undefined {
  return sampleProducts.find((p) => String(p.id) === String(id));
}
