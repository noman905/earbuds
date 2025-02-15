import React from 'react';

export const PricingSection = () => {
  const plans = [
    { name: 'Basic', price: '$45', features: ['High Quality Sound', 'Wireless', 'Comfort Fit'] },
    { name: 'Standard', price: '$65', features: ['All Basic Features', 'Longer Battery Life', 'Noise Cancellation'] },
    { name: 'Premium', price: '$85', features: ['All Standard Features', 'Water Resistant', 'Fast Charging'] }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center py-12 bg-white text-black">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-800">Choose Your Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">{plan.name}</h3>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-6">{plan.price}</p>
            <ul className="text-sm sm:text-base md:text-lg mb-6 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 flex items-center"><span className="text-green-500 mr-2">✔</span>{feature}</li>
              ))}
            </ul>
            <a href="#" className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold text-lg">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



