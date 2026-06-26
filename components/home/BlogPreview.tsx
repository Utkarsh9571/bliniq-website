import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import CTAButton from "../ui/CTAButton";

export default function BlogPreview() {
  const posts = [
    {
      title: "Understanding Neuromodulators: What to Expect",
      date: "June 18, 2026",
      excerpt: "An essential guide to preparing for your first neuromodulator treatment.",
    },
    {
      title: "The Ultimate Guide to Advanced Laser Resurfacing",
      date: "May 29, 2026",
      excerpt: "How laser treatments restore skin collagen and treat pigmentation issues.",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-brand-bg">
      <Container>
        <SectionTitle
          title="Clinical Insights & News"
          subtitle="From the Journal"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-brand-accent/60 font-sans text-xs tracking-wider">
                  {post.date}
                </span>
                <h3 className="font-serif text-xl text-brand-text mt-2 mb-3 font-light">
                  {post.title}
                </h3>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div>
                <CTAButton href={`#blog-${index}`}>Read Article</CTAButton>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
