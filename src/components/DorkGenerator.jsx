import React, { useState } from "react";
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
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Dork Generator</h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <textarea
            className="w-full p-3 mb-4 border border-gray-300 rounded text-gray-800"
            rows="4"
            placeholder="Enter keywords, separated by commas"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          ></textarea>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded text-gray-800"
            type="text"
            placeholder="Enter domain (e.g., example.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            onClick={generateDorks}
          >
            Generate Dorks
          </button>
        </div>

        <div>
          <textarea
            className="w-full p-3 mb-4 border border-gray-300 rounded text-gray-800"
            rows="4"
            placeholder="Add custom dork template (e.g., site:{domain} {keyword})"
            value={customTemplate}
            onChange={(e) => setCustomTemplate(e.target.value)}
          ></textarea>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full mb-4"
            onClick={handleAddTemplate}
          >
            Add Custom Template
          </button>
          <div>
            <h3 className="text-lg font-bold mb-2">Templates:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {templates.map(({ template, description }, index) => (
                <li key={index} className="text-sm relative group">
                  <span className="cursor-pointer">
                    {template}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {generatedDorks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Generated Dorks</h3>
          <ul className="list-disc pl-5 space-y-2">
            {generatedDorks.map((dork, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="block p-2 bg-gray-100 text-gray-800 rounded flex-grow">
                  {dork}
                </span>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => copyToClipboard(dork)}
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={exportToFile}
          >
            Export to File
          </button>
          <button
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={clearGeneratedDorks}
          >
            Clear All Dorks
          </button>
        </div>
      )}
    </div>
  );
};

export default DorkGenerator;
