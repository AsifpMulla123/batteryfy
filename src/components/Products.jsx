// import { Link } from "react-router-dom";
// import Product1 from "../assets/Product1.webp";
// import Product2 from "../assets/Product2.webp";
// import Product4 from "../assets/Product4.webp";
// import Product3 from "../assets/product3.webp";

// const Products = () => {
//   return (
//     <div
//       className="pb-16 text-white max-w-8xl mx-auto pt-10 p-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
//       id="products"
//       aria-labelledby="products-section-title"
//     >
//       <div className="text-center mb-12" aria-labelledby="marketplace-info">
//         <div className="text-green-400 uppercase font-semibold text-sm mb-4">
//           <span className="bg-gray-800 px-4 py-2 rounded-full">
//             ECO-TECH MARKETPLACE
//           </span>
//         </div>
//         <h2 id="products-section-title" className="text-4xl font-bold mb-4">
//           Batteryfy <span className="text-white">Lifestyle</span>
//         </h2>
//         <Link to="/" aria-label="Go to the Batteryfy shop">
//           <button className="relative border-2 border-green-500 hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
//             <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
//             <span className="relative z-10">Shop Now</span>
//           </button>
//         </Link>
//       </div>

//       <h3
//         className="text-xl mb-4 flex justify-between items-center"
//         aria-labelledby="featured-products-title"
//       >
//         <span id="featured-products-title" className="text-xl">
//           Featured Products
//         </span>
//       </h3>

//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
//         aria-label="Featured product list"
//       >
//         {/* Product 1 */}
//         <div
//           className="group bg-gray-800 rounded-lg overflow-hidden"
//           aria-labelledby="product-1-title"
//         >
//           <div className="relative h-40 bg-purple-900">
//             <img
//               src={Product1}
//               alt="PowerMax 10000"
//               className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//             />
//             <div className="absolute top-2 right-2 bg-purple-500 text-xs px-3 py-1 rounded-full font-semibold">
//               New
//             </div>
//           </div>
//           <div className="p-4">
//             <h4 id="product-1-title" className="font-semibold text-xl mb-1">
//               PowerMax 10000
//             </h4>
//             <p className="text-base font-semibold text-gray-400 mb-2">
//               Fast-Charge Power Bank
//             </p>
//             <div className="flex justify-start items-start flex-col gap-2">
//               <p className="flex items-center gap-2">
//                 <span>starts from</span>
//                 <span className="font-bold text-lg">₹1449.99</span>
//               </p>
//               <button
//                 className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full"
//                 aria-label="Get a quote for PowerMax 10000"
//               >
//                 Get Quotes
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Product 2 */}
//         <div
//           className="group bg-gray-800 rounded-lg overflow-hidden"
//           aria-labelledby="product-2-title"
//         >
//           <div className="relative h-40 bg-green-900">
//             <img
//               src={Product2}
//               alt="EcoGlow Lamp"
//               className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//             />
//           </div>
//           <div className="p-4">
//             <h4 id="product-2-title" className="font-semibold mb-1 text-xl">
//               EcoGlow Lamp
//             </h4>
//             <p className="text-base font-semibold text-gray-400 mb-2">
//               Solar-powered LED table lamp
//             </p>
//             <div className="flex justify-start items-start flex-col gap-2">
//               <p className="flex items-center gap-2">
//                 <span>starts from</span>
//                 <span className="font-bold text-lg">₹1449.99</span>
//               </p>
//               <button
//                 className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full"
//                 aria-label="Get a quote for EcoGlow Lamp"
//               >
//                 Get Quotes
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Product 3 */}
//         <div
//           className="group bg-gray-800 rounded-lg overflow-hidden"
//           aria-labelledby="product-3-title"
//         >
//           <div className="relative h-40 bg-blue-900">
//             <img
//               src={Product3}
//               alt="Urban Glide"
//               className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//             />
//             <div className="absolute top-2 right-2 bg-green-500 text-xs px-3 py-1 rounded-full font-semibold">
//               Popular
//             </div>
//           </div>
//           <div className="p-4">
//             <h4 id="product-3-title" className="font-semibold mb-1 text-xl">
//               Urban Glide
//             </h4>
//             <p className="text-base font-semibold text-gray-400 mb-2">
//               Foldable Electric Scooter
//             </p>
//             <div className="flex justify-start items-start flex-col gap-2">
//               <p className="flex items-center gap-2">
//                 <span>starts from</span>
//                 <span className="font-bold text-lg">₹1449.99</span>
//               </p>
//               <button
//                 className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full"
//                 aria-label="Get a quote for Urban Glide"
//               >
//                 Get Quotes
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Product 4 */}
//         <div
//           className="group bg-gray-800 rounded-lg overflow-hidden"
//           aria-labelledby="product-4-title"
//         >
//           <div className="relative h-40 bg-orange-900">
//             <img
//               src={Product4}
//               alt="SolarSound Pro"
//               className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//             />
//           </div>
//           <div className="p-4">
//             <h4 id="product-4-title" className="font-semibold mb-1 text-xl">
//               SolarSound Pro
//             </h4>
//             <p className="text-base font-semibold text-gray-400 mb-2">
//               Solar-Rechargeable Speaker
//             </p>
//             <div className="flex justify-start items-start flex-col gap-2">
//               <p className="flex items-center gap-2">
//                 <span>starts from</span>
//                 <span className="font-bold text-lg">₹1449.99</span>
//               </p>
//               <button
//                 className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full"
//                 aria-label="Get a quote for SolarSound Pro"
//               >
//                 Get Quotes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import Product1 from "../assets/Product1.webp";
// import Product2 from "../assets/Product2.webp";
// import Product3 from "../assets/product3.webp";
// import Product4 from "../assets/Product4.webp";
// import Product5 from "../assets/Product5.webp";
// import Product6 from "../assets/Product6.webp";
// import Product7 from "../assets/Product7.webp";
// import Product8 from "../assets/Product8.webp";
// import Product9 from "../assets/Product9.webp";
// import Product10 from "../assets/Product10.webp";
// import Product11 from "../assets/Product11.webp";
// import Product12 from "../assets/Product12.webp";
// import Product13 from "../assets/Product13.webp";

