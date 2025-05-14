import React from "react";

import background8 from "@assets/background/background8.svg";

const Landing8 = () => {
  return (
    <div
      className="h-auto w-full p-40 text-white"
      style={{
        backgroundImage: `url(${background8})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">OOO와 함께 또 다른 세상으로 떠나보세요!</div>
        <div></div>
      </div>
    </div>
  );
};

export default Landing8;
