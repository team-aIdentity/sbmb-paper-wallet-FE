import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer/Footer";

// const Landing = () => <Landing />;

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
