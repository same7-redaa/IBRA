"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import { useCart } from "@/context/CartContext";
import FancyCornerButton from "@/components/ui/FancyCornerButton";
import { Star, Check, Heart, HelpCircle } from "lucide-react";

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
    <div className="flex flex-col gap-4">
      
      {/* Header Info: Brand & Rating */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-1.5">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#b0fb30] bg-[#b0fb30]/10 px-2 py-0.5 rounded-[5px] border border-[#b0fb30]/20">
            {product.brand}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-300">
            <Star className="w-3.5 h-3.5 fill-[#ffd426] text-[#ffd426]" />
            <span className="font-bold text-white text-xs">{product.rating}</span>
            <span className="text-gray-500 text-[11px]">({product.reviewsCount} تقييم)</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1.5">
          {product.name}
        </h1>

        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Price Box */}
      <div className="py-2.5 px-3.5 rounded-[5px] bg-[#14161f] border border-gray-800/80 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-[#b0fb30] tracking-tight">
            {product.price * quantity}
          </span>
          <span className="text-xs text-gray-400 font-bold">جنيه مصري</span>
          
          {product.oldPrice && (
            <span className="text-xs text-gray-500 line-through mr-2 font-normal">
              {product.oldPrice * quantity} ج.م
            </span>
          )}
        </div>

        {discountPercentage && (
          <span className="text-[11px] font-black text-deep-black bg-[#b0fb30] px-2 py-0.5 rounded-[5px] shadow-[0_0_8px_rgba(176,251,48,0.3)]">
            وفر {discountPercentage}%
          </span>
        )}
      </div>

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-gray-300">
              اللون: <span className="text-[#b0fb30]">{product.colors[selectedColor].name}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedColor(idx)}
                style={{ backgroundColor: color.hex }}
                className={`relative w-7 h-7 rounded-[5px] transition-all flex items-center justify-center border ${
                  selectedColor === idx
                    ? "ring-2 ring-[#b0fb30] ring-offset-2 ring-offset-[#0c0c0c] scale-105 border-transparent"
                    : "border-gray-700 hover:scale-105"
                }`}
                title={color.name}
              >
                {selectedColor === idx && (
                  <Check className={`w-3.5 h-3.5 ${color.hex === "#ffffff" ? "text-black" : "text-white"}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-gray-300">المقاس:</span>
            <button className="text-gray-400 hover:text-[#b0fb30] transition-colors flex items-center gap-1 font-medium text-[11px]">
              <HelpCircle className="w-3 h-3" />
              <span>دليل المقاسات</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[42px] h-8 px-2.5 rounded-[5px] text-xs font-black transition-all border ${
                  selectedSize === size
                    ? "bg-[#b0fb30] text-deep-black border-[#b0fb30] shadow-[0_0_10px_rgba(176,251,48,0.35)]"
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
      <div className="flex flex-col gap-2.5 pt-1">
        
        <div className="flex items-center gap-2.5">
          {/* Quantity Counter */}
          <div className="flex items-center justify-between h-10 w-28 rounded-[5px] bg-[#14161f] border border-gray-800 px-2.5">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="text-gray-400 hover:text-white font-bold text-base px-1 transition-colors"
            >
              -
            </button>
            <span className="font-black text-xs text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-gray-400 hover:text-white font-bold text-base px-1 transition-colors"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <FancyCornerButton
            onClick={handleAddToCart}
            variant="neon"
            size="sm"
            fullWidth
            className="flex-grow py-2.5 text-xs font-black"
          >
            إضـافـة إلـى الـسـلـة
          </FancyCornerButton>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="إضافة للمفضلة"
            className="w-10 h-10 rounded-[5px] bg-[#14161f] border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-colors shrink-0"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-white"
              }`}
            />
          </button>
        </div>

        {/* Instant Buy Now Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 rounded-[5px] bg-transparent border-2 border-white/80 hover:border-[#b0fb30] text-white hover:text-[#b0fb30] font-black text-xs transition-all duration-300"
        >
          شراء فوري والتوجه للدفع
        </button>

      </div>

    </div>
  );
}
