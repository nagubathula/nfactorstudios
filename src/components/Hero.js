// pages/index.js
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen bg-blue-600">
      <Navbar />

      <div className="relative min-h-[calc(100vh-80px)] flex items-end pb-16">
        {/* Decorative circles background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-blue-500 absolute -top-10 -left-10 md:-top-20 md:-left-20"></div>
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border-8 border-blue-500 absolute top-1/4 left-1/3"></div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-blue-500 absolute right-8 md:right-16 top-1/2"></div>
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-blue-500 absolute bottom-0 left-1/2"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4">
                We help <br />
                creating your <br />
                Digital Presence
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-white text-lg sm:text-xl mb-8 md:mb-10">
                With nFactor, start your digital journey with a professional and
                modern website that reflects your brand and values.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link
                  href="#about"
                  className="inline-flex items-center bg-white text-blue-500 px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-30 transition"
                >
                  Start Journey
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center bg-white bg-opacity-20 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-30 transition"
                >
                  About nFactor
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
