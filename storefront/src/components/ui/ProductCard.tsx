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
    <div className="group relative w-full bg-[#13151b] border border-gray-800/80 hover:border-[#f59e0b]/40 rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_25px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(245,158,11,0.15)] flex flex-col justify-between">
      
      {/* Top Image Container with Unique Asymmetrical Curve */}
      <div className="relative w-full h-48 sm:h-56 rounded-xl rounded-tr-[3rem] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Favorite Floating Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          className="absolute top-3 left-3.5 z-10 w-8 h-8 rounded-full bg-black/65 backdrop-blur-md flex items-center justify-center transition-transform active:scale-125 hover:scale-110 border border-white/15 shadow-md"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                : "text-gray-300 hover:text-white"
            }`}
          />
        </button>
      </div>

      {/* Card Content Details */}
      <div className="pt-4 px-1 pb-1 flex-grow flex flex-col justify-between">
        <div>
          {/* Brand Name & Rating */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
            <span>{product.brand}</span>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[11px] text-gray-300">
              <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              <span className="font-bold text-white">{product.rating}</span>
              <span className="text-gray-500 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors line-clamp-1 mb-2 hover:underline">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Bottom Price & Dual Action Buttons */}
        <div className="pt-2.5 border-t border-gray-800/80 flex flex-col gap-2.5">
          {/* Price Row */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[#f59e0b] font-black text-xl tracking-tight">
                {product.price}
              </span>
              <span className="text-xs text-gray-400 font-normal">ج.م</span>
              {product.oldPrice && (
                <span className="text-xs text-gray-500 line-through mr-1 font-normal">
                  {product.oldPrice} ج.م
                </span>
              )}
            </div>

            {product.oldPrice && (
              <span className="text-[10px] font-bold text-deep-black bg-[#f59e0b] px-2 py-0.5 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <ScaleButton
              onClick={() => addToCart(product)}
              variant="neon"
              size="sm"
              fullWidth
              className="flex-grow font-extrabold text-xs"
            >
              شراء الآن
            </ScaleButton>
            
            <button
              onClick={() => addToCart(product)}
              aria-label="إضافة إلى السلة"
              className="w-9 h-[38px] bg-gray-800/90 hover:bg-[#f59e0b] hover:text-deep-black text-white rounded-[5px] flex items-center justify-center transition-all border border-gray-700/60 active:scale-95 shrink-0"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
