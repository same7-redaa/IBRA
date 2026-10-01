"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Sparkles, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);

  // Fashion showcase items with vibrant high-fashion imagery
  const galleryItems = [
    {
      id: 1,
      title: "جاكيت سايبر ستريت",
      tag: "جديد",
      img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "هودي أوفر سايز نيون",
      tag: "الأكثر طلباً",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "طقم كاجوال عصري",
      tag: "تشكيلة الصيف",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "فيست تكتيكال فيوتشر",
      tag: "إصدار محدود",
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "سويت شيرت مينيمال",
      tag: "تريند",
      img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "بافر جاكيت ميتاليك",
      tag: "شتاء 2026",
      img: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "كارغو بريميوم فلكس",
      tag: "VIP",
      img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "بومبر أوربان نوار",
      tag: "حصري",
      img: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const totalItems = galleryItems.length;
  const angleStep = 360 / totalItems;
  const radius = 420; // 3D arc depth radius

  // Smooth continuous auto-rotation
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - 0.25);
    }, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Touch & Mouse Drag Handlers for manual interactive rotation
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    currentRotation.current = rotation;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX.current;
    setRotation(currentRotation.current + deltaX * 0.35);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-deep-black text-white pt-28 pb-16 flex flex-col items-center justify-between">
      
      {/* Ambient Neon Backlight Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#b0fb30]/15 via-[#e2d1f9]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#b0fb30]/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Hero Typography & CTAs */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-tight">
          اظبط <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#b0fb30] via-[#c6fc60] to-[#e2d1f9]">شياكتك</span> بأحدث صيحات الموضة
        </h1>

        <p className="mt-2 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          تشكيلة عصرية حصرية صُممت خصيصاً لتمنحك إطلالة فريدة وثقة لا تضاهى في كل مناسبة.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#b0fb30] hover:bg-[#9de42b] text-deep-black font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(176,251,48,0.35)] flex items-center justify-center gap-2 text-base cursor-pointer">
            <span>تسوق التشكيلة الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#b0fb30]/60 text-white font-semibold rounded-full backdrop-blur-md transition-all text-base cursor-pointer">
            اكتشف أحدث العروض
          </button>
        </div>
      </div>

      {/* 3D Curved Arc Perspective Gallery */}
      <div 
        className="relative w-full h-[360px] sm:h-[420px] mt-10 sm:mt-12 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "1100px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Curved 3D Cylinder Carousel */}
        <div 
          className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {galleryItems.map((item, index) => {
            const angle = index * angleStep;
            return (
              <div
                key={item.id}
                className="absolute w-44 h-64 sm:w-56 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-gray-900/80 shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300 group"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Product Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  loading="lazy"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#b0fb30]/90 backdrop-blur-md text-deep-black text-xs font-bold rounded-full shadow-md">
                  {item.tag}
                </div>

                {/* Card Title Info */}
                <div className="absolute bottom-3 right-3 left-3 text-right">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#b0fb30] transition-colors truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1 text-xs text-gray-300">
                    <span className="text-[#b0fb30] font-semibold">استعراض القطعة</span>
                    <span className="text-gray-400">2026 Collection</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Left/Right Fade Gradient for Cinematic Seamless Edges */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-deep-black via-deep-black/70 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-deep-black via-deep-black/70 to-transparent pointer-events-none z-10" />
      </div>

      {/* Bottom Features Strip (Trust Badges) */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-center">
          
          <div className="flex items-center justify-center gap-3 py-1">
            <div className="w-10 h-10 rounded-full bg-[#b0fb30]/10 border border-[#b0fb30]/30 flex items-center justify-center text-[#b0fb30] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-right">
              <h4 className="text-sm font-bold text-white">شحن فوري ومجاني</h4>
              <p className="text-xs text-gray-400">توصيل سريع لباب بيتك</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="w-10 h-10 rounded-full bg-[#b0fb30]/10 border border-[#b0fb30]/30 flex items-center justify-center text-[#b0fb30] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-right">
              <h4 className="text-sm font-bold text-white">معاينة قبل الاستلام</h4>
              <p className="text-xs text-gray-400">حقك تفحص أوردرك براحتك</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="w-10 h-10 rounded-full bg-[#b0fb30]/10 border border-[#b0fb30]/30 flex items-center justify-center text-[#b0fb30] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="text-right">
              <h4 className="text-sm font-bold text-white">استبدال واسترجاع سهل</h4>
              <p className="text-xs text-gray-400">خلال 14 يوم بدون تعقيد</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
