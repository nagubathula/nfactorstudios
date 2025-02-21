import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-7.5 13.5l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5-6 6z" />
          </svg>
          <span className="ml-2 text-white font-bold text-xl">
            nfactor studio
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#products" className="text-white hover:text-blue-100">
            Products
          </Link>
          <Link href="#use-cases" className="text-white hover:text-blue-100">
            Use Cases
          </Link>
          <Link href="#about-us" className="text-white hover:text-blue-100">
            About Us
          </Link>
          <Link href="#resources" className="text-white hover:text-blue-100">
            Resources
          </Link>
          <Link href="#careers" className="text-white hover:text-blue-100">
            Careers
          </Link>

          <Link
            href="#contact"
            className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition"
          >
            Get In Touch
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
