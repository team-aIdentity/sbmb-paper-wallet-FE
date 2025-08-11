import React from "react";

import logoPixel from "@assets/logo/logo_pixel.png";

const WalletInfo = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 2xl:px-30">
      <div className="flex w-full flex-col gap-25">
        <div className="text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            기존 지갑과의 차이점은?
          </h1>
        </div>

        <div className="flex w-full justify-center">
          <div className="grid w-full max-w-[600px] grid-cols-2 text-center font-bold lg:max-w-[800px] xl:max-w-[1000px] xl:grid-cols-3 2xl:max-w-[1200px]">
            {/* Header Row */}
            <div className="hidden border-b-2 border-gray-300 py-4 text-3xl xl:block xl:text-4xl"></div>
            <div className="border-b-2 border-gray-300 py-4 text-3xl xl:text-4xl">
              기존 모빅 <br />
              종이지갑
            </div>
            <div className="border-b-2 border-gray-300 py-4 text-3xl text-[#53AC9E] xl:text-4xl">
              EVM <br />
              종이지갑
            </div>

            {/* Row 1 */}
            <div className="hidden border-b border-gray-300 py-4 text-3xl xl:block xl:text-4xl">
              네트워크
            </div>
            <div className="border-b border-gray-300 py-4 text-xl xl:text-2xl">
              비트모빅 <br /> (비트코인 기반)
            </div>
            <div className="border-b border-gray-300 py-4 text-xl text-[#53AC9E] xl:text-2xl">
              이더리움 Layer2 <br />
              -Base-
            </div>

            {/* Row 2 */}
            <div className="hidden border-b border-gray-300 py-4 text-3xl xl:block xl:text-4xl">
              주소 형식
            </div>
            <div className="border-b border-gray-300 py-4 text-xl xl:text-2xl">
              BTC 계열 주소 <br /> (1, 3 또는 bc1으로 시작)
            </div>
            <div className="border-b border-gray-300 py-4 text-xl text-[#53AC9E] xl:text-2xl">
              0x로 시작하는 <br /> EVM 주소
            </div>

            {/* Row 3 */}
            <div className="hidden py-4 text-3xl xl:block xl:text-4xl">
              호환 자산
            </div>
            <div className="py-4 text-xl xl:text-2xl">
              비트코인 계열만 <br />
              수령가능
            </div>
            <div className="py-4 text-xl text-[#53AC9E] xl:text-2xl">
              SBMB, USDT, USDC,
              <br /> ETH, NFT 등<br />
              ERC 자산
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletInfo;
