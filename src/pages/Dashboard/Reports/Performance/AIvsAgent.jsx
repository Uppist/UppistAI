import React from "react";

export default function AIvsAgent() {
  const list = [
    {
      order_name: "Closed tickets",
      ai: "236",
      live_agent: "20",
    },
    {
      order_name: "Resolution rate",
      ai: "84.4%",
      live_agent: "15.2%",
    },
    {
      order_name: "Avg. first response",
      ai: "1.2s",
      live_agent: "3m 42s",
    },
    {
      order_name: "Avg. time to close",
      ai: "1m 48s",
      live_agent: "14m 32s",
    },
    {
      order_name: "CSAT",
      ai: "4.8",
      live_agent: "4.5",
    },
  ];

  return (
    <div className="border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 h-fit">
      {/* Header */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">
          AI vs Live agent performance
        </h3>
      </div>

      {/* Table */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr_100px_100px] items-center pb-3 border-b border-light-grey">
          <h3 className="text-sm font-semibold text-black">Metric</h3>

          <h3 className="text-sm font-semibold text-black">AI</h3>

          <h3 className="text-sm font-semibold text-black">Live agents</h3>
        </div>

        {/*  Rows */}
        <div className="flex flex-col">
          {list.map((data) => (
            <div
              key={data.order_name}
              className="grid grid-cols-[1fr_100px_100px] items-center py-3 border-b border-light-grey"
            >
              <h3 className="text-sm font-medium text-light-black">
                {data.order_name}
              </h3>

              <h3 className="text-sm font-medium text-light-black">
                {data.ai}
              </h3>

              <h3 className="text-sm font-medium text-light-black">
                {data.live_agent}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
