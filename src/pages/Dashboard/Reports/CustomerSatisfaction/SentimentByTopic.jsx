import React from "react";

export default function SentimentByTopic() {
  return (
    <div className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 ">
      {/*Text */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">
          Sentiment by topic
        </h3>
        <span className="text-xs font-normal text-grey">
          Where customers feel best and worst{" "}
        </span>
      </div>

      {/* */}
      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-[1fr_70px_70px_70px] gap-3 items-center pb-3 border-b border-light-grey">
          <h3 className="text-sm font-semibold text-black">Topic</h3>
          <h3 className="text-sm font-semibold text-black">Positive</h3>
          <h3 className="text-sm font-semibold text-black">Neutral</h3>
          <h3 className="text-sm font-semibold text-black">Negative</h3>
        </div>

        <div className="grid grid-cols-[1fr_70px_70px_70px] gap-3 items-center pb-3 border-b border-light-grey">
          <h3 className="text-sm font-medium text-light-black">Order Status</h3>
          <h3 className="text-sm font-medium text-light-black">74%</h3>
          <h3 className="text-sm font-medium text-light-black">18%</h3>
          <h3 className="text-sm font-medium text-light-black">8%</h3>
        </div>
      </div>
    </div>
  );
}
