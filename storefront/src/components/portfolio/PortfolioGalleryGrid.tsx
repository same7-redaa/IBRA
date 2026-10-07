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

  // Lock background scroll and Lenis smooth scroll while modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      if (lenis) {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (lenis) {
        lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      if (lenis) {
        lenis.start();
      }
    };
  }, [selectedProject]);

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

      {/* Screen-Adaptive Minimalist Lightbox Modal: Pure Image Only, Zero Containers */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[99999] bg-[#060608]/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            aria-label="إغلاق"
            className="absolute top-4 left-4 sm:top-7 sm:left-7 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer shadow-2xl border border-white/15"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev / Next Arrows */}
          <button
            onClick={handlePrev}
            aria-label="السابق"
            className="absolute right-3 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-2xl hidden xs:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="التالي"
            className="absolute left-3 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-2xl hidden xs:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Pure Direct Shrink-Wrapped Image with 10px Rounded Corners - Absolute Zero Outer Boxes */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[75vh] max-w-[85vw] sm:max-w-[700px] w-auto h-auto object-contain rounded-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] select-none pointer-events-auto"
          />
        </div>
      )}
    </section>
  );
}
