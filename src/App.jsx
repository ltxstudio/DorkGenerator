import React from "react";
import DorkGenerator from "./components/DorkGenerator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <DorkGenerator />
      </main>
      <About />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
