import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = getPageMetadata({
  title: "Book an Appointment | Consult Dr. Ashwani Kumar | BLINIQ Delhi",
  description: "Schedule your confidential cosmetic surgery or aesthetic treatment consultation at BLINIQ Clinic, Dwarka, Delhi. Flexible slots and expert evaluation.",
  path: "/appointment"
});

export default function AppointmentPage() {
  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <ScrollReveal variant="fade-up">
            <SectionTitle
              title="Book an Appointment"
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="max-w-2xl mx-auto mt-12">
              <Card hoverable={false}>
                <h4 className="font-serif text-2xl text-brand-text mb-2 font-light">
                  Request a Consultation
                </h4>
                <p className="text-brand-text-sec text-sm leading-relaxed mb-8 font-sans">
                  Please select your desired clinical department and doctor below. Our staff
                  will contact you shortly to confirm your booking.
                </p>

                <AppointmentForm />
              </Card>
            </div>
          </ScrollReveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}


