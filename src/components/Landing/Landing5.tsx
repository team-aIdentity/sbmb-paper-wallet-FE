import React from "react";

import pixelBoxMD from "@assets/pixel/pixel-box-md.svg";
import arrowDown from "@assets/pixel/arrow-down.svg";

const Landing5 = () => {
  return (
    <div className="h-auto w-full bg-black p-40 text-white">
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">어떻게 진행되나요?</div>
        <div className="relative flex items-start justify-center text-white">
          <img src={arrowDown} />
          <div
            className="absolute flex w-300 flex-col items-center gap-28 text-center text-4xl"
            style={{ lineHeight: "60px" }}
          >
            <div className="relative">
              <img src={pixelBoxMD} />
              <div className="absolute inset-0 flex items-center justify-center text-black">
                1단계 : EVM 종이지갑을 구매
              </div>
            </div>
            <div className="relative">
              <img src={pixelBoxMD} />
              <div className="absolute inset-0 flex items-center justify-center text-black">
                2단계 : 6/30 기준 보유자에게
                <br />
                SBMB + 콘솔 NFT 에어드랍
              </div>
            </div>
            <div className="relative">
              <img src={pixelBoxMD} />
              <div className="absolute inset-0 flex items-center justify-center text-black">
                3단계 : SBMB 사용 → Web3 NFT 구매, 대출, 전환 등<br />
                서비스 제공
              </div>
            </div>
            <div className="relative">
              <img src={pixelBoxMD} />
              <div className="absolute inset-0 flex items-center justify-center text-black">
                4단계 : 콘솔 NFT소유자는 고액권의 콘솔 전환시점
                <br />
                콘솔 BMB로 전환 가능
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing5;