// const dummyProducts = [
//   {
//     id: 1,
//     title: "PowerMax 10000",
//     desc: "Fast-Charge Power Bank",
//     image: Product1,
//   },
//   {
//     id: 2,
//     title: "EcoGlow Lamp",
//     desc: "Solar-powered LED table lamp",
//     image: Product2,
//   },
//   {
//     id: 3,
//     title: "Urban Glide",
//     desc: "Foldable Electric Scooter",
//     image: Product3,
//   },
//   {
//     id: 4,
//     title: "SolarSound Pro",
//     desc: "Solar-Rechargeable Speaker",
//     image: Product4,
//   },
//   { id: 5, title: "GreenDrive", desc: "Eco Car Battery", image: Product5 },
//   { id: 6, title: "LiteBulb", desc: "Efficient Smart Light", image: Product6 },
//   { id: 7, title: "EcoCooler", desc: "Solar Mini Cooler", image: Product7 },
//   { id: 8, title: "LeafCharge", desc: "Wireless Charger", image: Product8 },
//   { id: 9, title: "SunAmp", desc: "Solar Amplifier", image: Product9 },
//   { id: 10, title: "VoltShield", desc: "Battery Protector", image: Product10 },
//   { id: 11, title: "PowerNest", desc: "Home Backup Battery", image: Product11 },
//   { id: 12, title: "BrightLite", desc: "LED Floodlight", image: Product12 },
//   { id: 13, title: "EcoFan", desc: "Rechargeable Fan", image: Product13 },
// ];

