export interface Testimonial {
  id: number;
  initials: string;
  name: string;
  procedure: string;
  location: string;
  rating: number;
  text: string;
  year: string;
}

export const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    id: 1,
    initials: "A.K.",
    name: "Amit Khanna",
    procedure: "FUE Hair Restoration",
    location: "New Delhi",
    rating: 5,
    text: "From start to finish with my HT procedure, the process was incredible. From meeting Dr. Ashwani and providing his expertise on how many grafts would work best, they work until they are 100% happy with coverage, not counting each graft. 1 year later my hair is like I was 18 again.",
    year: "2024"
  },
  {
    id: 2,
    initials: "M.S.",
    name: "Meera Sen",
    procedure: "Breast Symmetry correction",
    location: "Gurugram",
    rating: 5,
    text: "Dr. Ashwani is a very skilled plastic surgeon. I had a unique breast concern needing implants for lack of volume and a lift. He is masterful with breast symmetry and they are now perfect. The staff treated me like gold. Everything was daycare in office like taking a nice nap.",
    year: "2023"
  },
  {
    id: 3,
    initials: "V.S.",
    name: "Vikram Singh",
    procedure: "VASER 4D Liposuction",
    location: "New Delhi",
    rating: 5,
    text: "High definition liposuction results are unbelievable. The abdominal contouring is precise, and the post-op care guides you through every step. Dr. Ashwani Kumar is hands down the finest cosmetic surgeon in Delhi NCR.",
    year: "2024"
  },
  {
    id: 4,
    initials: "J.B.",
    name: "Jasmine Bhasin",
    procedure: "Rhinoplasty Surgery",
    location: "Noida",
    rating: 5,
    text: "Very satisfied with my structural rhinoplasty. The balance is completely natural, and my breathing has also improved. The clinic maintains absolute privacy which made me feel comfortable from day one.",
    year: "2023"
  }
];

export const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    id: 5,
    initials: "R.M.",
    name: "Rohan Malhotra",
    procedure: "Gynecomastia Correction",
    location: "Delhi NCR",
    rating: 5,
    text: "Painless daycare gynecomastia surgery. The areola incisions are practically invisible. Wore the support vest for 4 weeks as directed, and the chest profile is perfectly flat now. Exceptional professionalism by the clinical team.",
    year: "2024"
  },
  {
    id: 6,
    initials: "P.D.",
    name: "Priya Dutt",
    procedure: "Abdominoplasty Restoration",
    location: "Faridabad",
    rating: 5,
    text: "Recovering from a tummy tuck takes patience, but the muscle wall repair and skin tightening results are life-changing. Dr. Ashwani explained the horizontal scar placement perfectly, and it is fully hidden.",
    year: "2023"
  },
  {
    id: 7,
    initials: "K.A.",
    name: "Karan Adani",
    procedure: "Laser Medspa Care",
    location: "New Delhi",
    rating: 5,
    text: "Excellent aesthetic clinic environment. The staff is highly trained, utilizing advanced FDA approved tech. Standard of care is international. Recommended for anyone looking for authentic cosmetic enhancement.",
    year: "2024"
  },
  {
    id: 8,
    initials: "S.S.",
    name: "Sonia Sharma",
    procedure: "Facial Sculpting",
    location: "New Delhi",
    rating: 5,
    text: "The facial symmetry enhancements are subtle and graceful. They didn't push for overfilled cheeks or unnatural lips. Highly ethical medical recommendations and outstanding clinical safety standards.",
    year: "2024"
  }
];
