import React from "react";
import { notFound } from "next/navigation";
import { getProductById, sampleProducts } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductOrderBox from "@/components/product/ProductOrderBox";
import ProductDetailsTabs from "@/components/product/ProductDetailsTabs";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return sampleProducts.map((p) => ({
    id: String(p.id),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : undefined;

  // Show up to 4 related products
  const relatedProducts = sampleProducts.filter((p) => String(p.id) !== String(product.id)).slice(0, 4);

  return (
    <main className="relative flex-grow flex flex-col min-h-screen text-white pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF8B2C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Top Section: Single Compact Image on Right (in RTL) + Details on Left (in RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          
          {/* Right Column in RTL: Single Compact Product Image */}
          <div className="lg:col-span-5 flex justify-center items-start">
            <ProductGallery
              images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]}
              productName={product.name}
              discountPercentage={discountPercentage}
            />
          </div>

          {/* Left Column in RTL: Name, Bio, Size Choices, and Order Actions */}
          <div className="lg:col-span-7 pt-1">
            <ProductOrderBox product={product} />
          </div>

        </div>

        {/* Middle Section: Story & Detail Tabs + High-Res Texture Photo */}
        <ProductDetailsTabs product={product} />

        {/* Bottom Section: You May Also Like / منتجات قد تعجبك */}
        <div className="border-t border-white/10 pt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              أعسال <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">قد تعجبك</span> أيضاً
            </h3>
            <Link
              href="/products"
              className="group flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 hover:text-[#FF8B2C] font-bold transition-colors"
            >
              <span>عرض كل الأعسال</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FF8B2C]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
