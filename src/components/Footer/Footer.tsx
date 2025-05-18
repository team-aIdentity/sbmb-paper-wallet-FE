import React from "react";

import logo from "@assets/logo/logo.png";

const Footer = () => {
  return (
    <div
      className="flex w-full flex-col justify-between gap-10 p-14"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="flex flex-col gap-4 text-white">
        <div className="flex items-center gap-4">
          <img src={logo} className="w-40" />
          <div className="text-3xl">
            <div>SBMB DAO</div>
            <div>Stable BMB DAO</div>
          </div>
        </div>

        <div className="text-xl">
          <div>
            Stable BMB DAO는 신뢰성과 실물 기반 자산을 연결하는 Web3 생태계를
            구축합니다.
          </div>
          <div>
            SBMB ConsolePass는 이러한 철학을 바탕으로 운영하는 DAO
            프로젝트입니다.
          </div>
        </div>
      </div>

      <div className="flex justify-between text-white">
        <div className="flex items-end text-3xl">
          @ 2025 StableBMB DAO. All Rights Reserved
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl">contantDao.bmb.io</div>
          <div className="flex gap-14">
            <div className="h-24 w-24 bg-white" />
            <div className="h-24 w-24 bg-white" />
            <div className="h-24 w-24 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
