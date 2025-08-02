import React, { useEffect, useState } from "react";
import img1 from "../../assets/Slider1.jpg";
import img2 from "../../assets/Slider2.jpg";
import img3 from "../../assets/Slider3.jpg";
import img4 from "../../assets/Slider4.jpg";

const images = [
  { src: img1, title: "AQUA Refinery Ltd" },
  { src: img2, title: "Maitree Super Thermal Power Plant" },
  { src: img3, title: "Sahazalal Fertilizer" },
  { src: img4, title: "Rupshi Power Plant" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[900px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded">
            <h2 className="text-yellow-300 text-4xl font-black">
              {image.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
