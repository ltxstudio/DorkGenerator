import React, { useState } from "react";
import { FaClipboard, FaDownload, FaTrash } from "react-icons/fa"; // Import icons from react-icons
import dorkTemplates from "../data/dorkTemplates";

const DorkGenerator = () => {
  const [keywords, setKeywords] = useState("");
  const [domain, setDomain] = useState("example.com");
  const [customTemplate, setCustomTemplate] = useState("");
  const [templates, setTemplates] = useState(dorkTemplates);
  const [generatedDorks, setGeneratedDorks] = useState([]);

  const handleAddTemplate = () => {
    if (customTemplate.trim() !== "") {
      setTemplates([
        ...templates,
        { template: customTemplate, description: "Custom template added by user." },
      ]);
      setCustomTemplate("");
    }
  };

  const generateDorks = () => {
    const keywordList = keywords.split(",").map((k) => k.trim());
    const dorks = [];

    keywordList.forEach((keyword) => {
      templates.forEach(({ template }) => {
        dorks.push(template.replace("{keyword}", keyword).replace("{domain}", domain));
      });
    });

    setGeneratedDorks(dorks);
  };

  const copyToClipboard = (dork) => {
    navigator.clipboard.writeText(dork);
    alert("Dork copied to clipboard!");
  };

  const exportToFile = () => {
    const blob = new Blob([generatedDorks.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dorks.txt";
    link.click();
  };

  const clearGeneratedDorks = () => {
    setGeneratedDorks([]);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-lg shadow-xl text-white max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Dork Generator</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <textarea
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Enter keywords, separated by commas"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          ></textarea>
          <input
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter domain (e.g., example.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 focus:ring-2 focus:ring-green-500"
            onClick={generateDorks}
          >
            Generate Dorks
          </button>
        </div>

        <div>
          <textarea
            className="w-full p-4 mb-6 border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500"
            rows="4"
            placeholder="Add custom dork template (e.g., site:{domain} {keyword})"
            value={customTemplate}
            onChange={(e) => setCustomTemplate(e.target.value)}
          ></textarea>
          <button
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg w-full hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
            onClick={handleAddTemplate}
          >
            Add Custom Template
          </button>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Available Templates:</h3>
            <ul className="space-y-3">
              {templates.map(({ template, description }, index) => (
                <li key={index} className="text-sm flex items-center justify-between">
                  <span>{template}</span>
                  <span
                    className="text-xs text-gray-300 ml-2"
                    title={description} // Tooltips on hover
                  >
                    ℹ️
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {generatedDorks.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6">Generated Dorks</h3>
          <ul className="space-y-4">
            {generatedDorks.map((dork, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                <span className="flex-grow">{dork}</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => copyToClipboard(dork)}
                >
                  <FaClipboard /> Copy
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex space-x-4">
            <button
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500"
              onClick={exportToFile}
            >
              <FaDownload /> Export to File
            </button>
            <button
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
              onClick={clearGeneratedDorks}
            >
              <FaTrash /> Clear All Dorks
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DorkGenerator;
