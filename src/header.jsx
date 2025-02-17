import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Fixed import

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center md:px-12 lg:px-24 relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">SonicJive</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" className="text-gray-700 hover:text-black font-medium">
          Product
        </NavLink>
        <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium">
          Features
        </NavLink>
        <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium">
          Reviews
        </NavLink>
        <NavLink to="/About" className="text-gray-700 hover:text-black font-medium">
          About us
        </NavLink>
      </div>

      {/* Icons */}
      <div className="hidden md:flex space-x-4 items-center">
        <img src="./special1.webp" className="w-8 h-8 rounded-full" alt="Profile" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col items-start p-6 space-y-6 md:hidden z-40"
        >
          <button className="self-end text-gray-700" onClick={handleClose}>
            <FiX size={24} />
          </button>
          <NavLink to="/" className="text-gray-700 hover:text-black font-medium" onClick={handleClose}>
            Product
          </NavLink>
          <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium" onClick={handleClose}>
            Features
          </NavLink>
          <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium" onClick={handleClose}>
            Reviews
          </NavLink>
          <NavLink to="/About" className="text-gray-700 hover:text-black font-medium" onClick={handleClose}>
            About us
          </NavLink>

          {/* Profile Icon in Mobile Menu */}
          <div className="flex space-x-4 mt-4">
            <img src="./special1.webp" className="w-8 h-8 rounded-full" alt="Profile" />
          </div>
        </motion.div>
      )}

      {/* Overlay to prevent background scrolling when menu is open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={handleClose}></div>}
    </nav>
  );
};
