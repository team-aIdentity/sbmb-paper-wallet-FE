import React from "react";

import logo from "@assets/logo/logo.svg";

const Header = () => {
  return (
    <div
      className="fixed z-20 flex w-full max-w-screen-xl items-center justify-between px-14 py-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <img src={logo} className="h-20 w-20" />
      <div className="cursor-pointer text-2xl text-white hover:scale-105">
        {/* 로그인/회원가입 */}
      </div>
    </div>
  );
};

export default Header;
