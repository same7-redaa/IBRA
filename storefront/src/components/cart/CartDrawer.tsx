"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft, ShieldCheck } from "lucide-react";
import ScaleButton from "@/components/ui/ScaleButton";

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    cartCount,
    totalAmount,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-fade-in"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-[#0b0b10]/95 backdrop-blur-2xl text-white h-full shadow-2xl flex flex-col justify-between border-r border-white/10 animate-slide-in-right">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FF8B2C]/15 border border-[#FF8B2C]/35 flex items-center justify-center text-[#FF8B2C] shadow-[0_0_12px_rgba(255,139,44,0.3)]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">سلة المشتريات</h2>
              <p className="text-xs text-zinc-400 font-semibold">{cartCount} منتجات في السلة</p>
            </div>
          </div>

          <button
            onClick={closeCart}
            aria-label="إغلاق السلة"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Items Body */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 mb-4 shadow-sm">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">السلة فارغة حالياً</h3>
              <p className="text-xs text-zinc-400 max-w-xs mb-6">
                تصفح أجود قطفات عسل زوين وأضف ما يناسبك إلى سلتك
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-xl bg-[#FF8B2C] text-black font-black text-xs hover:bg-[#FFA857] transition-colors shadow-lg shadow-[#FF8B2C]/25 cursor-pointer"
              >
                تصفح المنتجات الآن
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl glass-card flex items-center gap-3.5"
              >
                {/* Product Thumbnail */}
                <div className="w-16 h-16 relative rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 p-1 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-white truncate mb-1">
                    {item.name}
                  </h4>
                  <div className="text-xs font-black text-[#FF8B2C] mb-2">
                    {item.price} ج.م
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-white/10 rounded-lg bg-black/40">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 p-1 mr-auto transition-colors cursor-pointer"
                      title="حذف من السلة"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-white/5 space-y-4">
            
            {/* Guarantee Pill */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF8B2C]" />
              <span>ضمان ذهبي مع إمكانية المعاينة قبل الدفع</span>
            </div>

            {/* Total Price Row */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-sm font-bold text-zinc-400">الإجمالي النهائي:</span>
              <span className="text-xl font-black text-[#FF8B2C] drop-shadow-[0_0_12px_rgba(255,139,44,0.4)]">
                {totalAmount} <span className="text-xs font-bold text-zinc-400">ج.م</span>
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#FF8B2C] hover:bg-[#FFA857] text-black font-black text-sm transition-all shadow-lg shadow-[#FF8B2C]/30 active:scale-95"
            >
              <span>إتمام الطلب والدفع</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
