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
    <div className="w-full flex flex-col items-center">
      {/* Single Compact Image Card */}
      <div className="relative w-full max-w-[540px] h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl bg-white border border-[#ebdcc9] p-4 sm:p-6 flex items-center justify-center shadow-[0_8px_30px_rgba(180,83,9,0.06)] overflow-hidden group">
        
        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-4 right-4 z-10 bg-[#d97706] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md">
            خصم {discountPercentage}%
          </div>
        )}

        {/* Quality Seal Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#fbf7ee] border border-[#ebdcc9] text-[#5c4f42] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
          <span>طبيعي 100%</span>
        </div>

        {/* The Single Product Image */}
        <img
          src={mainImage}
          alt={productName}
          className={`w-full h-full object-contain transition-transform duration-500 ${
            isZoomed ? "scale-125 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Floating Zoom Action Button */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label="تكبير الصورة"
          className="absolute bottom-4 left-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#ebdcc9] text-[#221c15] flex items-center justify-center hover:bg-[#d97706] hover:text-white transition-all shadow-md hover:scale-110 cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
