import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import legitimatePages from "@/content/migrated/legitimate-pages.json";
import seoPages from "@/content/migrated/seo-pages.json";
import { getPageMetadata, getBreadcrumbSchemaJson, getProcedurePageSchemaJson } from "@/lib/seo";
import EvaluationForm from "@/components/procedure/EvaluationForm";
import ScrollReveal from "@/components/ui/ScrollReveal";


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

  // Find page description for Service schema details
  const seoMatch = seoPages.find((s) => s.slug === slug);
  const description = seoMatch?.metaDescription || page?.yoast?.metaDescription || (content ? content.replace(/<[^>]*>/g, "").substring(0, 150) + "..." : "Advanced aesthetic solutions at BLINIQ Clinic.");

  // Connected schema graph generation
  let schemaData: unknown;
  if (type === "procedure" || type === "seo-page" || type === "service") {
    schemaData = getProcedurePageSchemaJson(slug, title, description, content);
  } else {
    // Breadcrumbs schema for standard pages
    const breadcrumbs = [
      { name: "Home", item: "https://bliniq.in" },
      { name: type.replace("-", " "), item: `https://bliniq.in/${slug}` }
    ];
    schemaData = getBreadcrumbSchemaJson(breadcrumbs);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg text-brand-text">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Dynamic Layout Rendering based on page type */}
        {type === "blog" ? (
          /* --- ARTICLE / BLOG LAYOUT --- */
          <article className="py-20 font-sans">
            <Container>
              <div className="max-w-3xl mx-auto">
                <ScrollReveal variant="fade-up">
                  <div className="text-xs uppercase tracking-widest text-brand-text-sec mb-4 flex items-center gap-2">
                    <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-text mb-6 leading-tight">
                    {title}
                  </h1>
                </ScrollReveal>

                {featuredImage && (
                  <ScrollReveal variant="image-reveal">
                    <div className="relative aspect-video w-full mb-10 border border-brand-border/40 overflow-hidden">
                      <Image
                        src={featuredImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover transition-all duration-700"
                      />
                    </div>
                  </ScrollReveal>
                )}

                <ScrollReveal variant="fade-up" delay={150}>
                  <div 
                    className="prose prose-invert max-w-none text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </ScrollReveal>
              </div>
            </Container>
          </article>
        ) : type === "doctor" ? (
          /* --- DOCTOR PROFILE LAYOUT --- */
          <section className="py-20 font-sans">
            <Container>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <ScrollReveal variant="image-reveal" className="md:col-span-4">
                  <div className="relative aspect-3/4 w-full border border-brand-border bg-brand-card overflow-hidden">
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
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={150} className="md:col-span-8 space-y-6">
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
                </ScrollReveal>
              </div>
            </Container>
          </section>
        ) : (type === "procedure" || type === "seo-page" || type === "service") ? (
          /* --- PROCEDURE / TREATMENT LAYOUT --- */
          <>
            <section className="relative pt-32 pb-20 border-b border-brand-border/40 bg-brand-bg-sec font-sans">
              <Container>
                <ScrollReveal variant="fade-up">
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
                </ScrollReveal>
              </Container>
            </section>

            <section className="py-20 font-sans">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Left Column: Content Narrative */}
                  <ScrollReveal variant="fade-up" className="lg:col-span-8 space-y-12">
                    {featuredImage && (
                      <div className="relative aspect-video w-full bg-brand-bg-sec border border-brand-border/40 overflow-hidden">
                        <Image
                          src={featuredImage}
                          alt={title}
                          fill
                          priority
                          className="object-cover transition-all duration-700"
                        />
                      </div>
                    )}

                    <div 
                      className="prose prose-invert max-w-none text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </ScrollReveal>

                  {/* Right Column: Dynamic Evaluation Card */}
                  <ScrollReveal variant="fade-up" delay={150} className="lg:col-span-4">
                    <div className="sticky top-28 bg-brand-card border border-brand-border p-6 md:p-8 rounded-none">
                      <h3 className="font-serif text-2xl font-light text-brand-text mb-2">
                        Request Evaluation
                      </h3>
                      <p className="text-brand-text-sec text-xs mb-6 leading-relaxed">
                        Consult with Dr. Ashwani Kumar. Get a customized treatment blueprint and price quote.
                      </p>
                      
                      <EvaluationForm procedureTitle={title} procedureSlug={slug} />
                      
                      <p className="text-[10px] text-center text-brand-text-sec/60 mt-4 leading-relaxed">
                        🔒 100% confidential. Support:{" "}
                        <a 
                          href="tel:+917290062111" 
                          className="hover:text-brand-accent transition-colors"
                        >
                          +91 72900 62111
                        </a>
                      </p>
                    </div>
                  </ScrollReveal>

                </div>
              </Container>
            </section>
          </>
        ) : (
          /* --- CORE PAGE DEFAULT LAYOUT --- */
          <section className="py-20 font-sans">
            <Container>
              <div className="max-w-4xl mx-auto">
                <ScrollReveal variant="fade-up">
                  <h1 className="font-serif text-3xl sm:text-4xl font-light text-brand-text mb-8">
                    {title}
                  </h1>
                </ScrollReveal>
                <ScrollReveal variant="fade-up" delay={150}>
                  <div 
                    className="prose prose-invert max-w-none text-brand-text-sec text-sm leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </ScrollReveal>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
