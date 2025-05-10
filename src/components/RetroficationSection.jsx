import React, { useState } from "react";
import {
  AiFillTool,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFillFuelPumpFill, BsHandbagFill, BsLightning } from "react-icons/bs";
import {
  FaAngleRight,
  FaArrowRight,
  FaBolt,
  FaCalendarCheck,
  FaCar,
  FaCheckCircle,
  FaLeaf,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMotorcycle,
  FaShuttleVan,
  FaTruck,
} from "react-icons/fa";
import {
  FaBicycle,
  FaCartPlus,
  FaKitchenSet,
  FaTruckFast,
} from "react-icons/fa6";
import {
  IoOptionsOutline,
  IoSearch,
  IoSpeedometerSharp,
} from "react-icons/io5";

import { IoMdHome } from "react-icons/io";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product4 from "../assets/Product4.png";
import RetroficationMain from "../assets/RetroficationMain.png";
import mapImages from "../assets/mapImages.png";
import Product3 from "../assets/product3.png";

const RetroficationSection = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [LocationOptions, setLocationOptions] = useState([
    { value: "option1", label: "Hubli" },
    { value: "option2", label: "Dharwad" },
    { value: "option3", label: "Bangalore" },
    { value: "option4", label: "Mumbai" },
    { value: "option5", label: "Hydrabad" },
    { value: "option6", label: "Pune" },
  ]);

  const [timeOptions, setTimeOptions] = useState([
    { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "11:00 AM - 12:00 AM", label: "11:00 AM - 12:00 AM" },
    { value: "12:00 AM - 01:00 AM", label: "12:00 AM - 01:00 AM" },
    { value: "01:00 AM - 02:00 AM", label: "01:00 AM - 02:00 AM" },
    { value: "02:00 AM - 03:00 AM", label: "02:00 AM - 03:00 AM" },
    { value: "03:00 AM - 04:00 AM", label: "03:00 AM - 04:00 AM" },
  ]);
  // Colors for each card's cursor effect
  const cursorColors = ["#3b82f6", "#10b981", "#8b5cf6"];

  // Update mouse position
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleCardHover = (index) => {
    setActiveCardIndex(index);
  };

  const handleCardLeave = () => {
    setActiveCardIndex(null);
  };

  const handleSelectLocation = (e) => {
    setSelectedLocation(e.target.value);
  };
  const handleSelectTime = (e) => {
    setSelectedTime(e.target.value);
  };
  return (
    <div className="bg-gray-900 text-white" onMouseMove={handleMouseMove}>
      {/* Cursor effect */}
      {activeCardIndex !== null && (
        <div
          className="fixed pointer-events-none w-16 h-16 rounded-full transition-all duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-50"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            border: `2px solid ${cursorColors[activeCardIndex]}`,
            backgroundColor: "transparent",
            boxShadow: `0 0 20px 5px ${cursorColors[activeCardIndex]}33`,
          }}
        />
      )}

      {/* SECTION 1: Core Services */}
      <div className="min-h-screen bg-gray-900 text-white px-8 pt-6 pb-8 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2">
            Our Core <span className="text-blue-400">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Retrofication Card */}
          <div className="bg-gray-800 rounded-lg p-8 relative overflow-hidden hover:border-blue-400 hover:border">
            <div className="bg-gray-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <FaBolt className="text-blue-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Retrofication</h2>
            <p className="text-gray-300 mb-6">
              Convert your old petrol or diesel vehicles into modern, clean
              electric powertrains. From bikes to trucks, we transform them all.
            </p>
            <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <span className="mr-2">Learn more</span>
              <FaArrowRight />
            </div>
          </div>

          {/* EV Charging Stations Card */}
          <div className="bg-gray-800 rounded-lg p-8 relative hover:border-green-400 hover:border">
            <div className="bg-gray-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <BsFillFuelPumpFill className="text-green-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">EV Charging Stations</h2>
            <p className="text-gray-300 mb-6">
              Find and book charging slots at our network of smart stations.
              Real-time availability and seamless booking experience.
            </p>
            <div className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <span className="mr-2">Learn more</span>
              <FaArrowRight />
            </div>
          </div>

          {/* Eco-Tech Marketplace Card */}
          <div className="bg-gray-800 rounded-lg p-8 relative hover:border-purple-400 hover:border">
            <div className="bg-gray-700 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
              <BsHandbagFill className="text-purple-400 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Eco-Tech Marketplace</h2>
            <p className="text-gray-300 mb-6">
              Discover battery-powered gadgets and sustainable products for
              everyday use. Eco- friendly alternatives for modern living.
            </p>
            <div className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <span className="mr-2">Learn more</span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Retrofication */}
      <div className="bg-gray-900 py-16 px-8">
        <div className="max-w-full mx-auto">
          {/* Top Section */}
          <div className="mb-12 flex justify-center items-center flex-col">
            <div className="text-blue-400 text-sm font-semibold uppercase mb-4">
              <span className="bg-gray-800 px-4 py-2 rounded-full">
                RETROFICATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-center">
              Don't Buy New. <span className="text-green-400">Reinvent</span>{" "}
              What You Have.
            </h2>
            <p className="text-gray-400 max-w-3xl text-center  text-base font-semibold sm:text-lg">
              Convert your bicycle,two-wheeler,car, or even heavy vehicles into
              a certified electric drive - cost-efficient,low-maintainance,and
              built for a cleaner tomorrow.
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12 flex justify-center items-center">
            <img
              src={RetroficationMain}
              alt="Vehicle retrofitting process"
              className="w-full rounded-lg shadow-lg object-cover h-auto md:h-96"
            />
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-center text-3xl font-bold mb-8">
              Our Retrofitting Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Process Step 1 */}
              <div className="bg-gray-800 rounded-lg p-6 relative flex justify-center items-start flex-col">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="text-2xl font-bold mb-2">Assessment</h4>
                <p className="text-gray-400 text-lg mb-4">
                  Our experts evaluate your vehicle's specifications to suggest
                  the ideal electric conversion package.
                </p>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400">
                  <IoSearch size={20} />
                </button>
              </div>

              {/* Process Step 2 */}
              <div className="bg-gray-800 rounded-lg p-6 relative flex justify-center items-start flex-col">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="text-2xl font-bold mb-2">Conversion</h4>
                <p className="text-gray-400 text-lg mb-4">
                  We remove the combustion engine and install a high-performance
                  electric motor and battery system.
                </p>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400">
                  <AiFillTool size={20} />
                </button>
              </div>

              {/* Process Step 3 */}
              <div className="bg-gray-800 rounded-lg p-6 relative flex justify-center items-start flex-col">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="text-2xl font-bold mb-2">Testing</h4>
                <p className="text-gray-400 text-lg mb-4">
                  Rigorous quality checks and road tests ensure optimal
                  performance and safety.
                </p>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400">
                  <IoSpeedometerSharp size={20} />
                </button>
              </div>

              {/* Process Step 4 */}
              <div className="bg-gray-800 rounded-lg p-6 relative flex justify-center items-start flex-col">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h4 className="text-2xl font-bold mb-2">Delivery</h4>
                <p className="text-gray-400 text-lg mb-4">
                  Get your upgraded vehicle, complete with documentation and
                  warranty certification.
                </p>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-blue-400">
                  <FaTruckFast size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Types and Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vehicle Types */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-6">
                Vehicle Types We Convert
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* <div className="flex items-center space-x-3 text-gray-300"> */}
                <div className="flex items-center justify-start space-x-4 px-4 py-3 bg-gray-700 text-white rounded-md">
                  <FaMotorcycle className="text-blue-400 text-3xl" />
                  <span className="text-lg font-semibold">Motorcycles</span>
                </div>
                <div className="flex items-center justify-start space-x-4 px-4 py-3 bg-gray-700 text-white rounded-md">
                  <FaBicycle className="text-blue-400 text-3xl" />
                  <span className="text-lg font-semibold">Bicycles</span>
                </div>
                <div className="flex items-center justify-start space-x-4 px-4 py-3 bg-gray-700 text-white rounded-md">
                  <FaCar className="text-blue-400 text-3xl" />
                  <span className="text-lg font-semibold">Cars & SUVs</span>
                </div>
                <div className="flex items-center justify-start space-x-4 px-4 py-3 bg-gray-700 text-white rounded-md">
                  <FaShuttleVan className="text-blue-400 text-3xl" />
                  <span className="text-lg font-semibold">Vans & Shuttles</span>
                </div>
                <div className="flex items-center justify-start space-x-4 px-4 py-3 bg-gray-700 text-white rounded-md">
                  <FaTruck className="text-blue-400 text-3xl" />
                  <span className="text-lg font-semibold">
                    Commercial Trucks
                  </span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-4">
                Benefits of Retrofitting
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-base font-semibold">
                    70% less cost-effective than buying a new EV
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-base font-semibold">
                    Zero emissions and significantly lower maintenance costs
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-base font-semibold">
                    Extended vehicle lifespan by 10+ years
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  <span className="text-base font-semibold">
                    Government incentives and tax benefits available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a href="/retrofication">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 text-sm sm:text-lg shadow-blue-500 shadow-sm">
                <FaCalendarCheck />
                <span>Schedule Your Retrofit Consultation</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 3: EV Charging */}
      <div className="bg-gray-900 py-16 px-8" id="charging">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="text-green-400 uppercase font-semibold text-sm mb-4">
              <span className="px-4 py-2 rounded-full bg-slate-800">
                {" "}
                EV CHARGING
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Smart EV Charging,{" "}
              <span className="text-green-400">Anywhere</span>
            </h2>
            <p className="text-gray-400">
              Book charging slots in advance, check real-time availability, and
              power up your EV with our network of smart charging stations.
            </p>
          </div>

          {/* Charging Map and Booking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Map Section */}
            <div
              className="bg-gray-900 rounded-lg overflow-hidden bg-cover flex flex-col justify-between h-80 sm:h-full"
              style={{ backgroundImage: `url(${mapImages})` }}
            >
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-medium text-2xl">Charging Station Map</h3>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-xl">
                    <FaMapMarkerAlt />
                  </button>
                  <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-2xl">
                    <IoOptionsOutline />
                  </button>
                </div>
              </div>
              <div className="p-3 flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg border border-gray-800 border-opacity-50 shadow-lg z-20">
                <div className="flex-1">
                  <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search Location"
                      className="bg-transparent border-none outline-none text-white text-lg w-full"
                    />
                  </div>
                </div>
                <button className="ml-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xl">
                  <IoSearch />
                </button>
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-medium mb-6">Book Your Charging Slot</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white mb-1">
                    Select Location
                  </label>
                  <select
                    value={selectedLocation}
                    id="location"
                    onChange={handleSelectLocation}
                    className="block w-full py-2 px-4 text-sm text-white border border-gray-300 rounded-lg focus:border-blue-500 bg-gray-700"
                  >
                    <option
                      value=""
                      className="text-white"
                      selected
                      disabled
                      hidden
                    >
                      Select an Option
                    </option>
                    {LocationOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white mb-1">
                    Enter Vehicle
                  </label>
                  <div className="bg-gray-700 px-4 py-3 rounded-lg">
                    <input
                      type="text"
                      placeholder="AB-123-XYZ"
                      className="bg-transparent w-full outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white mb-1">
                    Select Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={handleSelectTime}
                    id="time"
                    className="block w-full py-2 px-4 text-sm text-white border border-gray-300 rounded-lg focus:border-blue-500 bg-gray-700"
                  >
                    <option value="" selected disabled hidden>
                      Select an option
                    </option>
                    {timeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center">
                    <span className="text-xs text-gray-400">Today</span>
                    <div className="bg-gray-700 rounded-lg py-3 mt-1 border border-blue-500">
                      <span className="text-sm">4</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-400">Fri</span>
                    <div className="bg-gray-700 rounded-lg py-3 mt-1">
                      <span className="text-sm">5</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-400">Sat</span>
                    <div className="bg-gray-700 rounded-lg py-3 mt-1">
                      <span className="text-sm">6</span>
                    </div>
                  </div>
                </div> */}

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg mt-4">
                  Book Charging Slot
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
                <BsLightning className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Fast Charging
              </h3>
              <p className="text-gray-400 text-center text-base">
                Get up to 80% charge in just 30 minutes with our fast charging
                stations.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
                <FaMapMarkedAlt className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Various Locations
              </h3>
              <p className="text-gray-400 text-center text-base">
                Growing network of charging stations across major cities and
                highways.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex justify-center items-center flex-col">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700 text-blue-400 mb-2">
                <FaMobileAlt className="text-green-400 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Smart Booking
              </h3>
              <p className="text-gray-400 text-center text-base">
                Reserve your slot, get notifications, and manage payments from
                your phone.
              </p>
            </div>
          </div>

          {/* Featured Products */}
          <div className="mb-16" id="products">
            <div className="text-center mb-12">
              <div className="text-green-400 uppercase font-semibold text-sm mb-4">
                <span className="bg-gray-800 px-4 py-2 rounded-full">
                  ECO-TECH MARKETPLACE
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Power Your <span className="text-green-400">Lifestyle</span>
              </h2>
              <p className="text-gray-400 font-semibold text-base">
                Discover our collection of eco-friendly power solutions and
                sustainably designed accessories for modern living.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
              <span className="text-3xl font-bold">Featured Products</span>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <AiOutlineArrowLeft size={20} />
                </button>
                <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <AiOutlineArrowRight size={20} />
                </button>
              </div>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {/* Product 1 */}
              <div className="group bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-40 bg-purple-900">
                  <img
                    src={Product1}
                    alt="PowerMax 10000"
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-purple-500 text-xs px-3 py-1 rounded-full font-semibold">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-xl mb-1">PowerMax 10000</h4>
                  <p className="text-base font-semibold text-gray-400 mb-2">
                    Fast-Charge Power Bank
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹1449.99</span>
                    <button className="text-base bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-full">
                      <FaCartPlus className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-40 bg-green-900">
                  <img
                    src={Product2}
                    alt="EcoGlow Lamp"
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1 text-xl">EcoGlow Lamp</h4>
                  <p className="text-base font-semibold text-gray-400 mb-2">
                    Solar-powered LED table lamp
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹1279.99</span>
                    <button className="text-base bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-full">
                      <FaCartPlus className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-40 bg-blue-900">
                  <img
                    src={Product3}
                    alt="Urban Glide"
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-xs px-3 py-1 rounded-full font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1 text-xl">Urban Glide</h4>
                  <p className="text-base font-semibold text-gray-400 mb-2">
                    Foldable Electric Scooter
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹58599.99</span>
                    <button className="text-base bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-full">
                      <FaCartPlus className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative h-40 bg-orange-900">
                  <img
                    src={Product4}
                    alt="SolarSound Pro"
                    className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  />
                  {/* <div className="absolute top-2 right-2 bg-purple-500 text-xs px-2 py-1 rounded">
                    Popular
                  </div> */}
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1 text-xl">SolarSound Pro</h4>
                  <p className="text-base font-semibold text-gray-400 mb-2">
                    Solar-Rechargeable Speaker
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">₹2779.99</span>
                    <button className="text-base bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-full">
                      <FaCartPlus className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards and Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rewards Program */}
              <div className="bg-indigo-950 rounded-lg p-6 relative overflow-hidden flex justify-center items-center">
                <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                  <div className="z-10">
                    <h3 className="text-2xl font-bold mb-2">
                      Join Our Eco-Rewards Program
                    </h3>
                    <p className="text-gray-400 text-base font-semibold mb-4">
                      Earn points on every purchase, get exclusive discounts,
                      and help us plant trees with your purchases.
                    </p>
                    {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm">
                      Sign Up Now
                    </button> */}
                  </div>
                  <div className="bg-indigo-800 rounded-full px-10 py-10">
                    <span className=" text-purple-400">
                      <FaLeaf size={40} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Product Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-4 hover:bg-gray-700 py-2 px-1 rounded-lg">
                    <div className="flex items-center justify-center space-x-4">
                      <IoMdHome className="text-purple-500" size={24} />
                      <span className="text-lg font-medium">Home & Living</span>
                    </div>
                    <FaAngleRight className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between  pb-2 hover:bg-gray-700 py-2 px-1 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FaMobileAlt className="text-purple-500" size={22} />
                      <span className="text-lg font-medium">Tech Gadgets</span>
                    </div>
                    <FaAngleRight className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between  pb-2 hover:bg-gray-700 py-2 px-1 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FaMotorcycle className="text-purple-500" size={24} />
                      <span className="text-lg font-medium">Mobility</span>
                    </div>
                    <FaAngleRight className="text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between  pb-2 hover:bg-gray-700 py-2 px-1 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FaKitchenSet className="text-purple-500" size={22} />
                      <span className="text-lg font-medium">
                        Kitchen & Dining
                      </span>
                    </div>
                    <FaAngleRight className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RetroficationSection;
