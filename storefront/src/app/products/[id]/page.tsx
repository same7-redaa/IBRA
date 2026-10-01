import React from "react";
import { notFound } from "next/navigation";
import { getProductById, sampleProducts } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductOrderBox from "@/components/product/ProductOrderBox";
import ProductAccordion from "@/components/product/ProductAccordion";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

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

  const relatedProducts = sampleProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black text-white pt-32 sm:pt-36 lg:pt-40 pb-16">
      
      {/* Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Product Showcase (2 Columns: Gallery + Order Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-14">
          
          {/* Left/Gallery Column (in RTL: Right visual column) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]}
              productName={product.name}
              discountPercentage={discountPercentage}
            />
          </div>

          {/* Right/Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <ProductOrderBox product={product} />
          </div>

        </div>

        {/* Full Specifications, FAQ & Guarantees Accordion Section */}
        <div className="border-t border-gray-900 pt-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Title & Intro */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <h3 className="text-2xl font-black text-white mb-3">
                تفاصيل القطعة والخامة
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                جميع منتجاتنا مصنعة بأعلى معايير الجودة العالمية لنضمن لك راحة تامة ومظهراً فخماً يدوم طويلاً.
              </p>
              <div className="hidden lg:flex items-center gap-2 text-xs text-[#e2d1f9]">
                <span>انقر على الأقسام لعرض مزيد من التفاصيل</span>
              </div>
            </div>

            {/* Accordion Column */}
            <div className="lg:col-span-8">
              <ProductAccordion product={product} />
            </div>

          </div>
        </div>

        {/* Related Products Section */}
        <div className="border-t border-gray-900 pt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-white">
              منتجات <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] to-[#e2d1f9]">قد تعجبك</span> أيضاً
            </h3>
            <Link
              href="/products"
              className="text-xs sm:text-sm text-gray-400 hover:text-[#b0fb30] font-bold transition-colors"
            >
              عرض الكل
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
