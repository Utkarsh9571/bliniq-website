"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { VIDEO_STORIES, VideoStory } from "@/content/videos";
import AutoplayVideoCard from "@/components/ui/AutoplayVideoCard";

const CATEGORIES = ["All", "Gynecomastia", "Liposuction", "Tummy Tuck", "Body Sculpting", "Facial Aesthetics", "Clinical Testimonial"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const filteredVideos = selectedCategory === "All"
    ? VIDEO_STORIES
    : VIDEO_STORIES.filter(v => v.category === selectedCategory);

  const activeVideo = VIDEO_STORIES.find(v => v.id === activeVideoId);
  const relatedVideos = VIDEO_STORIES.filter(v => v.id !== activeVideoId).slice(0, 8);

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text font-sans">
        <Container>
          <ScrollReveal variant="fade-up">
            <SectionTitle
              title="Surgical Journey Videos"
              subtitle="Patient Testimonials & Video Stories"
              align="center"
            />

            <p className="text-center text-brand-text-sec text-sm max-w-2xl mx-auto mt-4 mb-10 font-sans">
              Real recovery journeys, treatment feedback, and post-operative progress videos from the BLINIQ Centre clinical database.
            </p>
          </ScrollReveal>

          {/* Category Filter Tabs */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 border min-h-11 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-brand-accent border-brand-accent text-[#0B0F19] font-bold"
                      : "bg-[#0F1524]/60 border-brand-border/40 text-brand-text-sec hover:border-brand-accent/50 hover:text-brand-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((vid, idx) => (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={Math.min(idx * 80, 400)}
              >
                <AutoplayVideoCard
                  vid={vid}
                  onClick={() => setActiveVideoId(vid.id)}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </main>

      {/* Cinematic Modal Lightbox Player */}
      {activeVideoId && activeVideo && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md p-4">
          {/* Close click-overlay */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActiveVideoId(null)} />

          <div className="relative max-w-6xl w-full bg-[#0F1524] border border-brand-border/60 p-6 md:p-8 flex flex-col lg:flex-row gap-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto lg:overflow-visible">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 text-brand-text-sec/60 hover:text-brand-accent p-2 transition-colors cursor-pointer min-h-11 flex items-center justify-center z-50"
              aria-label="Close video player"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Embedded YouTube Player */}
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
                More Testimonials
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
      <Footer />
    </>
  );
}