// const Products = () => {
//   return (
//     <div
//       className="pb-16 text-white max-w-7xl mx-auto pt-10 p-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
//       id="products"
//       aria-labelledby="products-section-title"
//     >
//       <div className="text-center mb-12" aria-labelledby="marketplace-info">
//         <div className="text-green-400 uppercase font-semibold text-sm mb-4">
//           <span className="bg-gray-800 px-4 py-2 rounded-full">
//             ECO-TECH MARKETPLACE
//           </span>
//         </div>
//         <h2 id="products-section-title" className="text-4xl font-bold mb-4">
//           Batteryfy <span className="text-white">Lifestyle</span>
//         </h2>
//         <Link to="/" aria-label="Go to the Batteryfy shop">
//           <button className="relative border-2 border-green-500 hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
//             <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
//             <span className="relative z-10">Shop Now</span>
//           </button>
//         </Link>
//       </div>

//       <h3
//         className="text-xl mb-4 flex justify-between items-center"
//         aria-labelledby="featured-products-title"
//       >
//         <span id="featured-products-title" className="text-xl">
//           Featured Products
//         </span>
//         <div className="flex gap-2">
//           <div className="swiper-button-prev-custom text-green-400 cursor-pointer text-xl">
//             <FaChevronLeft />
//           </div>
//           <div className="swiper-button-next-custom text-green-400 cursor-pointer text-xl">
//             <FaChevronRight />
//           </div>
//         </div>
//       </h3>

//       <Swiper
//         spaceBetween={16}
//         slidesPerView={1.2}
//         breakpoints={{
//           640: { slidesPerView: 2.2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         modules={[Navigation]}
//         className="products-swiper mb-12"
//         aria-label="Featured product carousel"
//       >
//         {dummyProducts.map((product, index) => (
//           <SwiperSlide key={product.id}>
//             <div className="group bg-gray-800 rounded-lg overflow-hidden">
//               <div className="relative h-40 bg-green-900">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//                 />
//                 {(index % 4 === 0 || index % 4 === 2) && (
//                   <div className="absolute top-2 right-2 bg-purple-500 text-xs px-3 py-1 rounded-full font-semibold">
//                     {index % 4 === 0 ? "New" : "Popular"}
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h4 className="font-semibold text-xl mb-1">{product.title}</h4>
//                 <p className="text-base font-semibold text-gray-400 mb-2">
//                   {product.desc}
//                 </p>
//                 <div className="flex justify-start items-start flex-col gap-2">
//                   <p className="flex items-center gap-2">
//                     <span>starts from</span>
//                     <span className="font-bold text-lg">₹1449.99</span>
//                   </p>
//                   <button
//                     className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full"
//                     aria-label={`Get a quote for ${product.title}`}
//                   >
//                     Get Quotes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Products;

// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";

// import Product1 from "../assets/Product1.webp";
// import Product2 from "../assets/Product2.webp";
// import Product3 from "../assets/product3.webp";
// import Product4 from "../assets/Product4.webp";
// import Product5 from "../assets/Product5.webp";
// import Product6 from "../assets/Product6.webp";
// import Product7 from "../assets/Product7.webp";
// import Product8 from "../assets/Product8.webp";
// import Product9 from "../assets/Product9.webp";
// import Product10 from "../assets/Product10.webp";
// import Product11 from "../assets/Product11.webp";
// import Product12 from "../assets/Product12.webp";
// import Product13 from "../assets/Product13.webp";

