import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 text-center sm:p-8 md:p-10">
    <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Dork Generator. All rights reserved.
      </p>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/your-username/dork-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaGithub size={24} className="mr-2" />
          <span className="text-sm">GitHub</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
