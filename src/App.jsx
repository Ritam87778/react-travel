import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../src/components/Navbar.jsx";
import ServiceSection from "./components/Services.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ServiceSection/>
    </>
  );
}

export default App;
