import React from "react";

import background2 from "@assets/background/background2.svg";

const ProjectInfo = () => {
  return (
    <div
      className="h-auto w-full p-30 pb-0 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background2})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col gap-120">
        <div className="text-center text-6xl">SBMB 프로젝트는 무엇인가요?</div>
        <div className="flex flex-col gap-20">
          <div className="text-5xl">EVM 종이지갑</div>
          <div className="flex flex-col gap-14">
            <div className="mb-20 flex flex-col gap-4 text-2xl">
              <div style={{ lineHeight: "50px" }}>
                Base(이더리움 계열) 체인에서 사용되는 Web3 디지털 지갑의 실물
                버전입니다.
                <br />
                기존 비트모빅 종이지갑과 같이 공개주소와 프라이빗키 QR이
                포함되어있습니다.
                <br />이 지갑을 통해 Web3 생태계로 진입해보세요.
              </div>
            </div>
            <div
              className="mb-20 cursor-pointer text-3xl text-[#8ffdc2] underline"
              onClick={() =>
                window.open(
                  "https://choonsim.gitbook.io/sbmb_introduce",
                  "_blank",
                )
              }
            >
              📄 소개서 바로가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
