import React from "react";

import logo from "@assets/logo.png";

const Header = () => {
  return (
    <div
      className="fixed w-[100vw] flex py-4 px-14 justify-between items-center"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <img src={logo} className="w-20 h-20" />
      <div className="text-2xl text-white hover:scale-105 cursor-pointer">
        로그인/회원가입
      </div>
    </div>
  );
};

export default Header;
