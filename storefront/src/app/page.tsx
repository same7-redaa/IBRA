export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Light Mode Section */}
      <section className="w-full max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          متجرك الإلكتروني، <span className="bg-[#b0fb30] px-2 rounded-md">بلمسة عصرية</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          نظام متكامل يجمع بين السرعة، الأناقة، والقوة. تم تصميمه بعناية ليناسب تطلعات المتاجر الكبرى باستخدام خط "ثمانية" الفاخر.
        </p>
        <button className="bg-[#b0fb30] text-[#0c0c0c] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-opacity-80 transition-all hover:-translate-y-1">
          تصفح المنتجات
        </button>
      </section>

      {/* Dark Mode / High Contrast Section */}
      <section className="w-full bg-[#0c0c0c] text-white py-24 mt-12 rounded-t-[3rem]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">عروض حصرية لفترة محدودة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-[#b0fb30] transition-colors">
                <div className="w-full h-40 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-[#b0fb30] font-bold text-2xl">صورة المنتج</span>
                </div>
                <h3 className="text-xl font-bold mb-2">منتج مميز {item}</h3>
                <p className="text-gray-400 mb-6">تفاصيل مختصرة عن المنتج الفاخر وتجربة الاستخدام.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#e2d1f9]">199 ر.س</span>
                  <button className="text-[#b0fb30] hover:text-white transition-colors">
                    إضافة للسلة +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
