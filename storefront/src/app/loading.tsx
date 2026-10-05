import React from "react";
import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1c1813] select-none">
      <div className="flex flex-col items-center gap-5">
        <Loader text="عسل زوين" />
        <div className="w-32 h-1 bg-[#3d3226] rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d97706] to-transparent animate-pulse w-full h-full" />
        </div>
      </div>
    </div>
  );
}
