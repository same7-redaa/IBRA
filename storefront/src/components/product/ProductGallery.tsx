"use client";

import React, { useState } from "react";
import { ChevronDown, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";

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
    <div className="flex flex-col-reverse sm:flex-row gap-4 lg:gap-5 w-full items-start">
      
      {/* Vertical Thumbnails Strip */}
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto w-full sm:w-20 lg:w-24 shrink-0 scrollbar-none pb-2 sm:pb-0 max-h-[550px]">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-16 sm:w-full aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 shrink-0 bg-[#14161f] cursor-pointer group ${
              selectedIndex === idx
                ? "border-[#b0fb30] ring-2 ring-[#b0fb30]/30 shadow-[0_0_15px_rgba(176,251,48,0.25)] scale-[1.02]"
                : "border-gray-800 hover:border-gray-600 opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`${productName} - مصغرة ${idx + 1}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}

        {/* Scroll Down Arrow Indicator */}
        {images.length > 3 && (
          <button
            onClick={handleNext}
            aria-label="عرض المزيد من الصور"
            className="hidden sm:flex w-full h-9 rounded-lg bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] hover:text-[#b0fb30] text-gray-400 items-center justify-center transition-colors cursor-pointer mt-1"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Main Square Lookbook Image */}
      <div className="relative flex-grow w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#161822] to-[#0e1017] border border-gray-800/80 group shadow-2xl">
        <img
          src={currentImage}
          alt={productName}
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isZoomed ? "scale-125 cursor-zoom-out" : "group-hover:scale-105 cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Floating Zoom Button at Bottom Corner */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label="تكبير الصورة"
          className="absolute bottom-4 left-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-gray-700/80 text-white flex items-center justify-center hover:bg-[#b0fb30] hover:text-deep-black transition-all shadow-lg hover:scale-110 cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Navigation Arrows for Mobile / Carousel */}
        {images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              aria-label="الصورة السابقة"
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#b0fb30] hover:text-deep-black transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="الصورة التالية"
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#b0fb30] hover:text-deep-black transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-gray-800 text-gray-300 text-[11px] font-bold px-3 py-1 rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

    </div>
  );
}
