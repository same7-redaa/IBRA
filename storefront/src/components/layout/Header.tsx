"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      <header className="w-[96%] max-w-[1920px] rounded-[2rem] border border-[#3d3226] bg-[#1c1813] shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all">
        <div className="px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between relative">
          
          {/* Logo (Right Side in RTL) */}
          <div className="flex-shrink-0 z-10 flex items-center">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity py-1">
              <img
                src="/logo.png"
                alt="عسل زوين"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]"
              />
            </Link>
          </div>

          {/* Desktop Navigation (Perfectly Centered) */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
            <Link href="/" className="text-white hover:text-[#f59e0b] font-bold text-lg transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-[#c2b5a5] hover:text-[#f59e0b] font-medium text-lg transition-colors">
              الأعسال والمنتجات
            </Link>
            <Link href="/categories" className="text-[#c2b5a5] hover:text-[#f59e0b] font-medium text-lg transition-colors">
              التصنيفات
            </Link>
            <Link href="/offers" className="text-[#c2b5a5] hover:text-[#f59e0b] font-medium text-lg transition-colors">
              العروض الخاصة
            </Link>
          </nav>

          {/* Icons (Left Side in RTL) */}
          <div className="hidden md:flex items-center gap-8 z-10">
            <button className="text-[#c2b5a5] hover:text-white transition-transform hover:scale-110">
              <User className="h-[1.4rem] w-[1.4rem]" />
            </button>
            <button className="text-[#c2b5a5] hover:text-white transition-transform hover:scale-110 relative">
              <ShoppingCart className="h-[1.4rem] w-[1.4rem]" />
              {cartCount > 0 && (
                <span className="absolute -top-2.5 -left-2.5 flex h-[1.15rem] w-[1.15rem] items-center justify-center rounded-full bg-[#d97706] text-[0.65rem] font-black text-white shadow-[0_0_8px_rgba(217,119,6,0.5)] animate-scale-up">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button (Left Side in RTL) */}
          <div className="flex items-center md:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#c2b5a5] hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#3d3226] bg-[#1c1813] rounded-b-[2rem] shadow-2xl">
          <div className="space-y-1 px-6 pb-4 pt-4">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-bold text-white hover:bg-[#2a221a] hover:text-[#f59e0b]">
              الرئيسية
            </Link>
            <Link href="/products" className="block rounded-md px-3 py-2 text-base font-medium text-[#c2b5a5] hover:bg-[#2a221a] hover:text-[#f59e0b]">
              الأعسال والمنتجات
            </Link>
            <Link href="/categories" className="block rounded-md px-3 py-2 text-base font-medium text-[#c2b5a5] hover:bg-[#2a221a] hover:text-[#f59e0b]">
              التصنيفات
            </Link>
            <Link href="/offers" className="block rounded-md px-3 py-2 text-base font-medium text-[#c2b5a5] hover:bg-[#2a221a] hover:text-[#f59e0b]">
              العروض الخاصة
            </Link>
            
            <div className="border-t border-[#3d3226] pt-4 pb-2 flex justify-around">
              <button className="flex flex-col items-center text-[#c2b5a5] hover:text-white">
                <User className="h-6 w-6 mb-1" />
                <span className="text-xs font-bold">حسابي</span>
              </button>
              <button className="flex flex-col items-center text-[#c2b5a5] hover:text-white relative">
                <ShoppingCart className="h-6 w-6 mb-1" />
                <span className="absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#d97706] text-xs font-bold text-white">
                  {cartCount}
                </span>
                <span className="text-xs font-bold">السلة</span>
              </button>
            </div>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}
