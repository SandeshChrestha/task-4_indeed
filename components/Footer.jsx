// components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row text-gray-600">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <a href="#" className="hover:text-blue-600">Hiring Lab</a>
                        <a href="#" className="hover:text-blue-600">Career advice</a>
                        <a href="#" className="hover:text-blue-600">Browse Jobs</a>
                        <a href="#" className="hover:text-blue-600">Browse Companies</a>
                        <a href="#" className="hover:text-blue-600">Resume help</a>
                        <a href="#" className="hover:text-blue-600">Salaries</a>
                        <a href="#" className="hover:text-blue-600">Indeed Events</a>
                        <a href="#" className="hover:text-blue-600">Work at Indeed</a>
                        <a href="#" className="hover:text-blue-600">Countries</a>
                        <a href="#" className="hover:text-blue-600">About</a>
                        <a href="#" className="hover:text-blue-600">Help Center</a>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                        <span className="text-gray-500">© 2024 Indeed</span>
                        <a href="#" className="hover:text-blue-600">Your Privacy Choices</a>
                        <a href="#" className="hover:text-blue-600">Accessibility at Indeed</a>
                        <a href="#" className="hover:text-blue-600">Privacy Center and Ad Choices</a>
                        <a href="#" className="hover:text-blue-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
