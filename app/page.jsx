// import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center w-[100vw]">
        <Navbar />
        <Hero />
        <OurServices />
        <AboutUs />
        <Skills />
        {/* <BlogSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
