import React from "react";

import logoPixel from "@assets/logo/logo_pixel.png";

const WalletInfo = () => {
  return (
    <div
      className="h-auto w-full p-30 text-white"
      style={{
        background:
          "linear-gradient(180deg, #000F12 0%, #001013 44.47%, #008A53 88.94%)",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">기존 지갑과의 차이점</div>
        <div className="grid grid-cols-3 grid-rows-4 text-center text-4xl">
          {/* 1 */}
          <div className="flex items-center justify-center border-b-4 border-white px-8 py-10"></div>
          <div className="flex items-center justify-center border-b-4 border-white px-8 py-10 text-[#EEF867]">
            기존 <br />
            모빅 종이지갑
          </div>
          <div className="flex items-center justify-center border-b-4 border-white px-8 py-10 text-[#43D084]">
            EVM 종이지갑
          </div>

          {/* 2 */}
          <div className="flex items-center justify-center px-8 py-10 text-3xl">
            네트워크
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-2xl text-[#EEF867]">
            비트모빅 <br />
            (비트코인 기반)
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-2xl text-[#43D084]">
            이더리움 Layer2 <br />- Base -
          </div>

          {/* 3 */}
          <div className="flex items-center justify-center px-8 py-10 text-3xl">
            주소 형식
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-2xl text-[#EEF867]">
            BTC 계열 주소 <br />
            (1, 3 또는 bc1로 시작)
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-2xl text-[#43D084]">
            0x로 시작하는 <br />
            EVM 주소
          </div>

          {/* 4 */}
          <div className="flex items-center justify-center px-8 py-10 text-3xl">
            호환 자산
          </div>
          <div className="flex items-center justify-center px-8 py-10 text-2xl text-[#EEF867]">
            비트코인 계열만
            <br /> 수령 가능
          </div>
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-10 text-2xl text-[#43D084]">
            SBMB, USDT, USDC,
            <br />
            ETH, NFT 등<br />
            ERC 자산
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-center gap-18 text-2xl">
            <div className="flex flex-col gap-4">
              <span className="text-3xl">배포 정보 :</span>
              <span>• 가격 : 10.2 MO</span>
              <span>• 배포 수량 : 총 11,000장</span>
              <span>• 신청 제한 : 없음 (1인당 신청 제한 없음)</span>
              <span>• 배포 종료일 : 2025년 12월 28일</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-3xl">신청 혜택 :</span>
              <span>• SBMB 수령 전용 EVM 종이지갑 실물 1장 </span>
              <span>• 10 SBMB 에어드랍 자격</span>
              <span>• 콘솔 전환 혜택 NFT 에어드랍 자격</span>
              {/* <span>- SBMB 수령 전용 EVM 종이지갑 실물 1장</span> */}
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

export default WalletInfo;
