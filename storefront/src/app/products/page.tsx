import React from "react";
import BestProducts from "@/components/home/BestProducts";
import BackButton from "@/components/ui/BackButton";

export default function ProductsPage() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black pt-28">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-4">
        <BackButton label="الـعـــودة لـلـرئـيـسـيـة" fallbackHref="/" />
      </div>
      <BestProducts />
    </main>
  );
}
