import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPageContentBySlug } from "@/lib/csvParser";
import { PROCEDURES_DATA, getProcedure } from "@/content/procedures";
import { getPageMetadata, getBreadcrumbSchemaJson, getFAQPageSchemaJson } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  // Generate pages for our structured procedures as well as the fallbacks
  return PROCEDURES_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const proc = getProcedure(slug);
  const wpPage = getPageContentBySlug(slug);

  const title = proc?.title || wpPage?.post_title || "Cosmetic Procedure";
  const desc = proc?.shortDescription || (wpPage?.post_content ? wpPage.post_content.substring(0, 150) + "..." : "") || `Receive safe, state-of-the-art ${title} in Delhi NCR under the expert care of Dr. Ashwani Kumar.`;

  return getPageMetadata({
    title: `${title} in Delhi | BLINIQ Cosmetic Surgery`,
    description: desc,
    path: `/procedures/${slug}`
  });
}

export default async function ProcedureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const proc = getProcedure(slug);
  const wpPage = getPageContentBySlug(slug);

  if (!proc && !wpPage) {
    notFound();
  }

  const title = proc?.title || wpPage?.post_title || "Cosmetic Procedure";
  const overview = proc?.overview || wpPage?.post_content || "Detailed treatment overview is being prepared.";

  // Dynamic related procedures list
  const related = PROCEDURES_DATA.filter((p) => {
    if (proc?.relatedSlugs) {
      return proc.relatedSlugs.includes(p.slug);
    }
    return p.slug !== slug;
  });

  // Breadcrumbs schema
  const breadcrumbs = [
    { name: "Home", item: "https://bliniq.in" },
    { name: "Procedures", item: "https://bliniq.in#services" },
    { name: title, item: `https://bliniq.in/procedures/${slug}` }
  ];

  const breadcrumbSchema = getBreadcrumbSchemaJson(breadcrumbs);
  const faqSchema = proc?.faqs ? getFAQPageSchemaJson(proc.faqs) : null;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg text-brand-text">
        {/* Inject JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        {/* Hero Header */}
        <section className="relative pt-32 pb-20 border-b border-brand-border/40 bg-brand-bg-sec">
          <Container>
            <div className="text-xs uppercase tracking-widest text-brand-text-sec mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-accent">{title}</span>
            </div>
            
            <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.2em] font-mono">
              Clinical Speciality
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-brand-text mt-3 tracking-wide">
              {title}
            </h1>
          </Container>
        </section>

        {/* Content Layout */}
        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Educational Content */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Clinical Image or Fallback */}
                {proc?.image && (
                  <div className="relative aspect-video w-full bg-brand-bg-sec border border-brand-border/40 overflow-hidden">
                    <Image
                      src={proc.image}
                      alt={title}
                      fill
                      priority
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}

                {/* Narrative Overview */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-text tracking-wide">
                    Treatment Overview
                  </h2>
                  <p className="text-brand-text-sec text-sm sm:text-base leading-relaxed font-sans">
                    {overview}
                  </p>
                </div>

                {/* Who is it for */}
                {proc?.whoIsFor && (
                  <div className="space-y-4 border-t border-brand-border/40 pt-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-text tracking-wide">
                      Patient Suitability & Selection
                    </h3>
                    <p className="text-brand-text-sec text-xs sm:text-sm leading-relaxed font-sans">
                      {proc.whoIsFor}
                    </p>
                  </div>
                )}

                {/* Benefits */}
                {proc?.benefits && (
                  <div className="space-y-4 border-t border-brand-border/40 pt-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-text tracking-wide">
                      Key Surgical Advantages
                    </h3>
                    <ul className="text-xs sm:text-sm text-brand-text-sec space-y-3 font-sans">
                      {proc.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-accent mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recovery Timeline */}
                {proc?.recoveryTimeline && (
                  <div className="space-y-6 border-t border-brand-border/40 pt-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-text tracking-wide">
                      Post-Op Recovery Milestones
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {proc.recoveryTimeline.map((time, i) => (
                        <div key={i} className="bg-brand-card border border-brand-border/40 p-5 rounded">
                          <span className="font-mono text-xs text-brand-accent font-bold block mb-2">{time.day}</span>
                          <span className="text-xs text-brand-text-sec leading-relaxed">{time.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology */}
                {proc?.technology && (
                  <div className="space-y-4 border-t border-brand-border/40 pt-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-text tracking-wide">
                      Surgical Systems & Technology
                    </h3>
                    <p className="text-brand-text-sec text-xs sm:text-sm leading-relaxed font-sans">
                      {proc.technology}
                    </p>
                  </div>
                )}

                {/* FAQs */}
                {proc?.faqs && (
                  <div className="space-y-6 border-t border-brand-border/40 pt-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-text tracking-wide">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {proc.faqs.map((faq, i) => (
                        <div key={i} className="border border-brand-border/30 bg-brand-card p-6 rounded">
                          <h4 className="font-serif text-sm sm:text-base text-brand-text font-medium mb-2 flex items-start gap-2">
                            <span className="text-brand-accent font-sans">Q.</span>
                            <span>{faq.q}</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed pl-5 border-l border-brand-accent/20">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Sticky Contact Form */}
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
                        {PROCEDURES_DATA.filter(p => p.slug !== slug).map((p, i) => (
                          <option key={i} value={p.slug}>{p.title}</option>
                        ))}
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
                    <Button type="submit" variant="primary" className="w-full mt-2 text-xs py-3.5 uppercase tracking-widest font-semibold min-h-11">
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

        {/* Related Services */}
        {related.length > 0 && (
          <section className="py-20 border-t border-brand-border/40 bg-brand-bg-sec">
            <Container>
              <h2 className="font-serif text-3xl font-light text-brand-text mb-10 text-center tracking-wide">
                Related Procedures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((rel, i) => (
                  <div key={i} className="bg-brand-card border border-brand-border p-6 flex flex-col justify-between hover:border-brand-accent/40 transition-colors duration-300">
                    <div>
                      <h4 className="font-serif text-xl text-brand-text mb-3 font-light">{rel.title}</h4>
                      <p className="text-xs text-brand-text-sec leading-relaxed line-clamp-3 mb-6 font-sans">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <Link href={`/procedures/${rel.slug}`} className="text-xs text-brand-accent tracking-wider uppercase font-semibold hover:underline inline-flex items-center gap-1 min-h-11">
                      Explore Treatment &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
