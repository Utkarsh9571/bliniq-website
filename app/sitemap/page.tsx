import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { CANONICAL_DEPARTMENTS } from "@/lib/navigation";

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="grow py-32 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Sitemap Directory"
            subtitle="Clinical Pages Map"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Core Static Pages */}
            <Card className="p-6 bg-brand-bg-sec border border-brand-border">
              <h3 className="font-serif text-lg text-brand-accent uppercase tracking-wider mb-4 font-semibold">
                Main Pages
              </h3>
              <ul className="space-y-2 text-sm text-brand-text-sec">
                <li><Link href="/" className="hover:text-brand-accent transition-colors">&bull; Home</Link></li>
                <li><Link href="/about-us" className="hover:text-brand-accent transition-colors">&bull; About Bliniq</Link></li>
                <li><Link href="/appointment" className="hover:text-brand-accent transition-colors">&bull; Appointment Booking</Link></li>
                <li><Link href="/contact-us" className="hover:text-brand-accent transition-colors">&bull; Contact Us</Link></li>
                <li><Link href="/doctors" className="hover:text-brand-accent transition-colors">&bull; Our Surgeon</Link></li>
                <li><Link href="/blog" className="hover:text-brand-accent transition-colors">&bull; Clinic Blog</Link></li>
              </ul>
            </Card>

            {/* Procedures sections */}
            {CANONICAL_DEPARTMENTS.filter(s => s.type === "mega").map((section, idx) => (
              <Card key={idx} className="p-6 bg-brand-bg-sec border border-brand-border">
                <h3 className="font-serif text-lg text-brand-accent uppercase tracking-wider mb-4 font-semibold">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-brand-text-sec">
                  {section.categories?.map((cat, i) => (
                    <div key={i} className="mb-4">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-text-sec/60 block mb-2">{cat.title}</span>
                      {cat.procedures.map((p, j) => (
                        <li key={j} className="pl-2">
                          <Link href={`/${p.slug}`} className="hover:text-brand-accent transition-colors">
                            &bull; {p.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </Card>
            ))}

            {/* Dropdowns */}
            {CANONICAL_DEPARTMENTS.filter(s => s.type === "dropdown").map((section, idx) => (
              <Card key={idx} className="p-6 bg-brand-bg-sec border border-brand-border">
                <h3 className="font-serif text-lg text-brand-accent uppercase tracking-wider mb-4 font-semibold">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-brand-text-sec">
                  {section.items?.map((item, i) => (
                    <li key={i}>
                      <Link href={`/${item.slug}`} className="hover:text-brand-accent transition-colors">
                        &bull; {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
