"use client";

import React, { useState } from "react";
import { 
  Award, 
  CheckCircle2, 
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
    title: "خبير معتمد من أدوبي (Adobe Expert)",
    shortLabel: "أدوبــي",
    issuer: "فوتوشوب وإليستريتور",
    org: "شركة Adobe العالمية",
    year: "معتمد دولياً",
    badge: "خبير تصميم معتمد",
    skills: ["فوتوشوب", "إليستريتور", "تصميم إعلاني", "هويات بصرية"],
    description: "شهادة اعتماد تخصصية في برامج التصميم المتقدمة، إنتاج الهويات البصرية، والتصميم الإعلاني عالي التحويل."
  },
  {
    id: "google-ads",
    num: "02",
    title: "شهادة إعلانات جوجل المعتمدة",
    shortLabel: "جــوجــل",
    issuer: "منصة Google Skillshop",
    org: "شركة Google",
    year: "معتمد",
    badge: "إعلانات البحث والعرض",
    skills: ["حملات البحث", "شبكة العرض", "المزايدة الذكية", "تتبع التحويلات"],
    description: "اعتماد رسمي في تخطيط، إدارة وتحسين الحملات الإعلانية على شبكة بحث جوجل والشبكة الإعلانية."
  },
  {
    id: "udacity-nanodegree",
    num: "03",
    title: "نانوديجري التسويق الرقمي",
    shortLabel: "يوداسيتي",
    issuer: "يوداسيتي (Udacity) · 2021",
    org: "منصة Udacity العالمية",
    year: "2021",
    badge: "خريج نانوديجري",
    skills: ["تسويق النمو", "تحليل البيانات", "الأتمتة التسويقية", "استراتيجيات المحتوى"],
    description: "درجة النانو الاحترافية العالمية في التسويق الرقمي وبناء استراتيجيات النمو المعتمدة على البيانات الحية."
  },
  {
    id: "egypt-fwd",
    num: "04",
    title: "مسار التحدي - مصر الرقمية (FWD)",
    shortLabel: "مصر FWD",
    issuer: "مبادرة FWD / يوداسيتي · 2021",
    org: "وزارة الاتصالات وتكنولوجيا المعلومات",
    year: "2021",
    badge: "مسار التحدي المتقدم",
    skills: ["أبحاث السوق", "استراتيجيات الاستهداف", "إعلانات السوشيال", "تحسين القمع الإعلاني"],
    description: "تخرج معتمد من مبادرة مصر الرقمية المستقبلية بالتعاون مع Udacity لتطوير حلول التسويق الرقمي وإدارة الحملات."
  },
  {
    id: "greaters-diploma",
    num: "05",
    title: "دبلومة التسويق الرقمي المتقدمة",
    shortLabel: "دبلومة",
    issuer: "جريترز لحلول التسويق · 2021",
    org: "أكاديمية Greaters",
    year: "2021",
    badge: "دبلومة متقدمة",
    skills: ["ميديا باينج متكامل", "كتابة الإعلانات", "ربط البكسل و CAPI", "توسيع المتاجر"],
    description: "دبلومة متقدمة ومكثفة في الشراء الإعلاني المباشر، تحسين معدلات التحويل، ومضاعفة مبيعات المتاجر الإلكترونية."
  },
  {
    id: "hubspot-inbound",
    num: "06",
    title: "شهادة التسويق الداخلي (HubSpot)",
    shortLabel: "هاب سبوت",
    issuer: "أكاديمية HubSpot Academy",
    org: "منصة HubSpot",
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
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#FF8B2C]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#FF8B2C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Title (No badge above title as per strict master design rules) */}
        <ScrollReveal direction="up">
          <div className="text-right mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide leading-tight">
              الـــشَّـــهَـــادَات <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.45)]">الاعـــتـــمَـــادِيَّـــة</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium max-w-xl leading-relaxed">
              شهادات دولية وتخصصية معتمدة من كبرى المنصات والأكاديميات العالمية في التسويق الرقمي وتصميم الإعلانات.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Right Column (on RTL Desktop): The 3D Rotary Wheel Selector Widget */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-2 lg:order-1">
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.wheelWrapper}>

                {/* Rotary Dial Container */}
                <div 
                  className={styles.radioInputContainer}
                  onClick={handleNext}
                  title="اضغط للتنقل بين الشهادات"
                >
                  <div className={styles.glassOverlay} />

                  {CERTIFICATES.map((cert, idx) => {
                    const diff = idx - selectedIndex;
                    const angle = diff * 28;
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
                          opacity: isActive ? 1 : Math.abs(diff) === 1 ? 0.4 : 0.1,
                          zIndex: isActive ? 10 : 5 - Math.abs(diff),
                        }}
                      >
                        <span className={styles.num}>{cert.num}</span>
                        <span className={styles.label}>{cert.shortLabel}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Dial Controls under the Wheel */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="الشهادة السابقة"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/15 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-[11px] font-mono font-bold text-zinc-300">
                    <span className="text-[#FF8B2C]">{activeCert.num}</span> / 0{CERTIFICATES.length}
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
          </div>

          {/* Left Column: 6 Certificate Cards Grid (matching screenshot layout + interactive sync) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <ScrollReveal direction="left" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
                {CERTIFICATES.map((cert, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`${styles.certCard} ${isSelected ? styles.selected : ""} p-4 sm:p-5 flex flex-col justify-between min-h-[120px] sm:min-h-[135px] text-right group`}
                    >
                      {/* Top Row: Title & Indicator Dot */}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-xs sm:text-[13px] font-black text-white group-hover:text-[#FF8B2C] transition-colors leading-snug">
                            {cert.title}
                          </h3>
                          <span 
                            className={`w-2 h-2 rounded-full shrink-0 mt-1 transition-all ${
                              isSelected 
                                ? "bg-[#FF8B2C] shadow-[0_0_8px_#FF8B2C]" 
                                : "bg-white/20 group-hover:bg-white/40"
                            }`} 
                          />
                        </div>

                        {/* Issuer & Year */}
                        <p className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Bottom Status / Badge */}
                      <div className="pt-2.5 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-bold">
                        <span className="text-zinc-400">
                          {cert.org}
                        </span>
                        {isSelected && (
                          <span className="text-[#FF8B2C] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>محدد</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Selected Certificate Spotlight Detailed Drawer / Banner */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#0b0b10]/95 border border-[#FF8B2C]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Info */}
                  <div className="space-y-1.5 text-right">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#FF8B2C]/15 border border-[#FF8B2C]/40 flex items-center justify-center text-[#FF8B2C]">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-white">
                        {activeCert.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/30">
                        {activeCert.badge}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed max-w-2xl font-medium">
                      {activeCert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {activeCert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/5 text-zinc-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-[#FF8B2C]" />
                    <span>اعتماد رسمي موثق</span>
                  </div>

                </div>
              </div>

            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
