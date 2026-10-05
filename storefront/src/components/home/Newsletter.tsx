"use client";

import React, { useState } from "react";
import FloatingInput from "@/components/ui/FloatingInput";
import FancyCornerButton from "@/components/ui/FancyCornerButton";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-16 bg-[#f4f8fc] border-t border-slate-200/80 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 bg-white border border-amber-100 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(245,158,11,0.06)] text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e293b] mb-3 tracking-tight">
          كن أول من يعلم بأحدث <span className="text-[#d97706]">مواسم القطف والعروض</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
          سجل معنا لتصلك إشعارات قطفات العسل النادرة والخلطات الملكية وخصومات حصرية قبل الجميع مباشرة على هاتفك أو بريدك.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-sm font-bold animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
            <span>تم اشتراكك بنجاح! تم تطبيق كود الخصم: HONEY15</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <FloatingInput
              label="البريد الإلكتروني أو رقم الهاتف"
              type="text"
              required
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              icon={<Mail className="w-4 h-4 text-slate-400" />}
              containerClassName="flex-grow"
            />

            <FancyCornerButton variant="neon" size="md" className="w-full sm:w-auto shrink-0 font-black">
              اشتـرك الآن
            </FancyCornerButton>
          </form>
        )}

      </div>
    </section>
  );
}

