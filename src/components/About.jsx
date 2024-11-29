import React from "react";
import { FaInfoCircle } from "react-icons/fa"; // Info icon

const About = () => (
  <section id="about" className="py-12 bg-gray-100 text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">About Dork Generator</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-8">
        Dork Generator is a tool designed for generating Google dorks, or search queries, to help you explore the web more efficiently. Whether you're a researcher, security expert, or someone who loves diving deep into search engine queries, this tool lets you generate precise dorks based on keywords and custom templates.
      </p>
      <FaInfoCircle size={50} className="mx-auto mb-4 text-indigo-600" />
      <p className="text-lg">
        Use it to search for specific data, discover hidden information, or even automate your Google searches for improved accuracy.
      </p>
    </div>
  </section>
);

export default About;
