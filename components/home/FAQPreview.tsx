import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const CLINIC_FAQS = [
  {
    q: "Where is BLINIQ clinic located and what are the operational hours?",
    a: "BLINIQ Cosmetic Surgery Centre is located in Dwarka, Delhi. We are open every day (Monday to Sunday) from 09:00 AM to 09:00 PM for pre-booked consultations and treatment check-ups."
  },
  {
    q: "Do you offer No-Cost EMI financing options for surgical procedures?",
    a: "Yes, we offer flexible No-Cost EMI financing schemes in collaboration with major healthcare finance partners to make cosmetic treatments accessible and affordable."
  },
  {
    q: "Who conducts the surgeries and evaluations at BLINIQ?",
    a: "All evaluations, surgical planning, and operating procedures are personally performed by our chief board-certified plastic surgeon, Dr. Ashwani Kumar."
  },
  {
    q: "Is patient confidentiality guaranteed at your clinic?",
    a: "Absolutely. We adhere to the highest clinical standards of medical ethics. Patient files, case histories, and photographic records remain 100% confidential and secure."
  }
];

export default function FAQPreview() {
  return (
    <section id="faq" className="py-32 bg-brand-bg-sec border-b border-brand-border/40">
      <Container>
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" align="center" />
        
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {CLINIC_FAQS.map((faq, i) => (
            <details 
              key={i} 
              className="group border border-brand-border/35 bg-[#0F1524]/65 p-5 rounded cursor-pointer [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-serif text-sm sm:text-base text-brand-text font-medium select-none min-h-11">
                <span>{faq.q}</span>
                <span className="text-brand-accent transition-transform duration-200 group-open:rotate-180 text-xs">▼</span>
              </summary>
              <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed font-sans pl-3 border-l border-l-brand-accent/25 mt-3 pt-3 border-t border-t-brand-border/20">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
