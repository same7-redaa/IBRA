import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "المتجر الشامل | Storefront",
  description: "متجر إلكتروني فخم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-thmanyah bg-white text-black">
        {children}
      </body>
    </html>
  );
}
