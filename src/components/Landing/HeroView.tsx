import React from "react";

// import background1 from "@assets/background/background1.svg";
import background1Video from "@assets/background/background1.mp4";
import pixelBoxLight from "@assets/pixel/pixel-box-sm-light.svg";
import pixelBoxDark from "@assets/pixel/pixel-box-sm-dark.svg";

const HeroView = () => {
  return (
    <div className="relative p-30 pt-40 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background1Video} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col gap-30">
        <div
          className="flex flex-col text-5xl"
          style={{
            lineHeight: "80px",
          }}
        >
          <div>EVM지갑 구매로 콘솔 전환과</div>
          <div>다양한 Web3 혜택을 경험해보세요.</div>
        </div>
        <div className="flex flex-col gap-10 text-xl">
          <div className="flex flex-col gap-4 text-2xl">
            <div>
              구매한 지갑에 SBMB, 콘솔 전환 NFT, Web3 파트너 토큰이{" "}
              <span className="text-[#FBFF00]">에어드랍</span>되며,
            </div>
            <div>추후 콘솔 전환 보상까지 이어집니다.</div>
          </div>
          <div
            className="group relative w-fit"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScvdIY7t06hSQ7tqaFGoH05eC7hH-CepxwVUsdZKV6bH2HHxw/viewform",
                "_blank",
              )
            }
          >
            <img
              src={pixelBoxDark}
              className="w-60 cursor-pointer transition-opacity group-hover:opacity-0"
            />
            <img
              src={pixelBoxLight}
              className="absolute top-0 left-0 w-60 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center text-2xl text-[#5A5D5E]"
              style={{ transform: "translate(2px, 2px)" }}
            >
              지갑 구매하기
            </div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-2xl text-white">
              지갑 구매하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroView;
