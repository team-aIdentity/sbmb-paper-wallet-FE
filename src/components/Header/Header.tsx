import React from "react";

import logo from "@assets/logo/logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const targetChainId = 8453;

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      isMetaMask?: boolean;
    };
  }
}

const Header = () => {
  const nav = useNavigate();

  const addNetwork = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${targetChainId.toString(16)}`,
              chainName: "Base",
              rpcUrls: ["https://base.llamarpc.com"],
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
              blockExplorerUrls: ["https://basescan.org/"],
            },
          ],
        });
      }
    } catch (error: any) {
      console.error(error);
      if (error.code === 4001) {
        alert("사용자가 네트워크 추가를 취소했습니다.");
      } else if (error.code === -32602) {
        alert("이미 Base 네트워크가 추가되어 있습니다.");
      } else if (error.code === -32603) {
        alert(
          "메타마스크 내부 오류가 발생했습니다. 메타마스크를 새로고침하거나 재시작해주세요.",
        );
      } else {
        alert("네트워크 추가 실패: " + (error.message || "알 수 없는 오류"));
      }
    }
  };

  const addToken = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: "0x412Ad8bd103Cbb467BB235503F798A8f9531E458",
              symbol: "TTK",
              decimals: 18,
              image:
                "https://crimson-generous-ant-395.mypinata.cloud/ipfs/bafybeihpkc6mt6ix2iitplqq7i4kxsgcm36ehrbf5tw7yqe5qt5g6tneki",
            },
          },
        });
      }
    } catch (error: any) {
      console.error("토큰 추가 오류:", error);
      if (error.code === 4001) {
        alert("사용자가 토큰 추가를 취소했습니다.");
      } else {
        alert("토큰 추가 실패: " + (error.message || "알 수 없는 오류"));
      }
    }
  };

  return (
    <div
      className="fixed z-20 flex w-full max-w-screen-xl items-center justify-between px-14 py-4"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <img src={logo} className="h-20 w-20" />
      <div className="flex text-2xl text-white">
        {/* <div
          className="cursor-pointer border-r px-4 hover:text-[#8ffdc2]"
          onClick={() => nav("/")}
        >
          Home
        </div>

        <div className="cursor-pointer border-r px-4 hover:text-[#8ffdc2]">
          대시보드
        </div>
        <div
          className="cursor-pointer px-4 hover:text-[#8ffdc2]"
          onClick={() => nav("/login")}
        >
          로그인/회원가입
        </div> */}

        <div className="flex gap-2">
          <Button onClick={addNetwork}>
            <span>Base 체인 추가</span>
          </Button>

          <Button onClick={addToken}>
            <span>SBMB 토큰 추가</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
