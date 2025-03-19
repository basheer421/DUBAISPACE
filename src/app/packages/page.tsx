"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

type Package = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
};

const packages: Package[] = [
  {
    id: "orbital-experience",
    name: "Orbital Experience",
    description: "A short orbital journey around Earth with breathtaking views of our planet from space.",
    duration: "3 days",
    price: "$18,000,000",
    features: [
      "Zero-gravity training",
      "Spaceflight in Dubai Space Vessel",
      "Earth orbit experience",
      "Professional photography package",
      "Luxury accommodation onboard",
    ],
  },
  {
    id: "lunar-expedition",
    name: "Lunar Expedition",
    description: "Experience the ultimate lunar adventure with a journey to orbit the Moon and stay at our exclusive lunar gateway.",
    duration: "14 days",
    price: "$58,000,000",
    features: [
      "All Orbital Experience features",
      "Extended zero-gravity training",
      "Lunar orbit journey",
      "Stay at Lunar Gateway station",
      "Virtual reality lunar surface experience",
      "Exclusive lunar memorabilia",
    ],
    popular: true,
  },
  {
    id: "mars-odyssey",
    name: "Mars Odyssey",
    description: "The ultimate space adventure. Journey to the Red Planet in our state-of-the-art Mars transit vessel.",
    duration: "180 days",
    price: "$125,000,000",
    features: [
      "All Lunar Expedition features",
      "Advanced space survival training",
      "Mars transit journey",
      "Martian orbit experience",
      "Deep space communication access",
      "Historic first wave status",
      "Lifetime VIP membership",
    ],
  },
];

export default function PackagesPage() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="relative py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-dark/80 to-space-dark"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-space-light mb-4">
              <span className="text-dubai-gold">Space Travel</span> Packages
            </h1>
            <p className="text-space-light/70 text-lg max-w-3xl mx-auto">
              Choose your journey to the stars with our exclusive space travel packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-space-dark/50 backdrop-blur-md border ${pkg.popular ? 'border-dubai-gold' : 'border-space-accent/20'} rounded-2xl p-6 transition-all hover:border-dubai-gold/30 hover:shadow-cosmic`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 right-4 bg-dubai-gold text-space-dark px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h2 className="text-2xl font-bold text-space-light mb-2">{pkg.name}</h2>
                <p className="text-space-light/70 mb-4">{pkg.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-dubai-gold text-2xl font-bold">{pkg.price}</span>
                  <span className="text-space-light/50">/ person</span>
                </div>

                <div className="text-space-light/70 mb-6">
                  <span className="text-space-stardust">Duration:</span> {pkg.duration}
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-space-light/70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-dubai-gold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="luxury"
                  className="w-full"
                  onClick={() => router.push(`/book/${pkg.id}`)}
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <p className="text-space-light/70 mb-4">
              Need more information about our space travel packages?
            </p>
            <Button variant="outline" size="lg">
              Contact Our Space Travel Advisors
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}