"use client"; // Makes the component a Client Component

import { useState } from 'react'; // Import useState hook from React
import IndustryGrid from '../components/IndustryGrid'; // Import IndustryGrid component
import PopularCompanies from '../components/PopularCompanies'; // Import PopularCompanies component
import CompareSection from '../components/CompareSection'; // Import CompareSection
import Footer from '../components/Footer'; // Import Footer component
import Image from 'next/image'; // Import Image for optimized image loading in Next.js

const companies = [
  "Barnes & Noble",
  "UnitedHealth Group",
  "Amazon Flex",
  "Raising Cane's",
  "United States Postal Service",
  "Allied Universal",
  "Boeing",
  "Indeed",
  "Burlington Stores"
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [autoCompleteResults, setAutoCompleteResults] = useState([]); // State for auto-complete suggestions
  const [showSuggestions, setShowSuggestions] = useState(false); // State to toggle suggestions visibility

  // Handle the search input change
  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchQuery(input);
    if (input) {
      const filteredSuggestions = companies.filter(company =>
        company.toLowerCase().includes(input.toLowerCase())
      );
      setAutoCompleteResults(filteredSuggestions);
      setShowSuggestions(true); // Show suggestions when typing
    } else {
      setShowSuggestions(false); // Hide suggestions if input is empty
    }
  };

  // Handle selecting a suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false); // Hide suggestions when a suggestion is clicked
  };

  // Handle the search button click
  const handleSearchClick = () => {
    setShowSuggestions(false); // Hide suggestions after search
  };

  return (
    <div>
      {/* Navbar */}
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

      {/* Page Content */}
      <div className="py-20 px-10 mx-auto max-w-screen-lg">
        {/* Headline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-7">
          Find great places to work
        </h1>

        {/* Subtext */}
        <p className="text-xl text-gray-600 mb-6">
          Get access to millions of company reviews
        </p>

        {/* Title for Search Bar */}
        <h2 className="text-lg font-semibold text-gray-700">
          Company name or job title
        </h2>

        {/* Search Filter Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 mb-8">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery} // Controlled input
              onChange={handleSearchChange} // Update the state on change
              placeholder="Search for a company..."
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            />
            {/* Auto-complete suggestions */}
            {showSuggestions && autoCompleteResults.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                {autoCompleteResults.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button 
            onClick={handleSearchClick}  // Attach the onClick event
            className="bg-blue-600 text-white rounded-lg px-4 py-2 min-w-[150px]"
          >
            Find Company
          </button>
        </div>

        {/* Linkable Text */}
        <p className="text-lg text-blue-600 underline mt-4">
          Do you want to search for salaries?
        </p>

        {/* Render IndustryGrid component */}
        <IndustryGrid /> 

        {/* Render PopularCompanies component with searchQuery prop */}
        <PopularCompanies searchQuery={searchQuery} /> {/* Pass the current searchQuery here */}

        {/* Render CompareSection component */}
        <CompareSection /> 
      </div>

      {/* Footer Component */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}
