import React from "react";

import howItWorksDefault from "@assets/pictures/works_default.svg";
import howItWorksMD from "@assets/pictures/works_md.svg";
import howItWorksXL from "@assets/pictures/works_xl.svg";
import howItWorks2XL from "@assets/pictures/works_2xl.svg";

const HowItWorks = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex flex-col gap-25">
        <div className="text-center">
          <h1 className="text-3xl font-[900] md:text-4xl xl:text-5xl 2xl:text-6xl">
            어떻게 작동되나요?
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <img src={howItWorksDefault} alt="logo" className="md:hidden" />
          <img
            src={howItWorksMD}
            alt="logo"
            className="hidden w-auto object-contain md:block xl:hidden"
          />
          <img
            src={howItWorksXL}
            alt="logo"
            className="hidden w-auto object-contain xl:block 2xl:hidden"
          />
          <img
            src={howItWorks2XL}
            alt="logo"
            className="hidden w-auto object-contain 2xl:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
