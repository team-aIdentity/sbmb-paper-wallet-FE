import React from "react";

import roadMap from "@assets/pixel/roadmap.svg";

const RoadMap = () => {
  return (
    <div className="h-auto w-full bg-black p-30 text-white">
      <div className="flex flex-col items-center gap-20">
        <div className="text-6xl">로드맵</div>
        <div className="overflow-hidden">
          <img
            src={roadMap}
            className="relative"
            style={{ marginTop: "-50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
