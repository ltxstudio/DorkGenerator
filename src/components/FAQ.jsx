import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Icon for FAQ

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a dork?",
      answer: "A dork is a search query used in Google or other search engines to find specific types of information, often used for advanced searches or research.",
    },
    {
      question: "How do I use Dork Generator?",
      answer: "Simply enter your keywords and domain, select a template, and click Generate. You can also add custom templates for more specific results.",
    },
    {
      question: "Can I export my generated dorks?",
      answer: "Yes, you can export all generated dorks into a text file that you can download and use elsewhere.",
    },
  ];

  return (
    <section id="faq" className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b py-4">
              <div
                className="flex justify-between items-center cursor-pointer text-lg font-medium hover:text-indigo-600"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <FaQuestionCircle size={20} className="text-indigo-600" />
              </div>
              {activeIndex === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
