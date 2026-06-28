export interface FAQItem {
  q: string;
  a: string;
}

export interface RecoveryPoint {
  day: string;
  detail: string;
}

export interface ProcedureData {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  overview: string;
  whoIsFor: string;
  benefits: string[];
  commonConcerns: string[];
  stats: { label: string; value: string }[];
  recoveryInfo: string;
  recoveryTimeline: RecoveryPoint[];
  technology: string;
  trustIndicators: string[];
  faqs: FAQItem[];
  image: string | null;
  relatedSlugs: string[];
}

export const PROCEDURES_DATA: ProcedureData[] = [
  {
    title: "High-Definition VASER Liposuction",
    slug: "liposuction-surgery-in-delhi",
    category: "Body Contouring",
    shortDescription: "Advanced VASER 4D ultrasonic fat emulsification designed to selectively target deep and superficial fat layers, highlight natural abdominal muscle definition, and achieve athletic body contouring.",
    overview: "VASER (Vibration Amplification of Sound Resonance at Surgery) is a cutting-edge liposuction technique that utilizes ultrasound energy to selectively dissolve fat cells prior to removal. Unlike traditional liposuction, VASER technology protects surrounding nerves, blood vessels, and connective tissues, leading to significantly less post-operative swelling, minimal bruising, and accelerated skin tightening.",
    whoIsFor: "Ideal candidates are individuals at or near their stable body weight who have resistant pockets of localized fat in the abdomen, flanks, arms, neck, or thighs that do not respond to disciplined diet and exercise.",
    benefits: [
      "Selectively targets stubborn fat cells while preserving blood vessels, nerves, and connective tissues.",
      "Ultrasonic thermal energy stimulates collagen production, resulting in superior post-op skin retraction.",
      "Allows precision carving of muscle definitions including athletic six-pack shadows and obliques."
    ],
    commonConcerns: [
      "Expect moderate localized swelling and mild bruising during the first 1 to 2 weeks.",
      "Requires wearing a custom post-op compression garment full-time for 4 to 6 weeks.",
      "Preserving results requires maintaining a stable post-operative body weight."
    ],
    stats: [
      { label: "Successful Cases", value: "1200+" },
      { label: "Patient Satisfaction", value: "98.4%" },
      { label: "Procedure Type", value: "Daycare / Lipo 4D" }
    ],
    recoveryInfo: "Most patients return to light desk work within 3 to 5 days. Full gym routines, heavy sports, and strenuous physical activities can be safely resumed at 4 to 6 weeks. Wearing compression wear is vital for shaping.",
    recoveryTimeline: [
      { day: "Days 1–3", detail: "Mild soreness; light walking is encouraged to minimize fluid build-up." },
      { day: "Week 1", detail: "Return to light sedentary work; swelling begins to gradually peak." },
      { day: "Weeks 4–6", detail: "Compression wear removed; full gym activities and heavy lifting can resume." }
    ],
    technology: "USFDA Approved VASER 4D-HD Ultrasound Emulsifiers with high-definition micro-cannulas.",
    trustIndicators: ["FDA Approved VASER Tech", "Board Certified Care", "Daycare Discharge"],
    faqs: [
      {
        q: "Is the fat loss from VASER liposuction permanent?",
        a: "Yes. Once fat cells are removed via suction, they do not grow back. However, maintaining a stable weight post-op is crucial, as remaining fat cells in the body can still expand."
      },
      {
        q: "How soon will I see the final muscle definition results?",
        a: "Initial contour changes are visible immediately after swelling subsides (2–3 weeks), but high-definition muscle outlines settle fully around 3 to 6 months post-procedure."
      }
    ],
    image: "/uploads/2023/12/Liposuction-Tummy360.jpeg",
    relatedSlugs: ["tummy-tuck", "gynecomastia-surgery-in-delhi", "six-pack-abs-creation"]
  },
  {
    title: "Gynecomastia Surgery (Male Chest Reduction)",
    slug: "gynecomastia-surgery-in-delhi",
    category: "Body Contouring",
    shortDescription: "Precision surgical excision of glandular tissue coupled with VASER liposuction. Specially tailored to treat puffy nipples, asymmetrical chests, and enlarged breast tissue in men.",
    overview: "Gynecomastia surgery corrects abnormally enlarged breasts in men by combining direct surgical excision of dense glandular tissue with advanced VASER liposuction. Under the direction of Dr. Ashwani Kumar, the procedure permanently removes the underlying tissue to restore a flat, firm, and contoured chest wall structure.",
    whoIsFor: "Men suffering from enlarged breast glands, puffy areolas, or persistent chest fat pockets that cause psychological distress, areola asymmetry, or self-consciousness.",
    benefits: [
      "Provides an immediate, flat, and firm masculine chest contour with permanent reduction.",
      "Virtually scarless procedure utilizing minimal incisions hidden along the natural border of the lower areola.",
      "Perpetual elimination of glandular tissue ensures that recurrence is highly unlikely."
    ],
    commonConcerns: [
      "Mild post-surgical chest tightness and sensitivity resolving within 2 to 3 weeks.",
      "Surgical strategy is customized depending on gland tissue density vs. surrounding fat accumulation.",
      "Short-term post-op support vest is required to optimize skin adherence."
    ],
    stats: [
      { label: "Gland Excision Rate", value: "100%" },
      { label: "Chest Recurrence Rate", value: "Near 0%" },
      { label: "Anesthesia Level", value: "Sedation / General" }
    ],
    recoveryInfo: "Return to sedentary office duties can be resumed within 3 days. Post-operative swelling will subside gradually over 3 to 4 weeks. Gym workouts focusing on the chest should be paused for a minimum of 4 weeks.",
    recoveryTimeline: [
      { day: "Days 1–2", detail: "Discharge on the same day; wear support vest immediately to control fluid." },
      { day: "Week 1", detail: "Incisions are examined; mild activities and walking can resume." },
      { day: "Week 4", detail: "Return to active chest workouts and heavy gym lifting." }
    ],
    technology: "Surgical gland resection scissors paired with VASER fat-emulsifying probes.",
    trustIndicators: ["Gland Excision Speciality", "Daycare Discharge", "No-Cost EMI Options"],
    faqs: [
      {
        q: "Will there be visible scars on my chest after gynecomastia surgery?",
        a: "No. The incisions are tiny, semi-circular cuts placed precisely along the lower dark border of the areola (the colored skin surrounding the nipple), which heals to be practically invisible."
      },
      {
        q: "Can the enlarged gland grow back in the future?",
        a: "No. Once the gland is completely excised surgically, it cannot regenerate. Results are permanent unless triggered by heavy steroid usage or massive weight gain."
      }
    ],
    image: "/uploads/2023/12/Gynecomastia-1.jpeg",
    relatedSlugs: ["liposuction-surgery-in-delhi", "tummy-tuck"]
  },
  {
    title: "Abdominoplasty (Tummy Tuck)",
    slug: "tummy-tuck",
    category: "Body Contouring",
    shortDescription: "Major restorative surgery to remove overhang loose skin, repair separated abdominal muscles (diastasis recti), and reshape the midsection after significant weight loss or pregnancy.",
    overview: "Abdominoplasty is a powerful restorative surgery designed to address loose, overstretched skin and split abdominal wall muscles (diastasis recti). The procedure removes saggy hanging aprons of tissue, pulls the skin taut, and repairs the internal abdominal fascia to restore core strength and shape.",
    whoIsFor: "Women post-pregnancy or individuals who have undergone massive weight loss, resulting in loose abdominal skin folds and weakened core muscles that cannot be resolved via exercise.",
    benefits: [
      "Completely restores weakened or split abdominal core muscles (diastasis recti).",
      "Removes loose, hanging skin folds and visible stretch marks located below the navel.",
      "Re-positions the belly button to sit naturally on a flat, taut abdominal wall."
    ],
    commonConcerns: [
      "Timeline for recovery is longer than VASER liposuction alone.",
      "Leaves a low-placed horizontal scar designed to be completely concealed by swimwear/underwear.",
      "Requires walking slightly bent forward during the first 5 to 7 days to avoid skin tension."
    ],
    stats: [
      { label: "Muscle Wall Repair", value: "100%" },
      { label: "Clinical Success Rate", value: "99.1%" },
      { label: "Observation Level", value: "Inpatient (1-2 Days)" }
    ],
    recoveryInfo: "Light walking around the house is encouraged on day 1. Patients generally return to light work in 10 to 14 days. Gym workouts and lifting must be avoided for at least 6 to 8 weeks.",
    recoveryTimeline: [
      { day: "Days 1–3", detail: "Brief hospital observation; walk in a slightly flexed position to guard core sutures." },
      { day: "Weeks 2", detail: "Sutures checked; return to light sedentary desk work." },
      { day: "Weeks 6–8", detail: "Abdominal muscles fully healed; resume sports and core workouts." }
    ],
    technology: "Muscle plication heavy sutures and advanced skin-retrieval electrosurgery blades.",
    trustIndicators: ["Core Muscle Restoration", "High-Definition Contouring", "Comprehensive Post-Care Support"],
    faqs: [
      {
        q: "What is the difference between liposuction and a tummy tuck?",
        a: "Liposuction only removes excess fat tissue. A tummy tuck removes excess hanging skin and physically repairs separated core muscles, which liposuction cannot do."
      },
      {
        q: "Can I get pregnant after having a tummy tuck?",
        a: "Yes, it is safe, but it is highly recommended to complete childbearing before surgery to prevent stretching the repaired abdominal wall muscles."
      }
    ],
    image: null,
    relatedSlugs: ["liposuction-surgery-in-delhi", "gynecomastia-surgery-in-delhi"]
  }
];

export function getProcedure(slug: string): ProcedureData | undefined {
  return PROCEDURES_DATA.find((p) => p.slug === slug);
}
