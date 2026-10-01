"use client";

import React, { createContext, useContext, useState, useId } from "react";
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
  defaultValue = [],
  type = "multiple",
  className = "",
}: AccordionProps) {
  const initialOpen = Array.isArray(defaultValue)
    ? defaultValue
    : defaultValue
    ? [defaultValue]
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
        className={`rounded-[5px] border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "bg-[#14161f] border-gray-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-[#10121a]/70 border-gray-800/80 hover:border-gray-700"
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
      className={`w-full px-5 py-4 flex items-center justify-between text-right gap-4 transition-colors font-bold text-sm sm:text-base ${
        isOpen ? "text-white" : "text-gray-300 hover:text-white"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`w-8 h-8 rounded-[5px] flex items-center justify-center transition-colors ${
              isOpen
                ? "bg-[#b0fb30]/15 text-[#b0fb30]"
                : "bg-gray-800/60 text-gray-400"
            }`}
          >
            {icon}
          </div>
        )}
        <span>{children}</span>
      </div>

      <div
        className={`w-7 h-7 rounded-[5px] flex items-center justify-center transition-transform duration-300 shrink-0 ${
          isOpen
            ? "rotate-180 text-[#b0fb30] bg-[#b0fb30]/10"
            : "text-gray-400 bg-gray-800/40"
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

  if (!itemContext.isOpen) {
    return null;
  }

  return (
    <div
      className={`px-5 pb-5 pt-1 border-t border-gray-800/50 text-xs sm:text-sm text-gray-300 leading-relaxed animate-fadeIn ${className}`}
    >
      {children}
    </div>
  );
}
