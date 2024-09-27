"use client"; // This makes the component a Client Component

import { useState } from 'react'; // Import useState hook from React
import Image from 'next/image';   // Import Image for optimized image loading in Next.js

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <nav className="bg-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/1.png" alt="Company Logo" />
            </div>

            {/* Navigation Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-blue-600 hover:underline">
                Home
              </a>
              <a href="/company-review" className="text-gray-900 hover:text-blue-600 hover:underline">
                Company Review
              </a>
              <a href="/find-salaries" className="text-gray-900 hover:text-blue-600 hover:underline">
                Find Salaries
              </a>
            </div>
          </div>

          {/* Right Side: Sign In and Post Job */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </a>
            <span>|</span>
            <a href="/post-job" className="text-gray-900 hover:text-blue-600 hover:underline">
              Employers / Post Job
            </a>
          </div>

          {/* Hamburger Menu Icon (visible on mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
              className="text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-gray-900 hover:text-blue-600 hover:underline">
              Home
            </a>
            <a href="/company-review" className="block text-gray-900 hover:text-blue-600 hover:underline">
              Company Review
            </a>
            <a href="/find-salaries" className="block text-gray-900 hover:text-blue-600 hover:underline">
              Find Salaries
            </a>
            <a href="/sign-in" className="block text-blue-600 hover:underline">
              Sign In
            </a>
            <a href="/post-job" className="block text-gray-900 hover:text-blue-600 hover:underline">
              Employers / Post Job
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
