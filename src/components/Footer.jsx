import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 sm:p-8 md:p-10">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-6 sm:space-y-0">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dork Generator. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/your-username/dork-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaGithub size={24} className="mr-2" />
            <span className="text-sm">GitHub</span>
          </a>

          {/* Additional Social Icons (if needed) */}
          {/* You can add more social links here in the future, such as Twitter, LinkedIn */}
        </div>
      </div>

      {/* Footer bottom section with additional styling */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        <p className="font-light">
          Designed and developed with passion. Made by your username.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
