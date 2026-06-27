import type { NextConfig } from "next";

const procedures = [
  "liposuction-surgery-in-delhi", "neck", "upper-arms", "flank-love-handles", "thighs", "knees", "calves", "breast",
  "face-lift", "double-eyelid-surgery", "nose-cosmetic-rhinoplasty", "buccal-fat-pad-removal", "lip-reduction", "chin-implant",
  "gynecomastia-surgery-in-delhi", "puffy-nipple-surgery", "pectoral-implants", "saggy-arms-surgery", "six-pack-abs-creation", "tummy-tuck",
  "penile-lengthening", "fat-injection", "circumcision",
  "face-lift-2", "double-eyelid-surgery-2", "nose-cosmetic-rhinoplasty-2", "buccal-fat-pad-removal-2", "lip-reduction-2", "chin-implant-2",
  "fat-injection-3", "breast-implant-3", "breast-reduction", "breast-lift", "saggy-arms-surgery-2", "tummy-tuck-2",
  "hymenoplasty", "vaginal-tightening", "labiaplasty-surgery-delhi", "mons-reduction",
  "head", "beard", "moustache", "eyebrow", "prp-therapy", "mesotherapy", "white-hair-removal",
  "sex-change-surgery", "male-to-female", "female-to-male",
  "scarless-lipoma-removal", "botox-and-fillers", "chemical-peels", "laser-hair-removal", "scar-remodeling", "mole-removal", "skin-tag-removal",
  "gynecomastia-treatment-in-delhi"
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return procedures.map(slug => ({
      source: `/${slug}`,
      destination: `/procedures/${slug}`
    }));
  }
};

export default nextConfig;
