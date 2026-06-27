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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Case 1: Knee Liposuction */}
          <div className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage="/uploads/2021/06/Before-and-after-knee-liposuction-1296x728-slide1-1-1-1024x575.jpg"
              afterImage="/uploads/2021/06/Before-and-after-knee-liposuction-1296x728-slide1-1-1-1024x575.jpg"
              className="aspect-3/4"
            />
            <div className="text-center md:text-left mt-2">
              <h3 className="font-serif text-xl text-brand-text font-light">
                Knee Liposuction
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-brand-text-sec font-mono">
                WordPress Upload Archive
              </span>
            </div>
          </div>

          {/* Case 2: Gynecomastia Chest Contouring */}
          <div className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage="/uploads/2023/12/Gynecomastia-1-724x1024.jpeg"
              afterImage="/uploads/2023/12/Gynecomastia-1-724x1024.jpeg"
              className="aspect-3/4"
            />
            <div className="text-center md:text-left mt-2">
              <h3 className="font-serif text-xl text-brand-text font-light">
                Gynecomastia Reduction
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-brand-text-sec font-mono">
                WordPress Upload Archive
              </span>
            </div>
          </div>

          {/* Case 3: Tummy Contouring */}
          <div className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage="/uploads/2023/12/Tummy-Tuck-1-724x1024.jpeg"
              afterImage="/uploads/2023/12/Tummy-Tuck-1-724x1024.jpeg"
              className="aspect-3/4"
            />
            <div className="text-center md:text-left mt-2">
              <h3 className="font-serif text-xl text-brand-text font-light">
                Tummy Tuck / Abdomen Lipo
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-brand-text-sec font-mono">
                WordPress Upload Archive
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
