"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, MessageCircle, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { useCart } from "@/context/CartContext";

// Primary Main Header Links
const PRIMARY_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/categories/royal", label: "عسل ملكي" },
  { href: "/categories/special_blends", label: "خلطات مميزة" },
  { href: "/categories/cave_honey", label: "عسل الكهوف" },
  { href: "/categories/honeycomb", label: "شمع العسل" },
  { href: "#", label: "حسب احتياجك", isNeedTrigger: true },
  { href: "/offers", label: "العروض" },
];

// Health / Need-based Categories displayed in the secondary luxury header bar
const NEED_BASED_LINKS = [
  { href: "/categories/immunity_energy", label: "المناعة والطاقة" },
  { href: "/categories/respiratory", label: "الصحة التنفسية والمدخنون" },
  { href: "/categories/digestive", label: "صحة الجهاز الهضمي والقولون" },
  { href: "/categories/diabetic_friendly", label: "مناسب لمرضى السكري" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileNeedsOpen, setIsMobileNeedsOpen] = useState(false);
  const [isNeedsHovered, setIsNeedsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { cartCount, openCart } = useCart();
  const pathname = usePathname();

  const isCurrentPathInNeeds = NEED_BASED_LINKS.some((l) => pathname === l.href);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsNeedsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsNeedsHovered(false);
    }, 200);
  };

  return (
    <div
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 w-full flex flex-col items-center px-2 sm:px-4"
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Main Header Capsule */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-grow gap-2 xl:gap-5 overflow-x-auto scrollbar-none py-2 px-2">
              {PRIMARY_LINKS.map((link) => {
                if (link.isNeedTrigger) {
                  const isActive = isCurrentPathInNeeds || isNeedsHovered;
                  return (
                    <button
                      key={link.label}
                      onMouseEnter={handleMouseEnter}
                      onClick={() => setIsNeedsHovered(!isNeedsHovered)}
                      className={`text-xs xl:text-sm font-bold transition-all relative py-1.5 px-3 rounded-xl whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? "text-[#f59e0b] bg-[#2a221a] border border-[#d97706]/40 shadow-[0_0_12px_rgba(217,119,6,0.2)]"
                          : "text-[#c2b5a5] hover:text-[#f59e0b] hover:bg-[#2a221a]/60"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isNeedsHovered ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setIsNeedsHovered(false)}
                    className={`text-xs xl:text-sm font-bold transition-all relative py-1.5 px-2.5 rounded-lg whitespace-nowrap ${
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

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#3d3226] bg-[#1c1813] rounded-b-[1.8rem] sm:rounded-b-[2rem] shadow-2xl animate-fade-in max-h-[75vh] overflow-y-auto">
            <div className="p-4 sm:p-5 space-y-2">
              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  الرئيسية
                </Link>
                <Link
                  href="/categories/royal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/categories/royal"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  عسل ملكي
                </Link>
                <Link
                  href="/categories/special_blends"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/categories/special_blends"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  خلطات مميزة
                </Link>
                <Link
                  href="/categories/cave_honey"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/categories/cave_honey"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  عسل الكهوف
                </Link>
                <Link
                  href="/categories/honeycomb"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/categories/honeycomb"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  شمع العسل
                </Link>
                <Link
                  href="/offers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-3 py-2 text-xs sm:text-sm font-bold transition-colors text-center ${
                    pathname === "/offers"
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                      : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white border border-[#3d3226]/30"
                  }`}
                >
                  العروض
                </Link>
              </div>

              {/* Mobile "حسب احتياجك" Accordion Section */}
              <div className="border-t border-[#3d3226] pt-3">
                <button
                  type="button"
                  onClick={() => setIsMobileNeedsOpen(!isMobileNeedsOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#2a221a] border border-[#3d3226] text-xs sm:text-sm font-black text-[#f59e0b] cursor-pointer touch-manipulation select-none active:bg-[#342a20]"
                >
                  <div className="flex items-center gap-2 pointer-events-none">
                    <Sparkles className="w-4 h-4" />
                    <span>أعسال وخلطات حسب احتياجك الصحي</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform pointer-events-none ${
                      isMobileNeedsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileNeedsOpen && (
                  <div className="grid grid-cols-1 gap-1.5 pt-2 pr-2">
                    {NEED_BASED_LINKS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
                          pathname === item.href
                            ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                            : "text-[#c2b5a5] hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

      {/* 2. Secondary Luxury Header Bar for "حسب احتياجك" (Matches Main Header Style) */}
      {isNeedsHovered && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hidden lg:flex w-[96%] max-w-[1400px] mt-2 rounded-[1.6rem] border border-[#3d3226] bg-[#1c1813] shadow-[0_15px_40px_rgba(0,0,0,0.45)] px-6 py-2.5 items-center justify-center gap-4 xl:gap-8 transition-all animate-fade-in z-40 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-xs font-black text-[#d97706] pl-4 border-l border-[#3d3226]">
            <Sparkles className="w-4 h-4" />
            <span>حسب احتياجك الصحي:</span>
          </div>

          <div className="flex items-center gap-3 xl:gap-6">
            {NEED_BASED_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs xl:text-sm font-bold px-3.5 py-1.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#2a221a] text-[#f59e0b] border border-[#d97706]/40 shadow-sm"
                      : "text-[#c2b5a5] hover:text-[#f59e0b] hover:bg-[#2a221a]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}



