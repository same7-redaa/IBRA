"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import FancyCornerButton from "@/components/ui/FancyCornerButton";
import { Star, ShieldCheck, Truck, RefreshCw, ShoppingBag, Check, Heart, HelpCircle } from "lucide-react";

export default function ProductOrderBox({ product }: { product: ProductItem }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : undefined;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Header Info: Brand & Rating */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#b0fb30] bg-[#b0fb30]/10 px-2.5 py-1 rounded-[5px] border border-[#b0fb30]/20">
            {product.brand}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-300">
            <Star className="w-4 h-4 fill-[#ffd426] text-[#ffd426]" />
            <span className="font-bold text-white text-sm">{product.rating}</span>
            <span className="text-gray-500">({product.reviewsCount} تقييم حقيقي)</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
          {product.name}
        </h1>

        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price Box */}
      <div className="p-4 rounded-[5px] bg-[#14161f] border border-gray-800/80 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-[#b0fb30] tracking-tight">
            {product.price * quantity}
          </span>
          <span className="text-sm text-gray-400 font-bold">جنيه مصري</span>
          
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through mr-2 font-normal">
              {product.oldPrice * quantity} ج.م
            </span>
          )}
        </div>

        {discountPercentage && (
          <span className="text-xs font-black text-deep-black bg-[#b0fb30] px-2.5 py-1 rounded-[5px] shadow-[0_0_10px_rgba(176,251,48,0.3)]">
            وفر {discountPercentage}%
          </span>
        )}
      </div>

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-gray-300">
              اللون: <span className="text-[#b0fb30]">{product.colors[selectedColor].name}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(idx)}
                style={{ backgroundColor: color.hex }}
                className={`relative w-8 h-8 rounded-[5px] transition-all flex items-center justify-center border ${
                  selectedColor === idx
                    ? "ring-2 ring-[#b0fb30] ring-offset-2 ring-offset-[#0c0c0c] scale-110 border-transparent"
                    : "border-gray-700 hover:scale-105"
                }`}
                title={color.name}
              >
                {selectedColor === idx && (
                  <Check className={`w-4 h-4 ${color.hex === "#ffffff" ? "text-black" : "text-white"}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-gray-300">المقاس:</span>
            <button className="text-gray-400 hover:text-[#b0fb30] transition-colors flex items-center gap-1 font-medium">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>دليل المقاسات</span>
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[48px] h-10 px-3.5 rounded-[5px] text-xs font-black transition-all border ${
                  selectedSize === size
                    ? "bg-[#b0fb30] text-deep-black border-[#b0fb30] shadow-[0_0_12px_rgba(176,251,48,0.35)]"
                    : "bg-[#14161f] text-gray-300 border-gray-800 hover:border-gray-600 hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity & CTA Buttons Row */}
      <div className="flex flex-col gap-3 pt-2">
        
        <div className="flex items-center gap-3">
          {/* Quantity Counter */}
          <div className="flex items-center justify-between h-12 w-32 rounded-[5px] bg-[#14161f] border border-gray-800 px-3">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="text-gray-400 hover:text-white font-bold text-lg px-1 transition-colors"
            >
              -
            </button>
            <span className="font-black text-sm text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-gray-400 hover:text-white font-bold text-lg px-1 transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <FancyCornerButton
            onClick={handleAddToCart}
            variant="neon"
            size="md"
            fullWidth
            className="flex-grow"
          >
            إضـافـة إلـى الـسـلـة
          </FancyCornerButton>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="إضافة للمفضلة"
            className="w-12 h-12 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-colors shrink-0"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-white"
              }`}
            />
          </button>
        </div>

        {/* Instant Buy Now Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3.5 rounded-[5px] bg-transparent border-2 border-white/80 hover:border-[#b0fb30] text-white hover:text-[#b0fb30] font-black text-sm transition-all duration-300"
        >
          شراء فوري والتوجه للدفع
        </button>

      </div>

      {/* Trust & Guarantees Badges */}
      <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-gray-800/80 text-center">
        <div className="flex flex-col items-center gap-1.5 p-3 rounded-[5px] bg-[#111319] border border-gray-800/60">
          <Truck className="w-5 h-5 text-[#b0fb30]" />
          <span className="text-[11px] font-bold text-gray-300">شحن سريع</span>
          <span className="text-[9px] text-gray-500">خلال 24-48 ساعة</span>
        </div>

        <div className="flex flex-col items-center gap-1.5 p-3 rounded-[5px] bg-[#111319] border border-gray-800/60">
          <ShieldCheck className="w-5 h-5 text-[#b0fb30]" />
          <span className="text-[11px] font-bold text-gray-300">معاينة قبل الدفع</span>
          <span className="text-[9px] text-gray-500">حق الفحص متاح</span>
        </div>

        <div className="flex flex-col items-center gap-1.5 p-3 rounded-[5px] bg-[#111319] border border-gray-800/60">
          <RefreshCw className="w-5 h-5 text-[#b0fb30]" />
          <span className="text-[11px] font-bold text-gray-300">استرجاع مجاني</span>
          <span className="text-[9px] text-gray-500">خلال 14 يوماً</span>
        </div>
      </div>

    </div>
  );
}