// const dummyProducts = [
//   {
//     id: 1,
//     title: "PowerMax 10000",
//     desc: "Fast-Charge Power Bank",
//     image: Product1,
//   },
//   {
//     id: 2,
//     title: "EcoGlow Lamp",
//     desc: "Solar-powered LED table lamp",
//     image: Product2,
//   },
//   {
//     id: 3,
//     title: "Urban Glide",
//     desc: "Foldable Electric Scooter",
//     image: Product3,
//   },
//   {
//     id: 4,
//     title: "SolarSound Pro",
//     desc: "Solar-Rechargeable Speaker",
//     image: Product4,
//   },
//   { id: 5, title: "GreenDrive", desc: "Eco Car Battery", image: Product5 },
//   { id: 6, title: "LiteBulb", desc: "Efficient Smart Light", image: Product6 },
//   { id: 7, title: "EcoCooler", desc: "Solar Mini Cooler", image: Product7 },
//   { id: 8, title: "LeafCharge", desc: "Wireless Charger", image: Product8 },
//   { id: 9, title: "SunAmp", desc: "Solar Amplifier", image: Product9 },
//   { id: 10, title: "VoltShield", desc: "Battery Protector", image: Product10 },
//   { id: 11, title: "PowerNest", desc: "Home Backup Battery", image: Product11 },
//   { id: 12, title: "BrightLite", desc: "LED Floodlight", image: Product12 },
//   { id: 13, title: "EcoFan", desc: "Rechargeable Fan", image: Product13 },
// ];

// const Products = () => {
//   return (
//     <div
//       className="pb-16 text-white max-w-7xl mx-auto pt-10 p-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
//       id="products"
//       aria-labelledby="products-section-title"
//     >
//       <div className="text-center mb-12" aria-labelledby="marketplace-info">
//         <div className="text-green-400 uppercase font-semibold text-sm mb-4">
//           <span className="bg-gray-800 px-4 py-2 rounded-full">
//             ECO-TECH MARKETPLACE
//           </span>
//         </div>
//         <h2 id="products-section-title" className="text-4xl font-bold mb-4">
//           Batteryfy <span className="text-white">Lifestyle</span>
//         </h2>
//         <Link to="/" aria-label="Go to the Batteryfy shop">
//           <button className="relative border-2 border-green-500 hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
//             <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
//             <span className="relative z-10">Shop Now</span>
//           </button>
//         </Link>
//       </div>

//       <h3
//         className="text-xl mb-4 flex justify-between items-center"
//         aria-labelledby="featured-products-title"
//       >
//         <span id="featured-products-title" className="text-xl">
//           Featured Products
//         </span>
//         <div className="flex gap-2">
//           <div className="swiper-button-prev-custom text-green-400 cursor-pointer text-xl">
//             <FaChevronLeft />
//           </div>
//           <div className="swiper-button-next-custom text-green-400 cursor-pointer text-xl">
//             <FaChevronRight />
//           </div>
//         </div>
//       </h3>

