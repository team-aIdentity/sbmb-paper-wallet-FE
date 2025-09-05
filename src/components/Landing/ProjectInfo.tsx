import React from "react";
import { Button } from "../ui/button";
import wallet from "@assets/pictures/paper_wallet.svg";
import { FileText } from "lucide-react";

const ProjectInfo = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex flex-col gap-50">
        <div className="flex flex-col gap-10 text-center">
          <h1 className="flex justify-center text-3xl font-[900] md:text-4xl xl:text-5xl 2xl:text-6xl">
            SBMB<span className="hidden md:block">&nbsp;프로젝트</span>는
            무엇인가요?
          </h1>
          <div className="hidden md:block">
            <div className="flex flex-col gap-6 font-[700] md:text-2xl xl:text-[28px] 2xl:text-3xl">
              <p>
                SBMB는 춘심 팀이 지갑 배포를 통해 발생한 기금(비트모빅)을
                고액권에 보관하고, <br />
                해당 보관량에 맞춰 1:1 비율로 발행되는 EVM 기반 토큰입니다.
              </p>
              <p>
                구매가 아닌 SBMB 종이지갑 신청을 통해 지급되며, 신청하신
                종이지갑으로 추후 SBMB가 자동 전송됩니다.
              </p>
              <p>
                종이지갑 안에 들어있는 ‘10개의 SBMB’와 ‘NFT 증서 1개’는 이후{" "}
                <span className="text-[#E2A21D]">‘10모 콘솔’로 전환</span>이
                가능합니다.
                <br />이 구조를 통해 단순한 토큰 보유를 넘어, 콘솔 참여와 추가
                보상 기회까지 이어집니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-xl font-[700] md:hidden">
            <p>
              SBMB는 비트모빅을 기반으로 1:1 발행되는 EVM 토큰으로,
              <br /> 종이지갑 신청으로 지급됩니다.
            </p>
            <p>
              10개의 SBMB와 NFT 1개는{" "}
              <span className="text-[#E2A21D]">‘10모 콘솔’로 전환</span>{" "}
              가능하며, 이를 통해 콘솔 참여와 추가 보상 기회가 주어집니다.
            </p>
          </div>
        </div>

        <div className="flex max-w-[1536px] flex-col gap-20 xl:flex-row xl:items-center">
          <img src={wallet} className="h-90" />
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-[900] md:text-4xl xl:text-5xl 2xl:text-6xl">
              SBMB 종이지갑
            </h1>
            <p className="text-xl font-[700] md:text-2xl xl:text-[28px] 2xl:text-3xl">
              SBMB(EVM) 지갑은 이더리움 계열 자산을 안전하게 보관할 수 있는 실물
              지갑입니다. 기존{" "}
              <span className="hidden md:inline">비트모빅</span> 종이지갑과 같이
              공개 주소와 프라이빗키 QR이 포함되어 있습니다.
              <br />
              <br />
              SBMB 지갑 신청을 통해{" "}
              <span className="text-[#E2A21D]">Web3 생태계</span>로
              진입해보세요!
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
                <FileText />
                SBMB 소개서 바로가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
