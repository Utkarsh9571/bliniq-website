"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { VIDEO_STORIES, VideoStory } from "@/content/videos";

export default function SurgeryVideosSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    if (!activeVideoId) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideoId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideoId]);

  const activeVideo = VIDEO_STORIES.find((v) => v.id === activeVideoId);
  const relatedVideos = VIDEO_STORIES.filter((v) => v.id !== activeVideoId);

  return (
    <section id="surgery-videos" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40 relative">
      <Container>
        <SectionTitle
          title="Surgery Stories"
          subtitle="Patient Video Testimonials"
          align="center"
        />

        {/* Cinematic Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {VIDEO_STORIES.map((vid, idx) => {
            // Card responsive visibility:
            // Cards 1-2: Always visible.
            // Cards 3-4: Hidden on mobile (idx >= 2), visible on sm & up.
            // Cards 5-6: Hidden on mobile/tablet (idx >= 4), visible on lg & up.
            const visibilityClass = 
              idx >= 4 ? "hidden lg:flex" : 
              idx >= 2 ? "hidden sm:flex" : "flex";

            return (
              <div 
                key={idx}
                onClick={() => setActiveVideoId(vid.id)}
                className={`${visibilityClass} bg-brand-bg-sec border border-brand-border/40 p-4 flex-col gap-4 hover:border-brand-accent/50 hover:bg-[#0F1524]/65 transition-all duration-300 group cursor-pointer shadow-xl select-none`}
              >
                {/* Thumbnail Display with Play Overlay */}
                <div className="relative aspect-video w-full bg-[#0B0F19] border border-brand-border/30 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={vid.thumbnail} 
                    alt={vid.title} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 bg-[#0B0F19]/80 border border-brand-border/40 text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded text-brand-text-sec">
                    {vid.duration}
                  </span>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/90 group-hover:bg-brand-accent group-hover:scale-110 flex items-center justify-center text-[#0B0F19] pl-0.5 shadow-lg transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M8 5.14v14l11-7-11-7Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text Metadata */}
                <div className="text-left space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono font-semibold">
                      {vid.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm text-brand-text font-medium group-hover:text-brand-accent transition-colors truncate">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] text-brand-text-sec leading-relaxed font-sans line-clamp-2">
                    {vid.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Videos Button (Visible on mobile/tablet only, triggers modal playlist) */}
        <div className="flex justify-center mt-10 lg:hidden">
          <button 
            onClick={() => setActiveVideoId(VIDEO_STORIES[0].id)}
            className="border border-brand-accent/50 hover:border-brand-accent bg-brand-accent/5 hover:bg-brand-accent/15 px-8 py-3 text-xs uppercase tracking-widest font-mono font-bold text-brand-accent transition-all duration-300 min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            View All Videos
          </button>
        </div>
      </Container>

      {/* Cinematic Modal Lightbox Player */}
      {activeVideoId && activeVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md p-4 animate-fade-in">
          {/* Close click-overlay */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveVideoId(null)} />

          <div className="relative max-w-6xl w-full bg-[#0F1524] border border-brand-border/60 p-6 md:p-8 flex flex-col lg:flex-row gap-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto lg:overflow-visible animate-[scaleUp_0.3s_ease-out_forwards]">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 text-brand-text-sec/60 hover:text-brand-accent p-2 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center z-50"
              aria-label="Close video player"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Embedded YouTube Player (Loaded *only* on interaction) */}
            <div className="lg:w-2/3 flex flex-col gap-4">
              <div className="relative aspect-video w-full bg-black border border-brand-border/40">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono block mb-1">
                  Currently Playing &bull; {activeVideo.category}
                </span>
                <h4 className="font-serif text-xl text-brand-text font-light tracking-wide">
                  {activeVideo.title}
                </h4>
              </div>
            </div>

            {/* Right Column: Related Videos Playlist */}
            <div className="lg:w-1/3 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-brand-border/30 pt-4 lg:pt-0 lg:pl-6 max-h-120 overflow-y-auto pr-2">
              <h5 className="font-serif text-xs text-brand-accent uppercase tracking-widest font-semibold mb-2">
                Related Testimonials
              </h5>
              <div className="flex flex-col gap-4">
                {relatedVideos.map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveVideoId(item.id)}
                    className="flex gap-3 bg-[#0B0F19]/40 border border-brand-border/20 p-2 hover:border-brand-accent/40 cursor-pointer transition-colors"
                  >
                    <div className="relative w-24 aspect-video bg-[#0B0F19] shrink-0 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left flex flex-col justify-center min-w-0">
                      <span className="text-brand-accent text-[8px] uppercase tracking-wider font-mono">
                        {item.category}
                      </span>
                      <h6 className="text-[11px] text-brand-text font-medium truncate mt-0.5">
                        {item.title}
                      </h6>
                      <span className="text-[9px] text-brand-text-sec/60 font-mono mt-0.5">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
