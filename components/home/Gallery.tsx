import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle
          title="Clinical Transformations"
          subtitle="Before & After Gallery"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-brand-text font-light text-center md:text-left">
              Laser Liposuction (Abdomen)
            </h3>
            <BeforeAfterSlider
              beforeImage="/lipo-before.png"
              afterImage="/lipo-after.png"
            />
            <p className="text-brand-text-sec text-sm leading-relaxed text-center md:text-left">
              Significant abdominal contouring and visible skin tightening achieved following a
              45-minute laser fat reduction procedure.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-brand-text font-light text-center md:text-left">
              Gynecomastia Chest Reduction
            </h3>
            <BeforeAfterSlider
              beforeImage="/gynecomastia-before.png"
              afterImage="/gynecomastia-after.png"
            />
            <p className="text-brand-text-sec text-sm leading-relaxed text-center md:text-left">
              Complete removal of enlarged glandular tissue, restoring a flat chest contour with
              micro-incisions hidden in the armpit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
