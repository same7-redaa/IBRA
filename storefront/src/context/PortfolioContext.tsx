"use client";

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from "react";
import { PORTFOLIO_DATA, GalleryProject } from "@/data/portfolioData";

const STORAGE_KEY = "ibrahim_portfolio_gallery_v1";

interface PortfolioContextType {
  data: Record<string, GalleryProject[]>;
  getProjects: (categorySlug: string) => GalleryProject[];
  addProject: (categorySlug: string, project: Omit<GalleryProject, "id" | "category">) => void;
  updateProject: (categorySlug: string, project: GalleryProject) => void;
  deleteProject: (categorySlug: string, projectId: string) => void;
  resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

function getInitialGalleryData(): Record<string, GalleryProject[]> {
  const initial: Record<string, GalleryProject[]> = {};
  Object.keys(PORTFOLIO_DATA).forEach((key) => {
    initial[key] = PORTFOLIO_DATA[key].galleryProjects || [];
  });
  return initial;
}

// In-memory cache for fast sync
let memoryStore: Record<string, GalleryProject[]> = getInitialGalleryData();
let initialized = false;

function initStoreFromLocalStorage() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      memoryStore = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load portfolio storage:", e);
  }
}

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Record<string, GalleryProject[]> {
  initStoreFromLocalStorage();
  return memoryStore;
}

function getServerSnapshot(): Record<string, GalleryProject[]> {
  return getInitialGalleryData();
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const storeData = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          memoryStore = JSON.parse(e.newValue);
          emitChange();
        } catch (err) {
          console.error(err);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const saveToStorage = useCallback((newData: Record<string, GalleryProject[]>) => {
    memoryStore = newData;
    emitChange();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error("Failed to persist portfolio data:", e);
    }
  }, []);

  const getProjects = useCallback((categorySlug: string): GalleryProject[] => {
    return storeData[categorySlug] || PORTFOLIO_DATA[categorySlug]?.galleryProjects || [];
  }, [storeData]);

  const addProject = useCallback((categorySlug: string, projectData: Omit<GalleryProject, "id" | "category">) => {
    const categoryName = PORTFOLIO_DATA[categorySlug]?.categoryName || categorySlug;
    const newProject: GalleryProject = {
      ...projectData,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      category: categoryName,
    };

    const currentList = memoryStore[categorySlug] || [];
    const updatedData = {
      ...memoryStore,
      [categorySlug]: [newProject, ...currentList],
    };
    saveToStorage(updatedData);
  }, [saveToStorage]);

  const updateProject = useCallback((categorySlug: string, updatedProject: GalleryProject) => {
    const currentList = memoryStore[categorySlug] || [];
    const updatedData = {
      ...memoryStore,
      [categorySlug]: currentList.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    };
    saveToStorage(updatedData);
  }, [saveToStorage]);

  const deleteProject = useCallback((categorySlug: string, projectId: string) => {
    const currentList = memoryStore[categorySlug] || [];
    const updatedData = {
      ...memoryStore,
      [categorySlug]: currentList.filter((p) => p.id !== projectId),
    };
    saveToStorage(updatedData);
  }, [saveToStorage]);

  const resetToDefaults = useCallback(() => {
    const initial = getInitialGalleryData();
    saveToStorage(initial);
  }, [saveToStorage]);

  return (
    <PortfolioContext.Provider
      value={{
        data: storeData,
        getProjects,
        addProject,
        updateProject,
        deleteProject,
        resetToDefaults,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

// YouTube URL parser utility
export function parseYouTubeVideoId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export function getYouTubeEmbedUrl(url?: string): string | null {
  const id = parseYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
}

export function getYouTubeThumbnailUrl(url?: string): string | null {
  const id = parseYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}
