import React from "react";

import background8 from "@assets/background/background8.svg";
import pixelBoxLight from "@assets/pixel/pixel-box-sm-light.svg";
import pixelBoxDark from "@assets/pixel/pixel-box-sm-dark.svg";

// TODO : NFT 설명 링크

const Landing8 = () => {
  return (
    <div
      className="h-auto w-full p-40 text-white"
      style={{
        backgroundImage: `url(${background8})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-5xl">OOO와 함께 또 다른 세상으로 떠나보세요!</div>
        <div className="flex flex-col gap-20 text-3xl">
          <div className="flex flex-col gap-10">
            <div>
              “ 익숙한 바다에서 벗어나{" "}
              <span className="text-[#43D084]">Web3의 숲</span>에서 새로운
              기회를 만나다. ”
            </div>
            <div
              style={{
                lineHeight: "50px",
              }}
            >
              NFT와 함께 이더리움 기반의 Web3 생태계를 경험하고,
              <br />
              추후 콘솔로 전환되는 특별한 혜택까지 누리세요
            </div>
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
              className="w-90 cursor-pointer transition-opacity group-hover:opacity-0"
            />
            <img
              src={pixelBoxLight}
              className="absolute top-0 left-0 w-90 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center text-4xl text-[#5A5D5E]"
              style={{ transform: "translate(2px, 2px)" }}
            >
              NFT 설명 보기
            </div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-4xl text-white">
              NFT 설명 보기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing8;
