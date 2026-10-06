"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  MessageCircle,
} from "lucide-react";
import FloatingInput from "@/components/ui/FloatingInput";
import ScaleButton from "@/components/ui/ScaleButton";
import { STORE_WHATSAPP_DISPLAY, STORE_WHATSAPP_NUMBER } from "@/config/store";
import { buildOrderWhatsappUrl, OrderDetails } from "@/utils/whatsappOrder";

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderWhatsappUrl, setOrderWhatsappUrl] = useState("");

  const shippingFee = 0; // Free shipping
  const finalTotal = totalAmount + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) return;

    const orderData: OrderDetails = {
      fullName,
      phone,
      city,
      address,
      notes: notes || undefined,
      paymentMethod,
      items: cartItems.map((item) => ({
        name: item.name,
        size: item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined,
        quantity: item.quantity,
        price: item.price,
      })),
      total: finalTotal,
    };

    const waUrl = buildOrderWhatsappUrl(orderData);
    setOrderWhatsappUrl(waUrl);
    setIsOrdered(true);
    clearCart();

    // Open WhatsApp in new window/tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

  if (isOrdered) {
    return (
      <main className="min-h-screen text-white pt-32 sm:pt-36 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-10 text-center shadow-2xl animate-scale-up">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF8B2C]/15 border-2 border-[#FF8B2C] flex items-center justify-center text-[#FF8B2C] mx-auto mb-5 shadow-[0_0_20px_rgba(255,139,44,0.35)]">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
            تم تسجيل طلبك بنجاح!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-medium">
            شكراً لثقتك في <span className="font-bold text-[#FF8B2C]">مناحل عسل زوين</span>. تم تجهيز تفاصيل طلبك وإرسالها إلى واتساب خدمة العملاء مباشرة.
          </p>

          <div className="p-4 rounded-2xl glass-card text-xs text-zinc-300 mb-6 space-y-2 text-right">
            <div className="flex justify-between font-bold">
              <span className="text-zinc-400">اسم العميل:</span>
              <span className="text-white">{fullName}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-zinc-400">رقم الهاتف:</span>
              <span className="text-white">{phone}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span className="text-zinc-400">العنوان:</span>
              <span className="text-white">{city} - {address}</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-[#FF8B2C] pt-2 border-t border-white/10">
              <span>المبلغ الإجمالي عند الاستلام:</span>
              <span>{finalTotal} ج.م</span>
            </div>
          </div>

          {/* Primary Action: Direct WhatsApp Forward Button */}
          {orderWhatsappUrl && (
            <a
              href={orderWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-12 sm:h-13 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm transition-colors shadow-lg shadow-[#25d366]/25 mb-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>إرسال تفاصيل الطلب عبر واتساب ({STORE_WHATSAPP_DISPLAY})</span>
            </a>
          )}

          <Link
            href="/"
            className="inline-flex items-center justify-center w-full h-11 sm:h-12 rounded-xl bg-[#FF8B2C] hover:bg-[#FFA857] text-black font-black text-xs sm:text-sm transition-colors shadow-lg shadow-[#FF8B2C]/20"
          >
            العودة للرئيسية
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white pt-28 sm:pt-36 pb-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#FF8B2C] font-bold mb-3 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>متابعة التسوق</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            إتمام <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">الطلب والدفع</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Left/Right Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Customer Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
              <h2 className="text-lg font-black text-white border-b border-white/10 pb-3">
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

                <FloatingInput
                  label="ملاحظات إضافية للطلب أو التوصيل (اختياري)"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-black text-white border-b border-white/10 pb-3">
                2. طريقة الدفع
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* COD */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "cod"
                      ? "border-[#FF8B2C] bg-[#FF8B2C]/15 shadow-md shadow-[#FF8B2C]/20"
                      : "border-white/10 bg-white/5 hover:border-[#FF8B2C]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Banknote className="w-5 h-5 text-[#FF8B2C]" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#FF8B2C] flex items-center justify-center">
                      {paymentMethod === "cod" && <span className="w-2 h-2 rounded-full bg-[#FF8B2C]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-white block">الدفع عند الاستلام</span>
                  <span className="text-[10px] text-zinc-400">معاينة وتذوق مجاناً</span>
                </button>

                {/* InstaPay */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("instapay")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "instapay"
                      ? "border-[#FF8B2C] bg-[#FF8B2C]/15 shadow-md shadow-[#FF8B2C]/20"
                      : "border-white/10 bg-white/5 hover:border-[#FF8B2C]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-5 h-5 text-[#FF8B2C]" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#FF8B2C] flex items-center justify-center">
                      {paymentMethod === "instapay" && <span className="w-2 h-2 rounded-full bg-[#FF8B2C]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-white block">InstaPay</span>
                  <span className="text-[10px] text-zinc-400">تحويل بنكي فوري</span>
                </button>

                {/* Vodafone Cash */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("vodafone")}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                    paymentMethod === "vodafone"
                      ? "border-[#FF8B2C] bg-[#FF8B2C]/15 shadow-md shadow-[#FF8B2C]/20"
                      : "border-white/10 bg-white/5 hover:border-[#FF8B2C]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-5 h-5 text-amber-400" />
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-[#FF8B2C] flex items-center justify-center">
                      {paymentMethod === "vodafone" && <span className="w-2 h-2 rounded-full bg-[#FF8B2C]" />}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-white block">فودافون كاش</span>
                  <span className="text-[10px] text-zinc-400">محفظة إلكترونية</span>
                </button>

              </div>
            </div>

          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 space-y-5 lg:sticky lg:top-28">
            <h2 className="text-lg font-black text-white border-b border-white/10 pb-3 flex items-center justify-between">
              <span>ملخص الطلب</span>
              <span className="text-xs text-[#FF8B2C] font-bold">{cartItems.length} منتجات</span>
            </h2>

            {/* Items List */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <p className="text-xs text-zinc-500 text-center py-4">لم تقم بإضافة أي منتجات بعد</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 relative rounded-lg bg-black/40 border border-white/10 flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="truncate">
                        <span className="font-bold text-white block truncate">{item.name}</span>
                        <span className="text-zinc-400 text-[11px]">الكمية: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-black text-[#FF8B2C] shrink-0">{item.price * item.quantity} ج.م</span>
                  </div>
                ))
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
              <div className="flex justify-between text-zinc-300 font-semibold">
                <span>المجموع الفرعي:</span>
                <span>{totalAmount} ج.م</span>
              </div>
              <div className="flex justify-between text-zinc-300 font-semibold">
                <span>مصاريف الشحن:</span>
                <span className="text-[#25d366] font-bold">مجاني 100%</span>
              </div>
              <div className="flex justify-between text-base font-black text-white border-t border-white/10 pt-3">
                <span>المجموع الإجمالي:</span>
                <span className="text-[#FF8B2C] text-xl drop-shadow-[0_0_12px_rgba(255,139,44,0.4)]">{finalTotal} ج.م</span>
              </div>
            </div>

            {/* Submit Button */}
            <ScaleButton
              type="submit"
              variant="neon"
              size="lg"
              fullWidth
              disabled={cartItems.length === 0}
              className="font-black text-sm sm:text-base h-13 shadow-lg shadow-[#FF8B2C]/25"
            >
              تأكيد الطلب الآن
            </ScaleButton>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-zinc-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#FF8B2C]" />
              <span>ضمان استرجاع ذهبي 100%</span>
            </div>

          </div>

        </form>

      </div>
    </main>
  );
}
