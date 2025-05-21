import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("container");

      const viewportWidth =
        document.documentElement.clientWidth || window.innerWidth;
      if (container && viewportWidth < 1280) {
        const scale = viewportWidth / 1280;
        container.style.transform = `scale(${scale})`;
        container.style.transformOrigin = "top left";
        container.style.width = "1280px";
        container.style.height = "auto";

        const wrapper = document.getElementById("containerWrapper");
        if (wrapper) {
          const scaledHeight = container.scrollHeight * scale;
          wrapper.style.height = `${scaledHeight}px`;
        }
      } else if (container) {
        container.style.transform = "";
        container.style.width = "";
        container.style.height = "";

        const wrapper = document.getElementById("containerWrapper");
        if (wrapper) {
          wrapper.style.height = "";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    document.addEventListener("DOMContentLoaded", handleResize);

    handleResize();
    setTimeout(handleResize, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      document.removeEventListener("DOMContentLoaded", handleResize);
    };
  }, []);

  return (
    <div id="containerWrapper" className="flex items-center justify-center">
      <div id="container" className="w-full max-w-screen-xl">
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
