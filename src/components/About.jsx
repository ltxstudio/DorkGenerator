import React from "react";
import { FaInfoCircle } from "react-icons/fa"; // Info icon

const About = () => (
  <section id="about" className="py-12 bg-gray-100 text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">About Dork Generator</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg text-gray-700">
          Dork Generator is a tool designed for generating Google dorks, or search queries, to help you explore the web more efficiently. Whether you're a researcher, security expert, or someone who loves diving deep into search engine queries, this tool lets you generate precise dorks based on keywords and custom templates.
        </p>
        <FaInfoCircle size={60} className="mx-auto text-indigo-600 mb-6 transform hover:scale-110 transition duration-300 ease-in-out" />
        <p className="text-lg text-gray-700">
          Use it to search for specific data, discover hidden information, or even automate your Google searches for improved accuracy.
        </p>
      </div>
      
      {/* Call to Action or Additional Info (optional) */}
      <div className="mt-8">
        <p className="text-lg font-semibold text-indigo-600 mb-4">Ready to start exploring?</p>
        <p className="text-gray-700 mb-4">
          Begin generating dorks now and discover the power of efficient web search. Customize your queries, explore hidden information, and save time!
        </p>
        <a
          href="#features"
          className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default About;
