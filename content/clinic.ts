export interface ClinicData {
  name: string;
  description: string;
  type: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  phoneFormatted: string;
  email: string;
  openingHours: string[];
  geo: {
    latitude: string;
    longitude: string;
  };
  paymentMethods: string[];
  socialLinks: string[];
}

export const CLINIC_DATA: ClinicData = {
  name: "BLINIQ Cosmetic & Plastic Surgery Clinic",
  description: "Premier luxury aesthetic and cosmetic plastic surgery clinic in Dwarka, Delhi. Directed by chief surgeon Dr. Ashwani Kumar.",
  type: "Cosmetic Surgery Clinic",
  address: {
    streetAddress: "Qutab Vihar Phase-1, Dwarka",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110075",
    addressCountry: "IN"
  },
  phone: "+917290062111",
  phoneFormatted: "+91 72900 62111",
  email: "info@bliniq.in",
  openingHours: ["Mo-Su 09:00-21:00"],
  geo: {
    latitude: "28.5921",
    longitude: "77.0460"
  },
  paymentMethods: ["Cash", "Credit Card", "Debit Card", "UPI", "EMI Financing"],
  socialLinks: [
    "https://instagram.com/bliniq",
    "https://facebook.com/bliniq",
    "https://youtube.com/bliniq"
  ]
};
