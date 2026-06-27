import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function GalleryPage() {
  const cases = [
    {
      title: "Gynecomastia Reduction - Case 1",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-2.jpeg"
    },
    {
      title: "Gynecomastia Reduction - Case 2",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-3.jpeg"
    },
    {
      title: "Gynecomastia Reduction - Case 3",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-4.jpeg"
    },
    {
      title: "Gynecomastia Reduction - Case 4",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-5.jpeg"
    },
    {
      title: "Gynecomastia Reduction - Case 5",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-6.jpeg"
    },
    {
      title: "Gynecomastia Reduction - Case 6",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-7.jpeg"
    },
    {
      title: "Scarless Gynecomastia Excision",
      category: "Gynecomastia",
      src: "/uploads/2023/12/Gynecomastia-Scarless.jpeg"
    },
    {
      title: "High Definition Liposuction - Tummy 360",
      category: "Liposuction",
      src: "/uploads/2023/12/Liposuction-Tummy360.jpeg"
    },
    {
      title: "Thigh Liposuction & Contouring",
      category: "Liposuction",
      src: "/uploads/2023/12/Thigh-Liposuction.jpeg"
    },
    {
      title: "Tummy Tuck Abdominoplasty - Case 1",
      category: "Tummy Tuck",
      src: "/uploads/2023/12/Tummy-Tuck-1.jpeg"
    },
    {
      title: "Upper Arms Liposuction & Contouring",
      category: "Liposuction",
      src: "/uploads/2023/12/Arms-Liposuction.jpeg"
    }
  ];

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Patient Clinical Gallery"
            subtitle="Before & After Transformations"
            align="center"
          />

          <p className="text-center text-brand-text-sec text-sm max-w-2xl mx-auto mt-4 mb-16 font-sans">
            Real patient results as archived on the BLINIQ clinical database. 
            All images are displayed exactly as captured, without modification or split-screen sliders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {cases.map((c, index) => (
              <Card key={index} className="flex flex-col p-6 hover:border-brand-accent/50 transition-all duration-350 bg-brand-bg-sec">
                <div className="text-left mb-4">
                  <span className="text-[10px] tracking-widest text-brand-accent uppercase block font-semibold">
                    {c.category}
                  </span>
                  <h3 className="font-serif text-xl text-brand-text mt-1 font-light">
                    {c.title}
                  </h3>
                </div>

                <div className="relative w-full aspect-4/3 border border-brand-border overflow-hidden bg-brand-card">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                <div className="border-t border-brand-border/40 mt-4 pt-3 flex justify-between items-center text-[10px] text-brand-text-sec/60 font-mono">
                  <span>BLINIQ Database File</span>
                  <span>{c.src.split("/").pop()}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
