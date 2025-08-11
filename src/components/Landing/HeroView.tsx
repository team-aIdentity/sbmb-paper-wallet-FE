import React from "react";
import logoDefault from "@assets/logo/logo_background/480.svg";
import logoMD from "@assets/logo/logo_background/768.svg";
import logoXL from "@assets/logo/logo_background/1280.svg";
import logo2XL from "@assets/logo/logo_background/1920.svg";
import { Button } from "../ui/button";
import { Mouse, Wallet } from "lucide-react";

const HeroView = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-gradient-to-b from-[#8FD8C7] via-[#E6F6F1] to-[#FFFFFF] px-10 pt-50 md:px-20 xl:justify-start 2xl:px-30">
      <div className="flex w-full max-w-full flex-col gap-50">
        <div className="z-10 flex flex-col gap-10">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            EVM지갑 신청으로 콘솔 전환과 <br className="hidden xl:block" />{" "}
            다양한 Web3 혜택을 경험해 보세요.
          </h1>
          <p className="md:2xl xl:3xl text-xl font-bold">
            신청한 지갑에 SBMB, 콘솔 전환 NFT, Web3 파트너 토큰이{" "}
            <span className="text-[#E2A21D]">에어드랍</span>되며,{" "}
            <br className="hidden xl:block" /> 추후 콘솔 전환 보상까지
            이어집니다.
          </p>
          <Button
            variant="gradient"
            size="xl"
            className="w-fit"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScvdIY7t06hSQ7tqaFGoH05eC7hH-CepxwVUsdZKV6bH2HHxw/viewform",
                "_blank",
              )
            }
          >
            <Wallet />
            지갑 신청하기
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-20 text-xl">
          더 알아보기
          <Mouse />
        </div>
      </div>

      {/* Background Logo */}
      <div className="absolute top-25 right-0 flex h-full w-full items-start justify-end overflow-hidden">
        <img
          src={logoDefault}
          alt="logo"
          className="h-[70%] w-auto object-contain md:hidden"
        />
        <img
          src={logoMD}
          alt="logo"
          className="hidden h-[70%] w-auto object-contain md:block xl:hidden"
        />
        <img
          src={logoXL}
          alt="logo"
          className="hidden h-[70%] w-auto object-contain xl:block 2xl:hidden"
        />
        <img
          src={logo2XL}
          alt="logo"
          className="hidden h-[80%] w-auto object-contain 2xl:block"
        />
      </div>
    </section>
  );
};

export default HeroView;
