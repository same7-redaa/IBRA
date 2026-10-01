import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FancyCornerButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function FancyCornerButton({
  href,
  onClick,
  children,
  icon,
  className = "",
}: FancyCornerButtonProps) {
  const content = (
    <span className="relative flex items-center justify-center px-7 py-3 overflow-hidden font-bold transition-all duration-300 bg-[#14161f] border border-gray-800 hover:border-[#b0fb30] rounded-xl group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(176,251,48,0.25)]">
      {/* Top Right Corner Fold */}
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#b0fb30] rounded-bl group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#0c0c0c]" />
      </span>

      {/* Bottom Left Corner Fold */}
      <span className="absolute bottom-0 left-0 inline-block w-4 h-4 rotate-180 transition-all duration-500 ease-in-out bg-[#b0fb30] rounded-bl group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-[#0c0c0c]" />
      </span>

      {/* Background Sliding Neon Lime Fill */}
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out -translate-x-full bg-[#b0fb30] rounded-xl group-hover:translate-x-0" />

      {/* Content Label */}
      <span className="relative z-10 flex items-center gap-2 text-sm text-white transition-colors duration-300 ease-in-out group-hover:text-deep-black font-black tracking-wide">
        <span>{children}</span>
        {icon !== undefined ? icon : <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`inline-block ${className}`}>
      {content}
    </button>
  );
}
