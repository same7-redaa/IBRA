"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[selectedIndex] || images[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
      
      {/* Thumbnails list */}
      <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto pb-1 lg:pb-0 scrollbar-none shrink-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-[5px] overflow-hidden border-2 transition-all duration-200 shrink-0 bg-gray-900 ${
              selectedIndex === idx
                ? "border-[#b0fb30] shadow-[0_0_10px_rgba(176,251,48,0.35)] scale-102"
                : "border-gray-800 hover:border-gray-600 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${productName} - صورة ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Main Large Image Container */}
      <div className="relative flex-grow h-[300px] sm:h-[360px] lg:h-[400px] rounded-[5px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/80 group">
        <img
          src={currentImage}
          alt={productName}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-4 right-4 z-10 bg-[#b0fb30] text-deep-black font-black text-xs px-3 py-1 rounded-[5px] shadow-[0_0_15px_rgba(176,251,48,0.4)]">
            خصم {discountPercentage}%
          </div>
        )}

        {/* Navigation Arrows for Mobile / Quick Browse */}
        {images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              aria-label="الصورة السابقة"
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#b0fb30] hover:text-deep-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="الصورة التالية"
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#b0fb30] hover:text-deep-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Image Counter Badge */}
        <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-md border border-gray-800 text-gray-300 text-[11px] font-bold px-2.5 py-1 rounded-[5px]">
          {selectedIndex + 1} / {images.length}
        </div>

      </div>

    </div>
  );
}
