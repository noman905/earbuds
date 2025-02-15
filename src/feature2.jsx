import React from 'react';

export const Featuresecond = () => {
  return (
    <div className="flex flex-col  lg:flex-row-reverse md:flex-row-reverse  md:justify-between lg:justify-around items-center bg-gray-50 py-10 px-5">
     
     


      {/* Image Section */}
      <div className="relative flex justify-center mb-6 md:mb-0 md:mr-10">
        <div className="relative bg-transparent rounded-lg p-5 md:p-0 lg:p-5">
          <img
            className="w-[300px] h-[300px] object-contain sm:w-[350px] sm:h-[350px] rounded-full md:max-w-[266px] md:h-[300px] lg:max-w-[300px]"
            src="./special1.webp" // Replace with your own image link
            alt="SonicJive Earbuds"
          />
          <div className="absolute top-[10%] left-[40%] bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold">
            30K Users
          </div>
        </div>
      </div>





       {/* Text Section */}
       <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Long Battery Life</h2>
        <p className="text-gray-600 mb-6 justify-center">
        Enjoy uninterrupted music and calls throughout the day. Our earbuds come with an impressive battery life that keeps up with your busy lifestyle. Whether you're commuting, working out, or on a long trip, you can rely on these earbuds for extended playtime and quick charging capabilities.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-black text-white px-6 py-2 rounded-lg font-semibold">
          Discover
        </button>
      </div>

    </div>
  );
};




























