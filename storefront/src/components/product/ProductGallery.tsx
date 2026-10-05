"use client";

import React, { useState } from "react";
import { ZoomIn, ShieldCheck } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  discountPercentage?: number;
}

export default function ProductGallery({
  images,
  productName,
  discountPercentage,
}: ProductGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const mainImage = images[0] || "/hero/png_1.png";

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      {/* Frameless Floating Studio Product Container */}
      <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center group select-none">
        
        {/* Soft Ambient Gold Halo */}
        <div className="absolute inset-4 rounded-full bg-[#f59e0b]/10 blur-3xl pointer-events-none" />

        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-2 right-2 z-10 bg-[#d97706] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
            خصم {discountPercentage}%
          </div>
        )}

        {/* Quality Seal Badge */}
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-[#ebdcc9] text-[#5c4f42] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
          <span>طبيعي 100%</span>
        </div>

        {/* Frameless Transparent Studio PNG Image */}
        <img
          src={mainImage}
          alt={productName}
          className={`w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-transform duration-500 ${
            isZoomed ? "scale-125 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Floating Zoom Action Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label="تكبير الصورة"
          className="absolute bottom-2 left-2 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#ebdcc9] text-[#221c15] flex items-center justify-center hover:bg-[#d97706] hover:text-white transition-all shadow-md hover:scale-110 cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
