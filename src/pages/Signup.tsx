import React, { useState } from "react";

import background1Video from "@assets/background/background1.mp4";
import pixelBoxLight from "@assets/pixel/pixel-box-sm-light.svg";
import pixelBoxDark from "@assets/pixel/pixel-box-sm-dark.svg";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
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

      <div className="relative z-10 flex flex-col gap-20">
        <div className="text-4xl">회원가입</div>

        <div className="flex w-[50%] flex-col gap-4">
          <div className="text-2xl">이름</div>
          <input
            className={`col-span-9 h-16 w-full rounded-2xl border px-4 focus:outline-none ${
              errors.id ? "border-red-500" : ""
            }`}
            placeholder="이름"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="text-2xl">휴대전화 번호</div>
          <input
            className={`col-span-9 h-16 w-full rounded-2xl border px-4 focus:outline-none ${
              errors.pw ? "border-red-500" : ""
            }`}
            placeholder="휴대전화 번호"
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
