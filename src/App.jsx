import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RetrofitFrom from "./components/RetrofitFrom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/retrofication" element={<RetrofitFrom />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
