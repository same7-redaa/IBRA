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
      <body className="min-h-full flex flex-col bg-[#fbf7ee] text-[#221c15] relative selection:bg-[#d97706]/20 selection:text-[#221c15]">
        
        {/* Global Ambient Background Botanical & Honey Etching Patterns */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Pattern 1 - Top Right Honey & Botanical Etching */}
          <div 
            className="absolute -top-10 -right-20 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] bg-contain bg-no-repeat bg-right-top opacity-[0.10] mix-blend-multiply"
            style={{ backgroundImage: `url('/bg_pattern_1.jpg')` }}
          />
          {/* Pattern 2 - Mid & Bottom Left Vintage Hive & Bee Etching */}
          <div 
            className="absolute top-[35%] -left-20 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-contain bg-no-repeat bg-left-top opacity-[0.09] mix-blend-multiply"
            style={{ backgroundImage: `url('/bg_pattern_2.jpg')` }}
          />
          {/* Pattern 1 - Bottom Right subtle repeat */}
          <div 
            className="absolute -bottom-10 -right-20 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] bg-contain bg-no-repeat bg-right-bottom opacity-[0.08] mix-blend-multiply"
            style={{ backgroundImage: `url('/bg_pattern_1.jpg')` }}
          />
        </div>

        <CartProvider>
          <Suspense fallback={null}>
            <NavigationLoader />
          </Suspense>
          <Header />
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
