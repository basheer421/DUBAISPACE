export type Package = {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
};

export const packages: Package[] = [
  {
    id: "orbital-luxury",
    name: "Luxury Orbital Experience",
    price: "$250,000",
    duration: "5 days",
    description:
      "Experience the ultimate luxury in space with our premium orbital package",
    features: [
      "Zero-gravity suite",
      "Earth observation lounge",
      "Gourmet space dining",
      "Space walk experience",
    ],
    popular: true,
  },
  {
    id: "lunar-expedition",
    name: "Lunar Hotel Expedition",
    price: "$500,000",
    duration: "10 days",
    description:
      "Stay at our exclusive lunar hotel and experience life on the Moon",
    features: [
      "Lunar surface walks",
      "Moonlight dining",
      "Crater exploration",
      "Earth viewing lounge",
    ],
    popular: false,
  },
  {
    id: "mars-adventure",
    name: "Mars Adventure Package",
    price: "$750,000",
    duration: "30 days",
    description:
      "Be among the first to experience the red planet with our Mars expedition",
    features: [
      "Mars surface exploration",
      "Research facility tour",
      "Martian sunset viewing",
      "Space agriculture experience",
    ],
    popular: false,
  },
];
