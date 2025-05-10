import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full py-4 
         fixed top-0 shadow-md bg-gray-800 text-white
       z-50 transition-all duration-300 sm:px-10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-10 w-auto">
            <a href="/">
              <img
                src={Logo}
                alt="Batteryfy Logo"
                className="max-h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/retrofit" className="text-white hover:text-[#2e96ff]">
              Retrofit
            </a>
            <a href="/charging" className="text-white hover:text-[#2e96ff]">
              Charging
            </a>
            <a href="/shop" className="text-white hover:text-[#2e96ff]">
              Shop
            </a>
            <a href="/impact" className="text-white hover:text-[#2e96ff]">
              Impact
            </a>
            <a
              href="/download"
              className="px-4 py-2 rounded-full font-medium text-white hover:bg-sky-700"
              style={{ backgroundColor: "#2e96ff" }}
            >
              Download App
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className=" hover:text-gray-900 focus:outline-none text-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a
              href="/retrofit"
              className="text-white hover:text-[#2e96ff] py-2"
            >
              Retrofit
            </a>
            <a
              href="/charging"
              className="text-white hover:text-[#2e96ff] py-2"
            >
              Charging
            </a>
            <a href="/shop" className="text-gray-600 hover:text-[#2e96ff] py-2">
              Shop
            </a>
            <a href="/impact" className="text-white hover:text-[#2e96ff] py-2">
              Impact
            </a>
            <a
              href="/download"
              className="inline-block px-4 py-2 rounded-full font-medium text-white text-center hover:bg-sky-700"
              style={{ backgroundColor: "#2e96ff" }}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
