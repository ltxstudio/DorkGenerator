import React from "react";
import { FaCogs } from "react-icons/fa"; // You can use an icon like settings or any other relevant icon

const Header = () => (
  <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6 sm:p-8 md:p-10 shadow-lg rounded-b-lg">
    <div className="container mx-auto">
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <FaCogs size={40} />
          <h1 className="text-3xl font-extrabold tracking-tight">Dork Generator</h1>
        </div>

        {/* Navigation for Larger Screens */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="#features"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <nav className="sm:hidden">
          <ul className="flex space-x-4">
            <li>
              <button className="text-xl">☰</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
