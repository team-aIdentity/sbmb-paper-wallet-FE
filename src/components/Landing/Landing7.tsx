import React from "react";

import background7 from "@assets/background/background7.svg";

const Landing7 = () => {
  return (
    <div
      className="h-auto w-full p-40 text-white"
      style={{
        backgroundImage: `url(${background7})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">Over View ( 현황 수치 공개 )</div>
        <div></div>
      </div>
    </div>
  );
};

export default Landing7;
