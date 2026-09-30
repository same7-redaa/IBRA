import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
