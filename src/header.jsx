import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
        <NavLink to="/" className="text-gray-700 hover:text-black font-medium">Home</NavLink>
        <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium">Features</NavLink>
        <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium">Reviews</NavLink>
        <NavLink to="/About" className="text-gray-700 hover:text-black font-medium">About us</NavLink>
      </div>

      {/* Icons */}
      <div className="hidden md:flex space-x-4 items-center">
        <img src="./special1.webp" className="w-8 h-8 rounded-full" alt="Profile" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg flex flex-col items-start p-8 space-y-6 md:hidden z-40"
        >
         

          {/* Menu Items (Wrapped in a <ul>) */}
          <ul className="space-y-4 mt-20">
            <li>
              <NavLink to="/" className="text-gray-700 hover:text-black font-medium text-lg" onClick={handleClose}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium text-lg" onClick={handleClose}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium text-lg" onClick={handleClose}>
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="text-gray-700 hover:text-black font-medium text-lg" onClick={handleClose}>
                About us
              </NavLink>
            </li>
          </ul>

          {/* Profile Icon in Mobile Menu */}
          <div className="flex space-x-4 mt-6">
            <img src="./special1.webp" className="w-10 h-10 rounded-full" alt="Profile" />
          </div>
        </motion.div>
      )}

      {/* Overlay to prevent background scrolling when menu is open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={handleClose}></div>}
    </nav>
  );
};