//       <Swiper
//         spaceBetween={16}
//         slidesPerView={1.2}
//         breakpoints={{
//           640: { slidesPerView: 2.2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         grabCursor={true}
//         navigation={{
//           nextEl: ".swiper-button-next-custom",
//           prevEl: ".swiper-button-prev-custom",
//         }}
//         modules={[Navigation]}
//         className="products-swiper mb-12"
//         aria-label="Featured product carousel"
//       >
//         {dummyProducts.map((product, index) => (
//           <SwiperSlide key={product.id} className="h-full">
//             <div className="group bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
//               <div className="relative aspect-[4/3] w-full bg-green-900">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
//                 />
//                 {(index % 4 === 0 || index % 4 === 2) && (
//                   <div className="absolute top-2 right-2 bg-purple-500 text-xs px-3 py-1 rounded-full font-semibold">
//                     {index % 4 === 0 ? "New" : "Popular"}
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <div>
//                   <h4 className="font-semibold text-xl mb-1">
//                     {product.title}
//                   </h4>
//                   <p className="text-base font-semibold text-gray-400 mb-2">
//                     {product.desc}
//                   </p>
//                 </div>
//                 <div className="mt-auto">
//                   <p className="flex items-center gap-2">
//                     <span>starts from</span>
//                     <span className="font-bold text-lg">₹1449.99</span>
//                   </p>
//                   <button
//                     className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full mt-2"
//                     aria-label={`Get a quote for ${product.title}`}
//                   >
//                     Get Quotes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Products;

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import Product1 from "../assets/Product1.webp";
import Product2 from "../assets/Product2.webp";
import Product3 from "../assets/product3.webp";
import Product4 from "../assets/Product4.webp";
import Product5 from "../assets/Product5.webp";
import Product6 from "../assets/Product6.webp";
import Product7 from "../assets/Product7.webp";
import Product8 from "../assets/Product8.webp";
import Product9 from "../assets/Product9.webp";
import Product10 from "../assets/Product10.webp";
import Product11 from "../assets/Product11.webp";
import Product12 from "../assets/Product12.webp";
import Product13 from "../assets/Product13.webp";
import { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    title: "PowerMax 10000",
    desc: "Compact 10000mAh power bank with fast charging support and dual USB output.",
    image: Product1,
    variants: [
      { type: "USB-A + USB-C", price: 1299 },
      { type: "Wireless Charging", price: 1699 },
    ],
  },
  {
    id: 2,
    title: "EcoGlow Lamp",
    desc: "Rechargeable LED lamp powered by solar energy. Ideal for outdoor and indoor use.",
    image: Product2,
    variants: [
      { type: "Table Lamp", price: 799 },
      { type: "Hanging Lantern", price: 999 },
    ],
  },
  {
    id: 3,
    title: "Urban Glide",
    desc: "Lightweight electric scooter with a foldable frame, 25km range, and digital display.",
    image: Product3,
    variants: [
      { type: "Single Battery", price: 23999 },
      { type: "Dual Battery", price: 27999 },
    ],
  },
  {
    id: 4,
    title: "SolarSound Pro",
    desc: "Bluetooth speaker with solar charging, waterproof body, and 8-hour battery backup.",
    image: Product4,
    variants: [
      { type: "Outdoor Edition", price: 1699 },
      { type: "Bass Boost Edition", price: 2199 },
    ],
  },
  {
    id: 5,
    title: "Ayudh Battery",
    desc: "Lithium-ion battery for electric cars with high efficiency and thermal protection.",
    image: Product5,
    variants: [
      { type: "2kWh Pack", price: 27999 },
      { type: "3kWh Pack", price: 34999 },
    ],
  },
  // {
  //   id: 6,
  //   title: "Ayudh battery",
  //   desc: "Compact lithium-ion battery for electric bicycles and home inverters.",
  //   image: Product6,
  //   variants: [
  //     { type: "E-Bike Compatible", price: 6999 },
  //     { type: "Home Inverter", price: 8999 },
  //   ],
  // },
  {
    id: 7,
    title: "Electric Bicycle",
    desc: "Pedal-assisted e-bicycle with lithium battery, 50km range, and disc brakes.",
    image: Product7,
    variants: [
      { type: "City Commuter", price: 22999 },
      { type: "Mountain Terrain", price: 27999 },
    ],
  },
  {
    id: 8,
    title: "Chetak Electric scooter",
    desc: "Electric two-wheeler with stylish design, 90km range, and regenerative braking.",
    image: Product8,
    variants: [
      { type: "Urbane", price: 114999 },
      { type: "Premium", price: 124999 },
    ],
  },
  {
    id: 9,
    title: "Ampere Electric Scooter",
    desc: "Affordable electric scooter with removable battery and 70–90 km range.",
    image: Product9,
    variants: [
      { type: "Magnus EX", price: 104900 },
      { type: "Zeal EX", price: 94900 },
    ],
  },
  {
    id: 10,
    title: "Mahindra electric Rickshaw",
    desc: "Three-wheeler electric rickshaw with durable chassis and 120 km per charge.",
    image: Product10,
    variants: [
      { type: "Cargo", price: 149000 },
      { type: "Passenger", price: 179000 },
    ],
  },
  {
    id: 11,
    title: "Tata Nexon EV electric car",
    desc: "Compact electric SUV with Ziptron technology, 312–465 km range and fast charging.",
    image: Product11,
    variants: [
      { type: "Prime (Medium Range)", price: 1499000 },
      { type: "Max (Long Range)", price: 1799000 },
    ],
  },
  {
    id: 12,
    title: "Electric Truck",
    desc: "Heavy-duty electric truck with 200km range and smart fleet tracking support.",
    image: Product12,
    variants: [
      { type: "6-Wheel", price: 1699999 },
      { type: "10-Wheel", price: 2399999 },
    ],
  },
  {
    id: 13,
    title: "Electric Bus",
    desc: "Zero-emission electric bus ideal for city transit, 200–300 km per charge.",
    image: Product13,
    variants: [
      { type: "Standard City", price: 3999999 },
      { type: "Long Range", price: 4699999 },
    ],
  },
];

