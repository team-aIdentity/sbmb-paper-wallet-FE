import React, { useState } from "react";

import background1Video from "@assets/background/background1.mp4";
import pixelBoxLight from "@assets/pixel/pixel-box-sm-light.svg";
import pixelBoxDark from "@assets/pixel/pixel-box-sm-dark.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const [errors, setErrors] = useState({ id: false, pw: false });

  const handleLogin = async () => {
    setErrors({
      id: userId.trim() === "",
      pw: userPw.trim() === "",
    });
  };

  return (
    <div className="relative p-30 pt-40 text-white">
      <video
        className="absolute inset-0 w-full object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background1Video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-full w-full bg-black/30" />

      <div className="relative z-10 flex flex-col items-center gap-20">
        <div className="text-4xl">로그인</div>
        <div className="flex flex-col items-end gap-8">
          <div className="grid grid-cols-10 grid-rows-2 items-center gap-8">
            <div className="text-end text-2xl">ID</div>
            <input
              className={`col-span-9 h-16 w-full rounded-2xl border px-4 focus:outline-none ${
                errors.id ? "border-red-500" : ""
              }`}
              placeholder="아이디(이메일)"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <div className="text-end text-2xl">PW</div>
            <input
              className={`col-span-9 h-16 w-full rounded-2xl border px-4 focus:outline-none ${
                errors.pw ? "border-red-500" : ""
              }`}
              placeholder="비밀번호"
              type="password"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
          </div>
          <div className="group relative w-fit" onClick={handleLogin}>
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
              로그인
            </div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-2xl text-white">
              로그인
            </div>
          </div>
          <div className="flex w-fit w-full items-center text-xl">
            <div className="flex flex-col items-end gap-4 border-r px-8">
              <div
                className="flex cursor-pointer items-center gap-4 hover:text-[#8ffdc2]"
                onClick={(e) => {
                  const checkbox = e.currentTarget.querySelector(
                    '[data-slot="checkbox"]',
                  ) as HTMLElement;
                  if (checkbox) {
                    checkbox.click();
                  }
                }}
              >
                자동로그인
                <Checkbox />
              </div>
              <div
                className="flex cursor-pointer items-center gap-4 hover:text-[#8ffdc2]"
                onClick={(e) => {
                  const checkbox = e.currentTarget.querySelector(
                    '[data-slot="checkbox"]',
                  ) as HTMLElement;
                  if (checkbox) {
                    checkbox.click();
                  }
                }}
              >
                아이디 저장
                <Checkbox />
              </div>
            </div>
            <div className="cursor-pointer border-r px-8 hover:text-[#8ffdc2]">
              아이디/비밀번호 찾기
            </div>
            <div
              className="cursor-pointer px-8 hover:text-[#8ffdc2]"
              onClick={() => nav("/signup")}
            >
              회원가입
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
