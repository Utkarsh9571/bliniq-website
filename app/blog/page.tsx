import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTAButton from "@/components/ui/CTAButton";
import { Metadata } from "next";
import legitimatePages from "@/content/migrated/legitimate-pages.json";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Clinical News & Insights | BLINIQ Clinic Delhi",
  description: "Explore the BLINIQ cosmetic surgery journal for medical guides on FUE hair transplants, Gynecomastia recovery, VASER body contouring, and skin aesthetic technologies.",
  path: "blog"
});

export default function BlogPage() {
  const blogs = legitimatePages.filter((p) => p.type === "blog");

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Clinical News & Insights"
            subtitle="Scientific Articles"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogs.map((post, index) => (
              <Card key={index} className="flex flex-col justify-between min-h-55">
                <div>
                  <span className="text-brand-accent/60 text-xs tracking-wider font-mono">
                    {post.date ? post.date.split(" ")[0] : "Date Pending"}
                  </span>
                  <h3 className="font-serif text-lg text-brand-text mt-2 mb-3 font-light leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-brand-text-sec text-xs leading-relaxed mb-6 font-sans">
                    Read the detailed clinical journal entry explaining advanced procedural methods, post-operative recovery timelines, and surgical technology updates.
                  </p>
                </div>
                <div>
                  <CTAButton href={`/${post.slug}`}>Read Article</CTAButton>
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
