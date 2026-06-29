import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import legitimatePages from "@/content/migrated/legitimate-pages.json";
import seoPages from "@/content/migrated/seo-pages.json";
import { getPageMetadata, getBreadcrumbSchemaJson } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return legitimatePages.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Find in seo-pages.json first (highest priority)
  const seoMatch = seoPages.find((s) => s.slug === slug);
  const pageMatch = legitimatePages.find((p) => p.slug === slug);
  
  if (!seoMatch && !pageMatch) {
    return {};
  }

  const title = seoMatch?.metaTitle || pageMatch?.yoast?.metaTitle || pageMatch?.title || "Cosmetic Surgery & Treatments";
  const description = seoMatch?.metaDescription || pageMatch?.yoast?.metaDescription || (pageMatch?.content ? pageMatch.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..." : "Advanced aesthetic solutions at BLINIQ Clinic.");
  const canonicalUrl = seoMatch?.canonical || pageMatch?.yoast?.canonical || `https://bliniq.in/${slug}`;

  return getPageMetadata({
    title: title.includes("|") ? title : `${title} | BLINIQ Delhi`,
    description,
    path: `/${slug}`
  });
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = legitimatePages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const { title, content, type, featuredImage } = page;

  // Breadcrumbs schema
  const breadcrumbs = [
    { name: "Home", item: "https://bliniq.in" },
    { name: type.replace("-", " "), item: `https://bliniq.in/${slug}` }
  ];
  const breadcrumbSchema = getBreadcrumbSchemaJson(breadcrumbs);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg text-brand-text">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Dynamic Layout Rendering based on page type */}
        {type === "blog" ? (
          /* --- ARTICLE / BLOG LAYOUT --- */
          <article className="py-20 font-sans">
            <Container>
              <div className="max-w-3xl mx-auto">
                <div className="text-xs uppercase tracking-widest text-brand-text-sec mb-4 flex items-center gap-2">
                  <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text mb-6 leading-tight">
                  {title}
                </h1>

                {featuredImage && (
                  <div className="relative aspect-video w-full mb-10 border border-brand-border/40 overflow-hidden">
                    <Image
                      src={featuredImage}
                      alt={title}
                      fill
                      priority
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}

                <div 
                  className="prose prose-invert max-w-none text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </Container>
          </article>
        ) : type === "doctor" ? (
          /* --- DOCTOR PROFILE LAYOUT --- */
          <section className="py-20 font-sans">
            <Container>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-4">
                  <div className="relative aspect-[3/4] w-full border border-brand-border bg-brand-card overflow-hidden">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-text-sec text-xs uppercase tracking-widest">
                        Dr. Ashwani Kumar
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.2em] font-mono">
                    Chief Surgeon
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-light text-brand-text">
                    {title}
                  </h1>
                  <div 
                    className="prose prose-invert text-brand-text-sec text-sm leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>
            </Container>
          </section>
        ) : (type === "procedure" || type === "seo-page" || type === "service") ? (
          /* --- PROCEDURE / TREATMENT LAYOUT --- */
          <>
            <section className="relative pt-32 pb-20 border-b border-brand-border/40 bg-brand-bg-sec font-sans">
              <Container>
                <div className="text-xs uppercase tracking-widest text-brand-text-sec mb-4 flex items-center gap-2">
                  <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-brand-accent">{title}</span>
                </div>
                
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.2em] font-mono">
                  Clinical Specialty
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text mt-3 tracking-wide">
                  {title}
                </h1>
              </Container>
            </section>

            <section className="py-20 font-sans">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Left Column: Content Narrative */}
                  <div className="lg:col-span-8 space-y-12">
                    {featuredImage && (
                      <div className="relative aspect-video w-full bg-brand-bg-sec border border-brand-border/40 overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={title}
                          fill
                          priority
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    )}

                    <div 
                      className="prose prose-invert max-w-none text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>

                  {/* Right Column: Dynamic Evaluation Card */}
                  <div className="lg:col-span-4">
                    <div className="sticky top-28 bg-brand-card border border-brand-border p-6 md:p-8 rounded-none">
                      <h3 className="font-serif text-2xl font-light text-brand-text mb-2">
                        Request Evaluation
                      </h3>
                      <p className="text-brand-text-sec text-xs mb-6 leading-relaxed">
                        Consult with Dr. Ashwani Kumar. Get a customized treatment blueprint and price quote.
                      </p>
                      
                      <form className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Your Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
                            placeholder="Full Name"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
                            placeholder="10-digit mobile"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Email Address</label>
                          <input 
                            type="email" 
                            required
                            className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none" 
                            placeholder="name@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Select Procedure</label>
                          <select 
                            defaultValue={slug}
                            className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none"
                          >
                            <option value={slug}>{title}</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-brand-text-sec mb-1.5">Additional Notes</label>
                          <textarea 
                            rows={3}
                            className="w-full bg-brand-bg border border-brand-border/65 px-4 py-2.5 text-xs text-brand-text focus:outline-none focus:border-brand-accent transition-colors rounded-none resize-none" 
                            placeholder="Describe your requirements..."
                          />
                        </div>
                        <Button type="submit" variant="primary" className="w-full mt-2 text-xs py-3.5 uppercase tracking-widest font-semibold min-h-11 flex items-center justify-center">
                          Book Evaluation
                        </Button>
                      </form>
                      <p className="text-[10px] text-center text-brand-text-sec/60 mt-4 leading-relaxed">
                        🔒 100% confidential. Support: +91 72900 62111
                      </p>
                    </div>
                  </div>

                </div>
              </Container>
            </section>
          </>
        ) : (
          /* --- CORE PAGE DEFAULT LAYOUT --- */
          <section className="py-20 font-sans">
            <Container>
              <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-3xl sm:text-4xl font-light text-brand-text mb-8">
                  {title}
                </h1>
                <div 
                  className="prose prose-invert max-w-none text-brand-text-sec text-sm leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
