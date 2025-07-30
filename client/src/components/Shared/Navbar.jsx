import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/LOGO.png" alt="KMS Logo" className="h-12 w-12" />
          <span className="text-4xl font-bold text-orange-600">
            Khulna Mechanical Service
          </span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 items-center font-medium text-black">
          <li>
            <Link to="/" className="hover:text-orange-600 duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-600 duration-200">
              About
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <span className="hover:text-orange-600 duration-200 cursor-pointer">
              Projects
            </span>
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <Link
                  to="/current-projects"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Current Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/completed-projects"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Completed Projects
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/services" className="hover:text-orange-600 duration-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-orange-600 duration-200">
              Our Clients
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-orange-600 duration-200">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
