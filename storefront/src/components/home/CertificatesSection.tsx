"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  RotateCw
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./CertificatesSection.module.css";

interface CertificateItem {
  id: string;
  num: string;
  title: string;
  issuer: string;
  org: string;
  year?: string;
  badge: string;
  skills: string[];
  description: string;
  logoType: "image" | "text";
  logoSrc?: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "adobe-certified",
    num: "01",
    title: "خبير معتمد من أدوبي (Adobe Expert)",
    issuer: "فوتوشوب وإليستريتور",
    org: "Adobe Systems",
    year: "معتمد دولياً",
    badge: "Expert Design",
    skills: ["فوتوشوب", "إليستريتور", "تصميم إعلاني", "هويات بصرية"],
    description: "شهادة اعتماد تخصصية في أدوات التصميم الإبداعي المتقدمة، إنتاج الهويات البصرية، والتصميم الإعلاني عالي التحويل.",
    logoType: "image",
    logoSrc: "/certificates/adobe.png"
  },
  {
    id: "google-ads",
    num: "02",
    title: "شهادة إعلانات جوجل المعتمدة",
    issuer: "Google Skillshop",
    org: "Google",
    year: "معتمد",
    badge: "Search & Display Ads",
    skills: ["حملات البحث", "شبكة العرض", "المزايدة الذكية", "تتبع التحويلات"],
    description: "اعتماد رسمي في تخطيط، إدارة وتحسين الحملات الإعلانية على شبكة بحث جوجل والشبكة الإعلانية الذكية.",
    logoType: "image",
    logoSrc: "/hero-icons/google-ads.png"
  },
  {
    id: "udacity-nanodegree",
    num: "03",
    title: "نانوديجري التسويق الرقمي",
    issuer: "Udacity · 2021",
    org: "Udacity Global",
    year: "2021",
    badge: "Nanodegree Graduate",
    skills: ["تسويق النمو", "تحليل البيانات", "الأتمتة التسويقية", "استراتيجيات المحتوى"],
    description: "درجة النانو الاحترافية العالمية في التسويق الرقمي وبناء استراتيجيات النمو المعتمدة على البيانات الحية.",
    logoType: "image",
    logoSrc: "/certificates/udacity.png"
  },
  {
    id: "egypt-fwd",
    num: "04",
    title: "مسار التحدي - مبادرة مصر الرقمية",
    issuer: "Udacity / Egypt FWD · 2021",
    org: "وزارة الاتصالات (MCIT)",
    year: "2021",
    badge: "Challenger Track",
    skills: ["أبحاث السوق", "استراتيجيات الاستهداف", "إعلانات السوشيال", "تحسين القمع الإعلاني"],
    description: "تخرج معتمد من مبادرة مصر الرقمية المستقبلية بالتعاون مع Udacity لتطوير حلول التسويق الرقمي وإدارة الحملات.",
    logoType: "image",
    logoSrc: "/certificates/fwd.jpg"
  },
  {
    id: "greaters-diploma",
    num: "05",
    title: "دبلومة التسويق الرقمي المتقدمة",
    issuer: "Greaters Marketing Solutions · 2021",
    org: "Greaters Academy",
    year: "2021",
    badge: "Advanced Diploma",
    skills: ["ميديا باينج متكامل", "كتابة الإعلانات", "ربط البكسل و CAPI", "توسيع المتاجر"],
    description: "دبلومة متقدمة ومكثفة في الشراء الإعلاني المباشر، تحسين معدلات التحويل، ومضاعفة مبيعات المتاجر الإلكترونية.",
    logoType: "text"
  },
  {
    id: "hubspot-inbound",
    num: "06",
    title: "شهادة التسويق الداخلي (HubSpot)",
    issuer: "HubSpot Academy",
    org: "HubSpot Certified",
    year: "معتمد",
    badge: "Inbound Certified",
    skills: ["استراتيجية الجذب", "رعاية العملاء", "رحلة العميل", "زيادة معدل التحويل"],
    description: "شهادة معتمدة في جذب العملاء المحتملين وبناء مسارات تسويقية آلية لزيادة ولاء العملاء والقيمة الدائمة (LTV).",
    logoType: "image",
    logoSrc: "/certificates/hubspot.png"
  }
];

export default function CertificatesSection() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="certificates" className="w-full py-16 sm:py-20 relative overflow-hidden bg-transparent select-none">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Title (No badge above title as per strict master design rules) */}
        <ScrollReveal direction="up">
          <div className="text-right mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide leading-tight">
              الـــشَّـــهَـــادَات <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.45)]">الاعـــتـــمَـــادِيَّـــة</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-medium max-w-xl leading-relaxed">
              شهادات دولية وتخصصية معتمدة من كبرى المنصات والأكاديميات العالمية. حرّك المؤشر فوق أي شهادة لاكتشاف التفاصيل.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CERTIFICATES.map((cert, index) => {
            const isFlipped = !!flippedCards[cert.id];

            return (
              <ScrollReveal key={cert.id} direction="up" delay={index * 60}>
                <div 
                  className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
                  onClick={() => toggleCard(cert.id)}
                >
                  <div className={styles.flipCardInner}>
                    
                    {/* Front Face: Company Logo + Certificate Name + Badge */}
                    <div className={styles.flipCardFront}>
                      
                      {/* Top Bar: Number + Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-xl sm:text-2xl font-black text-[#FF8B2C] drop-shadow-[0_0_8px_rgba(255,139,44,0.4)]">
                          {cert.num}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FF8B2C]/15 text-[#FF8B2C] border border-[#FF8B2C]/30 shadow-sm">
                          {cert.badge}
                        </span>
                      </div>

                      {/* Center: Company Logo (Crisp & Prominent) + Certificate Name */}
                      <div className="flex flex-col items-center justify-center text-center my-auto py-2">
                        
                        {/* Company Logo / Text Badge */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.05] border border-white/10 p-3 flex items-center justify-center mb-4 shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                          {cert.logoType === "image" && cert.logoSrc ? (
                            <Image
                              src={cert.logoSrc}
                              alt={cert.title}
                              width={88}
                              height={88}
                              unoptimized
                              className="w-full h-full object-contain filter drop-shadow-md"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-center">
                              <span className="text-[#FF8B2C] font-black text-sm tracking-wider leading-tight">
                                GREATERS
                              </span>
                              <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">
                                Solutions
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-white leading-snug tracking-wide">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-zinc-400 font-medium mt-1">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Bottom Prompt Hint */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400 font-bold">
                        <span>{cert.org}</span>
                        <span className="text-[#FF8B2C] flex items-center gap-1">
                          <RotateCw className="w-3 h-3 animate-spin" style={{ animationDuration: "6s" }} />
                          <span>اقلب للتفاصيل</span>
                        </span>
                      </div>

                    </div>

                    {/* Back Face: Full Certificate Details */}
                    <div className={styles.flipCardBack}>
                      
                      {/* Top Bar: Title & Number */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-[#FF8B2C]">{cert.num}</span>
                          <h4 className="text-sm font-black text-white line-clamp-1">{cert.title}</h4>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400">{cert.year}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-200 leading-relaxed font-medium my-auto py-1">
                        {cert.description}
                      </p>

                      {/* Skills & Verification Footer */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <div className="flex flex-wrap items-center gap-1">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/5 text-zinc-200 border border-white/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-bold text-[#FF8B2C] pt-1">
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>اعتماد رسمي موثق</span>
                          </div>
                          <span className="text-[10px] text-zinc-400 font-mono font-normal">{cert.org}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
