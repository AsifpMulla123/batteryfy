import React from "react";
import {
  FaApple,
  FaCalendarCheck,
  FaGooglePlay,
  FaQrcode,
  FaRoute,
} from "react-icons/fa";

import { IoSpeedometer } from "react-icons/io5";
import AppDownload from "../assets/AppDownload.png";

function MobileApplication() {
  return (
    <div className="min-h-screen bg-[#090d1f] text-white sm:px-12">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="flex items-center justify-center flex-col">
            <div className="text-sky-500 text-sm font-medium px-4 py-2 rounded-full w-fit mb-6">
              <span className="bg-[#1e2737] px-4 py-2 rounded-full">
                MOBILE APP
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Power in Your <span className="text-[#3b82f6]">Pocket</span>
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg text-center">
              Download the Batteryfy app to manage your retrofitting process,
              book charging slots, and shop for eco-products—all from your
              smartphone.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-gray-900 p-4 rounded-full">
                <FaRoute className="text-xl text-sky-500" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Find Charging Stations
                </h3>
                <p className="text-gray-400">
                  Locate and navigate to the nearest available charging stations
                  in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-gray-900 px-4 py-4 rounded-full">
                <FaCalendarCheck className="text-xl text-green-500" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Book & Manage Slots
                </h3>
                <p className="text-gray-400">
                  Reserve charging slots in advance and receive notifications
                  when it's time to charge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-gray-900 p-4 rounded-full">
                <IoSpeedometer className="text-xl text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg pb-2">
                  Track Retrofit Progress
                </h3>
                <p className="text-gray-400">
                  Monitor your vehicle's conversion status and receive updates
                  at every stage.
                </p>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg">
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg">
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>

            <button className="flex items-center gap-2 bg-[#1e2737] text-white py-3 px-6 rounded-lg">
              <FaQrcode className="text-2xl" />
              <div className="text-left">
                <div className="text-xs">Scan to</div>
                <div className="font-semibold">Download</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Phone Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={AppDownload} alt="Batteryfy App" className="max-w-xl" />
        </div>
      </div>
    </div>
  );
}

export default MobileApplication;
