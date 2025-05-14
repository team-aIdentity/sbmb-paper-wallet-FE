import React from "react";

import logoPixel from "@assets/logo_pixel.png";

const Landing3 = () => {
  return (
    <div
      className="text-white p-40 w-full h-auto"
      style={{
        background:
          "linear-gradient(180deg, #000F12 0%, #001013 44.47%, #008A53 88.94%)",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">기존 지갑과의 차이점</div>
        <div className="grid grid-cols-2 grid-rows-3 text-5xl text-center">
          <div className="text-[#EEF867] border-b-4 border-white py-10 px-8 flex items-center justify-center">
            비트모빅 종이지갑
          </div>
          <div className="text-[#43D084] border-b-4 border-white py-10 px-8 flex items-center justify-center">
            EVM 종이지갑
          </div>
          <div className="text-[#EEF867] text-4xl py-10 px-8 flex items-center justify-center">
            BTC 기반 모빅 전용 주소
          </div>
          <div className="text-[#43D084] text-4xl py-10 px-8 flex items-center justify-center">
            Base(EVM) 체인 주소
          </div>
          <div className="text-[#EEF867] text-4xl py-10 px-8 flex items-center justify-center">
            BTC, 비트모빅, BCH 등..
          </div>
          <div className="text-[#43D084] text-4xl py-10 px-8 flex flex-col gap-4 items-center justify-center">
            <span>ERC 표준 기반 토큰</span>
            <span>USDT, USDC, ETH, Doge,</span>
            <span>ERC-721(NFT) 등..</span>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-18 text-5xl">
            <div className="flex flex-col gap-4">
              <span>판매 정보</span>
              <span>총 발행량 : 10,000장</span>
              <span> 가격 : 10.2 MO</span>
            </div>
            <div className="flex flex-col gap-4">
              <span>구매 혜택 :</span>
              <span>- 10 SBMB 에어드랍</span>
              <span>- 콘솔 전환 혜택 NFT 에어드랍</span>
              <span>- 협력 프로젝트 토큰 에어드랍</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <img src={logoPixel} className="w-100 h-100" />
            <div className="text-6xl text-[#43D084]">SBMB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
