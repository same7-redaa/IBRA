"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ScaleButton from "@/components/ui/ScaleButton";
import { Star, Heart, Ruler, ShoppingBag, Truck, RefreshCw, ShieldCheck } from "lucide-react";

export default function ProductOrderBox({ product }: { product: ProductItem }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : undefined;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col gap-5 text-[#1e293b] bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
      
      {/* Product Name & Brand */}
      <div>
        <span className="text-xs font-black tracking-widest text-[#d97706] uppercase block mb-1">
          {product.brand}
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] leading-tight tracking-tight mb-2">
          {product.name}
        </h1>

        {/* Rating Stars & Reviews Count */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1 text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
          <span>({product.reviewsCount} تقييم حقيقي)</span>
        </div>
      </div>

      {/* Price & Discount Line (Matches Reference Image) */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl sm:text-4xl font-black text-[#d97706] tracking-tight">
          {product.price} <span className="text-lg font-bold text-slate-600">ج.م</span>
        </span>
        
        {product.oldPrice && (
          <span className="text-lg text-slate-400 line-through font-normal">
            {product.oldPrice} ج.م
          </span>
        )}

        {discountPercentage && (
          <span className="text-xs font-black text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full">
            خصم {discountPercentage}%
          </span>
        )}
      </div>

      {/* Product Short Bio Paragraph */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
        {product.description}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100" />

      {/* Color / Variety Selector (Matches Reference Image) */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-slate-500">نوع / درجة العسل:</span>
            <span className="font-bold text-slate-900">{product.colors[selectedColor].name}</span>
          </div>

          <div className="flex items-center gap-3">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(idx)}
                style={{ backgroundColor: color.hex }}
                className={`relative w-8 h-8 rounded-full transition-all cursor-pointer border ${
                  selectedColor === idx
                    ? "ring-2 ring-offset-2 ring-[#f59e0b] ring-offset-white scale-110 border-transparent shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                    : "border-slate-300 hover:scale-105"
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Weight / Jar Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-500">حجم العبوة:</span>
              <span className="font-bold text-[#d97706] uppercase">{selectedSize}</span>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
              <span>زجاج طبي معقم</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[70px] h-11 px-4 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                  selectedSize === size
                    ? "bg-[#f59e0b] text-white border-[#f59e0b] shadow-md scale-105"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-300 hover:text-amber-800"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Action Buttons Row (Buy Now + Add to Cart Icon + Wishlist Icon) */}
      <div className="flex items-center gap-3 pt-2">
        
        {/* Instant Buy Now Button */}
        <ScaleButton
          onClick={handleAddToCart}
          variant="neon"
          size="md"
          fullWidth
          className="flex-grow font-extrabold text-xs sm:text-sm md:text-base h-12"
        >
          شراء فوري والتوجه للدفع
        </ScaleButton>

        {/* Add to Cart (Icon Button) */}
        <button
          onClick={handleAddToCart}
          aria-label="إضافة إلى السلة"
          title="إضافة إلى السلة"
          className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 hover:border-[#f59e0b] hover:bg-[#f59e0b] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm group"
        >
          <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Favorite Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          title="إضافة للمفضلة"
          className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 hover:border-slate-300 flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-slate-400 hover:text-red-500"
            }`}
          />
        </button>

      </div>

      {/* Micro Guarantees / Service Badges (Matches Reference Image) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
        
        <div className="flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-slate-800 block">شحن مجاني وسريع</span>
            <span className="text-slate-500 text-[10px]">لكافة المحافظات</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <RefreshCw className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-slate-800 block">استرجاع سهل</span>
            <span className="text-slate-500 text-[10px]">خلال 14 يوماً</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-slate-800 block">معاينة قبل الدفع</span>
            <span className="text-slate-500 text-[10px]">دفع آمن 100%</span>
          </div>
        </div>

      </div>

    </div>
  );
}

