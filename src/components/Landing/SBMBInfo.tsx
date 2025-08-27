import React from "react";

import sbmb1 from "@assets/pictures/sbmb_1.svg";
import sbmb2 from "@assets/pictures/sbmb_2.svg";
import sbmb3 from "@assets/pictures/sbmb_3.svg";
import sbmb4 from "@assets/pictures/sbmb_4.svg";

const list = [
  {
    img: sbmb1,
    title: "생태계 활력 부여",
    content:
      "SBMB는 단발적 이벤트가 아닌 내부 순환 구조로 생태계에 활기를 불어넣습니다.\n참여자 확신 공유, 해외 유저 유입, 다양한 DApp 성장을 이끕니다.",
  },
  {
    img: sbmb2,
    title: "이더리움 적극 활용",
    content:
      "SBMB는 이더리움 Web3 기능을 연결해 비트모빅의 사용성을 확장합니다.\n대출·스왑·NFT 등 다양한 서비스 활용이 가능해집니다.",
  },
  {
    img: sbmb3,
    title: "명확한 보상 체계",
    content:
      "지갑 신청 → SBMB 지급 → 콘솔 전환 & 추가 보상.\n참여자에 대한 명확한 보상 구조로 생태계 성장을 뒷받침합니다.",
  },
  {
    img: sbmb4,
    title: "콘솔 획득의 유일한 방법",
    content:
      "SBMB는 위조 우려 없는 안전성과 소액·글로벌 접근성을 제공할 수 있습니다.\n2026년 이후 후발 참여자도 콘솔에 합류할 수 있는 기회를 만듭니다.",
  },
];

const SBMBInfo = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex w-full flex-col items-center gap-25">
        <div className="text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            SBMB가 왜 필요할까요?
          </h1>
        </div>

        <div className="flex w-full max-w-[1536px] flex-col gap-6">
          {list.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-6 md:flex-row md:items-center ${
                index % 2 === 1 ? "xl:ml-auto" : ""
              }`}
            >
              <img
                src={item.img}
                className={`md:w-50 ${index % 2 === 1 ? "xl:!hidden" : ""}`}
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p
                  className={`text-xl font-bold whitespace-pre-line ${index % 2 === 1 ? "xl:text-right" : ""}`}
                >
                  {item.content}
                </p>
              </div>
              <img
                src={item.img}
                className={`hidden md:w-50 xl:block ${index % 2 === 1 ? "xl:block" : "xl:hidden"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBMBInfo;
