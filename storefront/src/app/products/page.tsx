import React from "react";
import BestProducts from "@/components/home/BestProducts";

export default function ProductsPage() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black pt-28">
      <BestProducts />
    </main>
  );
}
