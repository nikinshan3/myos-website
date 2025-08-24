import {
  Scissors,
  Sparkles,
  Heart,
  Palette,
  Crown,
  Zap,
  Users,
  Camera,
} from "lucide-react";

export const services = [
  {
    name: "Haircut & Beard Styling",
    description:
      "Professional haircuts for all hair types. Get the perfect look that suits your personality.",
    price: "260",
    duration: "45-60 min",
    icon: Scissors,
    features: [
      "Consultation included",
      "Wash & blow dry",
      "Style recommendations",
    ],
    isFeatured: true,
  },
  {
    name: "Hair Coloring",
    description:
      "Transform your look with our premium hair coloring services. From highlights to full color.",
    price: "Starting from 3,500",
    duration: "2-3 hours",
    icon: Palette,
    features: [
      "Premium color products",
      "Color consultation",
      "Aftercare tips",
    ],
    isFeatured: false,
  },
  {
    name: "Spa & Facial",
    description:
      "Rejuvenate your skin with our luxurious spa and facial treatments for a radiant glow.",
    price: "Starting from 1,000",
    duration: "90 min",
    icon: Heart,
    features: ["Deep cleansing", "Moisturizing mask", "Relaxing massage"],
    isFeatured: false,
  },
  {
    name: "Bridal Services",
    description:
      "Complete bridal package including hair, makeup, and styling for your special day.",
    price: "Starting from 10,000",
    duration: "3-4 hours",
    icon: Crown,
    features: ["Trial session", "Hair & makeup", "Touch-up kit"],
    isFeatured: true,
  },
  {
    name: "Grooming Services",
    description:
      "Professional grooming services for men including beard trim, facial, and styling.",
    price: "5,000",
    duration: "60 min",
    icon: Users,
    features: ["Beard trim", "Facial treatment", "Hair styling"],
    isFeatured: false,
  },
  {
    name: "Makeup Services",
    description:
      "Professional makeup services for parties, events, and special occasions.",
    price: "Starting from 1,500",
    duration: "90 min",
    icon: Sparkles,
    features: ["Party makeup", "Event makeup", "Touch-ups"],
    isFeatured: false,
  },
  {
    name: "Hair Treatment",
    description:
      "Nourish and repair your hair with our specialized treatment packages.",
    price: "Starting from 4,000",
    duration: "75 min",
    icon: Zap,
    features: ["Deep conditioning", "Hair repair", "Scalp treatment"],
    isFeatured: false,
  },
  {
    name: "Permanent Hair Extension",
    description:
      "Professional permanent hair extensions for length, volume, and style transformation.",
    price: "Starting from 12,500",
    duration: "3-4 hours",
    icon: Camera,
    features: [
      "Premium hair extensions",
      "Professional installation",
      "Aftercare guidance",
    ],
    isFeatured: false,
  },
];

export const serviceCategories = [
  "All Services",
  "Hair Services",
  "Beauty Services",
  "Bridal Services",
  "Grooming",
];
