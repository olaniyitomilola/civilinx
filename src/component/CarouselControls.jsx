// CarouselControls.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselControls({
  activeIndex,
  total,
  onPrev,
  onNext
}) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <button
        onClick={onPrev}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100 shadow-sm hover:bg-white/10 transition"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div className="text-xs md:text-sm text-neutral-300">
        {activeIndex + 1} / {total}
      </div>

      <button
        onClick={onNext}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-100 shadow-sm hover:bg-white/10 transition"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
