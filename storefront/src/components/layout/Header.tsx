"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";

// Primary Main Navigation Links matching home sections
const NAV_LINKS = [
  { href: "/", id: "top", label: "الــرئــيــســيــة" },
  { href: "/#services", id: "services", label: "خــــدمــــاتــــي" },
  { href: "/#portfolio", id: "portfolio", label: "الـــتـــأثـــيـــر" },
  { href: "/#impact", id: "impact", label: "الـــأرقــــام" },
  { href: "/#contact", id: "contact", label: "تــــواصــــل مــــعــــي" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");
  const [activeSection, setActiveSection] = useState<string>("top");
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;

      if (scrollPos < 400) {
        setActiveSection("top");
        return;
      }

      const sections = ["services", "portfolio", "impact", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      if (id === "top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setActiveSection("top");
        window.history.pushState(null, "", "/");
      } else {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(id);
          window.history.pushState(null, "", `#${id}`);
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className="fixed top-2.5 sm:top-4 inset-x-0 z-50 w-full px-3 sm:px-6 max-w-[1440px] mx-auto">
      {/* Main Header Capsule */}
      <header className="relative w-full rounded-2xl sm:rounded-full border border-[#FF8B2C]/25 bg-[#0b0b10]/90 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-3 sm:gap-4 relative">
            
            {/* Logo Text: "ابراهيم علي" with Tatweel (Right side in RTL) */}
            <div className="flex-shrink-0 z-10 flex items-center">
              <Link 
                href="/" 
                onClick={(e) => handleNavClick(e, "/", "top")}
                className="flex items-center hover:opacity-90 transition-opacity py-1 group"
              >
                <span className="text-sm xs:text-base sm:text-xl lg:text-2xl font-black text-white tracking-wide group-hover:text-[#FF8B2C] transition-colors whitespace-nowrap">
                  ابـــراهـــيــــم <span className="text-[#FF8B2C] drop-shadow-[0_0_14px_rgba(255,139,44,0.55)]">عـــــلــــي</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links with Smooth Active Animation & Highlighting */}
            <nav className="hidden lg:flex items-center justify-center flex-grow gap-4 xl:gap-8 py-1 px-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`relative py-1.5 text-xs xl:text-sm font-bold transition-all duration-300 whitespace-nowrap group ${
                      isActive
                        ? "text-[#FF8B2C] font-black drop-shadow-[0_0_14px_rgba(255,139,44,0.5)] scale-105"
                        : "text-zinc-300 hover:text-[#FF8B2C]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active Animated Underline Dot Indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-[#FF8B2C] transition-all duration-300 ${
                        isActive ? "w-4/5 opacity-100 shadow-[0_0_8px_#FF8B2C]" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-70"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher & Desktop CTA (Left Side in RTL) */}
            <div className="hidden lg:flex items-center gap-3 z-10 shrink-0">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="تبديل اللغة"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-white/10 bg-white/5 hover:border-[#FF8B2C]/50 hover:bg-[#FF8B2C]/10 text-zinc-300 hover:text-[#FF8B2C] transition-all cursor-pointer select-none"
              >
                <Globe className="w-3.5 h-3.5 text-[#FF8B2C]" />
                <span className="font-mono">{currentLang === "ar" ? "EN" : "عربي"}</span>
              </button>

              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "/#contact", "contact")}
                className="px-4 py-1.5 rounded-full text-xs font-black bg-[#FF8B2C] text-[#060608] hover:bg-[#FFA857] transition-all shadow-[0_2px_15px_rgba(255,139,44,0.35)] hover:scale-105"
              >
                تـــواصـــل الآن
              </Link>
            </div>

            {/* Mobile Actions: Language + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden z-30">
              {/* Mobile Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="تبديل اللغة"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-bold border border-white/10 bg-white/5 text-zinc-300 active:text-[#FF8B2C]"
              >
                <Globe className="w-3 h-3 text-[#FF8B2C]" />
                <span className="font-mono">{currentLang === "ar" ? "EN" : "عربي"}</span>
              </button>

              {/* Hamburger Button with Accent Glow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen((prev) => !prev);
                }}
                aria-label="القائمة الرئيسية"
                className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-all cursor-pointer select-none ${
                  isMobileMenuOpen 
                    ? "border-[#FF8B2C] bg-[#FF8B2C]/15 text-[#FF8B2C]" 
                    : "border-white/10 bg-white/5 text-zinc-200 active:text-[#FF8B2C]"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 pointer-events-none" />
                ) : (
                  <Menu className="h-5 w-5 pointer-events-none" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu (Floating inside capsule with smooth animation) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0c0c12]/98 backdrop-blur-3xl rounded-b-2xl shadow-2xl p-4 transition-all">
            <div className="space-y-1.5 pb-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-all text-right ${
                      isActive
                        ? "bg-[#FF8B2C]/15 text-[#FF8B2C] border-r-4 border-[#FF8B2C] font-black"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF8B2C] shadow-[0_0_8px_#FF8B2C]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Bottom Direct CTA Button */}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "/#contact", "contact")}
                className="flex items-center justify-center w-full py-2.5 rounded-xl bg-[#FF8B2C] text-[#060608] text-xs font-black hover:bg-[#FFA857] transition-all shadow-[0_4px_20px_rgba(255,139,44,0.35)]"
              >
                تـــواصـــل مـــع إبـــراهـــيـــم
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
