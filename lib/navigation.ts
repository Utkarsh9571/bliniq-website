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
    title: "Body Contouring",
    type: "mega",
    categories: [
      {
        title: "High-Definition VASER",
        procedures: [
          { 
            title: "Liposuction", 
            slug: "liposuction-surgery-in-delhi",
            description: "Advanced VASER 4D ultrasonic fat emulsification & abdominal carving.",
            image: "/lipo_after_1782474148532.png"
          },
          { 
            title: "Tummy Tuck", 
            slug: "tummy-tuck",
            description: "Abdominoplasty to remove excess skin & restore abdominal muscles.",
            image: "/lipo_before_1782474133850.png"
          },
          { 
            title: "Arms Lipo", 
            slug: "upper-arms",
            description: "Upper arms liposuction & saggy skin reduction.",
            image: "/hair_before.png"
          },
          { 
            title: "Thighs Shaping", 
            slug: "thighs",
            description: "Thighs & knees fat reduction for contoured, balanced leg lines.",
            image: "/hair_after.png"
          },
          { 
            title: "Back Fat", 
            slug: "liposuction-surgery-in-delhi",
            description: "Targeted contouring of posterior fat pockets and bra line rolls.",
            image: "/lipo_after_1782474148532.png"
          },
          { 
            title: "Love Handles", 
            slug: "flank-love-handles",
            description: "Flank liposuction to eliminate stubborn love handles and define waist.",
            image: "/lipo_after_1782474148532.png"
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
        title: "Surgical Aesthetics",
        procedures: [
          { 
            title: "Rhinoplasty", 
            slug: "nose-cosmetic-rhinoplasty",
            description: "Nasal profile refinement and tip structural reshaping.",
            image: "/rhinoplasty_after.png"
          },
          { 
            title: "Chin Surgery", 
            slug: "chin-implant",
            description: "Implants or genioplasty to balance the profile and jawline.",
            image: "/rhinoplasty_before.png"
          },
          { 
            title: "Breast Reduction", 
            slug: "breast-reduction",
            description: "Gland and fat removal to resize breast proportions.",
            image: "/gynecomastia_before_1782474167092.png"
          },
          { 
            title: "Breast Augmentation", 
            slug: "breast-implant-3",
            description: "Premium silicone implants or fat transfer to restore volume.",
            image: "/gynecomastia_after_1782474181819.png"
          },
          { 
            title: "Facelift", 
            slug: "face-lift",
            description: "Surgical lifting of sagging tissues to restore youthful contours.",
            image: "/rhinoplasty_after.png"
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
        title: "Clinical Therapies",
        procedures: [
          { 
            title: "Hair Transplant", 
            slug: "head",
            description: "High-density follicular graft restoration using micro-FUE.",
            image: "/hair_after.png"
          },
          { 
            title: "PRP Hair Therapy", 
            slug: "prp-therapy",
            description: "Platelet-rich plasma therapy to stimulate natural hair growth.",
            image: "/hair_before.png"
          },
          { 
            title: "Laser Hair Removal", 
            slug: "laser-hair-removal",
            description: "Clinical permanent laser reduction for smooth skin.",
            image: "/hair_after.png"
          },
          { 
            title: "Botox", 
            slug: "botox-and-fillers",
            description: "Injectable muscle relaxer to smooth fine lines.",
            image: "/rhinoplasty_after.png"
          },
          { 
            title: "Fillers", 
            slug: "botox-and-fillers",
            description: "Dermal fillers to restore volume to cheeks & lips.",
            image: "/rhinoplasty_after.png"
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
