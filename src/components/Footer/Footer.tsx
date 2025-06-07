import React from "react";

import logo from "@assets/logo/logo.svg";
import logoKakao from "@assets/logo/kakao.svg.webp";
import logoDiscord from "@assets/logo/discord_logo.png";

const Footer = () => {
  return (
    <div
      className="flex w-full flex-col justify-between gap-10 p-14"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="flex flex-col gap-8 text-white">
        <div className="flex items-center gap-4">
          <img src={logo} className="w-40" />
          <div className="text-3xl">
            <div>SBMB</div>
            <div>(Stable_BTCMobick)</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xl">
          <div>
            SBMB는 비트모빅을 Web3에서 사용할 수 있게 하기위한 신뢰 기반
            스테이블 토큰입니다.
          </div>
          <div>
            실사용이 가능한 구조를 통해 내부 순환과 외부 유입을 동시에
            설계되었으며, NFT, M2E, 디파이 등의 프로젝트를 SBMB와 연동하여
            구축할 수 있습니다.
          </div>
        </div>
      </div>

      <div className="flex justify-between text-white">
        <div className="flex items-end text-3xl">
          @ 2025 StableBMB. All Rights Reserved
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl">choonsim.dev@gmail.com </div>
          {/* TODO : 링크 삽입 */}
          <div className="flex justify-end gap-8">
            <div
              className="h-24 w-24 rounded-lg bg-white"
              style={{
                backgroundImage: `url(${logoKakao})`,
                backgroundSize: "cover",
              }}
            />
            <div
              className="h-24 w-24 rounded-lg bg-white"
              style={{
                backgroundImage: `url(${logoDiscord})`,
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
