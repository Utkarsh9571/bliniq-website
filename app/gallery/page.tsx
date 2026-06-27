import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Before & After Gallery"
            subtitle="Clinical Transformations"
            align="center"
          />

          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Real knee liposuction case from uploads */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl text-brand-text font-light text-center md:text-left">
                Knee Liposuction
              </h3>
              <BeforeAfterSlider
                beforeImage="/uploads/2021/06/Before-and-after-knee-liposuction-1296x728-slide1-1-1-1024x575.jpg"
                afterImage="/uploads/2021/06/Before-and-after-knee-liposuction-1296x728-slide1-1-1-1024x575.jpg"
              />
              <p className="text-brand-text-sec text-sm leading-relaxed text-center md:text-left font-sans">
                WordPress source asset:{" "}
                <code className="text-brand-accent">
                  Before-and-after-knee-liposuction.jpg
                </code>
              </p>
            </div>

            {/* Placeholder for Gynecomastia and other Galleries */}
            <div className="flex flex-col gap-6 justify-center items-center p-8 border border-dashed border-brand-border bg-brand-card min-h-87.5">
              <span className="text-brand-accent text-4xl">✦</span>
              <h3 className="font-serif text-2xl text-brand-text font-light text-center">
                Additional Galleries Pending Migration
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed text-center max-w-sm font-sans">
                Patient gallery will be connected using original WordPress media assets.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
