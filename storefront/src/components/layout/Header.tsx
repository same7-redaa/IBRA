"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold tracking-tight text-deep-black">
              بسم <span className="text-[#b0fb30]">الله</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-900 hover:text-[#b0fb30] font-medium transition-colors">
              الرئيسية
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-[#b0fb30] font-medium transition-colors">
              المنتجات
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-[#b0fb30] font-medium transition-colors">
              التصنيفات
            </Link>
            <Link href="/offers" className="text-gray-600 hover:text-[#b0fb30] font-medium transition-colors">
              العروض
            </Link>
          </nav>

          {/* Icons (Cart & User) */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            <button className="text-gray-600 hover:text-deep-black transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-deep-black transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#b0fb30] text-xs font-bold text-deep-black">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-deep-black focus:outline-none"
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
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#b0fb30]">
              الرئيسية
            </Link>
            <Link href="/products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#b0fb30]">
              المنتجات
            </Link>
            <Link href="/categories" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#b0fb30]">
              التصنيفات
            </Link>
            <Link href="/offers" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-[#b0fb30]">
              العروض
            </Link>
            
            <div className="border-t border-gray-100 pt-4 pb-2 flex justify-around">
              <button className="flex flex-col items-center text-gray-600 hover:text-deep-black">
                <User className="h-6 w-6 mb-1" />
                <span className="text-xs">حسابي</span>
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-deep-black relative">
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
  );
}
