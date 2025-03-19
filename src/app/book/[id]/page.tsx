"use client";

import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/Button";

type BookingDetails = {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
};

export default function BookingPage({ params }: { params: { id: string } }) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [passengers, setPassengers] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to fetch package details
    const fetchPackageDetails = async () => {
      try {
        setLoading(true);
        // This would be replaced with an actual API call
        const mockPackage: BookingDetails = {
          id: params.id,
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
        };
        setBookingDetails(mockPackage);
      } catch (error) {
        console.error("Error fetching package details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [params.id]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handlePassengerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassengers(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      packageId: params.id,
      selectedDate,
      passengers,
    });
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-dubai-gold rounded-full animate-spin"></div>
        </div>
      </MainLayout>
    );
  }

  if (!bookingDetails) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-space-light">
          Package not found
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-dark/80 to-space-dark"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-space-dark/50 backdrop-blur-md border border-space-accent/20 rounded-2xl p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-space-light mb-6">
              Book Your{" "}
              <span className="text-dubai-gold">{bookingDetails.name}</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-bold text-space-light mb-4">
                  Package Details
                </h2>
                <div className="space-y-4 text-space-light/70">
                  <p className="text-2xl font-bold text-dubai-gold">
                    {bookingDetails.price}
                  </p>
                  <p>Duration: {bookingDetails.duration}</p>
                  <p>{bookingDetails.description}</p>
                  <div className="space-y-2">
                    <p className="text-space-light font-medium">Features:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {bookingDetails.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-space-light mb-4">
                  Booking Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-space-light mb-2"
                    >
                      Select Launch Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-space-dark/50 border border-space-accent/20 rounded-lg p-3 text-space-light focus:border-dubai-gold focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="passengers"
                      className="block text-space-light mb-2"
                    >
                      Number of Passengers
                    </label>
                    <input
                      type="number"
                      id="passengers"
                      value={passengers}
                      onChange={handlePassengerChange}
                      min="1"
                      max="10"
                      className="w-full bg-space-dark/50 border border-space-accent/20 rounded-lg p-3 text-space-light focus:border-dubai-gold focus:outline-none"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button variant="luxury" className="w-full" type="submit">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="border-t border-space-accent/20 pt-6 mt-8">
              <p className="text-space-light/70 text-sm">
                By proceeding with the booking, you agree to our terms and
                conditions for space travel. Please ensure all passengers meet
                the required health and safety requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
