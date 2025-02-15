import React from 'react';
import { motion } from "framer-motion";

const features = [
  { title: "Sound Quality", text: "Premium sound quality and comfort." },
  { title: "Sustainable", text: "Sustainable materials and eco-friendly." },
  { title: "Battery Life", text: "Long-lasting earbuds battery life." },
  { title: "Technology", text: "Premium sound quality and comfort." }
];

export const ChooseUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-5">
      {/* Title Section */}
      <motion.h2
        className="text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once:false, amount: 0.2 }}
      >
        Why Choose Us
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl text-gray-900 text-lg mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        viewport={{ once:false, amount: 0.2 }}
      >
        At SonicJive, we believe that technology can coexist harmoniously. Our mission is to provide you with earbuds that offer sound quality while respecting our planet's ecosystem.
      </motion.p>

      {/* Main Image Section */}
      <motion.div
        className="relative flex flex-col items-center w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once:false, amount: 0.3 }}
      >
        <div className="relative w-full max-w-xs rounded-lg p-2">
          <img
            className="w-full object-contain rounded-lg"
            src="./special3.jpg"
            alt="SonicJive Earbuds"
          />
          <motion.div
            className="absolute top-2 left-[37%] bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once:false, amount: 0.3 }}
          >
            10+ Services
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once:false, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 * index }}
            viewport={{ once:false, amount: 0.2 }}
          >
            <h3 className="text-xl font-bold">{`${index + 1}. ${feature.title}`}</h3>
            <p className="text-base text-gray-900 text-center">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button Section */}
      <motion.button
        className="mt-12 bg-black hover:bg-black text-white px-8 py-5 shadow-2xl rounded-lg font-bold text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once:false, amount: 0.2 }}
      >
        Discover
      </motion.button>
    </div>
  );
};
