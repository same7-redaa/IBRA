import React from "react";
import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#060608] select-none">
      <div className="flex flex-col items-center gap-5">
        <Loader text="إبراهيم علي سليم" />
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FF8B2C] rounded-full origin-right"
            style={{ animation: "loaderProgress 2000ms linear infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
