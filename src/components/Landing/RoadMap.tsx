import React from "react";

import RoadMapDefault from "@assets/pictures/roadmap_default.svg";
import RoadMapMD from "@assets/pictures/roadmap_md.svg";
import RoadMapXL from "@assets/pictures/roadmap_xl.svg";
import RoadMap2XL from "@assets/pictures/roadmap_2xl.svg";

const RoadMap = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex flex-col gap-25">
        <div className="text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            SBMB 로드맵
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <img src={RoadMapDefault} alt="logo" className="md:hidden" />
          <img
            src={RoadMapMD}
            alt="logo"
            className="hidden w-auto object-contain md:block xl:hidden"
          />
          <img
            src={RoadMapXL}
            alt="logo"
            className="hidden w-auto object-contain xl:block 2xl:hidden"
          />
          <img
            src={RoadMap2XL}
            alt="logo"
            className="hidden w-auto object-contain 2xl:block"
          />
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
