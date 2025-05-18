import React from "react";

import howItWorks1 from "@assets/pixel/how-it-works-1.svg";
import howItWorks2 from "@assets/pixel/how-it-works-2.svg";

const Landing6 = () => {
  return (
    <div className="h-auto w-full bg-black p-40 text-white">
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">어떻게 작동되나요?</div>
        <div className="flex flex-col gap-20">
          <img src={howItWorks1} />
          <img src={howItWorks2} />
        </div>
      </div>
    </div>
  );
};

export default Landing6;
