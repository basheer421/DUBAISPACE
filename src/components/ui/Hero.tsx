"use client";

import React, { useState, useEffect } from "react";
import Image from "@/components/ui/Image";
import { Button } from "./Button";

type SpaceImage = {
  urls: {
    regular: string;
  };
  alt_description: string | null;
};

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [spaceImage, setSpaceImage] = useState<SpaceImage | null>(null);

  useEffect(() => {
    const fetchSpaceImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // For now, we'll use a placeholder image
        setSpaceImage({
          urls: {
            regular: "/images/space-bg.jpg",
          },
          alt_description: "Luxury Space Hotel",
        });
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch image")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpaceImage();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-space-dark opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-dark"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-space-accent/20 backdrop-blur-md text-space-stardust text-xs font-medium tracking-wider animate-pulse-slow">
              LAUNCHING SOON • DUBAI SPACE PROGRAM
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-space-light leading-tight">
              <span className="text-dubai-gold">Dubai</span> to the{" "}
              <span className="text-space-stardust">Stars</span>
              <span className="block mt-2">
                The Ultimate Space Travel Experience
              </span>
            </h1>

            <p className="text-space-light/80 text-lg md:text-xl max-w-xl">
              Experience the future of travel with Dubai's first commercial
              space program. Book your journey to space stations, lunar hotels,
              and beyond.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="luxury" size="lg">
                Book Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Explore Destinations
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-space-dark bg-space-light/20 backdrop-blur-md flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-space-light/70 text-sm">
                <span className="text-dubai-gold font-bold">1,500+</span>{" "}
                travelers have already booked their space journey
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-space-accent/30 shadow-cosmic relative">
                <div className="absolute inset-0 bg-space-cosmic/50 backdrop-blur-sm z-10"></div>
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-space-dark">
                    <div className="w-8 h-8 border-t-2 border-dubai-gold rounded-full animate-spin"></div>
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-space-dark text-space-light/70">
                    <p>Unable to load image</p>
                  </div>
                ) : (
                  spaceImage && (
                    <Image
                      src={spaceImage.urls.regular}
                      alt={spaceImage.alt_description || "Luxury Space Hotel"}
                      width={500}
                      height={625}
                      className="object-cover"
                      fallbackSrc="/images/space-bg.jpg"
                    />
                  )
                )}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-space-dark/80 backdrop-blur-md border border-space-accent/30 rounded-xl p-3 shadow-cosmic">
                <div className="text-space-stardust font-bold">Next Launch</div>
                <div className="text-space-light text-sm">June 15, 2024</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-space-dark/80 backdrop-blur-md border border-space-accent/30 rounded-xl p-3 shadow-cosmic">
                <div className="text-dubai-gold font-bold">VIP Experience</div>
                <div className="text-space-light text-sm">
                  Zero-G Luxury Suite
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-12 w-24 h-24 bg-space-nebula/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-dubai-gold/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
