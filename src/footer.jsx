import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaMediumM } from "react-icons/fa";
import { footerdata } from "./footerarray";



export const Footer = () => {
    return (
      <footer className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap md:flex-nowrap justify-around md:justify-between">
            {/* Company Section */}
            <div className="mb-6 md:text-left text-center md:w-1/4">
              <h3 className="text-2xl font-bold mb-2">SONICJIVE</h3>
              <p className="text-sm text-gray-700">info@besnik.agency</p>
              <p className="text-sm text-gray-700">+458 843 5849</p>
            </div>
  
            {/* Footer Sections */}
            <div className="flex flex-wrap justify-between md:justify-end md:space-x-10 md:flex-1">
              {footerdata.map((section, index) => (
                <div key={index} className="w-[40%] md:w-1/5 sm:w-1/2 mb-6">
                  <h4 className="font-semibold text-lg mb-3">{section.title}</h4>
                  <ul className="space-y-2 text-gray-700">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t mt-10 pt-6 flex justify-between items-center flex-wrap">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <FaMediumM className="text-gray-700 hover:text-black text-xl" />
              <FaFacebookF className="text-gray-700 hover:text-black text-xl" />
              <FaTwitter className="text-gray-700 hover:text-black text-xl" />
              <FaInstagram className="text-gray-700 hover:text-black text-xl" />
            </div>
  
            {/* Footer Copyright */}
            <p className="text-sm text-gray-600">© 2021 puffnest.sofas Ltd.</p>
          </div>
        </div>
      </footer>
    );
  };
  