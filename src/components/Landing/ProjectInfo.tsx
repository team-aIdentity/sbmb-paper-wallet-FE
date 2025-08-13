import React from "react";
import { Button } from "../ui/button";
import wallet from "@assets/pictures/paper_wallet.svg";
import { Paperclip } from "lucide-react";

const ProjectInfo = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex flex-col gap-50">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            SBMB 프로젝트는 무엇인가요?
          </h1>
          <p className="md:2xl xl:3xl text-xl font-bold">
            SBMB는 춘심 팀이 지갑 배포를 통해 발생한 기금(비트모빅)을 고액권에
            보관하고, <br className="hidden xl:block" />
            해당 보관량에 맞춰 1:1 비율로 발행 및{" "}
            <span className="text-[#E2A21D]">에어드랍</span>되는 EVM 기반의
            토큰입니다.
          </p>
        </div>

        <div className="flex flex-col gap-20 xl:flex-row xl:items-center">
          <img src={wallet} className="h-90" />
          <div className="flex flex-col gap-10">
            <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
              EVM 종이지갑
            </h1>
            <p className="md:2xl xl:3xl text-xl font-bold">
              Base(이더리움 계열) 체인에서 사용되는 Web3 디지털 지갑의 실물
              버전입니다.
              <br className="hidden xl:block" /> 기존 비트모빅 종이지갑과 같이
              공개 주소와 프라이빗키 QR이 포함되어 있습니다. 이 지갑을 통해{" "}
              <span className="text-[#E2A21D]">Web3 생태계</span>로 진입해
              보세요.
            </p>
            <div className="flex justify-center xl:justify-start">
              <Button
                variant="gradient"
                size="xl"
                className="w-fit"
                onClick={() =>
                  window.open(
                    "https://choonsim.gitbook.io/sbmb_introduce",
                    "_blank",
                  )
                }
              >
                <Paperclip />
                소개서 바로가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
