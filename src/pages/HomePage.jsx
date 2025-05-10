import React from "react";
import HeroSection from "../components/HeroSection";
import Batteryfy from "../components/Batteryfy";
import CallToAction from "../components/CallToAction";
import MobileApplication from "../components/MobileApplication";
import RetroficationSection from "../components/RetroficationSection";
import ImpactPage from "../components/ImpactPage";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <Batteryfy />
      <RetroficationSection />
      <ImpactPage />
      <MobileApplication />
      <CallToAction />
    </div>
  );
};

export default HomePage;
