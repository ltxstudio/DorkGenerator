import React from "react";
import { FaCogs, FaClipboardList, FaDownload } from "react-icons/fa"; // Icons for features

const Features = () => (
  <section id="features" className="py-12 bg-white text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
          <FaCogs size={50} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-bold mb-2">Custom Templates</h3>
          <p>Create your own custom search templates and tailor them to your specific needs.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
          <FaClipboardList size={50} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-bold mb-2">Bulk Dork Generation</h3>
          <p>Generate multiple dorks at once with just a click. Save time and increase efficiency.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
          <FaDownload size={50} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-bold mb-2">Export to File</h3>
          <p>Download your generated dorks in a simple text file, making it easy to use anywhere.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
