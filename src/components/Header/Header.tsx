import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { BookText } from "lucide-react";
import logo from "@assets/logo/logo.svg";

const Header = () => {
  const nav = useNavigate();

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
      className="fixed z-25 flex h-25 w-full items-center justify-between p-8 transition-all duration-300 ease-in-out md:px-20 xl:px-25 2xl:px-30"
      style={scrolled ? { backgroundColor: "rgba(255, 255, 255, 0.5)" } : {}}
    >
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">
        <img src={logo} className="h-14 w-14" onClick={() => nav("/")} />

        <Button
          variant={scrolled ? "gradient" : "default"}
          size="rounded"
          onClick={() => nav("/guide")}
        >
          <BookText />
          가이드
        </Button>
      </div>
    </header>
  );
};

export default Header;
