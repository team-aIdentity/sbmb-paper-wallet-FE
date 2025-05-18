import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="w-full max-w-screen-xl">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
