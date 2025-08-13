import React, { useState } from "react";

const OverView = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [circulatingAmount, setCirculatingAmount] = useState<number>(0);
  const [requestedAmount, setRequestedAmount] = useState<number>(0);

  const list = [
    {
      title: "SBMB 총 발행량",
      amount: totalAmount,
      symbol: "SBMB",
    },
    {
      title: "현재 유통량",
      amount: circulatingAmount,
      symbol: "SBMB",
    },
    {
      title: "BMB 신청량",
      amount: requestedAmount,
      symbol: "BMB",
    },
  ];

  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 xl:px-25 2xl:px-30">
      <div className="flex flex-col gap-25">
        <div className="text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            SBMB 발행 현황
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-20 xl:flex xl:flex-row xl:gap-30 2xl:gap-40">
          {list.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-10 ${
                index === 2
                  ? "md:col-span-2 md:col-start-1 md:justify-self-center xl:col-span-1 xl:justify-self-auto"
                  : ""
              }`}
            >
              {" "}
              <div className="h-50 w-50 rounded-full bg-[#53AC9E]" />
              <div className="gap flex flex-col">
                <div className="text-3xl font-bold">{item.title}</div>
                <div className="flex justify-center gap-1 text-xl font-semibold">
                  <span className="text-[#53AC9E]">{item.amount}</span>
                  {item.symbol}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverView;
