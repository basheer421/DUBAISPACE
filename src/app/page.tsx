import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-space-nebula/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-space-light mb-4">
              <span className="text-dubai-gold">Luxury</span> Space Travel
              Features
            </h2>
            <p className="text-space-light/70 text-lg max-w-3xl mx-auto">
              Experience the future of travel with Dubai's exclusive space
              program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-space-dark/50 backdrop-blur-md border border-space-accent/20 rounded-2xl p-6 transition-all hover:border-dubai-gold/30 hover:shadow-cosmic">
              <div className="w-14 h-14 mb-6 rounded-full bg-space-primary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-space-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-light mb-3">
                Exclusive Destinations
              </h3>
              <p className="text-space-light/70 mb-4">
                Access to the most exclusive space destinations, from orbital
                stations to lunar bases and beyond.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-space-dark/50 backdrop-blur-md border border-space-accent/20 rounded-2xl p-6 transition-all hover:border-dubai-gold/30 hover:shadow-cosmic">
              <div className="w-14 h-14 mb-6 rounded-full bg-dubai-gold/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-dubai-gold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-light mb-3">
                Luxury Accommodations
              </h3>
              <p className="text-space-light/70 mb-4">
                Zero-gravity suites, panoramic observation rooms, and gourmet
                dining experiences in space.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-space-dark/50 backdrop-blur-md border border-space-accent/20 rounded-2xl p-6 transition-all hover:border-dubai-gold/30 hover:shadow-cosmic">
              <div className="w-14 h-14 mb-6 rounded-full bg-space-secondary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-space-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-light mb-3">
                Safety Guaranteed
              </h3>
              <p className="text-space-light/70 mb-4">
                State-of-the-art spacecraft with multiple redundancy systems and
                highly trained crew members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/images/space-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/80 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-space-light mb-6">
              Ready to <span className="text-dubai-gold">Experience</span> the
              Future?
            </h2>
            <p className="text-space-light/70 text-lg md:text-xl mb-8">
              Join the exclusive group of space pioneers. Book your journey
              today and be among the first to experience luxury space travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-dubai-gold hover:bg-dubai-gold/90 text-space-dark font-bold rounded-full transition-all transform hover:scale-105 shadow-cosmic">
                Book Your Space Journey
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-space-accent/30 hover:border-dubai-gold/50 text-space-light font-bold rounded-full transition-all transform hover:scale-105">
                View Launch Schedule
              </button>
            </div>
            <div className="mt-12 flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-dubai-gold text-3xl font-bold mb-2">
                  24/7
                </div>
                <div className="text-space-light/70">Support</div>
              </div>
              <div className="h-12 w-px bg-space-accent/20"></div>
              <div className="text-center">
                <div className="text-dubai-gold text-3xl font-bold mb-2">
                  100%
                </div>
                <div className="text-space-light/70">Safety Record</div>
              </div>
              <div className="h-12 w-px bg-space-accent/20"></div>
              <div className="text-center">
                <div className="text-dubai-gold text-3xl font-bold mb-2">
                  5★
                </div>
                <div className="text-space-light/70">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
