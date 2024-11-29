import React from "react";
import DorkGenerator from "./components/DorkGenerator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <Header />
      <main className="flex-grow p-4 lg:px-8 xl:px-16 bg-white shadow-lg rounded-t-lg">
        <DorkGenerator />
      </main>
      <div className="bg-gray-50 py-12">
        <About />
      </div>
      <div className="bg-gray-100 py-12">
        <Features />
      </div>
      <div className="bg-gray-200 py-12">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default App;
