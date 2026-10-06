"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ScaleButton from "@/components/ui/ScaleButton";
import { Star, Heart, ShoppingBag, Truck, RefreshCw, ShieldCheck, Check } from "lucide-react";

export default function ProductOrderBox({ product }: { product: ProductItem }) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "500 جرام");
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : undefined;

  const handleAddToCart = () => {
    addToCart({ ...product, sizes: [selectedSize] });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, sizes: [selectedSize] });
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col gap-5 text-white">
      
      {/* Product Name & Brand */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-2">
          {product.name}
        </h1>

        {/* Rating Stars & Reviews Count */}
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <div className="flex items-center gap-1 text-[#FF8B2C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white text-sm">{product.rating}</span>
          <span>({product.reviewsCount} تقييم موثق)</span>
        </div>
      </div>

      {/* Price & Discount Line */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl sm:text-4xl font-black text-[#FF8B2C] tracking-tight drop-shadow-[0_0_15px_rgba(255,139,44,0.35)]">
          {product.price} <span className="text-lg font-bold text-zinc-400">ج.م</span>
        </span>
        
        {product.oldPrice && (
          <span className="text-lg text-zinc-500 line-through font-normal">
            {product.oldPrice} ج.م
          </span>
        )}

        {discountPercentage && (
          <span className="text-xs font-black text-black bg-[#FF8B2C] px-2.5 py-1 rounded-full shadow-md shadow-[#FF8B2C]/30">
            وفر {discountPercentage}%
          </span>
        )}
      </div>

      {/* Product Short Bio Paragraph */}
      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl font-medium">
        {product.description}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10" />

      {/* Weight / Jar Size Selector (اختيارات الحجم) */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-400">حجم العبوة:</span>
              <span className="font-bold text-[#FF8B2C]">{selectedSize}</span>
            </div>

            <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF8B2C]" />
              <span>عبوة زجاجية معقمة</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[80px] h-11 px-4 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                  selectedSize === size
                    ? "bg-[#FF8B2C] text-black border-[#FF8B2C] shadow-lg shadow-[#FF8B2C]/30 scale-105"
                    : "bg-white/5 text-zinc-200 border-white/10 hover:border-[#FF8B2C] hover:text-[#FF8B2C]"
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
          onClick={handleBuyNow}
          variant="neon"
          size="md"
          fullWidth
          className="flex-grow font-black text-xs sm:text-sm md:text-base h-12 shadow-lg shadow-[#FF8B2C]/25"
        >
          شراء فوري والتوجه للدفع
        </ScaleButton>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          aria-label="إضافة إلى السلة"
          title="إضافة إلى السلة"
          className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF8B2C] hover:bg-[#FF8B2C] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm group"
        >
          <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Favorite Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          title="إضافة للمفضلة"
          className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF8B2C] flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-zinc-400 hover:text-red-500"
            }`}
          />
        </button>

      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
        
        <div className="flex items-center gap-2.5 p-2 rounded-xl glass-card">
          <Truck className="w-4 h-4 text-[#FF8B2C] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">شحن سريع</span>
            <span className="text-zinc-400 text-[10px]">لباب المنزل</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl glass-card">
          <RefreshCw className="w-4 h-4 text-[#FF8B2C] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">استرجاع مجاني</span>
            <span className="text-zinc-400 text-[10px]">ضمان ذهبي</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl glass-card">
          <ShieldCheck className="w-4 h-4 text-[#FF8B2C] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-white block">فحص وتذوق</span>
            <span className="text-zinc-400 text-[10px]">قبل الاستلام</span>
          </div>
        </div>

      </div>

    </div>
  );
}
