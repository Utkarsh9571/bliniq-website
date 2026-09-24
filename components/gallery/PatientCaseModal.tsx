"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { GalleryCase } from "@/content/gallery";

interface PatientCaseModalProps {
  isOpen: boolean;
  activeCase: GalleryCase | null;
  onClose: () => void;
}

export default function PatientCaseModal({
  isOpen,
  activeCase,
  onClose,
}: PatientCaseModalProps) {
  const [prevCaseId, setPrevCaseId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Swipe gesture variables
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Adjust state during render when activeCase changes without cascading useEffect render
  if (activeCase && activeCase.caseId !== prevCaseId) {
    setPrevCaseId(activeCase.caseId);
    setActiveImageIndex(0);
  }

  const nextImage = useCallback(() => {
    if (!activeCase) return;
    setActiveImageIndex(prev => (prev + 1) % activeCase.images.length);
  }, [activeCase]);

  const prevImage = useCallback(() => {
    if (!activeCase) return;
    setActiveImageIndex(prev => (prev - 1 + activeCase.images.length) % activeCase.images.length);
  }, [activeCase]);

  // Keyboard navigation & Escape key binding
  useEffect(() => {
    if (!isOpen || !activeCase) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeCase, onClose, nextImage, prevImage]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !activeCase) return null;

  // Touch handlers for mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md p-4 animate-fade-in">
      {/* Backdrop Close Click-overlay */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      <div className="relative max-w-4xl w-full bg-[#0F1524] border border-brand-border/60 p-6 md:p-8 flex flex-col gap-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto animate-[scaleUp_0.3s_ease-out_forwards]">
        
        {/* Modal Title and Details */}
        <div className="text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-border/20 pb-4">
          <div>
            <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono block mb-1">
              {activeCase.category} &bull; Clinical Case File
            </span>
            <h4 className="font-serif text-lg text-brand-text font-medium leading-tight">
              {activeCase.title}
            </h4>
          </div>
          
          {/* Photo Indicator/Counter */}
          <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-mono text-xs px-3 py-1 tracking-widest shrink-0">
            {activeImageIndex + 1} / {activeCase.images.length}
          </span>
        </div>

        {/* Slider Container with Touch Support — Proportional layout without any cropping */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full min-h-[40vh] md:min-h-[55vh] max-h-[60vh] bg-black border border-brand-border/40 overflow-hidden flex items-center justify-center select-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeCase.images[activeImageIndex]}
            alt={`${activeCase.title} - Photo ${activeImageIndex + 1}`}
            className="max-w-full max-h-[60vh] object-contain block"
          />

          {/* Left Navigation Arrow */}
          {activeCase.images.length > 1 && (
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-bg/85 border border-brand-border text-brand-text hover:text-brand-accent hover:border-brand-accent transition-colors flex items-center justify-center cursor-pointer z-10 shadow-lg min-h-10 min-w-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Right Navigation Arrow */}
          {activeCase.images.length > 1 && (
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-bg/85 border border-brand-border text-brand-text hover:text-brand-accent hover:border-brand-accent transition-colors flex items-center justify-center cursor-pointer z-10 shadow-lg min-h-10 min-w-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>

        {/* Micro Thumbnail Indicators */}
        {activeCase.images.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {activeCase.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 aspect-video bg-black border transition-all duration-300 shrink-0 cursor-pointer overflow-hidden ${
                  activeImageIndex === idx ? "border-brand-accent scale-105" : "border-brand-border/40 opacity-60 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt="Thumbnail indicator"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Close Button */}
        <div className="flex justify-end border-t border-brand-border/20 pt-4">
          <button 
            onClick={onClose}
            className="bg-brand-bg hover:bg-brand-bg-sec border border-brand-border px-6 py-2.5 text-xs uppercase tracking-widest font-mono text-brand-text-sec hover:text-brand-text transition-colors cursor-pointer"
          >
            Close Case File
          </button>
        </div>
      </div>
    </div>
  );
}
