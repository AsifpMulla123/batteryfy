import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-md mr-2">
                <IoFlashOutline className="text-white text-xl" />
              </div>
              <span className="text-white text-xl font-bold">Batteryfy</span>
            </div>
            <p className="text-sm leading-relaxed">
              Transforming the future of mobility through innovative electric
              solutions. Convert, charge, and power your way to a sustainable
              tomorrow.
            </p>

            {/* Social icons */}
            <div className="flex mt-6 space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaFacebookF className="text-gray-400" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaTwitter className="text-gray-400" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaInstagram className="text-gray-400" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaLinkedinIn className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Retrofication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  EV Charging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Eco-Tech Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Corporate Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 Batteryfy. All rights reserved.
          </div>

          <div className="flex space-x-5 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
