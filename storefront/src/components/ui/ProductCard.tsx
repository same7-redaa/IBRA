"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ScaleButton from "@/components/ui/ScaleButton";

export interface ProductProps {
  id: string | number;
  brand: string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="group relative w-full h-full glass-card rounded-2xl p-2.5 sm:p-3 md:p-3.5 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between">
      
      {/* Top Image Container with Unique Asymmetrical Curve */}
      <div className="relative w-full h-40 sm:h-44 md:h-52 rounded-xl rounded-tr-[2rem] sm:rounded-tr-[3rem] overflow-hidden bg-gradient-to-b from-[#181822] to-[#0d0d14] border border-white/10">
        <Link href={`/products/${product.id}`} className="block relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-2 sm:p-2.5 drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Favorite Floating Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center transition-transform active:scale-125 hover:scale-110 border border-white/15 shadow-sm cursor-pointer touch-manipulation hover:border-[#FF8B2C]/50"
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors pointer-events-none ${
              isFavorite
                ? "fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                : "text-zinc-400 hover:text-red-400"
            }`}
          />
        </button>

        {/* Discount Badge on Image */}
        {product.oldPrice && (
          <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 text-[10px] sm:text-[11px] font-black text-black bg-[#FF8B2C] px-2 py-0.5 rounded-md shadow-md shadow-[#FF8B2C]/30">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Card Content Details */}
      <div className="pt-3 sm:pt-3.5 px-0.5 pb-0.5 flex-grow flex flex-col justify-between">
        <div>
          {/* Brand Name & Rating */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
            <span className="truncate max-w-[65%]">{product.brand}</span>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[11px] sm:text-xs text-zinc-300">
              <Star className="w-3.5 h-3.5 fill-[#FF8B2C] text-[#FF8B2C]" />
              <span className="font-bold text-white">{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm sm:text-base md:text-lg font-black text-white group-hover:text-[#FF8B2C] transition-colors line-clamp-1 mb-1 hover:underline">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          {product.description && (
            <p className="text-xs sm:text-[13px] text-zinc-400 line-clamp-2 leading-relaxed mb-2 font-medium">
              {product.description}
            </p>
          )}
        </div>

        {/* Bottom Price & Dual Action Buttons */}
        <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
          {/* Price Row */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-[#FF8B2C] font-black text-base sm:text-lg md:text-xl tracking-tight drop-shadow-[0_0_12px_rgba(255,139,44,0.3)]">
                {product.price}
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-400 font-semibold">ج.م</span>
              {product.oldPrice && (
                <span className="text-[10px] sm:text-xs text-zinc-500 line-through mr-1 font-normal hidden xs:inline">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ScaleButton
              href={`/products/${product.id}`}
              variant="neon"
              size="sm"
              fullWidth
              className="flex-grow font-black text-[11px] sm:text-xs py-1.5 sm:py-2 text-center"
            >
              شراء
            </ScaleButton>
            
            <button
              type="button"
              onClick={() => addToCart(product)}
              aria-label="إضافة إلى السلة"
              className="w-8 h-8 sm:w-9 sm:h-[38px] bg-white/5 hover:bg-[#FF8B2C] hover:text-black text-white rounded-[8px] flex items-center justify-center transition-all border border-white/10 hover:border-[#FF8B2C] active:scale-95 shrink-0 cursor-pointer touch-manipulation"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

