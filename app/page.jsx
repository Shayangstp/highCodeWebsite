// import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="hero bg-cover bg-center h-[100vh] max-w-[1920px]">
        <Navbar />
        <Hero />
        <OurServices />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
