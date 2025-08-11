import React from "react";

import HeroView from "@/components/Landing/HeroView"; // 히어로
import ProjectInfo from "@/components/Landing/ProjectInfo"; // SBMB 프로젝트는 무엇인가요?
import SBMBInfo from "@/components/Landing/SBMBInfo"; // SBMB가 왜 필요할까요?
import HowItWorks from "@/components/Landing/HowItWorks"; // 어떻게 작동되나요?
import WalletInfo from "@/components/Landing/WalletInfo"; // 기존 지갑과의 차이점 & 판매 정보
import RoadMap from "@/components/Landing/RoadMap"; // 로드맵
import OverView from "@/components/Landing/OverView"; // Over View

const Landing = () => {
  return (
    <div className="mx-auto w-full text-[#2F3E46]">
      <HeroView />
      <ProjectInfo />
      <SBMBInfo />
      <HowItWorks />
      <WalletInfo />
      <RoadMap />
      {/* <OverView /> */}
    </div>
  );
};

export default Landing;
