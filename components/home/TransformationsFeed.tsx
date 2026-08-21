"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import PatientCaseModal from "../gallery/PatientCaseModal";
import { GALLERY_CASES, GalleryCase } from "@/content/gallery";
import { trackEvent } from "@/lib/analytics";

interface SocialPost {
  id: number;
  feedType: "instagram" | "case";
  caseId?: string; // Linked to GalleryCase.caseId
  caption: string;
  // Instagram specific fields:
  mediaType?: "image" | "video";
  media?: string;
  url?: string;
  procedure?: string;
}

const ROW1_POSTS: SocialPost[] = [
  {
    "id": 104,
    "feedType": "case",
    "caseId": "breast-lift-case-1",
    "caption": "Post-pregnancy surgical lift and restoring natural contour volume."
  },
  {
    "id": 105,
    "feedType": "case",
    "caseId": "blepharoplasty-case-1",
    "caption": "Upper and lower eyelid rejuvenation, eliminating heavy skin folds."
  },
  {
    "id": 107,
    "feedType": "case",
    "caseId": "butt-augmentation-case-1",
    "caption": "Clinical contouring study displaying enhanced shape and projection."
  },
  {
    "id": 108,
    "feedType": "case",
    "caseId": "rhinoplasty-case-01",
    "caption": "Rhinoplasty structural reconstruction, refining bridge projection & tip support."
  }
];

const ROW2_POSTS: SocialPost[] = [
  {
    "id": 203,
    "feedType": "case",
    "caseId": "lip-reduction-case-1",
    "caption": "Volume reduction and structural refinement of lower lip. Balanced profile."
  },
  {
    "id": 205,
    "feedType": "case",
    "caseId": "axillary-breast-excision-case-1",
    "caption": "Excision of accessory underarm breast tissue. Safe daycare correction."
  },
  {
    "id": 206,
    "feedType": "case",
    "caseId": "breast-implants-mtf-case-1",
    "caption": "Feminization breast implants augmentation. Proportional result."
  },
  {
    "id": 208,
    "feedType": "case",
    "caseId": "gynecomastia-correction-case-23",
    "caption": "Daycare surgical correction of grade 2 gynecomastia. Symmetrical chest contour."
  },
  {
    "id": 209,
    "feedType": "case",
    "caseId": "buccal-fat-removal-case-01",
    "caption": "Buccal fat pad excision resulting in structural cheek hollow definition."
  },
  {
    "id": 210,
    "feedType": "case",
    "caseId": "neck-lift-case-01",
    "caption": "Submentoplasty and neck lift correction. Defined jawline profile."
  }
];

