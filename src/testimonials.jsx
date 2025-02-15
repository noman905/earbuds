import React, { useState } from "react";
import { testimonialsData } from "./testimonialsdata";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerRow = 2;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerRow >= testimonialsData.length ? 0 : prevIndex + cardsPerRow
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - cardsPerRow : prevIndex - cardsPerRow
    );
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What does our customer say?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Hear from our happy customers and their amazing experiences with our products.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {testimonialsData
          .slice(currentIndex, currentIndex + cardsPerRow)
          .map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-[41%] bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          className="text-black hover:text-gray-700 text-3xl"
        >
          <FiArrowLeftCircle />
        </button>
        <button
          onClick={handleNext}
          className="text-black hover:text-gray-700 text-3xl"
        >
          <FiArrowRightCircle />
        </button>
      </div>
    </div>
  );
};
