"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const ALL_HEADER_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/categories/royal", label: "عسل ملكي" },
  { href: "/categories/special_blends", label: "خلطات مميزة" },
  { href: "/categories/cave_honey", label: "عسل الكهوف" },
  { href: "/categories/honeycomb", label: "شمع العسل" },
  { href: "/categories/immunity_energy", label: "المناعة والطاقة" },
  { href: "/categories/respiratory", label: "الصحة التنفسية" },
  { href: "/categories/digestive", label: "صحة الهضم" },
  { href: "/categories/diabetic_friendly", label: "مناسب للسكري" },
  { href: "/offers", label: "العروض" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();
  const pathname = usePathname();

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 w-full flex justify-center px-2 sm:px-4">
      <header className="w-[98%] max-w-[1920px] rounded-[1.8rem] sm:rounded-[2rem] border border-[#3d3226] bg-[#1c1813] shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-18 items-center justify-between gap-4 relative">
            
            {/* Logo (Right Side in RTL) */}
            <div className="flex-shrink-0 z-10 flex items-center">
              <Link href="/" className="flex items-center hover:opacity-90 transition-opacity py-1">
                <img
                  src="/logo.png"
                  alt="عسل زوين"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]"
                />
              </Link>
            </div>

            {/* Desktop Navigation with All Direct Links */}
            <nav className="hidden lg:flex items-center justify-center flex-grow gap-2 xl:gap-4 overflow-x-auto scrollbar-none py-2 px-2">
              {ALL_HEADER_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs xl:text-sm font-bold transition-all relative py-1.5 px-2 rounded-lg whitespace-nowrap ${
                      isActive
                        ? "text-[#f59e0b] bg-[#2a221a] border border-[#3d3226]"
                        : "text-[#c2b5a5] hover:text-[#f59e0b] hover:bg-[#2a221a]/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Icons & Actions (Left Side in RTL) */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-6 z-10 shrink-0">
              {/* WhatsApp / Customer Service */}
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                title="تواصل معنا عبر واتساب"
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border border-[#3d3226] bg-[#2a221a]/60 text-[#c2b5a5] hover:text-[#25d366] hover:border-[#25d366]/40 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[#25d366]" />
                <span className="hidden xl:inline">تواصل معنا</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={openCart}
                aria-label="عرض سلة المشتريات"
                className="text-[#c2b5a5] hover:text-white transition-transform hover:scale-110 relative p-1 cursor-pointer"
              >
                <ShoppingCart className="h-[1.35rem] w-[1.35rem]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -left-1.5 flex h-[1.15rem] w-[1.15rem] items-center justify-center rounded-full bg-[#d97706] text-[0.65rem] font-black text-white shadow-[0_0_8px_rgba(217,119,6,0.5)] animate-scale-up">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2.5 lg:hidden z-10">
              {/* Mobile Cart Trigger */}
              <button
                onClick={openCart}
                aria-label="عرض سلة المشتريات"
                className="text-[#c2b5a5] hover:text-white relative p-1.5"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 left-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#d97706] text-[0.6rem] font-black text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="القائمة الرئيسية"
                className="text-[#c2b5a5] hover:text-white focus:outline-none p-1"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown listing ALL links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#3d3226] bg-[#1c1813] rounded-b-[1.8rem] sm:rounded-b-[2rem] shadow-2xl animate-fade-in max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-1.5 p-4 sm:p-5">
              {ALL_HEADER_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                      isActive
                        ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                        : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions in Drawer */}
            <div className="border-t border-[#3d3226] p-4 flex items-center justify-between gap-3">
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#2a221a] border border-[#3d3226] text-xs font-bold text-[#c2b5a5] hover:text-[#25d366]"
              >
                <MessageCircle className="h-4 w-4 text-[#25d366]" />
                <span>تواصل معنا (واتساب)</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#d97706] text-xs font-bold text-white shadow-md"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>السلة ({cartCount})</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}


