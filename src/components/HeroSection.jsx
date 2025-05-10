import React from "react";
import { FaBolt, FaCar, FaShoppingCart } from "react-icons/fa";
import Hero from "../assets/Hero.png";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center mt-12 sm:px-7">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Text and Buttons */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Batteryfy Your <br />
              Ride.
              <br />
              <span className="text-[#2e96ff]">
                Power Your <br />
                Future.
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 mt-4">
              Your ride, reimagined. Your future,battery-powered.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/retrofication">
                <button className="group flex items-center bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full shadow transition-colors duration-200">
                  <FaCar className=" text-[#2e96ff]   mr-2 w-5 h-5 transition-colors duration-200 group-hover:text-green-600" />
                  Convert Vehicle
                </button>
              </a>

              <a href="#charging">
                <button className="group flex items-center bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full shadow transition-colors duration-200">
                  <FaBolt className=" text-[#2e96ff] mr-2 w-5 h-5 transition-colors duration-200 group-hover:text-green-600" />
                  Find Charging Station
                </button>
              </a>

              <a href="#products">
                <button className="group flex items-center bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-full shadow transition-colors duration-200">
                  <FaShoppingCart className=" text-[#2e96ff] mr-2 w-5 h-5 transition-colors duration-200 group-hover:text-green-600" />
                  Shop Battery Products
                </button>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={Hero}
                alt="Electric Vehicle with Blue Energy Visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
