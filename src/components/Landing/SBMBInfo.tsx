import React from "react";

import background4 from "@assets/background/background4.svg";

const SBMBInfo = () => {
  return (
    <div
      className="h-auto w-full p-30 text-white"
      style={{
        backgroundImage: `url(${background4})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">SBMB</div>
        <div className="flex flex-col items-center gap-20">
          <div className="text-2xl" style={{ lineHeight: "60px" }}>
            SBMB는 춘심팀이 보유한 판매 수익 비트모빅(BMB)을 고액권에 예치하고,
            <br />
            해당 예치량에 맞춰 1:1 비율로 발행되어 에어드랍되는 EVM 기반의
            토큰입니다.
            <br />
            이 토큰은 비트코인 기반 구조에서는
            <br />
            구현하기 어려운 Web3 상의 기능
            <br />
            <br />
            ex) NFT 결제, 대출, 참여 보상 시스템—들을 가능하게 하기 위해
            설계되었으며,
            <br />
            기존 모빅 생태계 구성원들이 보다 쉽게 Web3로 진입하고,
            <br />
            생태계 전체의 확장을 경험할 수 있도록 만들고자 설계되었습니다.
          </div>

          <div className="w-[90%] border" />

          <div className="flex w-full flex-col gap-8 text-3xl">
            <div className="w-full">
              <span className="text-[#EEF867]">비트모빅</span>과 1:1로 가격이
              유지되는 스테이블 토큰
            </div>
            <div className="flex w-full justify-end">
              Web3 플랫폼(대출, 마켓플레이스) 등에서 사용
            </div>
            <div className="w-full">
              <span className="text-[#43D084]">지갑</span> 구매 또는{" "}
              <span className="text-[#43D084]">NFT</span> 보유 시, 콘솔 전환
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBMBInfo;
