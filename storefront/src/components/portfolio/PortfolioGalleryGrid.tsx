"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft 
} from "lucide-react";
import { GalleryProject } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PortfolioGalleryGridProps {
  projects: GalleryProject[];
  categoryTitle: string;
}

export default function PortfolioGalleryGrid({
  projects,
}: PortfolioGalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  }, [projects, selectedProject]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  }, [projects, selectedProject]);

  // Keyboard Navigation: Esc to close, Arrow keys to navigate
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowRight") {
        handlePrev();
      } else if (e.key === "ArrowLeft") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-12 sm:py-16 select-none">
      {/* Pure Centered Title with Tatweel */}
      <ScrollReveal direction="up" blurAmount={12}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            مـــعـــرض <span className="text-[#FF8B2C] drop-shadow-[0_0_24px_rgba(255,139,44,0.45)]">الأعـــمــــال</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Pure Image Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.id} direction="up" delay={idx * 70} blurAmount={10}>
            <div
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d14] border-2 border-[#FF8B2C]/30 hover:border-[#FF8B2C] shadow-[0_10px_30px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_50px_rgba(255,139,44,0.3)] transition-all duration-400 hover:-translate-y-2 cursor-pointer"
            >
              {/* Full Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-108 transition-transform duration-600 ease-out"
              />

              {/* Ambient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-[#060608]/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Top Zoom Icon */}
              <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-full bg-[#FF8B2C] text-[#060608] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Project Title Bar on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs sm:text-sm font-black text-white group-hover:text-[#FF8B2C] transition-colors leading-snug drop-shadow-md">
                  {project.title}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Screen-Adaptive Lightbox Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[99999] bg-[#060608]/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            aria-label="إغلاق"
            className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer shadow-xl border border-white/15"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Prev / Next Arrows */}
          <button
            onClick={handlePrev}
            aria-label="السابق"
            className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="التالي"
            className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container Card Fitted To Viewport */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl sm:max-w-4xl w-full max-h-[88vh] bg-[#0d0d14] border-2 border-[#FF8B2C]/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(255,139,44,0.25)] flex flex-col my-auto"
          >
            {/* Contained Media Box */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] max-h-[68vh] bg-[#060608] flex items-center justify-center p-2">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain p-2 sm:p-4"
                priority
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-3.5 sm:p-5 bg-[#0e0e16] border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
              <h3 className="text-xs sm:text-base font-black text-white truncate">
                {selectedProject.title}
              </h3>
              <span className="text-[11px] sm:text-xs text-[#FF8B2C] font-bold shrink-0 px-2.5 py-1 rounded-full bg-[#FF8B2C]/10 border border-[#FF8B2C]/30">
                {selectedProject.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
