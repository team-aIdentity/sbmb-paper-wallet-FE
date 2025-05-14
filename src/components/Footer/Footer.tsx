import React from "react";

import logo from "@assets/logo.png";

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col p-10 justify-between gap-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="text-white flex gap-4 flex-col">
        <div className="flex items-center gap-4">
          <img src={logo} className="w-20 h-20" />
          <div className="text-xl">
            <div>SBMB DAO</div>
            <div>Stable BMB DAO</div>
          </div>
        </div>

        <div className="text-sm">
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
        <div className="text-lg flex items-end">
          @ 2025 StableBMB DAO. All Rights Reserved
        </div>
        <div className="gap-2 flex flex-col">
          <div>contantDao.bmb.io</div>
          <div className="flex gap-8">
            <div className="bg-white w-24 h-24" />
            <div className="bg-white w-24 h-24" />
            <div className="bg-white w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
