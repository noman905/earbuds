import React from 'react';

export const Featurethird = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between lg:justify-around items-center bg-gray-50 py-10 px-5">
      {/* Image Section */}
      <div className="relative flex justify-center mb-6 md:mb-0 md:mr-10">
        <div className="relative bg-transparent rounded-lg p-5">
          <img
            className="w-[300px] h-[300px] object-contain sm:w-[350px] sm:h-[350px] rounded-full md:max-w-[266px] md:h-[300px] lg:max-w-[300px]"
            src="./special4.jpg" // Replace with your own image link
            alt="SonicJive Earbuds"
          />
          <div className="absolute top-[10%] left-[40%] bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold">
            4K Users
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Active Noise Cancellation</h2>
        <p className="text-gray-600 mb-6">
          Immerse yourself in your favorite music without distractions. Our earbuds feature advanced active noise cancellation technology that blocks out ambient sounds, allowing you to focus on your calls, music, or podcasts even in noisy environments.
        </p>
        <button className="bg-black shadow-2xl shadow-black hover:bg-black text-white px-6 py-2 rounded-lg font-semibold">
          Discover
        </button>
      </div>
    </div>
  );
};
