import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Ready to Electrify Your Future?
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
        Join thousands of satisfied customers who are saving money and the
        environment with Batteryfy.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-white text-cyan-500 hover:bg-gray-100 px-6 py-3 rounded-full font-medium text-lg shadow-md transition duration-300">
          Convert Your Vehicle
        </button>
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-full font-medium text-lg shadow-md transition duration-300">
          Find Charging Stations
        </button>
        <button className="bg-white bg-opacity-20 border-2 border-white text-white hover:bg-white hover:bg-opacity-30 px-6 py-3 rounded-full font-medium text-lg shadow-md transition duration-300">
          Shop Products
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
