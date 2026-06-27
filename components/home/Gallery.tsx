import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-brand-bg-sec text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Clinical Gallery"
          subtitle="Before & After Results"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          {/* Case 1: Liposuction */}
          <div className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage="/lipo_before_1782474133850.png"
              afterImage="/lipo_after_1782474148532.png"
              className="aspect-4/3 border border-brand-border/60"
            />
            <div className="text-center mt-4">
              <h3 className="font-serif text-2xl text-brand-text font-light">
                Liposuction Contouring
              </h3>
              <p className="text-xs text-brand-text-sec mt-1.5 font-sans uppercase tracking-widest">
                Conceptual Demonstration
              </p>
            </div>
          </div>

          {/* Case 2: Gynecomastia Chest Contouring */}
          <div className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage="/gynecomastia_before_1782474167092.png"
              afterImage="/gynecomastia_after_1782474181819.png"
              className="aspect-4/3 border border-brand-border/60"
            />
            <div className="text-center mt-4">
              <h3 className="font-serif text-2xl text-brand-text font-light">
                Gynecomastia Reduction
              </h3>
              <p className="text-xs text-brand-text-sec mt-1.5 font-sans uppercase tracking-widest">
                Conceptual Demonstration
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