export default function TransformationsFeed() {
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  // Modal State
  const [activeCase, setActiveCase] = useState<GalleryCase | null>(null);
  const [activeInstaPost, setActiveInstaPost] = useState<SocialPost | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const openInstaModal = (post: SocialPost, rowNum: number) => {
    setActiveInstaPost(post);
    setActiveRow(rowNum);
    
    trackEvent({
      action: "instagram_post_open",
      category: "Engagement",
      label: post.procedure || "Instagram"
    });

    if (rowNum === 1) {
      setRow1Paused(true);
    } else if (rowNum === 2) {
      setRow2Paused(true);
    }
  };

  const openCaseModal = (resolvedCase: GalleryCase, rowNum: number) => {
    setActiveCase(resolvedCase);
    setActiveRow(rowNum);

    trackEvent({
      action: "local_case_open",
      category: "Engagement",
      label: resolvedCase.title
    });

    if (rowNum === 1) {
      setRow1Paused(true);
    } else if (rowNum === 2) {
      setRow2Paused(true);
    }
  };

  const closeInstaModal = () => {
    if (activeRow === 1) {
      setRow1Paused(false);
    } else if (activeRow === 2) {
      setRow2Paused(false);
    }
    setActiveInstaPost(null);
    setActiveRow(null);
  };

  const closeCaseModal = () => {
    if (activeRow === 1) {
      setRow1Paused(false);
    } else if (activeRow === 2) {
      setRow2Paused(false);
    }
    setActiveCase(null);
    setActiveRow(null);
  };

  const getPaddedItems = (items: SocialPost[]) => {
    let padded = [...items];
    // Pad array so there are at least 10 items in the marquee loop, preventing viewport gaps
    while (padded.length > 0 && padded.length < 12) {
      padded = [...padded, ...items];
    }
    return padded;
  };

  const row1Items = getPaddedItems(ROW1_POSTS);
  const row2Items = getPaddedItems(ROW2_POSTS);

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#0B0F19] text-brand-text border-b border-brand-border/40 overflow-hidden relative font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.02)_0%,transparent_85%)] pointer-events-none" />

      {/* Marquee Animations */}
      <style jsx global>{`
        @keyframes marqueeLeftFast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRightFast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .transform-marquee-container {
          display: flex;
          width: max-content;
          gap: 1.5rem;
        }
        .animate-transform-left {
          animation: marqueeLeftFast 90s linear infinite;
        }
        .animate-transform-right {
          animation: marqueeRightFast 90s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-transform-left {
            animation-duration: 120s;
          }
          .animate-transform-right {
            animation-duration: 120s;
          }
        }
        .paused-state {
          animation-play-state: paused !important;
        }
      `}</style>

      <Container>
        <SectionTitle
          title="Patient Transformations"
          subtitle="Social Highlights & Clinical Transformations"
          align="center"
        />
      </Container>

      {/* Marquee rows */}
      <div className="mt-16 flex flex-col gap-6 w-full relative">
        
        {/* Row 1: Left direction */}
        <div 
          className="w-full overflow-x-auto md:overflow-hidden touch-pan-x flex"
          onMouseEnter={() => setRow1Paused(true)}
          onMouseLeave={() => { if (!activeInstaPost && !activeCase) setRow1Paused(false); }}
          onTouchStart={() => setRow1Paused(true)}
          onTouchEnd={() => { if (!activeInstaPost && !activeCase) setRow1Paused(false); }}
        >
          {row1Items.length > 0 && (
            <div className={`transform-marquee-container animate-transform-left ${row1Paused ? "paused-state" : ""}`}>
              {row1Items.map((post, idx) => (
                <MarqueeCard key={`${post.id}-${idx}`} post={post} rowNum={1} onOpenInsta={openInstaModal} onOpenCase={openCaseModal} />
              ))}
              {row1Items.map((post, idx) => (
                <MarqueeCard key={`dup1-${post.id}-${idx}`} post={post} rowNum={1} onOpenInsta={openInstaModal} onOpenCase={openCaseModal} />
              ))}
            </div>
          )}
        </div>

        {/* Row 2: Right direction */}
        <div 
          className="w-full overflow-x-auto md:overflow-hidden touch-pan-x hidden md:flex"
          onMouseEnter={() => setRow2Paused(true)}
          onMouseLeave={() => { if (!activeInstaPost && !activeCase) setRow2Paused(false); }}
          onTouchStart={() => setRow2Paused(true)}
          onTouchEnd={() => { if (!activeInstaPost && !activeCase) setRow2Paused(false); }}
        >
          {row2Items.length > 0 && (
            <div className={`transform-marquee-container animate-transform-right ${row2Paused ? "paused-state" : ""}`}>
              {row2Items.map((post, idx) => (
                <MarqueeCard key={`${post.id}-${idx}`} post={post} rowNum={2} onOpenInsta={openInstaModal} onOpenCase={openCaseModal} />
              ))}
              {row2Items.map((post, idx) => (
                <MarqueeCard key={`dup2-${post.id}-${idx}`} post={post} rowNum={2} onOpenInsta={openInstaModal} onOpenCase={openCaseModal} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Instagram Post Detail Modal Lightbox */}
      {activeInstaPost && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-md p-4 animate-fade-in">
          <div className="absolute inset-0 cursor-default" onClick={closeInstaModal} />
          
          <div className="relative max-w-4xl w-full bg-[#0F1524] border border-brand-border/60 p-6 md:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 shadow-2xl z-10 rounded text-left max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closeInstaModal}
              className="absolute top-4 right-4 text-brand-text-sec/60 hover:text-brand-accent p-2 transition-colors cursor-pointer min-h-11 flex items-center justify-center z-50"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Post Media */}
            <div className="md:w-1/2 relative aspect-square bg-[#0B0F19] border border-brand-border/40 overflow-hidden shrink-0">
              <Image
                src={activeInstaPost.media || ""}
                alt={activeInstaPost.procedure || "Instagram highlight"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {activeInstaPost.mediaType === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/90 flex items-center justify-center text-[#0B0F19]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 pl-0.5">
                      <path d="M8 5.14v14l11-7-11-7Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Details & Instagram Link */}
            <div className="md:w-1/2 flex flex-col justify-between py-2">
              <div className="space-y-4">
                <span className="text-brand-accent text-xs font-mono uppercase tracking-[0.2em] font-semibold block">
                  {activeInstaPost.procedure} &bull; SOCIAL FEED
                </span>
                <p className="text-brand-text text-sm sm:text-base leading-relaxed font-sans">
                  {activeInstaPost.caption}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-border/30 mt-6 flex flex-col gap-4">
                <a 
                  href={activeInstaPost.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => trackEvent({ action: "instagram_click", category: "Outbound Clicks", label: activeInstaPost.procedure || "Instagram" })}
                >
                  <Button variant="primary" className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                    View on Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shared Reusable Modal for Patient Cases */}
      <PatientCaseModal
        isOpen={activeCase !== null}
        activeCase={activeCase}
        onClose={closeCaseModal}
      />
    </section>
  );
}

function MarqueeCard({
  post,
  rowNum,
  onOpenInsta,
  onOpenCase
}: {
  post: SocialPost;
  rowNum: number;
  onOpenInsta: (post: SocialPost, rowNum: number) => void;
  onOpenCase: (resolvedCase: GalleryCase, rowNum: number) => void;
}) {
  if (post.feedType === "case") {
    // Resolve patient case details from content/gallery.ts
    const resolvedCase = GALLERY_CASES.find(c => c.caseId === post.caseId);
    if (!resolvedCase) return null;

    return (
      <div 
        onClick={() => onOpenCase(resolvedCase, rowNum)}
        className="w-56 sm:w-64 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 overflow-hidden hover:border-brand-accent/50 transition-all duration-350 cursor-pointer select-none group"
      >
        {/* Cover Thumbnail — Complete uncropped image */}
        <div className="relative aspect-square w-full bg-[#0B0F19] overflow-hidden border-b border-brand-border/30 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedCase.coverImage}
            alt={resolvedCase.title}
            className="w-full h-full object-contain group-hover:scale-101 transition-transform duration-700 block"
            loading="lazy"
          />
          
          {/* Case indicator badge */}
          <span className="absolute top-2 right-2 bg-brand-bg/95 border border-brand-border px-2 py-0.5 text-[8px] font-mono tracking-wider uppercase text-brand-accent z-10">
            {resolvedCase.images.length} Photos
          </span>
        </div>

        {/* Info */}
        <div className="p-5 text-left space-y-2">
          <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono font-semibold block">
            {resolvedCase.category} &bull; Case File
          </span>
          <p className="text-brand-text-sec text-[11px] leading-relaxed font-sans line-clamp-2">
            {post.caption}
          </p>
        </div>
      </div>
    );
  }

  // Instagram Card
  return (
    <div 
      onClick={() => onOpenInsta(post, rowNum)}
      className="w-56 sm:w-64 shrink-0 bg-[#0F1524]/65 border border-brand-border/40 overflow-hidden hover:border-brand-accent/50 transition-all duration-350 cursor-pointer select-none group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-square w-full bg-[#0B0F19] overflow-hidden border-b border-brand-border/30">
        <Image
          src={post.media || ""}
          alt={post.procedure || "Instagram highlight"}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {/* Play Icon overlay for video */}
        {post.mediaType === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-brand-accent/90 group-hover:bg-brand-accent group-hover:scale-110 flex items-center justify-center text-[#0B0F19] pl-0.5 shadow-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M8 5.14v14l11-7-11-7Z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 text-left space-y-2">
        <span className="text-brand-accent text-[9px] uppercase tracking-[0.2em] font-mono font-semibold block">
          {post.procedure}
        </span>
        <p className="text-brand-text-sec text-[11px] leading-relaxed font-sans line-clamp-2">
          {post.caption}
        </p>
      </div>
    </div>
  );
}
