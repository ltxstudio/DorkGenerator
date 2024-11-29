import React, { useState } from "react";

const DorkGenerator = () => {
  const [keywords, setKeywords] = useState("");
  const [generatedDorks, setGeneratedDorks] = useState([]);

  const dorkTemplates = [
    "site:{domain} inurl:{keyword}",
    "intitle:{keyword} filetype:pdf",
    "site:{domain} \"{keyword}\"",
    "{keyword} ext:doc",
    "{keyword} ext:xls",
  ];

  const generateDorks = () => {
    const keywordList = keywords.split(",").map((k) => k.trim());
    const dorks = [];

    keywordList.forEach((keyword) => {
      dorkTemplates.forEach((template) => {
        dorks.push(template.replace("{keyword}", keyword).replace("{domain}", "example.com"));
      });
    });

    setGeneratedDorks(dorks);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dork Generator</h2>
      <textarea
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        rows="4"
        placeholder="Enter keywords, separated by commas"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={generateDorks}
      >
        Generate Dorks
      </button>
      {generatedDorks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Generated Dorks:</h3>
          <ul className="list-disc pl-5">
            {generatedDorks.map((dork, index) => (
              <li key={index} className="mb-2">
                <span className="block p-2 bg-gray-200 rounded">{dork}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DorkGenerator;
