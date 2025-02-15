import { motion } from "framer-motion";
import { NavLink } from "react-router";
// Hero Section
export const Hero = () => {
  return (
    <section className="bg-gray-100 py-12 px-2 md:px-6 lg:px-20 lg:justify-between flex flex-col md:flex-row items-center justify-around gap-8">
      {/* Left Section */}
      <div className="max-w-lg text-center md:text-left">
        <motion.h3
          className="text-gray-600 text-sm uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Immerse in Nature's Sounds with
        </motion.h3>
        <motion.h1
          className="text-4xl font-bold text-gray-900 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          SONICJIVE <br /> EAR BUDS.
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          At SonicJive, we believe that technology and nature can coexist harmoniously. Our mission is to provide you with earbuds that offer exceptional sound quality while respecting our planet’s delicate ecosystem.
        </motion.p>
        <motion.div
          className="flex justify-center md:justify-start lg:justify-start items-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="text-xl font-semibold">Price</span>
          <span className="text-2xl font-bold text-gray-900">$45:00</span>
        </motion.div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
         <NavLink to="/price"> <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Order Now</button></NavLink>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="relative flex flex-row-reverse">
          <img src="/special1.webp" alt="SonicJive Earbuds" className="w-80 md:w-[100%] lg:w-[75%]" />
          <motion.div
            className="absolute top-0 right-0 bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            9.5K Products
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
