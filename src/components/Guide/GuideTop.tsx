import React from "react";

import { Button } from "../ui/button";
import mainImage from "@assets/pictures/guide.svg";
import baseLogo from "@assets/logo/base_logo.svg";
import sbmbLogo from "@assets/logo/logo_black.svg";

const GuideTop = () => {
  const addBaseNetwork = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Metamask가 설치되어 있지 않습니다. Metamask를 설치해주세요.");
      return;
    }

    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (chainId === "0x2105") {
        alert("이미 Base 네트워크가 연결되어 있습니다!");
        return;
      }

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x2105", // Base Mainnet의 Chain ID (8453 in decimal)
            chainName: "Base Mainnet",
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["https://mainnet.base.org"],
            blockExplorerUrls: ["https://basescan.org"],
            iconUrls: [
              "https://raw.githubusercontent.com/ethereum-optimism/brand-kit/main/assets/svg/Base_Network_Logo.svg",
            ],
          },
        ],
      });
      alert("Base 네트워크가 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("Base 네트워크 추가 실패:", error);

      // -32603 에러는 실제로는 성공한 경우가 많음
      if (
        error.code === -32603 &&
        error.message?.includes("p is not a function")
      ) {
        // 잠시 후 체인 ID를 다시 확인해서 실제로 추가되었는지 확인
        setTimeout(async () => {
          try {
            const newChainId = await window.ethereum.request({
              method: "eth_chainId",
            });
            if (newChainId === "0x2105") {
              alert("Base 네트워크가 성공적으로 추가되었습니다!");
            } else {
              alert("Base 네트워크 추가에 실패했습니다. 다시 시도해주세요.");
            }
          } catch (checkError) {
            alert(
              "Base 네트워크 추가 상태를 확인할 수 없습니다. Metamask를 확인해주세요.",
            );
          }
        }, 1000);
        return;
      }

      if (error.code === 4001) {
        alert("사용자가 요청을 거부했습니다.");
      } else if (error.code === -32602) {
        alert("이미 Base 네트워크가 추가되어 있습니다.");
      } else {
        alert(`Base 네트워크 추가에 실패했습니다. (에러 코드: ${error.code})`);
      }
    }
  };
  const addSBMBToken = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Metamask가 설치되어 있지 않습니다. Metamask를 설치해주세요.");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0x412Ad8bd103Cbb467BB235503F798A8f9531E458", // SBMB 토큰 컨트랙트 주소 (실제 주소로 변경 필요)
            symbol: "SBMB",
            decimals: 18,
            image: "https://your-domain.com/sbmb-token-icon.png", // SBMB 토큰 아이콘 URL (실제 URL로 변경 필요)
          },
        },
      });
      alert("SBMB 토큰이 성공적으로 추가되었습니다!");
    } catch (error) {
      console.error("SBMB 토큰 추가 실패:", error);
      if (error.code === 4001) {
        alert("사용자가 요청을 거부했습니다.");
      } else {
        alert("SBMB 토큰 추가에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-16 overflow-hidden bg-gradient-to-b from-[#8FD8C7] via-[#E6F6F1] to-[#FFFFFF] px-10 py-20 md:px-20 xl:px-25 2xl:flex-row 2xl:gap-30 2xl:px-30">
      <div className="flex flex-col items-center justify-center gap-8">
        <img src={mainImage} alt="Guide" className="min-w-[600px]" />
        <h1 className="text-5xl font-bold md:text-6xl xl:text-7xl">
          SBMB Guide
        </h1>
      </div>

      <div className="flex w-full flex-col gap-6">
        <div className="text-3xl font-bold xl:text-4xl">Metamask</div>

        <div className="flex flex-col gap-4">
          <Button
            className="h-fit border border-[#2F3E46]/10 p-4 shadow-md md:p-6"
            onClick={addBaseNetwork}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex flex-row items-center gap-4">
                <img src={baseLogo} />
                <div className="flex flex-col text-start">
                  <div className="text-xl font-bold break-words whitespace-pre-line md:text-2xl xl:text-3xl">
                    Base 네트워크 추가하기
                  </div>
                  <div className="text-lg break-words whitespace-pre-line text-[#6B7280] md:text-xl xl:text-2xl">
                    쉽고 간단하게 Base 네트워크를 추가할 수 있습니다.
                  </div>
                </div>
              </div>
              <div className="flex hidden h-full items-center text-4xl font-bold md:block">
                →
              </div>
            </div>
          </Button>
          <Button
            className="h-fit border border-[#2F3E46]/10 p-4 shadow-md md:p-6"
            onClick={addSBMBToken}
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex flex-row items-center gap-4">
                <img src={sbmbLogo} />
                <div className="flex flex-col text-start">
                  <div className="text-xl font-bold break-words whitespace-pre-line md:text-2xl xl:text-3xl">
                    SBMB 토큰 추가하기
                  </div>
                  <div className="text-lg break-words whitespace-pre-line text-[#6B7280] md:text-xl xl:text-2xl">
                    쉽고 간단하게 SBMB 토큰을 추가할 수 있습니다.
                  </div>
                </div>
              </div>
              <div className="flex hidden h-full items-center text-4xl font-bold md:block">
                →
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GuideTop;
