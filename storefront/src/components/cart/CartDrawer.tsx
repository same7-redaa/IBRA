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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative z-10 w-full max-w-md bg-[#fbf7ee] text-[#221c15] h-full shadow-2xl flex flex-col justify-between border-r border-[#ebdcc9] animate-slide-in-right">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#ebdcc9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center text-[#d97706]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#221c15]">سلة المشتريات</h2>
              <p className="text-xs text-[#5c4f42] font-semibold">{cartCount} منتجات في السلة</p>
            </div>
          </div>

          <button
            onClick={closeCart}
            aria-label="إغلاق السلة"
            className="w-8 h-8 rounded-full bg-[#fbf7ee] border border-[#ebdcc9] text-[#5c4f42] hover:text-[#221c15] hover:bg-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Items Body */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white border border-[#ebdcc9] flex items-center justify-center text-[#8a7a6b] mb-4 shadow-sm">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#221c15] mb-1">السلة فارغة حالياً</h3>
              <p className="text-xs text-[#5c4f42] max-w-xs mb-6">
                تصفح أجود قطفات عسل زوين وأضف ما يناسبك إلى سلتك
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 rounded-xl bg-[#221c15] text-white text-xs font-bold hover:bg-[#d97706] transition-colors"
              >
                تصفح المنتجات الآن
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-[#ebdcc9] flex items-center gap-3.5 shadow-sm"
              >
                {/* Product Thumbnail */}
                <div className="w-16 h-16 relative rounded-xl bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center shrink-0 p-1 overflow-hidden">
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
                  <h4 className="text-xs font-bold text-[#221c15] truncate mb-1">
                    {item.name}
                  </h4>
                  <div className="text-xs font-black text-[#d97706] mb-2">
                    {item.price} ج.م
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-[#ebdcc9] rounded-lg bg-[#fbf7ee]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-[#5c4f42] hover:text-[#221c15]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#221c15]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#5c4f42] hover:text-[#221c15]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 mr-auto transition-colors"
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
          <div className="p-5 border-t border-[#ebdcc9] bg-white space-y-4">
            
            {/* Guarantee Pill */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#5c4f42] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d97706]" />
              <span>ضمان ذهبي مع إمكانية المعاينة قبل الدفع</span>
            </div>

            {/* Total Price Row */}
            <div className="flex items-center justify-between border-t border-[#ebdcc9] pt-3">
              <span className="text-sm font-bold text-[#5c4f42]">الإجمالي النهائي:</span>
              <span className="text-xl font-black text-[#d97706]">
                {totalAmount} <span className="text-xs font-bold text-[#5c4f42]">ج.م</span>
              </span>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#221c15] hover:bg-[#d97706] text-white font-black text-sm transition-all shadow-md active:scale-95"
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
