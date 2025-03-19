import React from "react";
import Link from "next/link";
import Image from "next/image";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-space-dark text-space-light flex flex-col">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 bg-cosmic-grid bg-[size:50px_50px] opacity-30 z-0"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-space-accent/20 backdrop-blur-md bg-space-dark/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-dubai-gold font-futuristic text-2xl font-bold">
              DUBAI<span className="text-space-secondary">SPACE</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/destinations"
              className="text-space-light hover:text-space-stardust transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/packages"
              className="text-space-light hover:text-space-stardust transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/accommodations"
              className="text-space-light hover:text-space-stardust transition-colors"
            >
              Accommodations
            </Link>
            <Link
              href="/dashboard"
              className="text-space-light hover:text-space-stardust transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 rounded-full bg-space-primary hover:bg-space-primary/80 text-white transition-all shadow-cosmic">
              Book Now
            </button>
            <button className="md:hidden text-space-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-space-accent/20 backdrop-blur-md bg-space-dark/80 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-dubai-gold font-bold mb-4">
                DUBAI<span className="text-space-secondary">SPACE</span>
              </h3>
              <p className="text-space-light/70">
                The future of travel is here. Experience the ultimate space
                travel from Dubai.
              </p>
            </div>
            <div>
              <h4 className="text-space-light font-bold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/destinations"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodations"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    Accommodations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-space-light font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safety"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    Safety
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-space-light/70 hover:text-space-stardust"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-space-light font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-space-light/70 hover:text-space-stardust"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-space-light/70 hover:text-space-stardust"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-space-light/70 hover:text-space-stardust"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-space-accent/10 text-center text-space-light/50">
            <p>
              © {new Date().getFullYear()} Dubai Space Travel. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
