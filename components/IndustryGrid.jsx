"use client"; // This makes the component a Client Component

import React, { useState } from 'react';

const industries = [
    {
        name: "Aerospace & Defense",
        icon: "/path/to/icon1.png", // Replace with actual icon paths
        link: "/aerospace-defense", // The URL to navigate to
    },
    {
        name: "Agriculture",
        icon: "/path/to/icon2.png",
        link: "/agriculture",
    },
    {
        name: "Arts, Entertainment & Recreation",
        icon: "/path/to/icon3.png",
        link: "/arts-entertainment",
    },
    {
        name: "Construction, Repair & Maintenance Services",
        icon: "/path/to/icon4.png",
        link: "/construction-repair",
    },
    {
        name: "Education",
        icon: "/path/to/icon5.png",
        link: "/education",
    },
    {
        name: "Energy, Mining & Utilities",
        icon: "/path/to/icon6.png",
        link: "/energy-mining",
    },
    // Additional industries
    {
        name: "Healthcare",
        icon: "/path/to/icon7.png",
        link: "/healthcare",
    },
    {
        name: "Information Technology",
        icon: "/path/to/icon8.png",
        link: "/it",
    },
    {
        name: "Finance",
        icon: "/path/to/icon9.png",
        link: "/finance",
    },
    {
        name: "Retail",
        icon: "/path/to/icon10.png",
        link: "/retail",
    },
    // Add more industries as needed...
];

export default function IndustryGrid() {
    const [showAll, setShowAll] = useState(false); // State to manage the visibility of all industries

    return (
        <div className="py-10 px-5 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Browse Companies by Industry
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.slice(0, showAll ? industries.length : 6).map((industry, index) => (
                    <a
                        key={index}
                        href={industry.link} // Add a link for navigation
                        className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-200 transform hover:scale-105" // Added hover scale effect
                    >
                        <img
                            src={industry.icon}
                            alt={industry.name}
                            className="mx-auto mb-2 w-10 h-10" // Adjusted icon size
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {industry.name}
                        </h3>
                    </a>
                ))}
            </div>

            {/* See All Industries Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => setShowAll(!showAll)} // Toggle the state when clicked
                    className="border border-gray-400 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-200"
                >
                    {showAll ? "See fewer industries" : "See all industries"}
                </button>
            </div>
        </div>
    );
}
