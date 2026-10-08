"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Play,
  ExternalLink
} from "lucide-react";
import { GalleryProject } from "@/data/portfolioData";
import { usePortfolio, getYouTubeEmbedUrl } from "@/context/PortfolioContext";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CategoryCoverflowGallery from "@/components/portfolio/CategoryCoverflowGallery";
import { Sparkles, LayoutGrid } from "lucide-react";

interface PortfolioGalleryGridProps {
  projects: GalleryProject[];
  categoryTitle: string;
  categorySlug?: string;
}

export default function PortfolioGalleryGrid({
  projects: initialProjects,
  categorySlug,
  categoryTitle,
}: PortfolioGalleryGridProps) {
  const { getProjects } = usePortfolio();
  const liveProjects = categorySlug ? getProjects(categorySlug) : initialProjects;
  const projects = liveProjects.length > 0 ? liveProjects : initialProjects;

  const [galleryView, setGalleryView] = useState<"coverflow" | "grid">("coverflow");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const thumbsTrackRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll the active thumbnail into the center of the thumbnail strip
  useEffect(() => {
    if (selectedProject) {
      const activeEl = document.getElementById(`thumb-${selectedProject.id}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [selectedProject]);

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

  const embedUrl = selectedProject?.videoUrl ? getYouTubeEmbedUrl(selectedProject.videoUrl) : null;

  return (
    <section id="gallery" className="py-12 sm:py-16 select-none">
      {/* Pure Centered Title with Tatweel */}
      <ScrollReveal direction="up" blurAmount={12}>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            مـــعـــرض <span className="text-[#FF8B2C] drop-shadow-[0_0_24px_rgba(255,139,44,0.45)]">الأعـــمــــال</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Style Toggle for Category Page */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-[#0c0c14] border border-[#FF8B2C]/40 shadow-lg">
          <button
            type="button"
            onClick={() => setGalleryView("coverflow")}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
              galleryView === "coverflow"
                ? "bg-[#FF8B2C] text-[#060608] shadow-[0_0_16px_rgba(255,139,44,0.6)] scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>عرض 3D Coverflow</span>
          </button>

          <button
            type="button"
            onClick={() => setGalleryView("grid")}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-black text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
              galleryView === "grid"
                ? "bg-[#FF8B2C] text-[#060608] shadow-[0_0_16px_rgba(255,139,44,0.6)] scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>عرض الشبكة Grid</span>
          </button>
        </div>
      </div>

      {galleryView === "coverflow" ? (
        <CategoryCoverflowGallery
          projects={projects}
          categoryTitle={categoryTitle}
          categorySlug={categorySlug || ""}
        />
      ) : (
        /* Pure Image/Video Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => {
          const isStore = Boolean(project.storeUrl);

          const handleCardClick = () => {
            if (project.storeUrl) {
              window.open(project.storeUrl, "_blank", "noopener,noreferrer");
            } else {
              setSelectedProject(project);
            }
          };

          return (
            <ScrollReveal key={project.id} direction="up" delay={idx * 70} blurAmount={10}>
              <div
                onClick={handleCardClick}
                className="group relative aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d14] border-2 border-[#FF8B2C]/30 hover:border-[#FF8B2C] shadow-[0_10px_30px_rgba(0,0,0,0.75)] hover:shadow-[0_20px_50px_rgba(255,139,44,0.3)] transition-all duration-400 hover:-translate-y-2 cursor-pointer"
              >
                {/* Full Image Preview */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-600 ease-out"
                />

                {/* Video Play Badge Indicator if item has YouTube Video */}
                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#060608]/80 backdrop-blur-md border border-[#FF8B2C] flex items-center justify-center text-[#FF8B2C] shadow-[0_0_25px_rgba(255,139,44,0.5)] group-hover:scale-115 group-hover:bg-[#FF8B2C] group-hover:text-[#060608] transition-all duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-[-1px]" />
                    </div>
                  </div>
                )}

                {/* Ambient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/95 via-[#060608]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Action Icon (External link for stores, zoom for images/videos) */}
                <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-full bg-[#FF8B2C] text-[#060608] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  {isStore ? (
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </div>

                {/* Bottom Project Title & Store Visit Action Bar */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-center justify-between gap-3 z-20">
                  <p className="text-xs sm:text-sm font-black text-white group-hover:text-[#FF8B2C] transition-colors leading-snug drop-shadow-md flex-1">
                    {project.title}
                  </p>

                  {project.storeUrl && (
                    <a
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF8B2C] text-[#060608] font-black text-xs hover:bg-[#FFA857] transition-all shadow-[0_4px_16px_rgba(255,139,44,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>زيارة المتجر</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
      )}

      {/* Screen-Adaptive Interactive Lightbox Modal with Centered Image / Video & Thumbnail Strip */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[99999] bg-[#060608]/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Top Bar with Title, Store Link Button & Close Button */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl flex items-center justify-between z-50 pt-2 px-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-black text-white truncate max-w-[200px] sm:max-w-md">
                {selectedProject.title}
              </span>

              {/* Store Link Button if available (E-commerce Scaling) */}
              {selectedProject.storeUrl && (
                <a
                  href={selectedProject.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF8B2C] text-[#060608] font-bold text-xs hover:bg-[#FFA857] transition-all shadow-md"
                >
                  <span>زيارة المتجر</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              aria-label="إغلاق"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all cursor-pointer shadow-2xl border border-white/15"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Stage: Center Media (YouTube Video or Image) + Navigation Arrows */}
          <div className="relative w-full flex-grow flex items-center justify-center my-auto py-2">
            
            {/* Prev Arrow (Right in RTL) */}
            <button
              onClick={handlePrev}
              aria-label="السابق"
              className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-2xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Next Arrow (Left in RTL) */}
            <button
              onClick={handleNext}
              aria-label="التالي"
              className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer border border-white/15 shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* If videoUrl is provided, render YouTube Player */}
            {embedUrl ? (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[850px] aspect-video rounded-[12px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.95)] border border-[#FF8B2C]/40 bg-black"
              >
                <iframe
                  src={embedUrl}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
              /* Center Compact Image (No Container) */
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[48vh] sm:max-h-[55vh] max-w-[85vw] sm:max-w-[550px] w-auto h-auto object-contain rounded-[10px] shadow-[0_20px_70px_rgba(0,0,0,0.95)] border border-white/10 select-none pointer-events-auto transition-all duration-300"
              />
            )}
          </div>

          {/* Bottom Thumbnails Carousel Track */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl py-2 px-2 z-50"
          >
            <div 
              ref={thumbsTrackRef}
              className="flex items-center justify-center sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto py-2 px-4 no-scrollbar"
              style={{ scrollbarWidth: "none" }}
            >
              {projects.map((p) => {
                const isActive = p.id === selectedProject.id;
                return (
                  <button
                    key={p.id}
                    id={`thumb-${p.id}`}
                    onClick={() => setSelectedProject(p)}
                    aria-label={p.title}
                    className={`relative shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-[8px] overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "border-2 border-[#FF8B2C] scale-110 opacity-100 shadow-[0_0_16px_rgba(255,139,44,0.6)] z-10" 
                        : "border border-white/15 opacity-50 hover:opacity-90 scale-95 hover:scale-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                    {p.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-3 h-3 text-[#FF8B2C] fill-current" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </section>
  );
}
