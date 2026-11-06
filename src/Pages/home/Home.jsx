import React from "react";
import Hero from "./components/Hero";
import Excellence from "./components/Excellence";
import SmoothSlider from "./components/Slider";
import Awards from "./components/Awards";
import Features from "./components/Features";
import JourneyTimeline from "./components/JourneyTimeline";
import ContactSection from "./components/ContactSection";
import LocationSection from "../contact/LocationSection";
import ServicesCard from "../services/ServiceCard";
import StatsSection from "./components/StatsSection";
import BeforeAfterSection from "./components/BeforeAfterSection";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <StatsSection />
      <ServicesCard />
      <BeforeAfterSection />
      <SmoothSlider />
      <Awards />
      <Features />
      <JourneyTimeline />
      <ContactSection />
      <LocationSection />
    </div>
  );
};

export default Home;
