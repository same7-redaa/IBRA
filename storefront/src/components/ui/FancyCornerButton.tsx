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
  variant = "dark",
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
      className={`relative flex items-center justify-center ${sizeClasses} overflow-hidden font-black transition-all duration-300 rounded-xl group select-none ${
        isNeonVariant
          ? "bg-[#b0fb30] text-deep-black shadow-[0_0_20px_rgba(176,251,48,0.35)] hover:shadow-[0_0_25px_rgba(176,251,48,0.5)] border border-[#b0fb30]"
          : "bg-[#14161f] text-white border border-gray-800 hover:border-[#b0fb30] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(176,251,48,0.25)]"
      } ${fullWidth ? "w-full" : ""}`}
    >
      {/* Top Right Corner Fold */}
      <span
        className={`absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded-bl group-hover:-mr-4 group-hover:-mt-4 ${
          isNeonVariant ? "bg-white" : "bg-[#b0fb30]"
        }`}
      >
        <span
          className={`absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 ${
            isNeonVariant ? "bg-[#b0fb30]" : "bg-[#0c0c0c]"
          }`}
        />
      </span>

      {/* Bottom Left Corner Fold */}
      <span
        className={`absolute bottom-0 left-0 inline-block w-4 h-4 rotate-180 transition-all duration-500 ease-in-out rounded-bl group-hover:-ml-4 group-hover:-mb-4 ${
          isNeonVariant ? "bg-white" : "bg-[#b0fb30]"
        }`}
      >
        <span
          className={`absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 ${
            isNeonVariant ? "bg-[#b0fb30]" : "bg-[#0c0c0c]"
          }`}
        />
      </span>

      {/* Background Sliding Fill */}
      <span
        className={`absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out -translate-x-full rounded-xl group-hover:translate-x-0 ${
          isNeonVariant ? "bg-[#9de42b]" : "bg-[#b0fb30]"
        }`}
      />

      {/* Content Label */}
      <span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out tracking-wide ${
          isNeonVariant
            ? "text-deep-black"
            : "text-white group-hover:text-deep-black"
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
