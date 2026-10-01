import React from "react";
import BestProducts from "@/components/home/BestProducts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#b0fb30] transition-colors text-sm font-bold"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </Link>
      </div>
      <BestProducts />
    </main>
  );
}
