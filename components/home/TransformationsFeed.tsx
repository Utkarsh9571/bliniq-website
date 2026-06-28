"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

interface TransformationItem {
  id: number;
  type: "image" | "video";
  procedure: string;
  caption: string;
  instagramUrl: string;
  media: string;
}

export default function TransformationsFeed() {
  const [feed, setFeed] = useState<TransformationItem[]>([]);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Load feed asynchronously from JSON
  useEffect(() => {
    fetch("/instagram-feed.json")
      .then((res) => res.json())
      .then((data) => setFeed(data))
      .catch((err) => console.error("Error loading transformations feed:", err));
  }, []);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null || feed.length === 0) return;
    setActiveItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : feed.length - 1));
  }, [activeItemIndex, feed]);

  const handleNext = useCallback(() => {
    if (activeItemIndex === null || feed.length === 0) return;
    setActiveItemIndex((prev) => (prev !== null && prev < feed.length - 1 ? prev + 1 : 0));
  }, [activeItemIndex, feed]);

  // Keyboard navigation for Lightbox Modal
  useEffect(() => {
    if (activeItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, handlePrev, handleNext]);

  // Mobile touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 60) {
      handleNext();
    } else if (diffX < -60) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Split into Row 1 (all items for mobile single row) and Row 2 (remaining items for desktop dual row)
  const row1 = feed;
  const row2 = feed.slice(Math.ceil(feed.length / 2));

  const activeItem = activeItemIndex !== null ? feed[activeItemIndex] : null;

  return (
    <section id="transformations" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40 overflow-hidden relative">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.02)_0%,transparent_80%)] pointer-events-none" />

      {/* Marquee Keyframes Injection */}
      <style jsx global>{`
        @keyframes feedScrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes feedScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .feed-container {
          display: flex;
          width: max-content;
          gap: 1.5rem;
        }
        .animate-feed-left {
          animation: feedScrollLeft 55s linear infinite;
        }
        .animate-feed-right {
          animation: feedScrollRight 55s linear infinite;
        }
        .feed-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <Container className="relative z-10">
        <SectionTitle
          title="Real Patient Transformations"
          subtitle="Before / After Feed"
          align="center"
        />
      </Container>

      {/* Marquee Track Wrapper */}
      <div 
        className="mt-16 flex flex-col gap-6 w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Row 1: Leftward Scrolling (Shows all items) */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex">
          <div className={`feed-container animate-feed-left ${isPaused ? "feed-paused" : ""}`}>
            {row1.map((item) => (
              <TransformationCard 
                key={`row1-${item.id}`} 
                item={item} 
                onClick={() => {
                  const originalIndex = feed.findIndex((f) => f.id === item.id);
                  setActiveItemIndex(originalIndex);
                }} 
              />
            ))}
            {/* Duplicate for seamless infinite loop */}
            {row1.map((item) => (
              <TransformationCard 
                key={`dup1-${item.id}`} 
                item={item} 
                onClick={() => {
                  const originalIndex = feed.findIndex((f) => f.id === item.id);
                  setActiveItemIndex(originalIndex);
                }} 
              />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scrolling (Desktop/Tablet only) */}
        <div className="w-full overflow-x-auto md:overflow-hidden touch-pan-x hidden md:flex">
          <div className={`feed-container animate-feed-right ${isPaused ? "feed-paused" : ""}`}>
            {row2.map((item) => (
              <TransformationCard 
                key={`row2-${item.id}`} 
                item={item} 
                onClick={() => {
                  const originalIndex = feed.findIndex((f) => f.id === item.id);
                  setActiveItemIndex(originalIndex);
                }} 
              />
            ))}
            {/* Duplicate for seamless infinite loop */}
            {row2.map((item) => (
              <TransformationCard 
                key={`dup2-${item.id}`} 
                item={item} 
                onClick={() => {
                  const originalIndex = feed.findIndex((f) => f.id === item.id);
                  setActiveItemIndex(originalIndex);
                }} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Detail Modal (Full-screen on Mobile, Cinematic Pop-up on Desktop) */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md md:p-4 animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close click-overlay */}
          <div className="absolute inset-0 cursor-default hidden md:block" onClick={() => setActiveItemIndex(null)} />

          <div className="relative w-full h-full md:h-auto md:max-w-4xl bg-[#0F1524] border-0 md:border border-brand-border/60 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-2xl z-10 overflow-y-auto md:overflow-visible animate-[scaleUp_0.3s_ease-out_forwards]">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-4 right-4 text-brand-text-sec/60 hover:text-brand-accent p-2 transition-colors cursor-pointer z-50 min-h-11 flex items-center justify-center"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Media display */}
            <div className="w-full md:w-1/2 relative aspect-square bg-[#0B0F19] border border-brand-border/40 flex items-center justify-center overflow-hidden">
              <Image 
                src={activeItem.media} 
                alt={activeItem.procedure}
                fill
                loading="lazy"
                className="object-cover"
              />

              {activeItem.type === "video" && (
                <div className="absolute inset-0 bg-[#0B0F19]/30 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/90 flex items-center justify-center text-[#0B0F19] pl-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M8 5.14v14l11-7-11-7Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Metadata details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between py-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Transformation Case
                  </span>
                  <h4 className="font-serif text-2xl text-brand-text font-light tracking-wide mt-1.5">
                    {activeItem.procedure}
                  </h4>
                </div>

                <p className="text-brand-text-sec text-xs leading-relaxed font-sans max-h-40 md:max-h-48 overflow-y-auto pr-2">
                  {activeItem.caption}
                </p>

                <div className="text-[10px] text-brand-text-sec/50 font-sans block md:hidden italic pt-2">
                  💡 Swipe left or right to browse cases
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={activeItem.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand-accent/40 hover:border-brand-accent bg-brand-accent/5 hover:bg-brand-accent/15 px-6 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold text-brand-accent transition-all duration-300 w-full sm:w-auto text-center justify-center min-h-11"
                >
                  View on Instagram
                </a>

                {/* Navigation helpers */}
                <div className="flex items-center justify-between border-t border-brand-border/30 pt-4">
                  <button 
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 text-xs text-brand-text-sec/60 hover:text-brand-accent transition-colors cursor-pointer min-h-11"
                  >
                    ← Prev
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-1.5 text-xs text-brand-text-sec/60 hover:text-brand-accent transition-colors cursor-pointer min-h-11"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

function TransformationCard({ item, onClick }: { item: TransformationItem; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="w-80 md:w-70 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 p-4 flex flex-col gap-4 hover:border-brand-accent/60 hover:bg-[#12192A]/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer group select-none"
    >
      {/* Thumbnail */}
      <div className="relative aspect-square w-full bg-[#0B0F19] border border-brand-border/20 overflow-hidden">
        <Image 
          src={item.media} 
          alt={item.procedure}
          fill
          loading="lazy"
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
        />

        {/* Video badge indicator */}
        {item.type === "video" && (
          <div className="absolute top-2 right-2 bg-[#0B0F19]/80 border border-brand-border/30 p-1.5 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 text-brand-accent">
              <path d="M8 5.14v14l11-7-11-7Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Metadata summary */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] text-brand-text font-serif tracking-wide block truncate">
          {item.procedure}
        </span>
        <span className="text-[8px] text-brand-accent font-mono uppercase tracking-wider shrink-0 bg-brand-accent/5 px-1.5 py-0.5 rounded border border-brand-accent/20">
          {item.type}
        </span>
      </div>
    </div>
  );
}
