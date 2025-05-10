import React from "react";

import Client1 from "../assets/client1.jpg";
import Client2 from "../assets/client2.jpg";
import Client3 from "../assets/client3.jpg";
import { TbBatteryAutomotiveFilled } from "react-icons/tb";
import { FaCloud, FaHandshake } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-4">
      <div className="max-w-5xl w-full mx-auto text-center">
        <div className="mb-8">
          <span className="bg-gray-800 text-blue-500 px-4 py-2 rounded-full text-sm font-medium">
            OUR IMPACT
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Earth <span className="text-blue-400">Thanks</span>{" "}
          <span className="text-green-400">You</span>
        </h1>

        <p className="text-gray-300 mb-16 max-w-3xl mx-auto">
          Every vehicle retrofitted, every charging session completed, and every
          eco-product purchased contributes to a cleaner, more sustainable
          future.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Vehicles Retrofitted */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center">
            <div className="bg-blue-900/50 p-4 rounded-full mb-6">
              {/* Briefcase icon */}
              <TbBatteryAutomotiveFilled />
            </div>
            <h2 className="text-4xl font-bold mb-2">2,500+</h2>
            <p className="text-gray-400">Vehicles Retrofitted</p>
          </div>

          {/* CO2 Saved */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-6">
              {/* Cloud icon */}
              <FaCloud />
            </div>
            <h2 className="text-4xl font-bold mb-2">18,000+</h2>
            <p className="text-gray-400">
              Tons of CO<sub>2</sub> Saved
            </p>
          </div>

          {/* Charging Sessions */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center">
            <div className="bg-purple-900/50 p-4 rounded-full mb-6">
              {/* Battery charging icon */}
              <FaChargingStation />
            </div>
            <h2 className="text-4xl font-bold mb-2">500,000+</h2>
            <p className="text-gray-400">Charging Sessions</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-600">
                  <img
                    src={Client1}
                    alt="Michael R."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Michael R.</h3>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "Converting my 2010 sedan to electric was the best decision.
                Batteryfy made it seamless, and I'm saving a fortune on fuel and
                maintenance."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-600">
                  <img
                    src={Client3}
                    alt="Sarah T."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Sarah T.</h3>
                  <div className="flex text-yellow-400">★★★★☆</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "The charging station app is a game-changer. I can find
                available stations and book slots in advance. No more waiting in
                lines!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-600">
                  <img
                    src={Client2}
                    alt="David L."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">David L.</h3>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                "I've bought several products from the marketplace, and each one
                has exceeded my expectations. The SolarSound speaker is my
                favorite!"
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center mx-auto transition-colors">
          <FaHandshake />
          Join Our Eco Movement
        </button>
      </div>
    </div>
  );
};

export default ImpactPage;
