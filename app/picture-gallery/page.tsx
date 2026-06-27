import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function PictureGalleryPage() {
  const cases = [
    { title: "Gynecomastia Case 1", src: "/uploads/2023/12/Gynecomastia-2.jpeg" },
    { title: "Gynecomastia Case 2", src: "/uploads/2023/12/Gynecomastia-3.jpeg" },
    { title: "Gynecomastia Case 3", src: "/uploads/2023/12/Gynecomastia-4.jpeg" },
    { title: "Tummy Contouring Case", src: "/uploads/2023/12/Liposuction-Tummy360.jpeg" },
    { title: "Tummy Tuck Case", src: "/uploads/2023/12/Tummy-Tuck-1.jpeg" },
    { title: "Arms Liposuction Case", src: "/uploads/2023/12/Arms-Liposuction.jpeg" }
  ];

  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Clinical Pictures Gallery"
            subtitle="Procedure Transformations"
            align="center"
          />
          <p className="text-center text-brand-text-sec text-xs sm:text-sm max-w-2xl mx-auto mt-4 mb-16 font-sans">
            Archive of patient before & after records from the BLINIQ Delhi clinical database.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <Card key={i} className="flex flex-col p-4 bg-brand-bg-sec hover:border-brand-accent/50 transition-all duration-350">
                <div className="relative w-full aspect-4/3 border border-brand-border bg-brand-card overflow-hidden mb-4">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
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
