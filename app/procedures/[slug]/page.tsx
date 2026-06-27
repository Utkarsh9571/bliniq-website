import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPageContentBySlug } from "@/lib/csvParser";
import { getAllProcedures } from "@/lib/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllProcedures().map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const procedures = getAllProcedures();
  const procedure = procedures.find(p => p.slug === slug);
  const wpPage = getPageContentBySlug(slug);

  const title = procedure?.title || wpPage?.post_title || "Cosmetic Procedure";
  const desc = procedure?.description || `Receive safe, state-of-the-art ${title} in Delhi NCR under the expert care of Dr. Ashwani Kumar.`;

  return {
    title: `${title} in Delhi | BLINIQ Cosmetic Surgery`,
    description: desc,
    alternates: {
      canonical: `https://www.bliniq.in/${slug}`,
    },
    openGraph: {
      title: `${title} in Delhi | BLINIQ`,
      description: desc,
      url: `https://www.bliniq.in/${slug}`,
      type: "website",
    }
  };
}

export default async function ProcedureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const procedures = getAllProcedures();
  const procedure = procedures.find(p => p.slug === slug);
  const wpPage = getPageContentBySlug(slug);

  if (!procedure && !wpPage) {
    notFound();
  }

  const title = procedure?.title || wpPage?.post_title || "Cosmetic Procedure";
  
  let rawHtml = wpPage?.post_content || "";
  rawHtml = rawHtml.replace(/https?:\/\/(www\.)?bliniq\.in/g, "");
  rawHtml = rawHtml.replace(/\/wp-content\/uploads\//g, "/uploads/");

  const defaultFaqs = [
    {
      q: `How long is the recovery period for ${title}?`,
      a: "Most patients can return to light activity within 3–7 days, though full recovery and final tissue settling takes 4–6 weeks. A post-op support garment is recommended for body contouring procedures."
    },
    {
      q: "Are the results permanent?",
      a: "Yes, surgical results (such as fat cell removal via liposuction or glandular excision) are permanent, provided you maintain a stable weight and healthy lifestyle."
    },
    {
      q: "Is the procedure painful?",
      a: "The surgery is performed under anesthesia (local with sedation or general), meaning you will feel no pain during the procedure. Post-operative discomfort is well-managed with prescribed medications."
    }
  ];

  const related = procedures.filter(p => p.slug !== slug).slice(0, 3);

  // Structured Data Schema JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.bliniq.in/#organization",
        "name": "BLINIQ",
        "url": "https://www.bliniq.in/",
        "telephone": "+91 72900 62111",
        "logo": "https://www.bliniq.in/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Qutab Vihar Phase-1, Dwarka",
          "addressLocality": "New Delhi",
          "postalCode": "110071",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.bliniq.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": `https://www.bliniq.in/${slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-bg text-brand-text">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />

        {/* Hero & Breadcrumbs */}
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
              <div className="lg:col-span-8">
                {rawHtml ? (
                  <div 
                    className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:text-brand-text prose-a:text-brand-accent prose-strong:text-brand-text text-brand-text-sec text-sm sm:text-base leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: rawHtml }}
                  />
                ) : (
                  <div className="text-brand-text-sec italic py-10 font-sans">
                    Detailed treatment information is being loaded from the database. Please request a consultation below to speak directly with Dr. Ashwani Kumar.
                  </div>
                )}

                {/* Procedure Steps */}
                <div className="mt-20 border-t border-brand-border/40 pt-16">
                  <h2 className="font-serif text-3xl font-light text-brand-text mb-8 tracking-wide">
                    Treatment Journey & Stages
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    {[
                      { step: "01", name: "Consultation", desc: "Detailed evaluation, grading, and surgical blueprinting." },
                      { step: "02", name: "Preparation", desc: "Pre-op blood tests and custom treatment configuration." },
                      { step: "03", name: "Procedure", desc: "Precision surgical treatment at our state-of-the-art theater." },
                      { step: "04", name: "Recovery", desc: "Structured follow-ups and custom post-care guidance." }
                    ].map((st, i) => (
                      <div key={i} className="bg-brand-card border border-brand-border/40 p-6 flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-xs text-brand-accent font-semibold block mb-2">{st.step}</span>
                          <h4 className="font-serif text-base text-brand-text font-medium mb-2">{st.name}</h4>
                        </div>
                        <p className="text-xs text-brand-text-sec leading-relaxed mt-2">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="mt-20 border-t border-brand-border/40 pt-16">
                  <h2 className="font-serif text-3xl font-light text-brand-text mb-8 tracking-wide">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {defaultFaqs.map((faq, i) => (
                      <div key={i} className="border border-brand-border/30 bg-brand-card p-6">
                        <h4 className="font-serif text-base text-brand-text font-medium mb-2 flex items-start gap-3">
                          <span className="text-brand-accent font-sans">Q.</span>
                          <span>{faq.q}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed pl-6">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Contact Form */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 bg-brand-card border border-brand-border p-8 rounded-none">
                  <h3 className="font-serif text-2xl font-light text-brand-text mb-2">
                    Request Advice
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
                        {procedures.filter(p => p.slug !== slug).slice(0, 5).map((p, i) => (
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
                    <Button type="submit" variant="primary" className="w-full mt-2 text-xs py-3">
                      Book Free Consultation
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
                  <div key={i} className="bg-brand-card border border-brand-border p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-xl text-brand-text mb-3 font-light">{rel.title}</h4>
                      <p className="text-xs text-brand-text-sec leading-relaxed line-clamp-3 mb-6">
                        {rel.description || "Learn more about our advanced treatments and reconstructive cosmetic options."}
                      </p>
                    </div>
                    <Link href={`/${rel.slug}`} className="text-xs text-brand-accent tracking-wider uppercase font-semibold hover:underline inline-flex items-center gap-1">
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
