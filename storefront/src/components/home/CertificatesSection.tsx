"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./CertificatesSection.module.css";

interface CertificateItem {
  id: string;
  num: string;
  title: string;
  shortLabel: string;
  issuer: string;
  org: string;
  year?: string;
  badge: string;
  skills: string[];
  description: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "adobe-certified",
    num: "01",
    title: "خبير معتمد من أدوبي (Adobe Certified Expert)",
    shortLabel: "أدوبـــي",
    issuer: "فوتوشوب وإليستريتور",
    org: "شركة Adobe Systems العالمية",
    year: "معتمد دولياً",
    badge: "خبير تصميم معتمد",
    skills: ["فوتوشوب", "إليستريتور", "تصميم إعلاني", "هويات بصرية"],
    description: "شهادة اعتماد تخصصية في أدوات التصميم الإبداعي المتقدمة، إنتاج الهويات البصرية، والتصميم الإعلاني عالي التحويل."
  },
  {
    id: "google-ads",
    num: "02",
    title: "شهادة إعلانات جوجل المعتمدة (Google Ads)",
    shortLabel: "جـــوجـــل",
    issuer: "Google Skillshop",
    org: "شركة Google",
    year: "معتمد",
    badge: "إعلانات البحث والعرض",
    skills: ["حملات البحث", "شبكة العرض", "المزايدة الذكية", "تتبع التحويلات"],
    description: "اعتماد رسمي في تخطيط، إدارة وتحسين الحملات الإعلانية على شبكة بحث جوجل والشبكة الإعلانية الذكية."
  },
  {
    id: "udacity-nanodegree",
    num: "03",
    title: "نانوديجري التسويق الرقمي (Udacity Nanodegree)",
    shortLabel: "يوداسيتي",
    issuer: "Udacity · 2021",
    org: "منصة Udacity العالمية",
    year: "2021",
    badge: "خريج نانوديجري",
    skills: ["تسويق النمو", "تحليل البيانات", "الأتمتة التسويقية", "استراتيجيات المحتوى"],
    description: "درجة النانو الاحترافية العالمية في التسويق الرقمي وبناء استراتيجيات النمو المعتمدة على البيانات الحية."
  },
  {
    id: "egypt-fwd",
    num: "04",
    title: "مسار التحدي - مبادرة مصر الرقمية (Egypt FWD)",
    shortLabel: "مصر FWD",
    issuer: "Udacity / Egypt FWD · 2021",
    org: "وزارة الاتصالات وتكنولوجيا المعلومات",
    year: "2021",
    badge: "مسار التحدي المتقدم",
    skills: ["أبحاث السوق", "استراتيجيات الاستهداف", "إعلانات السوشيال", "تحسين القمع الإعلاني"],
    description: "تخرج معتمد من مبادرة مصر الرقمية المستقبلية بالتعاون مع Udacity لتطوير حلول التسويق الرقمي وإدارة الحملات."
  },
  {
    id: "greaters-diploma",
    num: "05",
    title: "دبلومة التسويق الرقمي المتقدمة (Marketing Diploma)",
    shortLabel: "دبـــلـــومـــة",
    issuer: "Greaters Marketing Solutions · 2021",
    org: "أكاديمية Greaters",
    year: "2021",
    badge: "دبلومة متقدمة",
    skills: ["ميديا باينج متكامل", "كتابة الإعلانات", "ربط البكسل و CAPI", "توسيع المتاجر"],
    description: "دبلومة متقدمة ومكثفة في الشراء الإعلاني المباشر، تحسين معدلات التحويل، ومضاعفة مبيعات المتاجر الإلكترونية."
  },
  {
    id: "hubspot-inbound",
    num: "06",
    title: "شهادة التسويق الداخلي من هاب سبوت (HubSpot)",
    shortLabel: "هاب سبوت",
    issuer: "HubSpot Academy",
    org: "منصة HubSpot Certified",
    year: "معتمد",
    badge: "اعتماد Inbound",
    skills: ["استراتيجية الجذب", "رعاية العملاء", "رحلة العميل", "زيادة معدل التحويل"],
    description: "شهادة معتمدة في جذب العملاء المحتملين وبناء مسارات تسويقية آلية لزيادة ولاء العملاء والقيمة الدائمة (LTV)."
  }
];

