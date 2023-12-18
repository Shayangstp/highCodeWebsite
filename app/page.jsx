// import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import OurServices from "./components/OurServices";

const Home = () => {
  return (
    <div className="hero bg-cover bg-center h-[100vh]">
      <Navbar />
      <Hero />
      <OurServices />
    </div>
  );
};

export default Home;
