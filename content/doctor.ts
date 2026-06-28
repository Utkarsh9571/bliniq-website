export interface DoctorData {
  name: string;
  title: string;
  specialty: string;
  degrees: string[];
  qualifications: string[];
  experienceYears: number;
  proceduresCounter: number;
  clinicSpecialties: string[];
  description: string;
}

export const DOCTOR_DATA: DoctorData = {
  name: "Dr. Ashwani Kumar",
  title: "Chief Plastic Surgeon & Medical Director",
  specialty: "Cosmetic & Plastic Surgery",
  degrees: ["M.B.B.S", "M.S. General Surgery", "M.Ch Plastic Surgery"],
  qualifications: [
    "M.Ch in Plastic Surgery with highest honors",
    "Specialist in VASER 4D-HD liposuction",
    "Active member of National Association of Aesthetic Plastic Surgeons"
  ],
  experienceYears: 18,
  proceduresCounter: 3000,
  clinicSpecialties: [
    "High-Definition VASER Liposuction",
    "Gynecomastia Correction",
    "Cosmetic Rhinoplasty",
    "Tummy Tuck Restoration",
    "FUE Hair Transplant"
  ],
  description: "Dr. Ashwani Kumar is a renowned, board-certified plastic and reconstructive surgeon with over 18 years of clinical excellence. Having performed over 3,000 successful surgeries, he is considered one of the foremost authorities in High-Definition VASER body contouring, male chest reduction, and structural nasal rhinoplasty in the Delhi NCR region."
};
