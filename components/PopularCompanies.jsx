import React from 'react';

const PopularCompanies = ({ searchQuery }) => {
  // Your new companies list
  const companies = [
    {
      name: 'Barnes & Noble',
      logo: '/barnes_and_noble.png',
      rating: 4,
      reviews: '5,000',
    },
    {
      name: 'UnitedHealth Group',
      logo: '/unitedhealthgroup.png',
      rating: 4.5,
      reviews: '8,000',
    },
    {
      name: 'Amazon Flex',
      logo: '/amazon_flex.png',
      rating: 4.2,
      reviews: '10,500',
    },
    {
      name: "Raising Cane's",
      logo: '/raising_canes.png',
      rating: 4.3,
      reviews: '7,200',
    },
    {
      name: 'United States Postal Service',
      logo: '/usps.png',
      rating: 3.8,
      reviews: '20,000',
    },
    {
      name: 'Allied Universal',
      logo: '/allied_universal.png',
      rating: 3.9,
      reviews: '3,600',
    },
    {
      name: 'Boeing',
      logo: '/boeing.png',
      rating: 4.0,
      reviews: '15,000',
    },
    {
      name: 'Indeed',
      logo: '/indeed.png',
      rating: 4.6,
      reviews: '9,500',
    },
    {
      name: 'Burlington Stores',
      logo: '/burlington_stores.png',
      rating: 4.1,
      reviews: '12,000',
    },
  ];

  // Filter companies based on the search query
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {company.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-purple-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${
                            i < company.rating
                              ? 'text-purple-500'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke="none"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-blue-600">
                      {company.reviews} reviews
                    </p>
                  </div>
                  <div className="flex space-x-3 text-gray-500 text-sm mt-1">
                    <a href="#" className="hover:text-gray-800">
                      Salaries
                    </a>
                    <a href="#" className="hover:text-gray-800">
                      Q&A
                    </a>
                    <a href="#" className="hover:text-gray-800">
                      Open jobs
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No companies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
