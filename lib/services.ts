export interface ServiceInfo {
  slug: string;
  title: string;
  category: "Body" | "Face" | "Breast" | "Hair" | "Non-Surgical" | "Other";
  description: string;
  image: string;
}

export const COSMETIC_SERVICES: ServiceInfo[] = [
  {
    slug: "gynecomastia-surgery-in-delhi",
    title: "Gynecomastia Surgery",
    category: "Body",
    description: "Get scarless and painless male breast reduction surgery in Delhi under the expert care of Dr. Ashwani Kumar.",
    image: "/images/home/Gynecomastia-1.webp"
  },
  {
    slug: "gynecomastia-treatment-in-delhi",
    title: "Gynecomastia Treatment",
    category: "Body",
    description: "Permanent and daycare treatment options for puffy nipples and enlarged male breasts in Delhi NCR.",
    image: "/images/home/Grade-2-for-gynecomastia-treatment.webp"
  },
  {
    slug: "liposuction-surgery-in-delhi",
    title: "Liposuction Surgery",
    category: "Body",
    description: "Advanced fat removal and body contouring using high-definition Liposuction in Delhi.",
    image: "/images/home/Liposuction-Tummy360.webp"
  },
  {
    slug: "tummy-tuck",
    title: "Tummy Tuck",
    category: "Body",
    description: "Abdominoplasty to remove excess abdominal skin and tighten weakened abdominal muscles.",
    image: "/images/home/Liposuction-Tummy360.webp"
  },
  {
    slug: "nose-cosmetic-rhinoplasty",
    title: "Cosmetic Rhinoplasty",
    category: "Face",
    description: "Reshape, resize, and restore symmetry to the nose with cosmetic rhinoplasty surgery in Delhi.",
    image: "/images/home/Doctor_01.webp"
  },
  {
    slug: "puffy-nipple-surgery",
    title: "Puffy Nipple Surgery",
    category: "Breast",
    description: "Specialized glandular excision procedure for correction of puffy nipples in men.",
    image: "/images/home/Grade-2-for-gynecomastia-treatment.webp"
  },
  {
    slug: "botox-and-fillers",
    title: "Botox and Fillers",
    category: "Non-Surgical",
    description: "Anti-aging injectable treatments to smooth fine lines, restore volume, and enhance facial features.",
    image: "/images/home/Doctor_01.webp"
  },
  {
    slug: "breast-reduction",
    title: "Breast Reduction",
    category: "Breast",
    description: "Surgical reduction of breast tissue to alleviate physical discomfort and achieve a proportionate profile.",
    image: "/images/home/Liposuction-Tummy360.webp"
  },
  {
    slug: "sex-change-surgery",
    title: "Sex Reassignment Surgery",
    category: "Body",
    description: "Compassionate, safe, and professional gender reaffirmation surgeries (Male to Female & Female to Male).",
    image: "/images/home/Doctor_01.webp"
  },
  {
    slug: "prp-therapy",
    title: "PRP Hair Therapy",
    category: "Hair",
    description: "Platelet-rich plasma therapy to combat hair loss and stimulate natural hair follicle growth.",
    image: "/images/home/Grade-2-for-gynecomastia-treatment.webp"
  }
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return COSMETIC_SERVICES.find(s => s.slug === slug);
}
