import React from "react";

import Landing1 from "@/components/Landing/Landing1"; // 메인
import Landing2 from "@/components/Landing/Landing2"; // SBMB 프로젝트는 무엇인가요?
import Landing3 from "@/components/Landing/Landing3"; // 기존 지갑과의 차이점 & 판매 정보
import Landing4 from "@/components/Landing/Landing4"; // SBMB
import Landing5 from "@/components/Landing/Landing5"; // 어떻게 진행되나요?
import Landing6 from "@/components/Landing/Landing6"; // 어떻게 작동되나요?
import Landing7 from "@/components/Landing/Landing7"; // Over View
import Landing8 from "@/components/Landing/Landing8";

const Landing = () => {
  return (
    <div>
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Landing6 />
      <Landing7 />
      <Landing8 />
    </div>
  );
};

export default Landing;
