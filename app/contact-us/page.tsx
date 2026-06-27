import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle title="Contact Us" subtitle="Get In Touch" align="center" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Left Column: Map and Details */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* Map from post_content */}
              <div className="w-full h-80 border border-brand-border bg-brand-card overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Suite%20100%20San%20Francisco%2C%20LA%2094107%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  title="Suite 100 San Francisco, LA 94107 United States"
                  aria-label="Suite 100 San Francisco, LA 94107 United States"
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              <div className="bg-brand-bg-sec border border-brand-border p-6 font-sans">
                <h4 className="font-serif text-lg text-brand-accent mb-4 tracking-wide">
                  Clinic Details
                </h4>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-4">
                  Qutab Vihar Phase-1, Dwarka Area
                  <br />
                  New Delhi - 110071, India
                </p>
                <p className="text-brand-text-sec text-sm">
                  <span className="text-brand-accent">Phone:</span> +91 72900 62111
                  <br />
                  <span className="text-brand-accent">Email:</span> Contact email pending
                  migration from existing WordPress source.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <Card hoverable={false}>
                <h4 className="font-serif text-2xl text-brand-text mb-6 font-light">
                  Send a Message
                </h4>
                <form className="flex flex-col gap-4 font-sans text-sm">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors resize-none"
                    required
                  ></textarea>
                  <Button variant="primary" type="submit" className="mt-2">
                    Submit Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
