import React, { useState } from 'react';

const CompareSection = () => {
  const companies = [
    { name: 'Marshalls', logo: '/marshalls.png', rating: 3.6, reviews: '12.3K', vs: 'TJ Maxx', vsLogo: '/tjmaxx.png', vsRating: 3.6, vsReviews: '12.8K' },
    { name: 'Apple', logo: '/apple.png', rating: 4.1, reviews: '13.3K', vs: 'Google', vsLogo: '/google.png', vsRating: 4.3, vsReviews: '5.7K' },
    { name: 'Domino\'s', logo: '/dominos.png', rating: 3.4, reviews: '37.7K', vs: 'Pizza Hut', vsLogo: '/pizzahut.png', vsRating: 3.5, vsReviews: '38K' },
    { name: 'Bank of America', logo: '/boa.png', rating: 3.8, reviews: '32.5K', vs: 'Wells Fargo', vsLogo: '/wellsfargo.png', vsRating: 3.7, vsReviews: '46.6K' },
  ];

  // State to hold the user's rating
  const [userRating, setUserRating] = useState(0);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Compare working at</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center mb-4 sm:mb-0">
                <img src={company.logo} alt={company.name} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-bold text-gray-700">{company.name}</p>
                  <p className="text-sm text-gray-600">{company.rating} <span className="text-purple-500">★</span> {company.reviews} reviews</p>
                </div>
              </div>
              <span className="text-xl font-semibold text-gray-500 mx-4">VS</span>
              <div className="flex items-center">
                <img src={company.vsLogo} alt={company.vs} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-bold text-gray-700">{company.vs}</p>
                  <p className="text-sm text-gray-600">{company.vsRating} <span className="text-purple-500">★</span> {company.vsReviews} reviews</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Rating Section */}
        <div className="mt-12 bg-green-50 shadow-md p-8 flex flex-col sm:flex-row items-center">
          <div className="flex items-center">
            <img src="/rating-icon.png" alt="Rate your employer" className="w-10 h-10 mr-4" />
            <p className="text-xl font-semibold text-gray-700">Rate your recent employer:</p>
          </div>
          <div className="flex ml-auto mt-4 sm:mt-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 cursor-pointer ${star <= userRating ? 'text-blue-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => handleRatingClick(star)}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
