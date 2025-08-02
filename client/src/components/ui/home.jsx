import React from "react";
import Navbar from "../Shared/Navbar";
import ImageSlider from "../Home/ImageSlider";
import About from "../pages/About";
import Excellence from "../Home/Excellence";
import ServiceSection from "../Home/ServiceSection";
import Footer from "../Shared/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <About />
      <Excellence />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Home;
