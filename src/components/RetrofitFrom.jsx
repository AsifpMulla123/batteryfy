// App.jsx
import React, { useState } from "react";
import { BsDeviceSsd } from "react-icons/bs";
import {
  FaBolt,
  FaCar,
  FaCheck,
  FaCommentAlt,
  FaEnvelope,
  FaGasPump,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaUser,
} from "react-icons/fa";

function RetrofitFrom() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 pt-32 pb-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Retrofitting Registration
          </h1>
          <p className="text-xl mt-2 text-gray-800">
            Let's Electrify Your Ride{" "}
            <FaBolt className="inline text-yellow-400" />
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>
          <span className="text-gray-600">Step 1 of 2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent w-full outline-none"
            />
          </div>

          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <BsDeviceSsd className="text-gray-500 mr-3" />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <span className="text-gray-600">City</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vehicle Information
        </h2>

        <div className="mb-4">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center">
              <FaMotorcycle className="text-gray-500 mr-3" />
              <span className="text-gray-600">Vehicle Type</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <FaCar className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Vehicle Make & Model"
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <FaGasPump className="text-gray-500 mr-3" />
            <span className="text-gray-600">Fuel Type</span>
          </div>

          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200">
            <span className="text-gray-600">Petrol</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
            <FaCommentAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Any Custom Requests or Notes"
              className="bg-transparent w-full outline-none"
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div
            className={`w-6 h-6 flex items-center justify-center rounded border mr-2 cursor-pointer ${
              agreed ? "bg-gray-900 border-gray-900" : "border-gray-400"
            }`}
            onClick={() => setAgreed(!agreed)}
          >
            {agreed && <FaCheck className="text-white text-sm" />}
          </div>
          <span className="text-sm text-gray-800">
            I agree to Batteryfy's Terms & Conditions and Privacy Policy
          </span>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg font-medium flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Request My Conversion
        </button>
      </div>
    </div>
  );
}

export default RetrofitFrom;
