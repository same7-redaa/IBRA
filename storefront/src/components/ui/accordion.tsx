"use client";

import React, { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionContextType {
  openValues: string[];
  toggleValue: (val: string) => void;
  type?: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: React.ReactNode;
  defaultValue?: string | string[];
  type?: "single" | "multiple";
  className?: string;
}

export function Accordion({
  children,
  defaultValue,
  type = "single",
  className = "",
}: AccordionProps) {
  const initialOpen = defaultValue
    ? Array.isArray(defaultValue)
      ? defaultValue
      : [defaultValue]
    : [];

  const [openValues, setOpenValues] = useState<string[]>(initialOpen);

  const toggleValue = (val: string) => {
    setOpenValues((prev) => {
      if (type === "single") {
        return prev.includes(val) ? [] : [val];
      }
      return prev.includes(val)
        ? prev.filter((item) => item !== val)
        : [...prev, val];
    });
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggleValue, type }}>
      <div className={`w-full flex flex-col gap-3 ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className = "" }: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isOpen = context.openValues.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "bg-amber-50/40 border-amber-200 shadow-sm"
            : "bg-white border-slate-200 hover:border-amber-200"
        } ${className}`}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function AccordionTrigger({
  children,
  className = "",
  icon,
}: AccordionTriggerProps) {
  const accContext = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!accContext || !itemContext) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }

  const { value, isOpen } = itemContext;

  return (
    <button
      type="button"
      onClick={() => accContext.toggleValue(value)}
      aria-expanded={isOpen}
      className={`w-full px-5 py-4 flex items-center justify-between text-right gap-4 transition-colors font-bold text-sm sm:text-base cursor-pointer select-none ${
        isOpen ? "text-[#d97706]" : "text-slate-800 hover:text-[#d97706]"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-amber-100 text-[#d97706] shadow-sm"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {icon}
          </div>
        )}
        <span>{children}</span>
      </div>

      <div
        className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform duration-300 shrink-0 ${
          isOpen
            ? "rotate-180 text-[#d97706] bg-amber-100"
            : "text-slate-400 bg-slate-100"
        }`}
      >
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className = "",
}: AccordionContentProps) {
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }

  const { isOpen } = itemContext;

  return (
    <div
      className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`px-5 pb-5 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

