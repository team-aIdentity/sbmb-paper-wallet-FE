import React from "react";

import background2 from "@assets/background/background2.svg";

const Landing2 = () => {
  return (
    <div
      className="h-auto w-full p-40 text-white"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-180">
        <div className="text-6xl">SBMB로 Web3를 즐겨보세요</div>
        <div className="flex flex-col gap-40">
          <div className="text-5xl">EVM 종이지갑</div>
          <div className="mb-40 flex flex-col gap-4 text-2xl">
            <div style={{ lineHeight: "50px" }}>
              Base(이더리움 계열) 체인에서 사용되는 Web3 디지털 지갑의 실물
              버전입니다.
              <br />
              기존 비트모빅 종이지갑과 같이 공개주소와 프라이빗키 QR이
              포함되어있습니다.
              <br />이 지갑을 통해 Web3 생태계로 진입해보세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
