import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationLoader from "@/components/providers/NavigationLoader";
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
      <body className="min-h-full flex flex-col font-thmanyah bg-deep-black text-white">
        <CartProvider>
          <Suspense fallback={null}>
            <NavigationLoader />
          </Suspense>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
