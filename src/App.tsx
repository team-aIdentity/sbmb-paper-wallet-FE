import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing";
import Guide from "./pages/Guide";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
