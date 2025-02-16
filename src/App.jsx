import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/components/Navbar.jsx";
import ServiceSection from "./components/Services.jsx";
import Hero from "./components/Hero.jsx";
import AboutUsSection from "./components/AboutUs.jsx";
import TravelCardSection from "./components/FeaturedContent.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ServiceSection/>
      <AboutUsSection/>
      <TravelCardSection/>
    </>
  );
}

export default App;
