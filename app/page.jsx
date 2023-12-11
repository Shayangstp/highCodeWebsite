// import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";

const Home = () => {
  return (
    <div className="hero bg-cover bg-center h-[100vh]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
