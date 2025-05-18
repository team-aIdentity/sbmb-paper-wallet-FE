import React from "react";

import background1 from "@assets/background/background1.svg";
import pixelBoxLight from "@assets/pixel/pixel-box-sm-light.svg";
import pixelBoxDark from "@assets/pixel/pixel-box-sm-dark.svg";

const Landing1 = () => {
  return (
    <div
      className="p-40 text-white"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-60">
        <div className="text-6xl">SBMB로 Web3를 즐겨보세요</div>
        <div className="flex flex-col gap-20 text-xl">
          <div className="flex flex-col gap-10 text-3xl">
            <div>EVM 종이지갑 구매를 통해 Web3 생태계로 진입해보세요!</div>
            <div>
              구매한 지갑에 각종 토큰이{" "}
              <span className="text-[#FBFF00]">에어드랍</span> 됩니다.
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
              지갑 구매하기
            </div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-4xl text-white">
              지갑 구매하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing1;
