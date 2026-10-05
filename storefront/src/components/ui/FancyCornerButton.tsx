import React from "react";
import Link from "next/link";

interface FancyCornerButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "dark" | "neon" | "glass";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export default function FancyCornerButton({
  href,
  onClick,
  children,
  icon,
  variant = "neon",
  size = "md",
  fullWidth = false,
  className = "",
}: FancyCornerButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-3.5 text-base",
  }[size];

  const isNeonVariant = variant === "neon";

  const content = (
    <span
      className={`relative flex items-center justify-center ${sizeClasses} overflow-hidden font-black transition-all duration-300 rounded-2xl group select-none cursor-pointer ${
        isNeonVariant
          ? "bg-[#f59e0b] text-white shadow-[0_4px_15px_rgba(245,158,11,0.35)] hover:shadow-[0_8px_25px_rgba(217,119,6,0.45)] border border-[#f59e0b]"
          : "bg-white text-slate-800 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {/* Background Sliding Fill */}
      <span
        className={`absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out -translate-x-full rounded-2xl group-hover:translate-x-0 ${
          isNeonVariant ? "bg-[#d97706]" : "bg-amber-100"
        }`}
      />

      {/* Content Label */}
      <span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out tracking-wide ${
          isNeonVariant
            ? "text-white"
            : "text-slate-800 group-hover:text-[#d97706]"
        }`}
      >
        <span>{children}</span>
        {icon && icon}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`${fullWidth ? "w-full block" : "inline-block"} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${fullWidth ? "w-full block" : "inline-block"} ${className}`}>
      {content}
    </button>
  );
}

