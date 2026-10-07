import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";
import NavigationLoader from "@/components/providers/NavigationLoader";
import ScrollToTop from "@/components/providers/ScrollToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "إبراهيم علي سليم | خبير التسويق الرقمي وتوسيع المتاجر الإلكترونية",
  description: "الموقع الرسمي لإبراهيم علي سليم - خبير التسويق الرقمي وإدارة الحملات الإعلانية وتوسيع المتاجر عبر Meta و TikTok و Google",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col ambient-glow-bg text-[#f4f4f6] relative selection:bg-[#FF8B2C]/30 selection:text-white">
        <SplashScreen />
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <ScrollToTop />
            <NavigationLoader />
          </Suspense>
          <Header />
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
