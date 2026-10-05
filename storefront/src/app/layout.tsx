import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationLoader from "@/components/providers/NavigationLoader";
import ScrollToTop from "@/components/providers/ScrollToTop";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "عسل زوين | لعسل النحل الطبيعي والأعشاب الفاخرة",
  description: "متجر عسل زوين - أجود أنواع عسل النحل الجبلي والخلطات الملكية الطبيعية 100% المفحوصة مخبرياً",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fbf7ee] text-[#221c15] relative selection:bg-[#d97706]/20 selection:text-[#221c15]">
        <CartProvider>
          <Suspense fallback={null}>
            <ScrollToTop />
            <NavigationLoader />
          </Suspense>
          <Header />
          <CartDrawer />
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
