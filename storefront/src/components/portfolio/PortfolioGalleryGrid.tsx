"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ExternalLink, 
  Maximize2, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles,
  TrendingUp,
  Tag
} from "lucide-react";
import { GalleryProject } from "@/data/portfolioData";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PortfolioGalleryGridProps {
  projects: GalleryProject[];
  categoryTitle: string;
}

export default function PortfolioGalleryGrid({
  projects,
  categoryTitle,
}: PortfolioGalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Extract all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  );

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16">
      {/* Section Header */}
      <ScrollReveal direction="up" blurAmount={12}>
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-black text-[#FF8B2C] mb-2 tracking-wide uppercase">
            معرض الأعمال والمشاريع
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            معرض صور الأعمال
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            نماذج حية وتصاميم ونتائج حملات حقيقية تم تنفيذها بأعلى معايير الجودة
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Tabs if multiple tags */}
      {allTags.length > 1 && (
        <ScrollReveal direction="up" delay={50} blurAmount={8}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#FF8B2C] text-[#060608] shadow-[0_0_15px_rgba(255,139,44,0.4)]"
                  : "bg-[#14141f] text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              الكل ({projects.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tag
                    ? "bg-[#FF8B2C] text-[#060608] shadow-[0_0_15px_rgba(255,139,44,0.4)]"
                    : "bg-[#14141f] text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Image Gallery 2-3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <ScrollReveal key={project.id} direction="up" delay={idx * 60} blurAmount={10}>
            <div
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0d0d14] border-2 border-[#FF8B2C]/30 hover:border-[#FF8B2C] transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(255,139,44,0.25)] hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#161624]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#060608]/85 backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-md">
                  {project.category}
                </div>

                {/* Quick Zoom Indicator Icon */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#FF8B2C] text-[#060608] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-2 leading-snug group-hover:text-[#FF8B2C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Metrics Pills */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 border-t border-white/10 mb-3">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-xl bg-[#14141f] border border-white/5 text-center">
                          <p className="text-[10px] text-zinc-400 leading-none mb-1">{m.label}</p>
                          <p className="text-xs font-black text-[#FF8B2C] leading-none">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-[#161624] text-zinc-400 text-[11px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[99999] bg-[#060608]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            aria-label="إغلاق"
            className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Arrows */}
          <button
            onClick={handlePrev}
            aria-label="السابق"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="التالي"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF8B2C] text-white hover:text-[#060608] flex items-center justify-center transition-all z-50 cursor-pointer hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0d0d14] border-2 border-[#FF8B2C] rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(255,139,44,0.3)] max-h-[90vh] flex flex-col"
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-[#12121c] flex-shrink-0 max-h-[55vh]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#FF8B2C]/20 border border-[#FF8B2C] text-[#FF8B2C] text-xs font-black">
                  {selectedProject.category}
                </span>
                <div className="flex items-center gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs text-zinc-400">#{t}</span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                {selectedProject.summary}
              </p>

              {/* Metrics Bar */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#14141f] text-center border border-white/5">
                      <p className="text-xs text-zinc-400 mb-1">{m.label}</p>
                      <p className="text-sm sm:text-base font-black text-[#FF8B2C]">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
