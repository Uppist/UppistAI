import React from "react";
import CSAT from "./CSAT";
import SentimentTrend from "./SentimentTrend";
import LowCSAT from "./LowCSAT";
import SentimentByTopic from "./SentimentByTopic";
import CSATByAgent from "./CSATByAgent";

export default function CustomerSatisfaction({ list }) {
  return (
    <div className="flex flex-col  gap-y-10 mt-2 ">
      {/*first container */}
      <div className="grid grid-cols-4 gap-x-7 w-full">
        {list.map((data, index) => (
          <div
            className="border border-light-grey p-4 flex flex-col gap-y-2.5 rounded-lg"
            key={index}
          >
            <div className="flex items-center gap-x-2">
              <img src={data.svg} alt="" />
              <span className="text-xs font-normal text-grey">{data.text}</span>
            </div>
            <span className="text-xl font-semibold text-black">
              {data.number}
            </span>
            <p className="text-[10px] font-medium text-green">
              {data.increase}
            </p>
          </div>
        ))}
      </div>
      {/*second container */}
      <div className="grid grid-cols-2 gap-x-10">
        <CSAT />
        <SentimentTrend />
      </div>

      {/*third container */}
      <div className="grid grid-cols-3 gap-5 pb-5">
        <LowCSAT />
        <SentimentByTopic />
        <CSATByAgent />
      </div>
    </div>
  );
}
