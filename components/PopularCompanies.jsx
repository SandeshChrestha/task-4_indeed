import { useState, useEffect } from 'react';


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

export default function PopularCompanies({ searchQuery }) {
    const [filteredCompanies, setFilteredCompanies] = useState(companies);

    useEffect(() => {
        if (searchQuery) {
            setFilteredCompanies(
                companies.filter(company =>
                    company.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredCompanies(companies);
        }
    }, [searchQuery]);

    return (
        <div className="mt-8 px-5 max-w-7xl mx-auto">
            {/* Popular Companies Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Companies</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCompanies.map((company, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        <h3 className="text-lg font-bold">{company}</h3>
                        <p className="text-sm">Salaries | Q&A | Open Jobs</p>
                    </div>
                ))}
            </div>

            {/* Horizontal Company Comparison Rectangles in a 2x2 Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  gap-5">
                {/* First Horizontal Comparison */}
                <div className="border p-6 rounded-md flex justify-between  hover:shadow-lg transition duration-300  items-center">
                    {/* First Company */}
                    <div className="text-left">
                        <h3 className="text-md font-bold">Barnes & Noble</h3>
                        <p className="text-sm">3.8 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">6.7K reviews</p>
                    </div>

                    {/* VS */}
                    <div className="text-lg font-bold">VS</div>

                    {/* Second Company */}
                    <div className="text-right">
                        <h3 className="text-md  font-bold">Half Price Books</h3>
                        <p className="text-sm">3.7 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">507 reviews</p>
                    </div>
                </div>

                {/* Second Horizontal Comparison */}
                <div className="border p-4 rounded-md flex justify-between   hover:shadow-lg transition duration-300 items-center">
                    <div className="text-left">
                        <h3 className="text-md font-bold">UnitedHealth Group</h3>
                        <p className="text-sm">4.1 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">3.2K reviews</p>
                    </div>

                    <div className="text-lg font-bold">VS</div>

                    <div className="text-right">
                        <h3 className="text-md font-bold">Amazon Flex</h3>
                        <p className="text-sm">4.0 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">12.5K reviews</p>
                    </div>
                </div>

                {/* Third Horizontal Comparison */}
                <div className="border p-4 rounded-md flex justify-between  hover:shadow-lg transition duration-300 items-center">
                    <div className="text-left">
                        <h3 className="text-md font-bold">Boeing</h3>
                        <p className="text-sm">4.0 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">1.1K reviews</p>
                    </div>

                    <div className="text-lg font-bold">VS</div>

                    <div className="text-right">
                        <h3 className="text-md font-bold">Allied Universal</h3>
                        <p className="text-sm">3.2 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">5.4K reviews</p>
                    </div>
                </div>

                {/* Fourth Horizontal Comparison */}
                <div className="border p-4 rounded-md flex justify-between  hover:shadow-lg transition duration-300 items-center">
                    <div className="text-left">
                        <h3 className="text-md font-bold">Raising Cane's</h3>
                        <p className="text-sm">3.9 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">800 reviews</p>
                    </div>

                    <div className="text-lg font-bold">VS</div>

                    <div className="text-right">
                        <h3 className="text-md font-bold">Burlington Stores</h3>
                        <p className="text-sm">3.5 <span className="text-purple-600">&#9733;</span></p>
                        <p className="text-xs text-gray-600">1.2K reviews</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
