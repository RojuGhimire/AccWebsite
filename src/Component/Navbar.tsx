import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaSearch } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="bg-teal-500 text-white flex justify-between items-center lg:px-32 px-10 py-2 text-sm flex-wrap">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>Pepsicola, Kathmandu, Nepal</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[30px] flex-grow">
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>01-4000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhone />
            <span>9860000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope />
            <span>nexus@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer transition duration-300" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer transition duration-300" />
        </div>
      </div>
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <ul className="flex gap-[24px] justify-center items-center flex-grow">
              <li className="text-teal-500 font-bold cursor-pointer ">HOME</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">ABOUT US</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">SERVICES</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">SOFTWARE</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">PRICING</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">APPOINTMENT</li>
              <li className="text-zinc-700 font-bold  hover:text-teal-500 cursor-pointer">CONTACT</li>
            </ul>
            <div className="flex items-center">
              <FaSearch className="text-white bg-teal-700 h-8 w-8 p-2 rounded-full cursor-pointer hover:bg-gray-200 hover:text-teal-700 transition duration-300 shadow-md" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
