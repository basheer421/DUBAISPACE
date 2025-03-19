import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Image from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";

type Destination = {
  id: string;
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  price: string;
  image: string;
  featured?: boolean;
};

const destinations: Destination[] = [
  {
    id: "iss",
    name: "International Space Station",
    description:
      "Experience life in Earth's orbit aboard the ISS. Enjoy panoramic views of our planet and participate in scientific experiments.",
    distance: "408 km",
    travelTime: "6 hours",
    price: "From $28,000,000",
    image: "/images/space-station.jpg",
    featured: true,
  },
  {
    id: "lunar-gateway",
    name: "Lunar Gateway",
    description:
      "The first luxury space hotel in lunar orbit. Experience the moon up close with exclusive lunar surface excursions.",
    distance: "384,400 km",
    travelTime: "3 days",
    price: "From $58,000,000",
    image: "/images/space-station.jpg",
  },
  {
    id: "mars-transit",
    name: "Mars Transit Hotel",
    description:
      "The ultimate adventure for space enthusiasts. Travel to the Red Planet in Dubai's state-of-the-art Mars transit vessel.",
    distance: "54.6 million km",
    travelTime: "7 months",
    price: "From $120,000,000",
    image: "/images/space-station.jpg",
  },
];

export default function DestinationsPage() {
  return (
    <MainLayout>
      <div className="relative py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-space-nebula/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dubai-gold/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-space-light mb-4">
              <span className="text-dubai-gold">Destinations</span> Beyond Earth
            </h1>
            <p className="text-space-light/70 text-lg md:text-xl max-w-3xl mx-auto">
              Explore our range of extraordinary destinations from Earth orbit
              to Mars and beyond. Each journey promises the ultimate luxury
              space travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`relative group rounded-2xl overflow-hidden border border-space-accent/20 bg-space-dark/50 backdrop-blur-md transition-all duration-500 hover:border-dubai-gold/50 hover:shadow-cosmic ${
                  destination.featured
                    ? "md:col-span-2 lg:col-span-1 ring-2 ring-dubai-gold/30"
                    : ""
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent"></div>

                  {destination.featured && (
                    <div className="absolute top-4 right-4 bg-dubai-gold/90 text-space-dark text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-space-light mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-space-light/70 mb-4">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-space-stardust text-sm">
                        Distance
                      </div>
                      <div className="text-space-light font-medium">
                        {destination.distance}
                      </div>
                    </div>
                    <div>
                      <div className="text-space-stardust text-sm">
                        Travel Time
                      </div>
                      <div className="text-space-light font-medium">
                        {destination.travelTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-dubai-gold font-bold">
                      {destination.price}
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
