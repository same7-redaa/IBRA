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
    category: "hoodies",
    brand: "ADIDAS ORIGINALS",
    name: "هودي أوفر سايز كلاسيك قطن مصري 100%",
    price: 850,
    oldPrice: 1100,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 142,
    description: "هودي أوفر سايز مصمم بعناية فائقة من أجود أنواع القطن المصري المعالج لمنحك الدفء والراحة القصوى في الأيام الباردة، مع قصة مريحة وعصرية تناسب الإطلالات اليومية والكاجوال.",
    material: "قطن مصري ميلتون مبطن ناعم 100%",
    features: [
      "نسيج ثقيل وناعم لا يتقلص مع الغسيل",
      "غطاء رأس واسع ومزدوج مع حبال تضييق متينة",
      "جيب أمامي كانغرو واسع لتدفئة اليدين",
      "أساور وحافة سفلية مرنة ومحكمة"
    ],
    colors: [
      { name: "أسود فحم", hex: "#111111" },
      { name: "ليموني نيون", hex: "#b0fb30" },
      { name: "أوف وايت", hex: "#f3f0e6" },
      { name: "كحلي داكن", hex: "#14213d" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    inStock: true
  },
  {
    id: 2,
    category: "hoodies",
    brand: "NIKE SPORTSWEAR",
    name: "سويت شيرت تيك فليس أسود بجيوب مخفية",
    price: 990,
    oldPrice: 1350,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 5.0,
    reviewsCount: 289,
    description: "سويت شيرت خفيف الوزن ومقاوم للرياح بتقنية العزل الحراري المتطورة، مزود بسحابات مخفية وجيب أمان للأغراض الشخصية.",
    material: "بوليستر وتقنية تيك فليس عازلة للحرارة 100%",
    features: [
      "خفيف الوزن وعالي العزل الحراري",
      "جيوب بسحابات محكمة ومقاومة للماء",
      "تفاصيل عاكسة للضوء للرؤية الليلية"
    ],
    colors: [
      { name: "رمادي معدني", hex: "#4b5563" },
      { name: "أسود ملكي", hex: "#0a0a0a" },
      { name: "زيتي غامق", hex: "#283618" }
    ],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true
  },
  {
    id: 3,
    category: "tshirts",
    brand: "PUMA SELECT",
    name: "تيشرت ستريت وير بريميوم مطبوع",
    price: 490,
    oldPrice: 650,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 95,
    description: "تيشرت عصري من القطن الطبيعي الصافي بطباعة ستريت وير ثلاثية الأبعاد تدوم طويلاً، مع ياقة مدعمة تمنع التمدد.",
    material: "قطن سنجل جيرسي 100%",
    features: [
      "مسامي ومريح للاستخدام الصيفي واليومي",
      "طباعة سيريجرافي فاخرة لا تتشقق",
      "خياطة مزدوجة لمتانة تدوم لسنوات"
    ],
    colors: [
      { name: "أبيض ناصع", hex: "#ffffff" },
      { name: "بنفسجي باستيل", hex: "#e2d1f9" },
      { name: "أسود مطفي", hex: "#1f2421" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 4,
    category: "jackets",
    brand: "ZARA MAN",
    name: "جاكيت بومبر شتوي مبطن ووتر بروف",
    price: 1450,
    oldPrice: 1850,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 310,
    description: "جاكيت بومبر فخم مبطن بطبقة عازلة للمطر والرياح الشديدة، يجمع بين الفخامة والعملية مع سحابات معدنية يابانية أصلية.",
    material: "قماش تقني مقاوم للماء مع بطانة حرارية",
    features: [
      "مقاومة تامة للمياه والأمطار",
      "بطانة داخلية ناعمة تحبس حرارة الجسم",
      "جيوب جانبية وداخلية لحفظ الهاتف والمحفظة"
    ],
    colors: [
      { name: "كحلي كلاسيك", hex: "#0b1d3a" },
      { name: "أسود جلد", hex: "#181818" },
      { name: "بيج ترابي", hex: "#d4a373" }
    ],
    sizes: ["M", "L", "XL", "2XL"],
    inStock: true
  }
];

export function getProductById(id: string | number): ProductItem | undefined {
  return sampleProducts.find((p) => String(p.id) === String(id));
}
