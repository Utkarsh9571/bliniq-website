import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function SurgeryVideosSection() {
  const videos = [
    {
      id: "S5_plEeCI58",
      title: "Patient Gynecomastia Journey",
      desc: "Real experience and recovery timeline shared by a patient after gynecomastia surgery."
    },
    {
      id: "G5Y8LqSfk60",
      title: "Liposuction & Body Contouring Review",
      desc: "Detailed feedback on surgical results and care coordination at the clinic."
    },
    {
      id: "eMJn0Iajhpk",
      title: "Tummy Tuck Recovery Story",
      desc: "Follow-up discussion highlighting post-operative healing and surgeon support."
    },
    {
      id: "rXLexSCMZ88",
      title: "Puffy Nipple Treatment Outcome",
      desc: "Patient testimonial outlining satisfaction with scarless clinical excision."
    }
  ];

  return (
    <section id="surgery-videos" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Patient Video Testimonials"
          subtitle="Surgery Journeys"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
          {videos.map((vid, idx) => (
            <div key={idx} className="flex flex-col gap-4 bg-brand-bg-sec border border-brand-border p-6 hover:border-brand-accent/50 transition-all duration-350">
              <div className="relative aspect-video w-full border border-brand-border/60 bg-brand-card">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-left mt-2">
                <h4 className="font-serif text-lg text-brand-text font-medium">{vid.title}</h4>
                <p className="text-xs text-brand-text-sec mt-1.5 leading-relaxed font-sans">{vid.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
