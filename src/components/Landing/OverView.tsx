import React from "react";

import background7 from "@assets/background/background7.svg";
import overView1 from "@assets/pixel/over-view-1.svg";
import overView2 from "@assets/pixel/over-view-2.svg";
import overView3 from "@assets/pixel/over-view-3.svg";

// TODO : 링크 삽입

const OverView = () => {
  return (
    <div
      className="h-auto w-full p-30 text-white"
      style={{
        backgroundImage: `url(${background7})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
      }}
    >
      <div className="flex flex-col items-center gap-60">
        <div className="text-6xl">Over View ( 현황 수치 공개 )</div>
        <div className="flex gap-16 text-center">
          <div className="flex flex-col items-center gap-4">
            <img src={overView1} className="h-60 w-60" />
            <div className="text-3xl">SBMB 총 발행량</div>
            <div className="text-2xl">
              0 <span className="text-[#43D084]">SBMB</span>
            </div>
            {/* <div className="flex cursor-pointer justify-end gap-2 text-xl">
              → <span className="border-b-1 hover:scale-102">자세히보기</span>
            </div> */}
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={overView2} className="h-60 w-60" />
            <div className="text-3xl">현재 유통량</div>
            <div className="text-2xl">
              0 <span className="text-[#43D084]">SBMB</span>
            </div>
            {/* <div className="flex cursor-pointer justify-end gap-2 text-xl">
              → <span className="border-b-1 hover:scale-102">자세히보기</span>
            </div> */}
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={overView3} className="h-60 w-60" />
            <div className="text-3xl">BMB 신청량 (보관량)</div>
            <div className="text-2xl">
              0 <span className="text-[#43D084]">BMB</span>
            </div>
            {/* <div className="flex cursor-pointer justify-end gap-2 text-xl">
              → <span className="border-b-1 hover:scale-102">자세히보기</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
