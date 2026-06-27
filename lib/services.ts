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
    image: "/uploads/2023/12/Gynecomastia-1.jpeg"
  },
  {
    slug: "gynecomastia-treatment-in-delhi",
    title: "Gynecomastia Treatment",
    category: "Body",
    description: "Permanent and daycare treatment options for puffy nipples and enlarged male breasts in Delhi NCR.",
    image: "/uploads/2024/02/Grade-2-for-gynecomastia-treatment.jpg"
  },
  {
    slug: "liposuction-surgery-in-delhi",
    title: "Liposuction Surgery",
    category: "Body",
    description: "Advanced fat removal and body contouring using high-definition VASER Liposuction in Delhi.",
    image: "/uploads/2023/12/Liposuction-Tummy360.jpeg"
  },
  {
    slug: "tummy-tuck",
    title: "Tummy Tuck",
    category: "Body",
    description: "Abdominoplasty to remove excess abdominal skin and tighten weakened abdominal muscles.",
    image: "/uploads/2023/12/Liposuction-Tummy360.jpeg"
  },
  {
    slug: "nose-cosmetic-rhinoplasty",
    title: "Cosmetic Rhinoplasty",
    category: "Face",
    description: "Reshape, resize, and restore symmetry to the nose with cosmetic rhinoplasty surgery in Delhi.",
    image: "/uploads/2020/08/Doctor_01.jpg"
  },
  {
    slug: "puffy-nipple-surgery",
    title: "Puffy Nipple Surgery",
    category: "Breast",
    description: "Specialized glandular excision procedure for correction of puffy nipples in men.",
    image: "/uploads/2024/02/Grade-2-for-gynecomastia-treatment.jpg"
  },
  {
    slug: "botox-and-fillers",
    title: "Botox and Fillers",
    category: "Non-Surgical",
    description: "Anti-aging injectable treatments to smooth fine lines, restore volume, and enhance facial features.",
    image: "/uploads/2020/08/Doctor_01.jpg"
  },
  {
    slug: "breast-reduction",
    title: "Breast Reduction",
    category: "Breast",
    description: "Surgical reduction of breast tissue to alleviate physical discomfort and achieve a proportionate profile.",
    image: "/uploads/2023/12/Liposuction-Tummy360.jpeg"
  },
  {
    slug: "sex-change-surgery",
    title: "Sex Reassignment Surgery",
    category: "Body",
    description: "Compassionate, safe, and professional gender reaffirmation surgeries (Male to Female & Female to Male).",
    image: "/uploads/2020/08/Doctor_01.jpg"
  },
  {
    slug: "prp-therapy",
    title: "PRP Hair Therapy",
    category: "Hair",
    description: "Platelet-rich plasma therapy to combat hair loss and stimulate natural hair follicle growth.",
    image: "/uploads/2024/02/Grade-2-for-gynecomastia-treatment.jpg"
  }
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return COSMETIC_SERVICES.find(s => s.slug === slug);
}
