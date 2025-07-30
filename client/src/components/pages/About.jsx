// src/components/About.jsx

import React from "react";
import { FaRegAddressCard, FaBullseye, FaEye } from "react-icons/fa";

const features = [
  {
    title: "About Us",
    description:
      "Khulna Mechanical Service established in 2005, is an fabrication and erection solutions in the industrial sector. Which have 19 years of experience, We specialize in a wide range of services including Tank Erection, Pipe Fitting, Steel Structure Fabrication, Painting, Sandblasting, Alignment work, and Rental services for Scaffolding Materials, Heavy Equipment, Air Compressor Machines, Generators and more.",
    icon: <FaRegAddressCard className="text-5xl text-white" />,
  },
  {
    title: "Our Mission",
    description:
      "Our mission at Khulna Mechanical Service is to be the preferred partner for industrial fabrication and erection services, renowned for our commitment to quality, integrity, and customer satisfaction. We aim to exceed client expectations by delivering innovative, cost-effective solutions that enhance productivity, safety, and sustainability in every project we undertake.",
    icon: <FaBullseye className="text-5xl text-white" />,
  },
  {
    title: "Our Vision",
    description:
      "Our vision is become a global leader of fabrication and erection industry, recognized for our technical expertise, reliability, and ethical business practices. We to continuously expand our foster long-term partnerships, positive change the communities we serve. communities we serve Through continuous improvement and innovation, we strive to set new standards of excellence and create enduring value for our clients.",
    icon: <FaEye className="text-5xl text-white" />,
  },
];

const About = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Who We Are</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center items-center gap-8 bg-amber-500 rounded-t-2xl p-2">
                {feature.icon}
                <h3 className="text-3xl font-black text-white mt-2 mb-2">
                  {feature.title}
                </h3>
              </div>
              <p className="text-black text-lg text-justify p-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
