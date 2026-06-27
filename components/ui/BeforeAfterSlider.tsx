"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only drag on move
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none touch-pan-y aspect-4/3 border border-brand-border bg-brand-card cursor-ew-resize ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt="After Treatment"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover pointer-events-none"
      />
      <div className="absolute bottom-4 right-4 bg-brand-bg-sec/90 px-3 py-1 text-[10px] text-brand-accent border border-brand-border uppercase tracking-widest font-mono z-20">
        After
      </div>

      {/* Before Image (Foreground with Clip Path) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeImage}
          alt="Before Treatment"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-brand-bg-sec/90 px-3 py-1 text-[10px] text-brand-text-sec border border-brand-border uppercase tracking-widest font-mono z-20">
        Before
      </div>

      {/* Vertical Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-brand-accent z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-accent text-brand-bg flex items-center justify-center border-2 border-brand-bg shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
