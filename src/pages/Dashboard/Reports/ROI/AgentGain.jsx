import React from "react";

export default function AgentGain() {
  const list = [
    {
      metric: "Conversations per agent hour",
      value: "8.3",
    },
    {
      metric: "Avg. handle time",
      value: "14m 32s",
    },
    {
      metric: "First-contact resolution",
      value: "88%",
    },
    {
      metric: "Agent hours freed by AI",
      value: "1,268 hrs",
    },
  ];
  return (
    <div className="border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 h-fit">
      <div className="flex flex-col gap-y-1.5">
        <h3 className="text-base font-semibold text-black">
          Live agent productivity gains
        </h3>
      </div>
      <span className="text-base font-semibold text-black pb-7 border-b border-b-light-grey">
        Metric
      </span>
      <div className="flex flex-col gap-y-4">
        {list.map((data) => (
          <div className="flex items-center justify-between text-sm text-grey border-b border-b-light-grey pb-5">
            <span className="font-medium">{data.metric}</span>
            <p className="font-normal text-justify">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
