"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HEADER_NAVIGATION_DATA } from "@/lib/navigation";

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({ mobile = false, onLinkClick }: NavigationProps) {
  // Desktop hover active index states
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // Mobile navigation accordion active states
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4 text-left w-full">
        {HEADER_NAVIGATION_DATA.map((section) => {
          const isExpanded = expandedSection === section.title;

          if (section.type === "single") {
            return (
              <Link
                key={section.title}
                href={section.href || "/"}
                onClick={onLinkClick}
                className="py-3.5 border-b border-brand-border/30 text-brand-text/90 hover:text-brand-accent font-sans text-sm tracking-[0.2em] uppercase transition-colors"
              >
                {section.title}
              </Link>
            );
          }

          return (
            <div key={section.title} className="border-b border-brand-border/30 py-2">
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.title)}
                className="w-full flex items-center justify-between py-2 text-brand-text/90 hover:text-brand-accent font-sans text-sm tracking-[0.2em] uppercase transition-colors"
              >
                <span>{section.title}</span>
                <span className={`text-xs transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {isExpanded && (
                <div className="pl-4 mt-2 mb-4 space-y-4 animate-fade-in">
                  {section.categories?.map((cat) => (
                    <div key={cat.title} className="space-y-2">
                      <span className="text-[10px] text-brand-accent uppercase tracking-widest font-semibold block">
                        {cat.title}
                      </span>
                      <div className="space-y-2 pl-2 border-l border-brand-border/30">
                        {cat.procedures.map((p) => (
                          <Link
                            key={p.title}
                            href={`/${p.slug}`}
                            onClick={onLinkClick}
                            className="block py-1 text-xs text-brand-text-sec hover:text-brand-accent transition-colors"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {section.items?.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={onLinkClick}
                      className="block text-xs text-brand-text-sec hover:text-brand-accent transition-colors py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );
  }

  // Desktop Render
  return (
    <nav className="hidden xl:flex items-center gap-6 z-50 relative">
      {HEADER_NAVIGATION_DATA.map((section, idx) => {
        const isHovered = activeSection === idx;

        if (section.type === "single") {
          return (
            <Link
              key={section.title}
              href={section.href || "/"}
              className="relative text-brand-text-sec hover:text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 py-4 font-semibold group"
            >
              <span>{section.title}</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          );
        }

        return (
          <div
            key={section.title}
            className={section.type === "mega" ? "static" : "relative"}
            onMouseEnter={() => setActiveSection(idx)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <button className="relative text-brand-text-sec hover:text-brand-accent font-sans text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 py-4 flex items-center gap-1.5 font-semibold cursor-pointer group">
              <span>{section.title}</span>
              <span className="text-[7px] opacity-60 transition-transform duration-200 group-hover:translate-y-0.5">▼</span>
              <span className="absolute bottom-1 left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </button>

            {/* Dropdown container */}
            <div
              className={`absolute top-full pt-2 transition-all duration-250 ease-out z-50 ${
                section.type === "mega" 
                  ? "left-0 right-0 mx-auto w-195" 
                  : "left-1/2 -translate-x-1/2 w-56"
              } ${
                isHovered
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
              }`}
            >
              {/* Mega Menu panel */}
              {section.type === "mega" && (
                <div className="w-full bg-[#0B0F19]/98 backdrop-blur-xl border border-brand-border/60 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
                  {section.categories?.map((cat) => (
                    <div key={cat.title} className="flex flex-col gap-3">
                      <span className="text-[9px] text-brand-accent uppercase tracking-widest font-semibold border-b border-brand-border/30 pb-1.5 mb-1 block">
                        {cat.title}
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        {cat.procedures.map((p) => (
                          <Link
                            key={p.title}
                            href={`/${p.slug}`}
                            onClick={onLinkClick}
                            className="group/item flex items-center gap-3 hover:bg-brand-accent/5 p-2 rounded-lg transition-all duration-200 border border-transparent hover:border-brand-border/30"
                          >
                            {p.image && (
                              <div className="relative w-12 h-12 rounded bg-brand-card overflow-hidden shrink-0 border border-brand-border/40">
                                <Image
                                  src={p.image}
                                  alt={p.title}
                                  fill
                                  sizes="48px"
                                  className="object-cover group-hover/item:scale-105 transition-all duration-300"
                                />
                              </div>
                            )}
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] text-brand-text font-serif group-hover/item:text-brand-accent transition-colors font-semibold truncate leading-tight">
                                {p.title}
                              </span>
                              <span className="text-[9px] text-brand-text-sec/60 leading-normal line-clamp-2 mt-0.5 font-sans">
                                {p.description || "View treatment guidelines"}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Simple Dropdown list */}
              {section.type === "dropdown" && (
                <div className="w-full bg-[#0B0F19]/98 backdrop-blur-xl border border-brand-border/60 rounded-xl p-4 shadow-2xl flex flex-col gap-2.5">
                  {section.items?.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="text-xs text-brand-text-sec hover:text-brand-accent py-1.5 px-2.5 rounded transition-all hover:bg-brand-accent/5 font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
}
