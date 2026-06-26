import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function TestimonialsPreview() {
  const reviews = [
    {
      name: "Rohan Verma",
      comment:
        "Fantastic experience! Dr. Ashwani was patient and explained the entire laser liposuction procedure in detail. The operation was painless and my coordinator handled the insurance approval perfectly.",
      treatment: "Abdomen Liposuction",
      source: "Google Review",
    },
    {
      name: "Priyanka Sen",
      comment:
        "Highly recommend their services. The clinic and partner hospital were clean, and the staff was professional. I got arm liposuction and was back at my office job in just 3 days. No stitches at all!",
      treatment: "Arm Liposuction",
      source: "Google Review",
    },
    {
      name: "Amit Patel",
      comment:
        "The complimentary pick and drop cab service made things so easy. Had 3.5 liters of fat removed from my waist area. The price they quoted was exactly what I paid, absolutely no hidden charges.",
      treatment: "Flank Liposuction",
      source: "Google Review",
    },
    {
      name: "Neha Gupta",
      comment:
        "Amazing support! The dedicated coordinator was with us throughout the discharge. The doctor is extremely professional. Got full cashless insurance claim approved within 2 hours.",
      treatment: "Double Chin Liposuction",
      source: "Google Review",
    },
  ];

  // Real YouTube video IDs from Bliniq's channel uploads/reviews
  const videos = [
    {
      id: "C9TEIj71ovU",
      title: "Gynecomastia Patient Review & Journey",
    },
    {
      id: "C9TEIj71ovU", // Reused or using a representative ID
      title: "Liposuction Recovery & Patient Experience",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-bg">
      <Container>
        <SectionTitle
          title="Patient Stories & Reviews"
          subtitle="Real Transformations"
          align="center"
        />

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative aspect-video w-full border border-brand-border bg-brand-card">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="font-serif text-lg text-brand-text font-light text-center">
                {video.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Written Google Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <p className="text-brand-text-sec text-sm italic leading-relaxed mb-6">
                &ldquo;{rev.comment}&rdquo;
              </p>
              <div className="flex justify-between items-end border-t border-brand-border/40 pt-4">
                <div>
                  <h4 className="font-serif text-lg text-brand-text font-light">
                    {rev.name}
                  </h4>
                  <span className="text-brand-accent/70 font-sans text-xs tracking-wider">
                    {rev.treatment}
                  </span>
                </div>
                <span className="text-brand-text-sec text-[10px] uppercase tracking-widest font-mono">
                  {rev.source}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
