import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTAButton from "@/components/ui/CTAButton";
import { getCsvData } from "@/lib/csvParser";

export default function BlogPage() {
  const blogs = getCsvData("data-blogs.csv");

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Clinical News & Insights"
            subtitle="WordPress Blog Index"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogs.map((post, index) => (
              <Card key={index} className="flex flex-col justify-between min-h-55">
                <div>
                  <span className="text-brand-accent/60 text-xs tracking-wider font-mono">
                    {post.post_date ? post.post_date.split(" ")[0] : "Date Pending"}
                  </span>
                  <h3 className="font-serif text-lg text-brand-text mt-2 mb-3 font-light leading-snug">
                    {post.post_title}
                  </h3>
                  <p className="text-brand-text-sec text-xs leading-relaxed mb-6 font-sans">
                    Article content and media attachments are pending migration from
                    WordPress slug:{" "}
                    <code className="text-brand-accent font-mono text-[10px]">
                      {post.post_name}
                    </code>
                    .
                  </p>
                </div>
                <div>
                  <CTAButton href={`/blog/${post.post_name}`}>Read Article</CTAButton>
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