export default function CertificatesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  const activeCert = CERTIFICATES[selectedIndex];

  return (
    <section id="certificates" className="w-full py-16 sm:py-20 relative overflow-hidden bg-transparent select-none">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Section Title (Centered, No badges above title) */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide leading-tight">
              الـــشَّـــهَـــادَات <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.45)]">الاعـــتـــمَـــادِيَّـــة</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed">
              شهادات دولية وتخصصية معتمدة من كبرى المنصات والأكاديميات العالمية في التسويق الرقمي وتصميم الإعلانات.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Centered Content Stack: Dial Wheel Centered + Single Active Certificate Spotlight Below */}
        <div className="flex flex-col items-center justify-center gap-8 max-w-[850px] mx-auto">
          
          {/* Centered 3D Rotary Wheel Selector Widget */}
          <ScrollReveal direction="up" delay={100}>
            <div className={styles.wheelWrapper}>

              {/* Rotary Dial Container */}
              <div 
                className={styles.radioInputContainer}
                onClick={handleNext}
                title="اضغط للتنقل للشهادة التالية"
              >
                <div className={styles.glassOverlay} />

                {CERTIFICATES.map((cert, idx) => {
                  const diff = idx - selectedIndex;
                  const angle = diff * 26;
                  const isActive = idx === selectedIndex;

                  return (
                    <div
                      key={cert.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(idx);
                      }}
                      className={`${styles.wheelLabel} ${isActive ? styles.active : ""}`}
                      style={{
                        transform: `rotate(${angle}deg)`,
                        opacity: isActive ? 1 : Math.abs(diff) === 1 ? 0.35 : 0.08,
                        zIndex: isActive ? 10 : 5 - Math.abs(diff),
                      }}
                    >
                      <span className={styles.num}>{cert.num}</span>
                      <span className={styles.label}>{cert.shortLabel}</span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Navigation Control Strip */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="الشهادة السابقة"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/15 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Direct Dot Indicators */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10">
                  {CERTIFICATES.map((c, i) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedIndex(i)}
                      aria-label={`الشهادة ${c.num}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === selectedIndex
                          ? "w-6 bg-[#FF8B2C] shadow-[0_0_8px_#FF8B2C]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="الشهادة التالية"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/15 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

            </div>
          </ScrollReveal>

          {/* Single Focused Active Certificate Spotlight Card */}
          <ScrollReveal direction="up" delay={200} className="w-full">
            <div 
              key={activeCert.id}
              className={`${styles.spotlightCard} w-full p-6 sm:p-8 text-right animate-fade-in`}
            >
              <div className="flex flex-col gap-5">
                
                {/* Header Row: Number + Title + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-[#FF8B2C] drop-shadow-[0_0_10px_rgba(255,139,44,0.4)]">
                      {activeCert.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
                        {activeCert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                        {activeCert.issuer} · <span className="text-zinc-300 font-bold">{activeCert.org}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/35 shadow-[0_0_10px_rgba(255,139,44,0.2)]">
                      {activeCert.badge}
                    </span>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  {activeCert.description}
                </p>

                {/* Skills & Official Verification Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-zinc-400">المهارات المعتمدة:</span>
                    {activeCert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/5 text-zinc-200 border border-white/10 hover:border-[#FF8B2C]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verification Status */}
                  <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-[#FF8B2C] bg-[#FF8B2C]/10 border border-[#FF8B2C]/30 px-3 py-1.5 rounded-xl self-start sm:self-center">
                    <ShieldCheck className="w-4 h-4" />
                    <span>اعتماد رسمي موثق ومفعل</span>
                  </div>

                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
