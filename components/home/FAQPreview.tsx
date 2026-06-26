import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function FAQPreview() {
  const faqs = [
    {
      q: "Is Liposuction a weight-loss procedure?",
      a: "No. Liposuction is a body-contouring procedure designed to remove localized, stubborn pockets of fat that do not respond to diet or exercise. It is best suited for individuals near their ideal body weight who want to shape specific target areas.",
    },
    {
      q: "Will the fat return after Laser Liposuction?",
      a: "The fat cells removed during the procedure are permanently gone. Maintaining a healthy, balanced lifestyle ensures permanent, long-lasting contour results.",
    },
    {
      q: "Is the surgical procedure painful?",
      a: "No, the surgery is performed under local anesthesia with sedation or general anesthesia, making it completely painless. Post-operative discomfort is mild, similar to the feeling of a heavy workout.",
    },
    {
      q: "How long is the recovery time before I can work?",
      a: "Most patients can return to light desk work and normal daily routines within 2 to 3 days. We advise wearing a supportive compression garment for 2-4 weeks to minimize swelling.",
    },
    {
      q: "Are there any scars or stitches left?",
      a: "Laser liposuction is minimally invasive and performed through tiny entry points (around 2-3 mm) that do not require surgical stitches. Once healed, these microscopic entry marks fade completely.",
    },
    {
      q: "How much fat can be safely removed in a session?",
      a: "In a single outpatient session, it is generally safe to remove up to 4 to 5 liters of fat, depending on the patient's overall health and body weight.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-brand-bg-sec">
      <Container>
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <Card key={index} hoverable={false}>
              <h3 className="font-serif text-xl text-brand-text mb-3 font-light">
                {faq.q}
              </h3>
              <p className="text-brand-text-sec text-sm leading-relaxed">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
