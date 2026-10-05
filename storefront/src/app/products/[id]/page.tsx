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

  // Show up to 4 related products (matching the 4-card grid in reference image)
  const relatedProducts = sampleProducts.filter((p) => String(p.id) !== String(product.id)).slice(0, 4);

  return (
    <main className="flex-grow flex flex-col min-h-screen bg-[#f4f8fc] text-[#1e293b] pt-28 sm:pt-32 lg:pt-36 pb-20">
      
      {/* Main Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Section: Lookbook Gallery + Sticky Order Panel (Matches Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10">
          
          {/* Gallery Column (in RTL: Right side) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]}
              productName={product.name}
              discountPercentage={discountPercentage}
            />
          </div>

          {/* Details & Ordering Column (in RTL: Left side, Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 pt-2">
            <ProductOrderBox product={product} />
          </div>

        </div>

        {/* Middle Section: Story & Detail Tabs + High-Res Texture Photo (Matches Reference Image) */}
        <ProductDetailsTabs product={product} />

        {/* Bottom Section: You May Also Like / منتجات قد تعجبك (Matches Reference 4-Card Grid) */}
        <div className="border-t border-slate-200/80 pt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-tight">
              أعسال <span className="text-[#d97706]">قد تعجبك</span> أيضاً
            </h3>
            <Link
              href="/products"
              className="group flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 hover:text-[#d97706] font-bold transition-colors"
            >
              <span>عرض كل الأعسال</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#d97706]" />
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

