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
    <div className="group relative w-full bg-white border border-slate-200/80 hover:border-amber-300 rounded-3xl p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] flex flex-col justify-between">
      
      {/* Top Image Container with Smooth Curves */}
      <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Favorite Floating Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          className="absolute top-3 left-3.5 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center transition-transform active:scale-125 hover:scale-110 border border-slate-200 shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-slate-400 hover:text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Card Content Details */}
      <div className="pt-4 px-1 pb-1 flex-grow flex flex-col justify-between">
        <div>
          {/* Brand Name & Rating */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            <span>{product.brand}</span>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[11px] text-slate-700">
              <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#d97706] transition-colors line-clamp-1 mb-2 hover:underline">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Bottom Price & Dual Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
          {/* Price Row */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[#d97706] font-black text-xl tracking-tight">
                {product.price}
              </span>
              <span className="text-xs text-slate-500 font-semibold">ج.م</span>
              {product.oldPrice && (
                <span className="text-xs text-slate-400 line-through mr-1 font-normal">
                  {product.oldPrice} ج.م
                </span>
              )}
            </div>

            {product.oldPrice && (
              <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200">
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
              className="w-9 h-[38px] bg-slate-100 hover:bg-[#f59e0b] hover:text-white text-slate-700 rounded-full flex items-center justify-center transition-all border border-slate-200 active:scale-95 shrink-0 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

