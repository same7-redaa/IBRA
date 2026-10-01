import React from "react";
import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black/90 backdrop-blur-md">
      <Loader text="BISMILLAH" />
    </div>
  );
}
