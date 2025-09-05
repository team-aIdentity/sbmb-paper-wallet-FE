import React from "react";

import logo from "@assets/logo/logo.svg";
import logoKakao from "@assets/logo/kakao_logo.svg";
import logoDiscord from "@assets/logo/discord_logo.svg";

const buttonList = [
  {
    href: "https://open.kakao.com/o/gq3NvqFf",
    logo: logoKakao,
  },
  {
    href: "",
    logo: logoDiscord,
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-10 px-10 py-15 md:px-20 xl:px-25 2xl:px-30">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-15">
          <div className="flex min-w-fit items-center gap-4">
            <img src={logo} className="h-20 xl:h-24" />
            <div className="font-[900]">
              <div className="text-3xl text-[#53AC9E] md:text-4xl xl:text-5xl">
                SBMB
              </div>
              <div className="text-xl font-[700] md:text-2xl xl:text-3xl">
                Stable_BTCMobick
              </div>
            </div>
          </div>

          <div className="text-lg font-[500] md:text-xl lg:text-2xl">
            SBMB는 비트모빅을 Web3에서 사용할 수 있게 하기 위한 신뢰 기반
            스테이블 토큰입니다.
            <br /> 실사용이 가능한 구조를 통해 내부 순환과 외부 유입을 동시에
            설계되었으며, NFT, M2E, 디파이 등의 프로젝트를 SBMB와 연동하여
            구축할 수 있습니다.
          </div>
        </div>

        <div className="flex justify-center xl:justify-end">
          {buttonList.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              className="h-30 w-30"
              onClick={() => window.open(item.href, "_blank")}
            />
          ))}
        </div>

        <div
          className="text-center text-lg font-[500] text-[#2F3E46] xl:text-start xl:text-2xl"
          style={{ opacity: 0.6 }}
        >
          @2025 StableBMB. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
