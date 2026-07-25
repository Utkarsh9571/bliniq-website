"use client";

import React, { useState, useEffect, useRef } from "react";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  desc: string;
}

interface AutoplayVideoCardProps {
  vid: VideoData;
  onClick: () => void;
}

export default function AutoplayVideoCard({ vid, onClick }: AutoplayVideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        threshold: 0.3,
        // Add rootMargin to trigger load slightly before it scrolls fully in
        rootMargin: "50px 0px 50px 0px"
      }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      onClick={onClick}
      className="flex bg-brand-bg-sec border border-brand-border/40 p-4 flex-col gap-4 hover:border-brand-accent/50 hover:bg-[#0F1524]/65 transition-all duration-300 group cursor-pointer shadow-xl select-none h-full"
    >
      {/* Thumbnail Display or Autoplay Iframe */}
      <div className="relative aspect-video w-full bg-[#0B0F19] border border-brand-border/30 overflow-hidden">
        {isInView ? (
          <iframe
            src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${vid.id}&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&enablejsapi=1`}
            title={vid.title}
            allow="autoplay; encrypted-media"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-102"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img 
            src={vid.thumbnail} 
            alt={vid.title} 
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />
        )}

        {/* Duration Badge */}
        <span className="absolute bottom-2 right-2 bg-[#0B0F19]/80 border border-brand-border/40 text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded text-brand-text-sec z-10">
          {vid.duration}
        </span>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-colors z-10">
          <div className="w-10 h-10 rounded-full bg-brand-accent/90 group-hover:bg-brand-accent group-hover:scale-110 flex items-center justify-center text-[#0B0F19] pl-0.5 shadow-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M8 5.14v14l11-7-11-7Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text Metadata */}
      <div className="text-left space-y-2 grow flex flex-col justify-between">
        <div>
          <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono font-semibold">
            {vid.category}
          </span>
          <h4 className="font-serif text-sm text-brand-text font-medium group-hover:text-brand-accent transition-colors mt-1 line-clamp-2">
            {vid.title}
          </h4>
        </div>
        <p className="text-[11px] text-brand-text-sec leading-relaxed font-sans line-clamp-2 mt-2">
          {vid.desc}
        </p>
      </div>
    </div>
  );
}
