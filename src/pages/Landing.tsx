import React from "react";

import HeroView from "@/components/Landing/HeroView"; // 히어로
import ProjectInfo from "@/components/Landing/ProjectInfo"; // SBMB 프로젝트는 무엇인가요?
import WalletInfo from "@/components/Landing/WalletInfo"; // 기존 지갑과의 차이점 & 판매 정보
import SBMBInfo from "@/components/Landing/SBMBInfo"; // SBMB
import HowItWorks from "@/components/Landing/HowItWorks"; // 어떻게 작동되나요?
import RoadMap from "@/components/Landing/RoadMap"; // 로드맵
import OverView from "@/components/Landing/OverView"; // Over View

// import Landing8 from "@/components/Landing/Landing8";

const Landing = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <HeroView />
      <ProjectInfo />
      <WalletInfo />
      <SBMBInfo />
      <HowItWorks />
      <RoadMap />
      <OverView />
      {/* <Landing8 /> */}
    </div>
  );
};

export default Landing;
