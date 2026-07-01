"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { GALLERY_CASES } from "@/content/gallery";

const CATEGORIES = ["All", "Gynecomastia", "Liposuction", "Tummy Tuck"];

export default function PictureGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCases = selectedCategory === "All"
    ? GALLERY_CASES
    : GALLERY_CASES.filter(c => c.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text font-sans">
        <Container>
          <SectionTitle
            title="Clinical Pictures Gallery"
            subtitle="Procedure Transformations"
            align="center"
          />
          <p className="text-center text-brand-text-sec text-xs sm:text-sm max-w-2xl mx-auto mt-4 mb-10 font-sans">
            Archive of patient before & after records from the BLINIQ Delhi clinical database.
          </p>

          {/* Category Filter Tabs */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCases.map((c, i) => (
              <Card key={i} className="flex flex-col p-4 bg-brand-bg-sec hover:border-brand-accent/50 transition-all duration-350">
                <div className="relative w-full aspect-4/3 border border-brand-border bg-brand-card overflow-hidden mb-4">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] tracking-widest text-brand-accent uppercase block font-semibold mb-1">
                  {c.category}
                </span>
                <h4 className="font-serif text-base text-brand-text font-medium">{c.title}</h4>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
