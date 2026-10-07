"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./CertificatesSection.module.css";

// Brand Vector Logo Components
function AdobeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 2H23.5V22L14.5 2Z" fill="#ED2224" />
      <path d="M9.5 2H0.5V22L9.5 2Z" fill="#ED2224" />
      <path d="M12 9.5L16.2 20H12.7L11.4 16.8H7.7L10.5 11.2L12 9.5Z" fill="#ED2224" />
    </svg>
  );
}

function GoogleAdsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4" />
      <path d="M4.3 12.5a7.5 7.5 0 0 1 0-1l-3.3-2.5a12.2 12.2 0 0 0 0 6l3.3-2.5z" fill="#FBBC05" />
      <path d="M12.5 4.5c2 0 3.7.7 5.1 2l2.3-2.3C17.8 2.2 15.3 1.2 12.5 1.2 7.7 1.2 3.6 4 1.7 8.1l3.4 2.5c1-3.6 4.3-6.1 7.4-6.1z" fill="#EA4335" />
      <path d="M12.5 19.5c-3.1 0-6.4-2.5-7.4-6.1L1.7 15.9c1.9 4.1 6 6.9 10.8 6.9 2.8 0 5.3-1 7.4-3l-2.3-2.3c-1.4 1.3-3.1 2-5.1 2z" fill="#34A853" />
    </svg>
  );
}

function UdacityLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-3.03 0-5.5-2.47-5.5-5.5V6.5h2.5V12c0 1.65 1.35 3 3 3s3-1.35 3-3V6.5h2.5V12c0 3.03-2.47 5.5-5.5 5.5z" fill="#02B3E4" />
    </svg>
  );
}

function EgyptFWDLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center font-mono font-black text-[10px] tracking-wider text-[#FF8B2C] bg-black/80 border border-[#FF8B2C]/40 rounded-md px-1.5 py-0.5 shadow-sm`}>
      FWD
    </div>
  );
}

function GreatersDiplomaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#FF8B2C" />
      <path d="M5 13.18V17c0 3.87 3.13 7 7 7s7-3.13 7-7v-3.82l-7 3.82-7-3.82z" fill="#FFA857" opacity="0.85" />
    </svg>
  );
}

function HubSpotLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8 7.3c-.6 0-1.1.2-1.5.5L14.7 6c.1-.3.1-.7.1-1 0-1.9-1.5-3.4-3.4-3.4-1.9 0-3.4 1.5-3.4 3.4 0 .4.1.8.2 1.1L6.1 8c-.4-.4-1-.7-1.6-.7-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.7 0 1.3-.3 1.7-.8l2.2 1.9c-.1.3-.2.7-.2 1.1 0 1.9 1.5 3.4 3.4 3.4 1.9 0 3.4-1.5 3.4-3.4 0-.4-.1-.8-.2-1.1l2.5-1.9c.4.4 1 .7 1.6.7 1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.6-2.5zM11.4 4c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4zm0 12c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z" fill="#FF7A59" />
    </svg>
  );
}

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
  brandColor: string;
  logo: React.ReactNode;
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
    description: "شهادة اعتماد تخصصية في أدوات التصميم الإبداعي المتقدمة، إنتاج الهويات البصرية، والتصميم الإعلاني عالي التحويل.",
    brandColor: "#ED2224",
    logo: <AdobeLogo className="w-8 h-8" />
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
    description: "اعتماد رسمي في تخطيط، إدارة وتحسين الحملات الإعلانية على شبكة بحث جوجل والشبكة الإعلانية الذكية.",
    brandColor: "#4285F4",
    logo: <GoogleAdsLogo className="w-8 h-8" />
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
    description: "درجة النانو الاحترافية العالمية في التسويق الرقمي وبناء استراتيجيات النمو المعتمدة على البيانات الحية.",
    brandColor: "#02B3E4",
    logo: <UdacityLogo className="w-8 h-8" />
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
    description: "تخرج معتمد من مبادرة مصر الرقمية المستقبلية بالتعاون مع Udacity لتطوير حلول التسويق الرقمي وإدارة الحملات.",
    brandColor: "#FF8B2C",
    logo: <EgyptFWDLogo className="w-8 h-8" />
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
    description: "دبلومة متقدمة ومكثفة في الشراء الإعلاني المباشر، تحسين معدلات التحويل، ومضاعفة مبيعات المتاجر الإلكترونية.",
    brandColor: "#FF8B2C",
    logo: <GreatersDiplomaLogo className="w-8 h-8" />
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
    description: "شهادة معتمدة في جذب العملاء المحتملين وبناء مسارات تسويقية آلية لزيادة ولاء العملاء والقيمة الدائمة (LTV).",
    brandColor: "#FF7A59",
    logo: <HubSpotLogo className="w-8 h-8" />
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
    <section id="certificates" className="w-full py-12 sm:py-16 relative overflow-hidden bg-transparent select-none">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-72 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (No badge above title) */}
        <ScrollReveal direction="up">
          <div className="text-right mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-wide leading-tight">
              الـــشَّـــهَـــادَات <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.45)]">الاعـــتـــمَـــادِيَّـــة</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-medium max-w-xl leading-relaxed">
              شهادات دولية وتخصصية معتمدة من كبرى المنصات والأكاديميات العالمية في التسويق الرقمي وتصميم الإعلانات.
            </p>
          </div>
        </ScrollReveal>

        {/* Widescreen Edge-to-Edge Cover-style Certificate Card */}
        <ScrollReveal direction="up" delay={100}>
          <div className={`${styles.coverCard} p-5 sm:p-7 lg:p-8 flex flex-col justify-between`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left / Center: The 3D Rotary Wheel Dial Selector */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center order-2 lg:order-1">
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
                        <div className="flex items-center gap-2">
                          <span className={styles.label}>{cert.shortLabel}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Indicators Under Wheel */}
                <div className="flex items-center gap-2.5 mt-3.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="الشهادة السابقة"
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/15 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10">
                    {CERTIFICATES.map((c, i) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedIndex(i)}
                        aria-label={`الشهادة ${c.num}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === selectedIndex
                            ? "w-5 bg-[#FF8B2C] shadow-[0_0_6px_#FF8B2C]"
                            : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="الشهادة التالية"
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/15 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right: Active Selected Certificate Spotlight Details with Official Company Logo */}
              <div className="lg:col-span-8 flex flex-col justify-center text-right order-1 lg:order-2 space-y-3.5">
                
                {/* Header Row: Company Logo + Big Number + Title + Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    
                    {/* Official Company Logo Badge */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.06] border border-white/15 p-2 flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
                      {activeCert.logo}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-black text-[#FF8B2C] drop-shadow-[0_0_10px_rgba(255,139,44,0.4)]">
                          {activeCert.num}
                        </span>
                        <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white leading-snug">
                          {activeCert.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-0.5">
                        {activeCert.issuer} · <span className="text-zinc-200 font-bold">{activeCert.org}</span>
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/35 shadow-[0_0_10px_rgba(255,139,44,0.2)] self-start sm:self-center shrink-0">
                    {activeCert.badge}
                  </span>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-medium max-w-3xl">
                  {activeCert.description}
                </p>

                {/* Skills Badges & Official Verification Stamp */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-zinc-400">المهارات:</span>
                    {activeCert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white/5 text-zinc-200 border border-white/10 hover:border-[#FF8B2C]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0 text-xs font-bold text-[#FF8B2C] bg-[#FF8B2C]/10 border border-[#FF8B2C]/30 px-3 py-1 rounded-lg self-start sm:self-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>اعتماد رسمي موثق</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
