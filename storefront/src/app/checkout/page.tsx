"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  CreditCard,
  Banknote,
  Sparkles,
} from "lucide-react";
import FloatingInput from "@/components/ui/FloatingInput";
import ScaleButton from "@/components/ui/ScaleButton";

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isOrdered, setIsOrdered] = useState(false);

  const shippingFee = 0; // Free shipping
  const finalTotal = totalAmount + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) return;
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <main className="min-h-screen bg-[#fbf7ee] text-[#221c15] pt-36 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white border border-[#ebdcc9] rounded-3xl p-8 sm:p-10 text-center shadow-lg animate-scale-up">
          <div className="w-20 h-20 rounded-full bg-[#fbf7ee] border-2 border-[#d97706] flex items-center justify-center text-[#d97706] mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#221c15] mb-3">
            تم تأكيد طلبك بنجاح!
          </h1>
          <p className="text-sm text-[#5c4f42] leading-relaxed mb-6 font-medium">
            شكراً لثقتك في <span className="font-bold text-[#221c15]">مناحل عسل زوين</span>. سيقوم فريق خدمة العملاء بالتواصل معك هاتفياً خلال دقائق لتأكيد موعد التسليم.
          </p>

          <div className="p-4 rounded-2xl bg-[#fbf7ee] border border-[#ebdcc9] text-xs text-[#5c4f42] mb-8 space-y-2">
            <div className="flex justify-between font-bold">
              <span>الاسم:</span>
              <span className="text-[#221c15]">{fullName}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>رقم الهاتف:</span>
              <span className="text-[#221c15]">{phone}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>العنوان:</span>
              <span className="text-[#221c15]">{city} - {address}</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-[#d97706] pt-2 border-t border-[#ebdcc9]">
              <span>المبلغ المطلوب عند الاستلام:</span>
              <span>{finalTotal} ج.م</span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-[#221c15] hover:bg-[#d97706] text-white font-black text-sm transition-colors shadow-md"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbf7ee] text-[#221c15] pt-28 sm:pt-36 pb-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs text-[#5c4f42] hover:text-[#d97706] font-bold mb-3 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>متابعة التسوق</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#221c15] tracking-tight">
            إتمام <span className="text-[#d97706]">الطلب والدفع</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Left/Right Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Customer Details Card */}
            <div className="bg-white border border-[#ebdcc9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-lg font-black text-[#221c15] border-b border-[#ebdcc9] pb-3">
                1. بيانات المستلم وعنوان التوصيل
              </h2>

              <div className="space-y-4">
                <FloatingInput
                  label="الاسم بالكامل *"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <FloatingInput
                  label="رقم الهاتف (للتأكيد والشحن) *"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    label="المحافظة / المدينة *"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <FloatingInput
                    label="العنوان التفصيلي (الشارع / رقم العقار) *"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white border border-[#ebdcc9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-lg font-black text-[#221c15] border-b border-[#ebdcc9] pb-3">
                2. طريقة الدفع
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* COD */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "cod"
                      ? "border-[#d97706] bg-[#fbf7ee] shadow-sm"
                      : "border-[#ebdcc9] bg-white hover:border-[#d97706]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Banknote className="w-5 h-5 text-[#d97706]" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#d97706] flex items-center justify-center">
                      {paymentMethod === "cod" && <span className="w-2 h-2 rounded-full bg-[#d97706]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-[#221c15] block">الدفع عند الاستلام</span>
                  <span className="text-[10px] text-[#5c4f42]">معاينة وتذوق مجاناً</span>
                </button>

                {/* InstaPay */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("instapay")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "instapay"
                      ? "border-[#d97706] bg-[#fbf7ee] shadow-sm"
                      : "border-[#ebdcc9] bg-white hover:border-[#d97706]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-5 h-5 text-[#d97706]" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#d97706] flex items-center justify-center">
                      {paymentMethod === "instapay" && <span className="w-2 h-2 rounded-full bg-[#d97706]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-[#221c15] block">InstaPay</span>
                  <span className="text-[10px] text-[#5c4f42]">تحويل بنكي فوري</span>
                </button>

                {/* Vodafone Cash */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("vodafone")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "vodafone"
                      ? "border-[#d97706] bg-[#fbf7ee] shadow-sm"
                      : "border-[#ebdcc9] bg-white hover:border-[#d97706]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-5 h-5 text-amber-500" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#d97706] flex items-center justify-center">
                      {paymentMethod === "vodafone" && <span className="w-2 h-2 rounded-full bg-[#d97706]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-[#221c15] block">فودافون كاش</span>
                  <span className="text-[10px] text-[#5c4f42]">محفظة إلكترونية</span>
                </button>

              </div>
            </div>

          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-5 bg-white border border-[#ebdcc9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 lg:sticky lg:top-28">
            <h2 className="text-lg font-black text-[#221c15] border-b border-[#ebdcc9] pb-3 flex items-center justify-between">
              <span>ملخص الطلب</span>
              <span className="text-xs text-[#d97706] font-bold">{cartItems.length} منتجات</span>
            </h2>

            {/* Items List */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <p className="text-xs text-[#8a7a6b] text-center py-4">لم تقم بإضافة أي منتجات بعد</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#fbf7ee] border border-[#ebdcc9] flex items-center justify-center p-0.5 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="truncate">
                        <span className="font-bold text-[#221c15] block truncate">{item.name}</span>
                        <span className="text-[#8a7a6b] text-[11px]">الكمية: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-black text-[#d97706] shrink-0">{item.price * item.quantity} ج.م</span>
                  </div>
                ))
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 border-t border-[#ebdcc9] pt-4 text-xs">
              <div className="flex justify-between text-[#5c4f42] font-semibold">
                <span>المجموع الفرعي:</span>
                <span>{totalAmount} ج.م</span>
              </div>
              <div className="flex justify-between text-[#5c4f42] font-semibold">
                <span>مصاريف الشحن:</span>
                <span className="text-green-600 font-bold">مجاني 100%</span>
              </div>
              <div className="flex justify-between text-base font-black text-[#221c15] border-t border-[#ebdcc9] pt-3">
                <span>المجموع الإجمالي:</span>
                <span className="text-[#d97706] text-xl">{finalTotal} ج.م</span>
              </div>
            </div>

            {/* Submit Button */}
            <ScaleButton
              type="submit"
              variant="neon"
              size="lg"
              fullWidth
              disabled={cartItems.length === 0}
              className="font-black text-sm sm:text-base h-13"
            >
              تأكيد الطلب الآن
            </ScaleButton>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#5c4f42] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#d97706]" />
              <span>ضمان استرجاع ذهبي 100%</span>
            </div>

          </div>

        </form>

      </div>
    </main>
  );
}
