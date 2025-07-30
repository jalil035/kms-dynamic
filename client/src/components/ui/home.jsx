import React from "react";
import Navbar from "../Shared/Navbar";
import ImageSlider from "../Home/ImageSlider";
import About from "../pages/About";
import Excellence from "../Home/Excellence";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <About />
      <Excellence />
      <Footer />
    </div>
  );
};

export default Home;
