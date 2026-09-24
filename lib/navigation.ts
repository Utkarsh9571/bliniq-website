export interface Procedure {
  title: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Category {
  title: string;
  procedures: Procedure[];
}

export interface NavigationSection {
  title: string;
  type: "mega" | "dropdown" | "single";
  href?: string;
  categories?: Category[];
  items?: Procedure[];
}

export const CANONICAL_DEPARTMENTS: NavigationSection[] = [
  {
    title: "High-Definition 4D Liposuction",
    type: "mega",
    href: "/liposuction-surgery-in-delhi",
    categories: [
      {
        title: "Target Areas",
        procedures: [
          { title: "Liposuction Surgery in Delhi", slug: "liposuction-surgery-in-delhi" },
          { title: "Neck Liposuction", slug: "neck" },
          { title: "Upper Arms", slug: "upper-arms" },
          { title: "Flank / Love Handles", slug: "flank-love-handles" },
          { title: "Thighs Liposuction", slug: "thighs" },
          { title: "Knees Liposuction", slug: "knees" },
          { title: "Calves Liposuction", slug: "calves" },
          { title: "Breast Liposuction", slug: "breast" }
        ]
      }
    ]
  },
  {
    title: "Men",
    type: "mega",
    categories: [
      {
        title: "Face",
        procedures: [
          { title: "Face Lift", slug: "face-lift" },
          { title: "Eyelid Surgery", slug: "double-eyelid-surgery" },
          { title: "Nose (Cosmetic Rhinoplasty)", slug: "nose-cosmetic-rhinoplasty" },
          { title: "Buccal Fat Pad Removal", slug: "buccal-fat-pad-removal" },
          { title: "Lip Reduction", slug: "lip-reduction" },
          { title: "Chin Implant", slug: "chin-implant" }
        ]
      },
      {
        title: "Chest",
        procedures: [
          { title: "Gynecomastia Surgery in Delhi", slug: "gynecomastia-surgery-in-delhi" },
          { title: "Puffy Nipple Surgery", slug: "puffy-nipple-surgery" },
          { title: "Pectoral Implants", slug: "pectoral-implants" }
        ]
      },
      {
        title: "Arms",
        procedures: [
          { title: "Saggy Arms Surgery", slug: "saggy-arms-surgery" }
        ]
      },
      {
        title: "Tummy",
        procedures: [
          { title: "Six Pack Abs Creation", slug: "six-pack-abs-creation" },
          { title: "Tummy Tuck", slug: "tummy-tuck" }
        ]
      },
      {
        title: "Intimate Areas",
        procedures: [
          { title: "Penile Lengthening", slug: "penile-lengthening" },
          { title: "Fat Injection", slug: "fat-injection" },
          { title: "Circumcision", slug: "circumcision" }
        ]
      }
    ]
  },
  {
    title: "Women",
    type: "mega",
    categories: [
      {
        title: "Face",
        procedures: [
          { title: "Face Lift", slug: "face-lift" },
          { title: "Eyelid Surgery", slug: "double-eyelid-surgery" },
          { title: "Nose (Cosmetic Rhinoplasty)", slug: "nose-cosmetic-rhinoplasty" },
          { title: "Buccal Fat Pad Removal", slug: "buccal-fat-pad-removal" },
          { title: "Lip Reduction", slug: "lip-reduction" },
          { title: "Chin Implant", slug: "chin-implant" }
        ]
      },
      {
        title: "Breast",
        procedures: [
          { title: "Fat Injection (Breast)", slug: "fat-injection" },
          { title: "Breast Implant", slug: "breast-implant-3" },
          { title: "Breast Reduction", slug: "breast-reduction" },
          { title: "Breast Lift", slug: "breast-lift" }
        ]
      },
      {
        title: "Arms",
        procedures: [
          { title: "Saggy Arms Surgery", slug: "saggy-arms-surgery" }
        ]
      },
      {
        title: "Tummy",
        procedures: [
          { title: "Tummy Tuck", slug: "tummy-tuck" }
        ]
      },
      {
        title: "Intimate Areas",
        procedures: [
          { title: "Hymenoplasty", slug: "hymenoplasty" },
          { title: "Vaginal Tightening", slug: "vaginal-tightening" },
          { title: "Labiaplasty", slug: "labiaplasty-surgery-delhi" },
          { title: "Mons Reduction", slug: "mons-reduction" }
        ]
      }
    ]
  },
  {
    title: "Hair Fall Therapy",
    type: "mega",
    categories: [
      {
        title: "Hair Transplant",
        procedures: [
          { title: "Head Hair Transplant", slug: "head" },
          { title: "Beard Hair Transplant", slug: "beard" },
          { title: "Moustache Hair Transplant", slug: "moustache" },
          { title: "Eyebrow Hair Transplant", slug: "eyebrow" }
        ]
      },
      {
        title: "Non-Surgical Hair Care",
        procedures: [
          { title: "PRP Hair Therapy", slug: "prp-therapy" },
          { title: "Mesotherapy", slug: "mesotherapy" },
          { title: "White Hair Removal", slug: "white-hair-removal" }
        ]
      }
    ]
  },
  {
    title: "Sex Reassignment",
    type: "dropdown",
    items: [
      { title: "Sex change surgery", slug: "sex-change-surgery" },
      { title: "Male to Female", slug: "male-to-female" },
      { title: "Female to Male", slug: "female-to-male" }
    ]
  },
  {
    title: "Medspa",
    type: "mega",
    categories: [
      {
        title: "Skin & Injectables",
        procedures: [
          { title: "Botox And Fillers", slug: "botox-and-fillers" },
          { title: "Chemical Peels", slug: "chemical-peels" },
          { title: "Laser Hair Removal", slug: "laser-hair-removal" }
        ]
      },
      {
        title: "Remodeling & Removal",
        procedures: [
          { title: "Scarless Lipoma Removal", slug: "scarless-lipoma-removal" },
          { title: "Scar Remodeling", slug: "scar-remodeling" },
          { title: "Mole Removal", slug: "mole-removal" },
          { title: "Skin Tag Removal", slug: "skin-tag-removal" }
        ]
      }
    ]
  }
];

// Luxury Collapsed Header Menu configuration (6 items maximum)
export const HEADER_NAVIGATION_DATA: NavigationSection[] = [
  {
    title: "Body Contouring",
    type: "mega",
    categories: [
      {
        title: "High-Definition Ultrasound-assisted",
        procedures: [
          { 
            title: "Liposuction", 
            slug: "liposuction-surgery-in-delhi",
            description: "Advanced High-Definition 4D ultrasonic fat emulsification & abdominal carving.",
            image: "/images/home/lipo_after_1782474148532.webp"
          },
          { 
            title: "Tummy Tuck", 
            slug: "tummy-tuck",
            description: "Abdominoplasty to remove excess skin & restore abdominal muscles.",
            image: "/images/home/lipo_before_1782474133850.webp"
          },
          { 
            title: "Arms Lipo", 
            slug: "upper-arms",
            description: "Upper arms liposuction & saggy skin reduction.",
            image: "/images/home/hair_before.webp"
          },
          { 
            title: "Thighs Shaping", 
            slug: "thighs",
            description: "Thighs & knees fat reduction for contoured, balanced leg lines.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "Back Fat", 
            slug: "liposuction-surgery-in-delhi",
            description: "Targeted contouring of posterior fat pockets and bra line rolls.",
            image: "/images/home/lipo_after_1782474148532.webp"
          },
          { 
            title: "Love Handles", 
            slug: "flank-love-handles",
            description: "Flank liposuction to eliminate stubborn love handles and define waist.",
            image: "/images/home/lipo_after_1782474148532.webp"
          },
          { 
            title: "Gynecomastia", 
            slug: "gynecomastia-surgery-in-delhi",
            description: "Permanent correction of abnormally enlarged male chest tissue.",
            image: "/images/home/gynecomastia_after_1782474181819.webp"
          }
        ]
      }
    ]
  },
  {
    title: "Face & Breast",
    type: "mega",
    categories: [
      {
        title: "Breast",
        procedures: [
          { 
            title: "Breast Augmentation", 
            slug: "breast-implant-3",
            description: "Premium silicone implants or fat transfer to restore volume.",
            image: "/images/home/gynecomastia_after_1782474181819.webp"
          },
          { 
            title: "Breast Lift", 
            slug: "breast-lift",
            description: "Lift and reshape sagging breasts for a firmer, youthfully contoured bust.",
            image: "/images/patient-transformations/breast-lift/breast-lift-case-01-01.webp"
          },
          { 
            title: "Breast Reduction", 
            slug: "breast-reduction",
            description: "Gland and fat removal to resize breast proportions.",
            image: "/images/home/gynecomastia_before_1782474167092.webp"
          }
        ]
      },
      {
        title: "Face",
        procedures: [
          { 
            title: "Facelift", 
            slug: "face-lift",
            description: "Surgical lifting of sagging tissues to restore youthful contours.",
            image: "/images/home/rhinoplasty_after.webp"
          },
          { 
            title: "Blepharoplasty", 
            slug: "double-eyelid-surgery",
            description: "Correct saggy eyelids and heavy bags to refresh and open the eyes.",
            image: "/images/patient-transformations/blepharoplasty/blepharoplasty-case-01-01.webp"
          },
          { 
            title: "Rhinoplasty", 
            slug: "nose-cosmetic-rhinoplasty",
            description: "Nasal profile refinement and tip structural reshaping.",
            image: "/images/home/rhinoplasty_after.webp"
          },
          { 
            title: "Buccal Fat Pad Removal", 
            slug: "buccal-fat-pad-removal",
            description: "Excision of deep cheek fat pads to create a sculpted face contour.",
            image: "/images/patient-transformations/buccal-fat-removal/buccal-fat-removal-case-01-01.webp"
          },
          { 
            title: "Chin Implant", 
            slug: "chin-implant",
            description: "Implants or surgical enhancement to define the chin structure.",
            image: "/images/home/rhinoplasty_before.webp"
          },
          { 
            title: "Genioplasty", 
            slug: "genioplasty",
            description: "Surgical chin repositioning to establish structural facial symmetry.",
            image: "/images/home/rhinoplasty_before.webp"
          }
        ]
      }
    ]
  },
  {
    title: "Hair & Medspa",
    type: "mega",
    categories: [
      {
        title: "Hair Restoration",
        procedures: [
          { 
            title: "Direct Hair Transplant", 
            slug: "hair-loss-treatments#dht",
            description: "Direct implantation (DHT) for maximum graft viability.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "Bio-Direct Hair Transplant", 
            slug: "hair-loss-treatments#bio-dht",
            description: "DHT combined with cell-enriching growth factor infusion.",
            image: "/images/home/hair_before.webp"
          },
          { 
            title: "GFC Therapy", 
            slug: "hair-loss-treatments#gfc",
            description: "Pure Growth Factor Concentrate to stimulate dormant follicles.",
            image: "/images/home/hair_before.webp"
          },
          { 
            title: "Exosome Therapy", 
            slug: "hair-loss-treatments#exosome",
            description: "Cellular nanovesicles signaling natural root rejuvenation.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "QR-678 Mesotherapy", 
            slug: "mesotherapy",
            description: "Globally patented US-FDA approved scalp growth factors.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "PRP Therapy", 
            slug: "prp-therapy",
            description: "Platelet-rich plasma scalp injections to reverse thinning.",
            image: "/images/home/hair_before.webp"
          },
          { 
            title: "Hair Fall Treatments Guide", 
            slug: "hair-loss-treatments",
            description: "Explore all surgical and non-surgical scalp restoration treatments.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "Hair Transplant", 
            slug: "head",
            description: "High-density follicular graft restoration using micro-FUE.",
            image: "/images/home/hair_after.webp"
          }
        ]
      },
      {
        title: "Medspa",
        procedures: [
          { 
            title: "Laser Hair Removal", 
            slug: "laser-hair-removal",
            description: "Clinical permanent laser reduction for smooth skin.",
            image: "/images/home/hair_after.webp"
          },
          { 
            title: "Botox", 
            slug: "botox-and-fillers",
            description: "Injectable muscle relaxer to smooth fine lines.",
            image: "/images/home/rhinoplasty_after.webp"
          },
          { 
            title: "Fillers", 
            slug: "botox-and-fillers",
            description: "Dermal fillers to restore volume to cheeks & lips.",
            image: "/images/home/rhinoplasty_after.webp"
          }
        ]
      }
    ]
  },
  {
    title: "Transformations",
    type: "dropdown",
    items: [
      { title: "Before & After Pictures", slug: "picture-gallery" },
      { title: "Surgical Journey Videos", slug: "gallery" }
    ]
  },
  {
    title: "Journal",
    type: "single",
    href: "/blog"
  }
];

// Helper to get flat array of all procedures in navigation config
export function getAllProcedures(): Procedure[] {
  const list: Procedure[] = [];
  const addProc = (p: Procedure) => {
    if (!list.some(x => x.slug === p.slug)) {
      list.push(p);
    }
  };

  CANONICAL_DEPARTMENTS.forEach(section => {
    if (section.categories) {
      section.categories.forEach(cat => cat.procedures.forEach(addProc));
    }
    if (section.items) {
      section.items.forEach(addProc);
    }
  });

  HEADER_NAVIGATION_DATA.forEach(section => {
    if (section.categories) {
      section.categories.forEach(cat => cat.procedures.forEach(addProc));
    }
    if (section.items) {
      section.items.forEach(addProc);
    }
  });

  return list;
}
