import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getCsvData } from "@/lib/csvParser";
import { homepageImages } from "@/content/homepage-images";

export default function AboutPage() {
  // Extract About Bliniq content (ID 8631)
  const pageContent = getCsvData("data-page-content.csv");
  const aboutPage = pageContent.find((p) => p.ID === "8631") || {
    post_title: "About Bliniq",
    post_content: "<p>BLINIQ Cosmetic Surgery Centre is a premier, state-of-the-art aesthetic clinic located in Dwarka, Delhi. Directed by chief board-certified plastic surgeon Dr. Ashwani Kumar, our clinic provides top-tier cosmetic procedures including high-definition VASER liposuction, gynecomastia corrections, abdominoplasty, and FUE hair restorations.</p><h2>Our Vision & Mission</h2><p>At BLINIQ, our mission is to deliver natural-looking aesthetic outcomes through the safest, most advanced FDA-approved technologies available globally. We prioritize patient confidentiality, medical ethics, and personalized post-operative care, ensuring a luxurious and comfortable environment for every patient's transformation journey.</p>",
  };

  let rawHtml = aboutPage.post_content || "";
  rawHtml = rawHtml.replace(/https?:\/\/(www\.)?bliniq\.in/g, "");
  rawHtml = rawHtml.replace(/\/wp-content\/uploads\//g, "/uploads/");

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text font-sans">
        
        {/* Main Content Section (WP Content) */}
        <section className="pb-16 border-b border-brand-border/40">
          <Container>
            <SectionTitle title={aboutPage.post_title} subtitle="About Our Clinic" align="center" />
            
            <div className="max-w-3xl mx-auto mt-12 bg-brand-bg-sec border border-brand-border p-8 md:p-12 shadow-2xl">
              {/* Render the actual WP HTML content with tailored typographic styling */}
              <div
                className="prose prose-invert max-w-none space-y-6 text-brand-text-sec text-base leading-relaxed
                  [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-brand-accent [&_h2]:font-light [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4"
                dangerouslySetInnerHTML={{ __html: rawHtml }}
              />
            </div>
          </Container>
        </section>

        {/* Section 2: Meet The Chief Surgeon */}
        <section className="py-24 sm:py-32 border-b border-brand-border/40 bg-[#0F1524]/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Real Surgeon Spotlight Asset */}
              <div className="lg:col-span-5 relative aspect-3/4 w-full border border-brand-border bg-brand-card shadow-2xl p-2 group">
                <div className="relative w-full h-full border border-brand-accent/20 overflow-hidden">
                  <Image
                    src="/uploads/2024/02/Dr-Ashwini.jpg"
                    alt="Dr. Ashwani Kumar Chief Surgeon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Surgeon Details */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] font-mono">
                  Meet The Surgeon
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-wide">
                  Dr. Ashwani Kumar
                </h2>
                <div className="text-brand-text-sec text-sm leading-relaxed space-y-4">
                  <p>
                    With over 18 years of clinical surgical experience in plastic, reconstructive, and cosmetic procedures, Dr. Ashwani Kumar leads the surgical team at BLINIQ.
                  </p>
                  <p>
                    He holds a gold medal in General Surgery and an M.Ch in Plastic & Reconstructive Surgery. His expertise covers high-definition body sculpting, abdominoplasty, and delicate facial restoration procedures.
                  </p>
                </div>
                <blockquote className="border-l-2 border-brand-accent pl-4 italic text-brand-text-sec text-sm my-4 font-serif leading-relaxed">
                  "Aesthetics is not about changing who you are; it is about refining and restoring your natural contours with clinical precision."
                </blockquote>
              </div>

            </div>
          </Container>
        </section>

        {/* Section 3: The BLINIQ Experience */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Experience description */}
              <div className="lg:col-span-7 flex flex-col gap-6 lg:order-1 order-2">
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.25em] font-mono">
                  Clinic Culture
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-text leading-tight tracking-wide">
                  The BLINIQ Experience
                </h2>
                <div className="text-brand-text-sec text-sm leading-relaxed space-y-4">
                  <p>
                    At BLINIQ, safety and privacy are the cornerstones of patient care. From your first diagnostic consultation to final post-op clearance, our Dwarka-based clinic offers a warm, luxurious lounge and state-of-the-art sterile operating theaters.
                  </p>
                  <p>
                    Every patient receives custom post-operative support, including compression wear fitting, recovery therapy planning, and 24/7 coordinator accessibility.
                  </p>
                </div>
              </div>

              {/* Right Column: Real Consultation Room Image */}
              <div className="lg:col-span-5 relative aspect-3/2 w-full border border-brand-border bg-brand-card shadow-2xl p-2 lg:order-2 order-1 group">
                <div className="relative w-full h-full border border-brand-accent/20 overflow-hidden">
                  <Image
                    src={homepageImages.consultation.room02}
                    alt="Facial Mapping and Clinical Consultations at BLINIQ"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
