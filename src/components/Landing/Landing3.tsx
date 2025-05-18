import React from "react";

import logoPixel from "@assets/logo/logo_pixel.png";

const Landing3 = () => {
  return (
    <div
      className="h-auto w-full p-40 text-white"
      style={{
        background:
          "linear-gradient(180deg, #000F12 0%, #001013 44.47%, #008A53 88.94%)",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">기존 지갑과의 차이점</div>
        <div className="grid grid-cols-2 grid-rows-3 text-center text-5xl">
          <div className="flex items-center justify-center border-b-4 border-white px-8 py-10 text-[#EEF867]">
            비트모빅 종이지갑
          </div>
          <div className="flex items-center justify-center border-b-4 border-white px-8 py-10 text-[#43D084]">
            EVM 종이지갑
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-3xl text-[#EEF867]">
            BTC 기반 모빅 전용 주소
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-3xl text-[#43D084]">
            Base(EVM) 체인 주소
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-3xl text-[#EEF867]">
            BTC, 비트모빅, BCH 등..
          </div>
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-10 text-3xl text-[#43D084]">
            <span>ERC 표준 기반 토큰</span>
            <span>USDT, USDC, ETH,</span>
            <span>ERC-721(NFT) 등..</span>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-18 text-4xl">
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
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={logoPixel} className="h-100 w-100" />
            <div className="text-6xl text-[#43D084]">SBMB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
