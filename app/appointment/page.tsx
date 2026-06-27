import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getCsvData } from "@/lib/csvParser";

export default function AppointmentPage() {
  const services = getCsvData("data-services.csv");
  const doctors = getCsvData("data-doctors.csv");

  return (
    <>
      <Header />
      <main className="grow py-20 bg-brand-bg text-brand-text">
        <Container>
          <SectionTitle
            title="Book an Appointment"
            subtitle="WordPress Booking System"
            align="center"
          />

          <div className="max-w-2xl mx-auto mt-12">
            <Card hoverable={false}>
              <h4 className="font-serif text-2xl text-brand-text mb-2 font-light">
                Request a Consultation
              </h4>
              <p className="text-brand-text-sec text-sm leading-relaxed mb-8 font-sans">
                Please select your desired clinical department and doctor below. Our staff
                will contact you shortly to confirm your booking.
              </p>

              <form className="flex flex-col gap-4 font-sans text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-brand-text-sec text-xs uppercase tracking-wider">
                      Department / Clinic
                    </label>
                    <select className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors">
                      {services.map((svc, idx) => (
                        <option key={idx} value={svc.post_title}>
                          {svc.post_title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-brand-text-sec text-xs uppercase tracking-wider">
                      Practitioner / Doctor
                    </label>
                    <select className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors">
                      {doctors.map((doc, idx) => (
                        <option key={idx} value={doc.post_title}>
                          {doc.post_title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                  <input
                    type="date"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                  <input
                    type="time"
                    className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors"
                    required
                  />
                </div>

                <textarea
                  placeholder="Additional Notes / Symptoms (Optional)"
                  rows={4}
                  className="bg-brand-bg border border-brand-border py-3 px-4 text-brand-text focus:outline-hidden focus:border-brand-accent transition-colors resize-none"
                ></textarea>

                <Button variant="primary" type="submit" className="mt-4">
                  Submit Request
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
