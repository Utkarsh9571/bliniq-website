import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { getCsvData } from "@/lib/csvParser";

export default function DoctorsPage() {
  const doctors = getCsvData("data-doctors.csv");

  const getDoctorImage = (index: number) => {
    const num = (index % 4) + 1; // Doctor_01 to Doctor_04
    return `/uploads/2020/08/Doctor_0${num}-280x330.jpg`;
  };

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Meet Our Clinical Team"
            subtitle="Medical Practitioners"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {doctors.map((doc, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <div className="relative w-48 h-56 mb-6 border border-brand-border overflow-hidden bg-brand-bg-sec">
                  <Image
                    src={getDoctorImage(index)}
                    alt={doc.post_title}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <span className="text-brand-accent font-sans text-xs tracking-widest uppercase font-semibold">
                  Medical Specialist
                </span>
                <h3 className="font-serif text-xl text-brand-text mt-2 font-light">
                  {doc.post_title}
                </h3>
                <p className="text-brand-text-sec text-xs mt-3 font-sans leading-relaxed">
                  Doctor qualifications, specialized procedures, and profile content are
                  pending migration from WordPress slug:{" "}
                  <code className="text-brand-accent font-mono">
                    {doc.post_name}
                  </code>
                  .
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
