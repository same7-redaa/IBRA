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
    <div className="flex flex-col gap-5 text-[#221c15]">
      
      {/* Product Name & Brand */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#221c15] leading-tight tracking-tight mb-2">
          {product.name}
        </h1>

        {/* Rating Stars & Reviews Count */}
        <div className="flex items-center gap-2 text-xs text-[#5c4f42]">
          <div className="flex items-center gap-1 text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-[#221c15] text-sm">{product.rating}</span>
          <span>({product.reviewsCount} تقييم موثق)</span>
        </div>
      </div>

      {/* Price & Discount Line */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl sm:text-4xl font-black text-[#d97706] tracking-tight">
          {product.price} <span className="text-lg font-bold text-[#5c4f42]">ج.م</span>
        </span>
        
        {product.oldPrice && (
          <span className="text-lg text-[#8a7a6b] line-through font-normal">
            {product.oldPrice} ج.م
          </span>
        )}

        {discountPercentage && (
          <span className="text-xs font-black text-[#d97706] bg-[#d97706]/10 border border-[#d97706]/20 px-2.5 py-1 rounded-full">
            وفر {discountPercentage}%
          </span>
        )}
      </div>

      {/* Product Short Bio Paragraph */}
      <p className="text-xs sm:text-sm text-[#5c4f42] leading-relaxed max-w-xl font-medium">
        {product.description}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-[#ebdcc9]" />

      {/* Weight / Jar Size Selector (اختيارات الحجم) */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#5c4f42]">حجم العبوة:</span>
              <span className="font-bold text-[#d97706]">{selectedSize}</span>
            </div>

            <div className="text-xs text-[#5c4f42] flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
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
                    ? "bg-[#221c15] text-white border-[#221c15] shadow-md scale-105"
                    : "bg-white text-[#221c15] border-[#ebdcc9] hover:border-[#d97706] hover:bg-[#fbf7ee]"
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
          className="flex-grow font-extrabold text-xs sm:text-sm md:text-base h-12"
        >
          شراء فوري والتوجه للدفع
        </ScaleButton>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          aria-label="إضافة إلى السلة"
          title="إضافة إلى السلة"
          className="w-12 h-12 rounded-xl bg-white border border-[#ebdcc9] hover:border-[#d97706] hover:bg-[#d97706] text-[#221c15] hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm group"
        >
          <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Favorite Wishlist Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="إضافة للمفضلة"
          title="إضافة للمفضلة"
          className="w-12 h-12 rounded-xl bg-white border border-[#ebdcc9] hover:border-[#d97706] flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-sm"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-[#8a7a6b] hover:text-red-500"
            }`}
          />
        </button>

      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#ebdcc9]">
        
        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#ebdcc9]">
          <Truck className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-[#221c15] block">شحن سريع</span>
            <span className="text-[#8a7a6b] text-[10px]">لباب المنزل</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#ebdcc9]">
          <RefreshCw className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-[#221c15] block">استرجاع مجاني</span>
            <span className="text-[#8a7a6b] text-[10px]">ضمان ذهبي</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#ebdcc9]">
          <ShieldCheck className="w-4 h-4 text-[#d97706] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-bold text-[#221c15] block">فحص وتذوق</span>
            <span className="text-[#8a7a6b] text-[10px]">قبل الاستلام</span>
          </div>
        </div>

      </div>

    </div>
  );
}
