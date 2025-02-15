import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center md:px-12 lg:px-24 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold">SonicJive</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-black font-medium">    Product </NavLink>
          <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium">Features</NavLink>
          <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium">Reviews</NavLink>
          <NavLink to="/About" className="text-gray-700 hover:text-black font-medium">About us</NavLink>
        </div>
        
        {/* Icons */}
        <div className="hidden md:flex space-x-4 items-center">

          <img src="./special1.webp" className="w-8 h-8  rounded-full"></img>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>
  
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg flex flex-col items-start p-6 space-y-6 md:hidden"
          >
            <button className="self-end text-gray-700" onClick={() => setIsOpen(false)}>
              <FiX size={24} />
            </button>
            <NavLink to="/" className="text-gray-700 hover:text-black font-medium">Product         </NavLink>
          <NavLink to="/Features" className="text-gray-700 hover:text-black font-medium">Features</NavLink>
          <NavLink to="/Reviews" className="text-gray-700 hover:text-black font-medium">Reviews</NavLink>
          <NavLink to="/About" className="text-gray-700 hover:text-black font-medium">About us</NavLink>
            <div className="flex space-x-4 mt-4">
  
              <img className="w-8 h-8 bg-gray-300 rounded-full"></img>
            </div>
          </motion.div>
        )}
      </nav>
    );
  };
  