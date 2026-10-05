"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { productCategories } from "@/data/products";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المنتجات" },
  { href: "/categories", label: "الفئات", hasDropdown: true },
  { href: "/offers", label: "العروض" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const { cartCount, openCart } = useCart();
  const pathname = usePathname();

  const activeCategories = productCategories.filter((cat) => cat.id !== "all");

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
            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/categories"));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative group py-2"
                      onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
                      onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-base lg:text-lg font-bold transition-all relative py-1 flex items-center gap-1 ${
                          isActive
                            ? "text-[#f59e0b]"
                            : "text-[#c2b5a5] hover:text-[#f59e0b]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full right-1/2 translate-x-1/2 pt-2 w-64 hidden group-hover:block transition-all animate-fade-in z-50">
                        <div className="bg-[#1c1813] border border-[#3d3226] rounded-2xl shadow-2xl p-2 space-y-1 backdrop-blur-md">
                          <Link
                            href="/categories"
                            className="block px-3.5 py-2 rounded-xl text-xs font-black text-[#f59e0b] hover:bg-[#2a221a] transition-colors border-b border-[#3d3226]/60 pb-2 mb-1"
                          >
                            ← استعراض كافة الفئات
                          </Link>
                          {activeCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/categories/${cat.id}`}
                              className="block px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#c2b5a5] hover:text-white hover:bg-[#2a221a] transition-colors"
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base lg:text-lg font-bold transition-all relative py-1 ${
                      isActive
                        ? "text-[#f59e0b]"
                        : "text-[#c2b5a5] hover:text-[#f59e0b]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f59e0b] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Icons & Actions (Left Side in RTL) */}
            <div className="hidden md:flex items-center gap-6 z-10">
              {/* WhatsApp / Customer Service */}
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                title="تواصل معنا عبر واتساب"
                className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl border border-[#3d3226] bg-[#2a221a]/60 text-[#c2b5a5] hover:text-[#25d366] hover:border-[#25d366]/40 transition-all"
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
                <ShoppingCart className="h-[1.4rem] w-[1.4rem]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -left-1.5 flex h-[1.15rem] w-[1.15rem] items-center justify-center rounded-full bg-[#d97706] text-[0.65rem] font-black text-white shadow-[0_0_8px_rgba(217,119,6,0.5)] animate-scale-up">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-3 md:hidden z-10">
              {/* Mobile Cart Trigger */}
              <button
                onClick={openCart}
                aria-label="عرض سلة المشتريات"
                className="text-[#c2b5a5] hover:text-white relative p-1.5"
              >
                <ShoppingCart className="h-6 w-6" />
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
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#3d3226] bg-[#1c1813] rounded-b-[2rem] shadow-2xl animate-fade-in">
            <div className="space-y-1.5 px-6 pb-5 pt-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-base font-bold transition-colors ${
                  pathname === "/"
                    ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                    : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white"
                }`}
              >
                الرئيسية
              </Link>

              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-base font-bold transition-colors ${
                  pathname === "/products"
                    ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                    : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white"
                }`}
              >
                المنتجات
              </Link>

              {/* Mobile Categories with Toggle */}
              <div>
                <div className="flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-bold text-[#c2b5a5] hover:bg-[#2a221a]">
                  <Link
                    href="/categories"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-grow"
                  >
                    الفئات
                  </Link>
                  <button
                    onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                    className="p-1 text-[#f59e0b]"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMobileCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {isMobileCategoriesOpen && (
                  <div className="pr-4 pl-2 py-2 space-y-1 border-r border-[#3d3226] mr-4 my-1">
                    {activeCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1.5 px-2 text-xs font-bold text-[#c2b5a5] hover:text-[#f59e0b]"
                      >
                        • {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/offers"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-base font-bold transition-colors ${
                  pathname === "/offers"
                    ? "bg-[#2a221a] text-[#f59e0b] border border-[#3d3226]"
                    : "text-[#c2b5a5] hover:bg-[#2a221a] hover:text-white"
                }`}
              >
                العروض
              </Link>

              <div className="border-t border-[#3d3226] pt-4 mt-3 flex items-center justify-between gap-3">
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
          </div>
        )}
      </header>
    </div>
  );
}