const Products = () => {
  const [selectedVariants, setSelectedVariants] = useState(
    dummyProducts.map((product) => product.variants[0])
  );

  const handleVariantChange = (productIndex, variantType) => {
    const updated = [...selectedVariants];
    const selected = dummyProducts[productIndex].variants.find(
      (v) => v.type === variantType
    );
    updated[productIndex] = selected;
    setSelectedVariants(updated);
  };
  return (
    <div
      className="pb-16 text-white max-w-full mx-auto pt-10 p-4 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-green-400/10 backdrop-blur-xl"
      id="products"
      aria-labelledby="products-section-title"
    >
      <div className="text-center mb-12" aria-labelledby="marketplace-info">
        <div className="text-green-400 uppercase font-semibold text-sm mb-4">
          <span className="bg-gray-800 px-4 py-2 rounded-full">
            ECO-TECH MARKETPLACE
          </span>
        </div>
        <h2 id="products-section-title" className="text-4xl font-bold mb-4">
          Batteryfy <span className="text-white">Lifestyle</span>
        </h2>
        <Link to="/" aria-label="Go to the Batteryfy shop">
          <button className="relative border-2 border-green-500 hover:text-green-400 text-white px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
            <span className="absolute inset-0 m-[2px] rounded-full bg-transparent"></span>
            <span className="relative z-10">Shop Now</span>
          </button>
        </Link>
      </div>

      <h3
        className="text-xl mb-4 flex justify-between items-center"
        aria-labelledby="featured-products-title"
      >
        <span id="featured-products-title" className="text-xl">
          Featured Products
        </span>
        <div className="flex gap-2">
          <div className="swiper-button-prev-custom text-green-400 cursor-pointer text-xl">
            <FaChevronLeft />
          </div>
          <div className="swiper-button-next-custom text-green-400 cursor-pointer text-xl">
            <FaChevronRight />
          </div>
        </div>
      </h3>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        className="products-swiper mb-12"
        aria-label="Featured product carousel"
      >
        {dummyProducts.map((product, index) => (
          <SwiperSlide key={product.id} className="h-full">
            <div className="group bg-gray-800 rounded-lg overflow-hidden flex flex-col h-1/2">
              <div className="relative aspect-square w-full bg-green-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-150 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    {product.title}
                  </h4>
                  <p className="text-base font-semibold text-gray-400 mb-2">
                    {product.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-col mb-2">
                    <label
                      htmlFor={`variant-${product.id}`}
                      className="text-sm"
                    >
                      Select Variant
                    </label>
                    <select
                      id={`variant-${product.id}`}
                      className="bg-gray-700 text-white px-3 py-1 rounded-md"
                      value={selectedVariants[index]?.type}
                      onChange={(e) =>
                        handleVariantChange(index, e.target.value)
                      }
                    >
                      {product.variants.map((variant, index) => (
                        <option key={index} value={variant.type}>
                          {/* {variant.type} - ₹{variant.price} */}
                          {variant.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="flex items-center gap-2">
                    <span>starts from</span>
                    <span className="font-bold text-lg">
                      {/* ₹{product.variants[0].price} */}₹
                      {selectedVariants[index]?.price.toLocaleString()}
                    </span>
                  </p>
                  <button
                    className="text-base bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full mt-2"
                    aria-label={`Get a quote for ${product.title}`}
                  >
                    Get Quotes
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
