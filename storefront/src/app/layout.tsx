import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import NavigationLoader from "@/components/providers/NavigationLoader";

export const metadata: Metadata = {
  title: "بسم الله | للأزياء الراقية",
  description: "متجر أزياء إلكتروني فخم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-thmanyah bg-deep-black text-white">
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        <Header />
        {children}
      </body>
    </html>
  );
}
