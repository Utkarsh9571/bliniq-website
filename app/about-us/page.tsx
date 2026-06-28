import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getCsvData } from "@/lib/csvParser";

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
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle title={aboutPage.post_title} subtitle="About Us" align="center" />
          
          <div className="max-w-3xl mx-auto mt-12 bg-brand-bg-sec border border-brand-border p-8 md:p-12">
            {/* Render the actual WP HTML content with tailored typographic styling */}
            <div
              className="prose prose-invert max-w-none space-y-6 text-brand-text-sec text-base leading-relaxed font-sans
                [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-brand-accent [&_h2]:font-light [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4"
              dangerouslySetInnerHTML={{ __html: rawHtml }}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
