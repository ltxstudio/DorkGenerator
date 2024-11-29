import React from "react";
import DorkGenerator from "./components/DorkGenerator";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <DorkGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
