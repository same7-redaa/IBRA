"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";

export interface ProductProps {
  id: string | number;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative w-full bg-[#13151b] border border-gray-800/80 hover:border-[#b0fb30]/40 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(176,251,48,0.12)] flex flex-col justify-between">
      
      {/* Top Image Container with Unique Asymmetrical Curve */}
      <div className="relative w-full h-52 sm:h-60 rounded-xl rounded-tr-[3.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Favorite Floating Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center transition-transform active:scale-125 hover:scale-110 border border-white/10"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                : "text-gray-400 hover:text-white"
            }`}
          />
        </button>

        {/* Curved Floating Price Badge */}
        <div className="absolute left-3 bottom-0 translate-y-2 bg-[#0c0c0c] border border-gray-800/90 text-[#b0fb30] font-black text-sm px-3.5 py-1.5 rounded-t-xl rounded-b-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center gap-1">
          <span>{product.price}</span>
          <span className="text-[10px] text-gray-400 font-normal">ج.م</span>
          {product.oldPrice && (
            <span className="text-[10px] text-gray-500 line-through mr-1 font-normal">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="pt-5 px-1.5 pb-2 flex-grow flex flex-col justify-between">
        <div>
          {/* Brand Name */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
            <span>{product.brand}</span>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[11px] text-gray-300">
              <Star className="w-3.5 h-3.5 fill-[#ffd426] text-[#ffd426]" />
              <span className="font-bold text-white">{product.rating}</span>
              <span className="text-gray-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-bold text-white group-hover:text-[#b0fb30] transition-colors line-clamp-1 mb-3">
            {product.name}
          </h3>

          {/* Colors & Sizes Selector Row */}
          <div className="flex items-center justify-between gap-2 border-t border-gray-800/80 pt-2.5 mb-3.5">
            
            {/* Colors */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gray-400 font-medium">اللون</span>
              <div className="flex items-center gap-1.5">
                {product.colors.map((color, idx) => (
                  <div key={idx} className="relative group/color">
                    <button
                      onClick={() => setSelectedColor(idx)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-3.5 h-3.5 rounded-full transition-all border ${
                        selectedColor === idx
                          ? "ring-2 ring-[#b0fb30] ring-offset-1 ring-offset-[#13151b] scale-110 border-transparent"
                          : "border-gray-700 hover:scale-110"
                      }`}
                      aria-label={color.name}
                    />
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover/color:block bg-black text-[9px] text-white px-1.5 py-0.5 rounded whitespace-nowrap z-20 border border-gray-800">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-1 items-end">
              <span className="text-[10px] text-gray-400 font-medium">المقاس</span>
              <div className="flex items-center gap-1">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-5 h-5 text-[9px] font-bold rounded-md flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? "bg-[#b0fb30] text-deep-black shadow-[0_0_8px_rgba(176,251,48,0.4)]"
                        : "bg-gray-800/70 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Dual Action Buttons Container */}
        <div className="flex items-center gap-2 pt-1">
          <button className="flex-grow py-2 px-3 bg-[#b0fb30] hover:bg-[#9de42b] text-deep-black font-extrabold text-xs rounded-xl rounded-br-2xl transition-all shadow-[0_0_12px_rgba(176,251,48,0.25)] hover:shadow-[0_0_18px_rgba(176,251,48,0.4)] active:scale-95">
            شراء الآن
          </button>
          
          <button
            aria-label="إضافة إلى السلة"
            className="w-9 h-8 bg-gray-800/90 hover:bg-[#e2d1f9] hover:text-deep-black text-white rounded-xl rounded-bl-2xl flex items-center justify-center transition-all border border-gray-700/60 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
