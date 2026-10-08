import React from "react";

export default function AgentBreakdown() {
  return (
    <div className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 ">
      {/*Text */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">
          Live agent metrics breakdown
        </h3>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-4 pb-5 border-b-2 w-full border-b-light-grey">
          <h3 className="text-sm font-semibold text-black">Live agent </h3>
          <h3 className="text-sm font-semibold text-black">Closed tickets</h3>
          <h3 className="text-sm font-semibold text-black">CSAT</h3>
          <h3 className="text-sm font-semibold text-black">
            Avg. time to close
          </h3>
          <h3 className="text-sm font-semibold text-black">Utilisation</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
}
