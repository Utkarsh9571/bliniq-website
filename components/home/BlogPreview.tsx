import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { getCsvData } from "@/lib/csvParser";

export default function BlogPreview() {
  const blogs = getCsvData("data-blogs.csv").slice(0, 3); // Top 3 posts

  const getBlogImage = (index: number) => {
    const images = [
      "/uploads/2023/12/Liposuction-Tummy360.jpeg",
      "/uploads/2020/08/Doctor_01.jpg",
      "/uploads/2024/02/Grade-2-for-gynecomastia-treatment.jpg",
    ];
    return images[index % images.length];
  };

  return (
    <section id="blog" className="py-32 bg-brand-bg text-brand-text border-b border-brand-border/40">
      <Container>
        <SectionTitle
          title="Latest Insights"
          subtitle="From the Clinical Journal"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {blogs.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.post_name}`}
              className="group flex flex-col border border-brand-border bg-brand-card hover:border-brand-accent/30 transition-all duration-500"
            >
              {/* Blog Thumbnail */}
              <div className="relative aspect-16/10 w-full overflow-hidden border-b border-brand-border">
                <Image
                  src={getBlogImage(index)}
                  alt={post.post_title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>

              {/* Blog Details */}
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <span className="text-brand-accent/60 text-[10px] tracking-widest font-mono uppercase block mb-3">
                    {post.post_date ? post.post_date.split(" ")[0] : "Date Pending"}
                  </span>
                  <h3 className="font-serif text-xl text-brand-text group-hover:text-brand-accent transition-colors duration-300 font-light leading-snug line-clamp-2">
                    {post.post_title}
                  </h3>
                  <p className="text-brand-text-sec text-xs leading-relaxed mt-4 font-sans line-clamp-2">
                    Content pending migration from WordPress slug: {post.post_name}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border/30 flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-brand-accent">
                  <span>Read Article</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
