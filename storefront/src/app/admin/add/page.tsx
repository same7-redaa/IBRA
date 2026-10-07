"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  ArrowRight, 
  Upload, 
  Film, 
  Palette, 
  TrendingUp, 
  Target, 
  Globe, 
  Check, 
  Sparkles,
  Eye,
  Play
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { usePortfolio, parseYouTubeVideoId } from "@/context/PortfolioContext";

const CATEGORY_META_MAP: Record<string, { name: string; icon: React.ElementType; hint: string }> = {
  "media-buying": {
    name: "الميديا باينج وإدارة الحملات",
    icon: TrendingUp,
    hint: "صورة وعنوان فقط",
  },
  "motion-video": {
    name: "الموشن جرافيك ومونتاج الفيديوهات",
    icon: Film,
    hint: "صورة غلاف + عنوان + رابط يوتيوب",
  },
  "social-designs": {
    name: "تصميمات السوشيال ميديا والهوية",
    icon: Palette,
    hint: "صورة وعنوان فقط",
  },
  "ecommerce-scaling": {
    name: "معرض نمو وتوسيع المتاجر",
    icon: Target,
    hint: "غلاف المتجر + عنوان المتجر + لينك المتجر",
  },
};

function AddWorkFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const defaultCategory = searchParams.get("category") || "media-buying";

  const { data, addProject, updateProject } = usePortfolio();

  const [category, setCategory] = useState(defaultCategory);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // If editing an existing project, prefill form
  useEffect(() => {
    if (editId) {
      for (const catKey of Object.keys(data)) {
        const found = data[catKey]?.find((p) => p.id === editId);
        if (found) {
          setCategory(catKey);
          setTitle(found.title);
          setImage(found.image);
          setVideoUrl(found.videoUrl || "");
          setStoreUrl(found.storeUrl || "");
          break;
        }
      }
    }
  }, [editId, data]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("يرجى إدخال عنوان للعمل");
      return;
    }
    if (!image.trim()) {
      alert("يرجى اختيار صورة للعمل");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      title: title.trim(),
      image: image.trim(),
      videoUrl: category === "motion-video" && videoUrl.trim()
        ? videoUrl.trim()
        : undefined,
      storeUrl: category === "ecommerce-scaling" && storeUrl.trim()
        ? storeUrl.trim()
        : undefined,
    };

    if (editId) {
      updateProject(category, {
        ...payload,
        id: editId,
        category: PORTFOLIO_DATA[category]?.categoryName || category,
      });
    } else {
      addProject(category, payload);
    }

    setTimeout(() => {
      router.push("/admin");
    }, 200);
  };

  const currentCategoryInfo = CATEGORY_META_MAP[category] || {
    name: PORTFOLIO_DATA[category]?.categoryName || category,
    icon: TrendingUp,
    hint: "صورة وعنوان",
  };
  const CategoryIcon = currentCategoryInfo.icon;

  return (
    <main className="min-h-screen pt-6 sm:pt-8 pb-16 text-white bg-[#060608] selection:bg-[#FF8B2C]/30 selection:text-white relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FF8B2C]/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#FF8B2C]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 max-w-[1720px] mx-auto">
        
        {/* Back Link & Header */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 hover:text-[#FF8B2C] transition-colors mb-3 group"
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span>الـــعـــودة إلـــى لـــوحـــة الـــتـــحـــكـــم</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-[#FF8B2C] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{editId ? "تـــعـــديـــل عـــمـــل حـــالـــي" : "إضـــافـــة عـــمـــل جـــديـــد"}</span>
              </div>
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {editId ? "تعديل بيانات العمل في المعرض" : "إضافة عمل جديد إلى معارض الأعمال"}
              </h1>
            </div>

            <Link
              href={`/portfolio/${category}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-zinc-300 hover:text-white transition-all self-start sm:self-auto"
            >
              <Eye className="w-4 h-4 text-[#FF8B2C]" />
              <span>معاينة قسم {currentCategoryInfo.name}</span>
            </Link>
          </div>
        </div>

        {/* Current Target Category Badge Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c14] border border-[#FF8B2C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FF8B2C] text-[#060608] flex items-center justify-center font-black shadow-[0_0_15px_rgba(255,139,44,0.35)] shrink-0">
              <CategoryIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-[#FF8B2C] font-bold block">القسم المستهدف الحالي:</span>
              <h2 className="text-sm sm:text-base font-black text-white">
                {currentCategoryInfo.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-bold">
              {currentCategoryInfo.hint}
            </span>
          </div>
        </div>

        {/* Main 2-Column Grid: Form & Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step 1: Title */}
              <div className="p-6 rounded-3xl bg-[#0c0c14] border border-white/10">
                <label className="block text-sm font-black text-white mb-2">
                  1. عنوان العمل / الصورة: <span className="text-[#FF8B2C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: حملة التوسع وتحقيق أعلى عائد إعلاني ROAS"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#141420] border border-white/15 text-white font-bold text-sm focus:border-[#FF8B2C] outline-none placeholder:text-zinc-500"
                />
              </div>

              {/* Step 2: Image Upload */}
              <div className="p-6 rounded-3xl bg-[#0c0c14] border border-white/10">
                <label className="block text-sm font-black text-white mb-3">
                  2. صورة العمل / الغلاف: <span className="text-[#FF8B2C]">*</span>
                </label>

                {/* Direct Upload Dropzone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 mb-4 ${
                    image
                      ? "border-[#FF8B2C]/50 bg-[#FF8B2C]/5"
                      : "border-white/15 bg-[#141420] hover:border-[#FF8B2C]/40 hover:bg-white/5"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {image ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-48 aspect-[16/10] relative bg-[#060608] rounded-xl overflow-hidden border border-[#FF8B2C]/40">
                        <Image
                          src={image}
                          alt="Uploaded Preview"
                          fill
                          unoptimized={image.startsWith("data:")}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs font-bold text-[#FF8B2C]">
                        تم اختيار الصورة بنجاح (انقر لتغييرها)
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#FF8B2C]">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white mb-1">
                          انقر هنا لرفع صورة العمل من جهازك
                        </p>
                        <p className="text-xs text-zinc-500">
                          صيغ مدعومة: PNG, JPG, WebP, SVG
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Direct URL Alternative Input */}
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5">
                    أو إدخال رابط الصورة مباشرة (اختياري):
                  </label>
                  <input
                    type="text"
                    placeholder="https://... أو /portfolio/project-1.jpg"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full py-3 px-4 rounded-2xl bg-[#141420] border border-white/15 text-white text-xs font-mono focus:border-[#FF8B2C] outline-none placeholder:text-zinc-600"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Step 3: YouTube Video URL for Motion Video Only */}
              {category === "motion-video" && (
                <div className="p-6 rounded-3xl bg-[#0c0c14] border border-[#FF8B2C]/40">
                  <label className="block text-sm font-black text-[#FF8B2C] mb-2 flex items-center gap-2">
                    <Film className="w-4 h-4" />
                    <span>3. رابط فيديو يوتيوب (مخصص لمعرض الموشن جرافيك):</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=... أو https://youtu.be/..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#141420] border border-white/15 text-white text-xs font-mono focus:border-[#FF8B2C] outline-none placeholder:text-zinc-500"
                  />
                  {videoUrl && parseYouTubeVideoId(videoUrl) && (
                    <p className="text-xs text-emerald-400 mt-2 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      <span>تم التعرف على معرف يوتيوب: {parseYouTubeVideoId(videoUrl)}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Step 3: Store URL for E-commerce Scaling Only */}
              {category === "ecommerce-scaling" && (
                <div className="p-6 rounded-3xl bg-[#0c0c14] border border-[#FF8B2C]/40">
                  <label className="block text-sm font-black text-[#FF8B2C] mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>3. رابط المتجر الإلكتروني (لينك المتجر الذي يظهر زر زيارته بالمعرض): <span className="text-[#FF8B2C]">*</span></span>
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourstore.com"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-[#141420] border border-white/15 text-white text-xs font-mono focus:border-[#FF8B2C] outline-none placeholder:text-zinc-500"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-grow py-4 px-8 rounded-2xl bg-[#FF8B2C] hover:bg-[#FFA857] text-[#060608] font-black text-sm sm:text-base shadow-[0_0_30px_rgba(255,139,44,0.35)] transition-all cursor-pointer hover:scale-[1.02] active:scale-98 disabled:opacity-50"
                >
                  {editId ? "حفظ ونشر التعديلات" : "حفظ ونشر العمل في المعرض"}
                </button>

                <Link
                  href="/admin"
                  className="py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-300 font-bold text-sm transition-all text-center"
                >
                  إلغاء
                </Link>
              </div>

            </form>
          </div>

          {/* Right Column: Live Interactive Card Preview */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#FF8B2C] flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>المعاينة الحية للبطاقة</span>
                </span>
                <span className="text-[11px] text-zinc-500">تحديث لحظي</span>
              </div>

              {/* Rendered Preview Card exactly matching PortfolioGalleryGrid */}
              <div className="rounded-3xl bg-[#0e0e16] border-2 border-[#FF8B2C]/40 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                
                {/* Image & Video Indicator Banner */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#161624]">
                  {image ? (
                    <Image
                      src={image}
                      alt=""
                      fill
                      unoptimized={image.startsWith("data:")}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-600 text-xs">
                      اختر صورة للمعاينة
                    </div>
                  )}

                  {videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-[#060608]/80 backdrop-blur-md border border-[#FF8B2C] flex items-center justify-center text-[#FF8B2C] shadow-[0_0_20px_rgba(255,139,44,0.5)]">
                        <Play className="w-5 h-5 fill-current translate-x-[-1px]" />
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-[#060608]/20 to-transparent" />

                  {/* Title Bar at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs sm:text-sm font-black text-white leading-snug drop-shadow-md">
                      {title || "عنوان العمل سيظهر هنا..."}
                    </p>
                  </div>
                </div>

                {/* Card Meta Details */}
                <div className="p-4 bg-[#0c0c14] border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-bold">القسم:</span>
                    <span className="text-[#FF8B2C] font-black">
                      {currentCategoryInfo.name}
                    </span>
                  </div>

                  {videoUrl && (
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                      <span className="text-zinc-400 font-bold">فيديو يوتيوب:</span>
                      <span className="text-red-400 font-mono text-[11px] truncate max-w-[180px]">
                        {videoUrl}
                      </span>
                    </div>
                  )}

                  {storeUrl && (
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                      <span className="text-zinc-400 font-bold">رابط المتجر:</span>
                      <span className="text-blue-400 font-mono text-[11px] truncate max-w-[180px]">
                        {storeUrl}
                      </span>
                    </div>
                  )}
                </div>

              </div>

              {/* Informative Tip Box */}
              <div className="p-4 rounded-2xl bg-[#12121c] border border-white/10 text-xs text-zinc-400 leading-relaxed">
                💡 <span className="font-bold text-white">ملاحظة:</span> فور الضغط على «حفظ ونشر العمل»، ستتم إضافة العمل مباشرة في معارض الموقع وحفظه في التخزين المحلي بدون الحاجة لإعادة تشغيل السيرفر.
              </div>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}

export default function AdminAddWorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060608] text-white p-20 text-center">جاري التحميل...</div>}>
      <AddWorkFormContent />
    </Suspense>
  );
}
