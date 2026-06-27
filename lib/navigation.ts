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
    title: "VASER 4D-HD Liposuction",
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
          { title: "Face Lift", slug: "face-lift-2" },
          { title: "Eyelid Surgery", slug: "double-eyelid-surgery-2" },
          { title: "Nose (Cosmetic Rhinoplasty)", slug: "nose-cosmetic-rhinoplasty-2" },
          { title: "Buccal Fat Pad Removal", slug: "buccal-fat-pad-removal-2" },
          { title: "Lip Reduction", slug: "lip-reduction-2" },
          { title: "Chin Implant", slug: "chin-implant-2" }
        ]
      },
      {
        title: "Breast",
        procedures: [
          { title: "Fat Injection (Breast)", slug: "fat-injection-3" },
          { title: "Breast Implant", slug: "breast-implant-3" },
          { title: "Breast Reduction", slug: "breast-reduction" },
          { title: "Breast Lift", slug: "breast-lift" }
        ]
      },
      {
        title: "Arms",
        procedures: [
          { title: "Saggy Arms Surgery", slug: "saggy-arms-surgery-2" }
        ]
      },
      {
        title: "Tummy",
        procedures: [
          { title: "Tummy Tuck", slug: "tummy-tuck-2" }
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
    title: "The Clinic",
    type: "dropdown",
    items: [
      { title: "About Bliniq", slug: "about-us" },
      { title: "Our Surgeon", slug: "doctors" },
      { title: "Contact Us", slug: "contact-us" }
    ]
  },
  {
    title: "Body Contouring",
    type: "mega",
    categories: [
      {
        title: "High-Definition VASER",
        procedures: [
          { title: "Liposuction Surgery", slug: "liposuction-surgery-in-delhi" },
          { title: "Gynecomastia Reduction", slug: "gynecomastia-surgery-in-delhi" },
          { title: "Puffy Nipple Correction", slug: "puffy-nipple-surgery" },
          { title: "Tummy Tuck Abdominoplasty", slug: "tummy-tuck" },
          { title: "Six Pack Creation", slug: "six-pack-abs-creation" }
        ]
      },
      {
        title: "Target Sculpting",
        procedures: [
          { title: "Neck Contouring", slug: "neck" },
          { title: "Upper Arms Lipo", slug: "upper-arms" },
          { title: "Flank & Love Handles", slug: "flank-love-handles" },
          { title: "Thighs & Knees Lipo", slug: "thighs" },
          { title: "Calves Shaping", slug: "calves" }
        ]
      }
    ]
  },
  {
    title: "Face & Breast",
    type: "mega",
    categories: [
      {
        title: "Face Aesthetics",
        procedures: [
          { title: "Surgical Face Lift", slug: "face-lift" },
          { title: "Eyelid Blepharoplasty", slug: "double-eyelid-surgery" },
          { title: "Rhinoplasty Nose Reshaping", slug: "nose-cosmetic-rhinoplasty" },
          { title: "Buccal Fat Removal", slug: "buccal-fat-pad-removal" },
          { title: "Lip & Upper Lip Lift", slug: "lip-reduction" },
          { title: "Chin & Genioplasty", slug: "chin-implant" }
        ]
      },
      {
        title: "Breast Procedures",
        procedures: [
          { title: "Breast Implant Augmentation", slug: "breast-implant-3" },
          { title: "Breast Reduction Surgery", slug: "breast-reduction" },
          { title: "Breast Lift Reshaping", slug: "breast-lift" },
          { title: "Pectoral Muscular Implants", slug: "pectoral-implants" }
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
          { title: "Head Hair Transplant", slug: "head" },
          { title: "Beard & Moustache", slug: "beard" },
          { title: "PRP Hair Therapy", slug: "prp-therapy" },
          { title: "Mesotherapy Course", slug: "mesotherapy" }
        ]
      },
      {
        title: "Medspa Therapies",
        procedures: [
          { title: "Botox & Fillers", slug: "botox-and-fillers" },
          { title: "Chemical Skin Peels", slug: "chemical-peels" },
          { title: "Laser Hair Removal", slug: "laser-hair-removal" },
          { title: "Scar Remodeling", slug: "scar-remodeling" },
          { title: "Mole & Tag Excision", slug: "mole-removal" }
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
