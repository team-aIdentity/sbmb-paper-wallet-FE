import React from "react";

import sbmb1 from "@assets/pictures/sbmb_1.svg";
import sbmb2 from "@assets/pictures/sbmb_2.svg";
import sbmb3 from "@assets/pictures/sbmb_3.svg";
import sbmb4 from "@assets/pictures/sbmb_4.svg";

const list = [
  {
    img: sbmb1,
    title: "생태계 확장",
    content:
      "생태계 확장에 대한 설명입니다. 생태계 확장에 대한 설명입니다. 생태계 확장에 대한 설명입니다. 생태계 확장에 대한 설명입니다. 생태계 확장에 대한 설명입니다.",
  },
  {
    img: sbmb2,
    title: "이더리움 적극 활용",
    content:
      "이더리움 적극 활용에 대한 설명입니다. 이더리움 적극 활용에 대한 설명입니다. 이더리움 적극 활용에 대한 설명입니다. 이더리움 적극 활용에 대한 설명입니다.",
  },
  {
    img: sbmb3,
    title: "명확한 보상 체계",
    content:
      "명확한 보상 체계에 대한 설명입니다. 명확한 보상 체계에 대한 설명입니다. 명확한 보상 체계에 대한 설명입니다. 명확한 보상 체계에 대한 설명입니다.",
  },
  {
    img: sbmb4,
    title: "콘솔 획득의 유일한 방법",
    content:
      "콘솔 획득의 유일한 방법에 대한 설명입니다. 콘솔 획득의 유일한 방법에 대한 설명입니다. 콘솔 획득의 유일한 방법에 대한 설명입니다. 콘솔 획득의 유일한 방법에 대한 설명입니다.",
  },
];

const SBMBInfo = () => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden px-10 py-20 md:px-20 2xl:px-30">
      <div className="flex flex-col gap-25">
        <div className="text-center">
          <h1 className="xl:5xl text-3xl font-bold md:text-4xl 2xl:text-6xl">
            SBMB가 왜 필요할까요?
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {list.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 md:flex-row">
              <img src={item.img} className="md:w-50" />
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-xl font-bold">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBMBInfo;
