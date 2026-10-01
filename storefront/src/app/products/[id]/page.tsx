import React from "react";
import { notFound } from "next/navigation";
import { getProductById, sampleProducts } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductOrderBox from "@/components/product/ProductOrderBox";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Star, Sparkles } from "lucide-react";

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
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black text-white pt-28 pb-20">
      
      {/* Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#b0fb30] transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#b0fb30] transition-colors">
            المنتجات
          </Link>
          <span>/</span>
          <span className="text-white font-bold">{product.name}</span>
        </nav>

        {/* Main Product Showcase (2 Columns: Gallery + Order Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          
          {/* Left/Gallery Column (in RTL: Right visual column) */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.gallery && product.gallery.length > 0 ? product.gallery : [product.image]}
              productName={product.name}
              discountPercentage={discountPercentage}
            />
          </div>

          {/* Right/Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ProductOrderBox product={product} />
          </div>

        </div>

        {/* Full Specifications & Fabric Details Section */}
        <div className="border-t border-gray-900 pt-14 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-[#b0fb30] text-xs font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>المواصفات والضمان</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                تفاصيل القطعة والخامة
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                جميع منتجاتنا مصنعة بأعلى معايير الجودة العالمية لنضمن لك راحة تامة ومظهراً فخماً يدوم طويلاً.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-[5px] bg-[#14161f] border border-gray-800/80">
                <h4 className="text-sm font-bold text-[#b0fb30] mb-2">نوع النسيج والخامة</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{product.material}</p>
              </div>

              <div className="p-4 rounded-[5px] bg-[#14161f] border border-gray-800/80">
                <h4 className="text-sm font-bold text-[#b0fb30] mb-2">تعليمات الغسيل</h4>
                <p className="text-xs text-gray-300 leading-relaxed">غسيل في الغسالة بماء بارد (30 درجة)، لا تستخدم المبيضات، الكي على درجة حرارة منخفضة.</p>
              </div>

              {product.features && product.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-[5px] bg-[#14161f] border border-gray-800/80 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b0fb30] mt-1.5 shrink-0" />
                  <p className="text-xs text-gray-300 leading-relaxed">{feat}</p>
                </div>
              ))}
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
