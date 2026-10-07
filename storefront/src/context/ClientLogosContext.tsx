"use client";

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from "react";
import { DEFAULT_CLIENT_LOGOS, ClientLogo } from "@/data/clientLogosData";

const STORAGE_KEY = "ibrahim_client_logos_v1";

interface ClientLogosContextType {
  logos: ClientLogo[];
  addLogo: (logoData: Omit<ClientLogo, "id">) => void;
  deleteLogo: (id: string) => void;
  resetLogos: () => void;
}

const ClientLogosContext = createContext<ClientLogosContextType | null>(null);

let memoryLogos: ClientLogo[] = DEFAULT_CLIENT_LOGOS;
let initialized = false;

function initLogosFromLocalStorage() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryLogos = parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load client logos storage:", e);
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

function getSnapshot(): ClientLogo[] {
  initLogosFromLocalStorage();
  return memoryLogos;
}

function getServerSnapshot(): ClientLogo[] {
  return DEFAULT_CLIENT_LOGOS;
}

export function ClientLogosProvider({ children }: { children: React.ReactNode }) {
  const logos = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          memoryLogos = JSON.parse(e.newValue);
          emitChange();
        } catch (err) {
          console.error(err);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const saveToStorage = useCallback((newLogos: ClientLogo[]) => {
    memoryLogos = newLogos;
    emitChange();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newLogos));
    } catch (e) {
      console.error("Failed to persist client logos data:", e);
    }
  }, []);

  const addLogo = useCallback((logoData: Omit<ClientLogo, "id">) => {
    const newLogo: ClientLogo = {
      ...logoData,
      id: `logo-custom-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      createdAt: Date.now(),
    };
    saveToStorage([newLogo, ...memoryLogos]);
  }, [saveToStorage]);

  const deleteLogo = useCallback((id: string) => {
    const updated = memoryLogos.filter((item) => item.id !== id);
    saveToStorage(updated);
  }, [saveToStorage]);

  const resetLogos = useCallback(() => {
    saveToStorage(DEFAULT_CLIENT_LOGOS);
  }, [saveToStorage]);

  return (
    <ClientLogosContext.Provider
      value={{
        logos,
        addLogo,
        deleteLogo,
        resetLogos,
      }}
    >
      {children}
    </ClientLogosContext.Provider>
  );
}

export function useClientLogos() {
  const context = useContext(ClientLogosContext);
  if (!context) {
    throw new Error("useClientLogos must be used within a ClientLogosProvider");
  }
  return context;
}
