"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
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
    <div className="flex flex-col gap-5 text-white">
      
      {/* Product Name & Brand */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-2">
          {product.name}
        </h1>

        {/* Rating Stars & Reviews Count */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="flex items-center gap-1 text-[#ffd426]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white text-sm">{product.rating}</span>
          <span>({product.reviewsCount} تقييم حقيقي)</span>
        </div>
      </div>

      {/* Price & Discount Line (Matches Reference Image) */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {product.price} <span className="text-lg font-bold text-gray-400">ج.م</span>
        </span>
        
        {product.oldPrice && (
          <span className="text-lg text-gray-500 line-through font-normal">
            {product.oldPrice} ج.م
          </span>
        )}

        {discountPercentage && (
          <span className="text-xs font-black text-[#b0fb30] bg-[#b0fb30]/10 border border-[#b0fb30]/30 px-2.5 py-1 rounded-md">
            خصم {discountPercentage}%
          </span>
        )}
      </div>

      {/* Product Short Bio Paragraph */}
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
        {product.description}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-800/80" />

      {/* Color Selector (Matches Reference Image) */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-gray-400">اللون:</span>
            <span className="font-bold text-white">{product.colors[selectedColor].name}</span>
          </div>

          <div className="flex items-center gap-3">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(idx)}
                style={{ backgroundColor: color.hex }}
                className={`relative w-8 h-8 rounded-full transition-all cursor-pointer border ${
                  selectedColor === idx
                    ? "ring-2 ring-offset-2 ring-[#b0fb30] ring-offset-deep-black scale-110 border-transparent shadow-[0_0_12px_rgba(176,251,48,0.4)]"
                    : "border-gray-600 hover:scale-105"
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selector (Matches Reference Image) */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-400">المقاس:</span>
              <span className="font-bold text-white uppercase">{selectedSize}</span>
            </div>

            <button className="text-xs text-gray-400 hover:text-[#b0fb30] flex items-center gap-1.5 transition-colors cursor-pointer font-bold">
              <Ruler className="w-3.5 h-3.5" />
              <span>دليل المقاسات</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[50px] h-11 px-4 rounded-lg text-xs font-black transition-all cursor-pointer border ${
                  selectedSize === size
                    ? "bg-white text-deep-black border-white shadow-lg scale-105"
                    : "bg-[#14161f] text-gray-300 border-gray-800 hover:border-gray-600 hover:text-white"
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
        
        {/* Instant Buy Now Button (Compact Primary CTA) */}
        <button
          onClick={handleAddToCart}
          className="flex-grow h-12 rounded-xl bg-white hover:bg-gray-100 text-deep-black font-black text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl active:scale-98 cursor-pointer group"
        >
          <span>شراء فوري والتوجه للدفع</span>
        </button>

        {/* Add to Cart (Icon Button) */}
        <button
          onClick={handleAddToCart}
          aria-label="إضافة إلى السلة"
          title="إضافة إلى السلة"
          className="w-12 h-12 rounded-xl bg-[#14161f] border border-gray-700 hover:border-[#b0fb30] hover:bg-[#b0fb30] text-gray-300 hover:text-deep-black flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-md group"
        >
          <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Favorite Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          title="إضافة للمفضلة"
          className="w-12 h-12 rounded-xl bg-[#14161f] border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-white"
            }`}
          />
        </button>

      </div>

      {/* Micro Guarantees / Service Badges (Matches Reference Image) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-800/80">
        
        <div className="flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-[#b0fb30] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">شحن مجاني وسريع</span>
            <span className="text-gray-500 text-[10px]">لكافة المحافظات</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <RefreshCw className="w-4 h-4 text-[#b0fb30] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">استرجاع سهل</span>
            <span className="text-gray-500 text-[10px]">خلال 14 يوماً</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#b0fb30] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">معاينة قبل الدفع</span>
            <span className="text-gray-500 text-[10px]">دفع آمن 100%</span>
          </div>
        </div>

      </div>

    </div>
  );
}
