import React, { useEffect, useState } from "react";
import logo from "@assets/logo/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed z-25 flex h-25 w-full items-center justify-between p-8 transition-all duration-300 ease-in-out"
      style={scrolled ? { backgroundColor: "rgba(255, 255, 255, 0.5)" } : {}}
    >
      <img src={logo} className="h-14 w-14" />
    </header>
  );
};

export default Header;
