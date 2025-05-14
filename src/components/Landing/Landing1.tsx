import React from "react";

import background1 from "@assets/background/background1.svg";
import button from "@assets/button/buy-wallet.svg";
import buttonHover from "@assets/button/buy-wallet-hover.svg";

const Landing1 = () => {
  return (
    <div
      className="text-white p-40"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-60">
        <div className="text-7xl">SBMB로 Web3를 즐겨보세요</div>
        <div className="flex flex-col gap-20 text-xl">
          <div className="flex flex-col gap-10 text-3xl">
            <div>EVM 종이지갑 구매를 통해 Web3 생태계로 진입해보세요!</div>
            <div>
              구매한 지갑에 각종 토큰이{" "}
              <span className="text-[#FBFF00]">에어드랍</span> 됩니다.
            </div>
          </div>
          <img
            src={button}
            onMouseOver={(e) => (e.currentTarget.src = buttonHover)}
            onMouseOut={(e) => (e.currentTarget.src = button)}
            className="w-90 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing1;
