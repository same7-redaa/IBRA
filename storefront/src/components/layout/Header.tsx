"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4">
      <header className="w-[96%] max-w-[1920px] rounded-[2rem] border border-gray-700/60 bg-[#0c0c0c]/80 backdrop-blur-xl shadow-2xl transition-all">
        <div className="px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between relative">
          
          {/* Logo (Right Side in RTL) */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="text-3xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
              بسم <span className="text-[#b0fb30]">الله</span>
            </Link>
          </div>

          {/* Desktop Navigation (Perfectly Centered) */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10">
            <Link href="/" className="text-white hover:text-[#b0fb30] font-medium text-lg transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-[#b0fb30] font-medium text-lg transition-colors">
              المنتجات
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-[#b0fb30] font-medium text-lg transition-colors">
              التصنيفات
            </Link>
            <Link href="/offers" className="text-gray-300 hover:text-[#b0fb30] font-medium text-lg transition-colors">
              العروض
            </Link>
          </nav>

          {/* Icons (Left Side in RTL) */}
          <div className="hidden md:flex items-center gap-8 z-10">
            <button className="text-gray-300 hover:text-white transition-transform hover:scale-110">
              <User className="h-[1.4rem] w-[1.4rem]" />
            </button>
            <button className="text-gray-300 hover:text-white transition-transform hover:scale-110 relative">
              <ShoppingCart className="h-[1.4rem] w-[1.4rem]" />
              <span className="absolute -top-2.5 -left-2.5 flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-[#b0fb30] text-[0.65rem] font-bold text-deep-black shadow-sm">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button (Left Side in RTL) */}
          <div className="flex items-center md:hidden z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
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
        <div className="md:hidden border-t border-gray-700/60 bg-[#0c0c0c]/95 rounded-b-[2rem]">
          <div className="space-y-1 px-6 pb-4 pt-4">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800 hover:text-[#b0fb30]">
              الرئيسية
            </Link>
            <Link href="/products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-[#b0fb30]">
              المنتجات
            </Link>
            <Link href="/categories" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-[#b0fb30]">
              التصنيفات
            </Link>
            <Link href="/offers" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-[#b0fb30]">
              العروض
            </Link>
            
            <div className="border-t border-gray-800 pt-4 pb-2 flex justify-around">
              <button className="flex flex-col items-center text-gray-300 hover:text-white">
                <User className="h-6 w-6 mb-1" />
                <span className="text-xs">حسابي</span>
              </button>
              <button className="flex flex-col items-center text-gray-300 hover:text-white relative">
                <ShoppingCart className="h-6 w-6 mb-1" />
                <span className="absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#b0fb30] text-xs font-bold text-deep-black">
                  2
                </span>
                <span className="text-xs">السلة</span>
              </button>
            </div>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}
