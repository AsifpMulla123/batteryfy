import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div
      className="w-full h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 flex flex-col items-center justify-center text-white p-20"
      aria-labelledby="call-to-action-heading"
    >
      <h1
        id="call-to-action-heading"
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Ready to Electrify Your Future?
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Join thousands of satisfied customers who are saving money and the
        environment with Batteryfy.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link to="/battery-conversion">
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 px-6 py-3 rounded-full font-medium text-sm sm:text-lg shadow-md transition duration-300">
            Convert Your Vehicle
          </button>
        </Link>
        <a
          href="/ev-charging-stations"
          aria-label="Find EV charging stations on this page"
        >
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 px-6 py-3 rounded-full font-medium text-sm sm:text-lg shadow-md transition duration-300">
            Find Charging Stations
          </button>
        </a>
        <a
          href="#products"
          aria-label="Shop battery-related products on this page"
        >
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-500 px-6 py-3 rounded-full font-medium text-sm sm:text-lg shadow-md transition duration-300">
            Shop Products
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
