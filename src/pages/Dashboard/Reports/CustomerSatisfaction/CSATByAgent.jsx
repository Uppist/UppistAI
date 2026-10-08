import React from "react";

export default function CSATByAgent() {
  return (
    <div className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 ">
      {/*Text */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">
          CSAT by Live agent
        </h3>
        <span className="text-xs font-normal text-grey">
          Results across all channels.{" "}
        </span>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-[1fr_150px_100px] gap-2 items-center pb-3 border-b border-light-grey">
          <h3 className="text-sm font-semibold text-black">Name</h3>
          <h3 className="text-sm font-semibold text-black">Convos resolved</h3>
          <h3 className="text-sm font-semibold text-black">CSAT Score</h3>
        </div>

        <div className="grid grid-cols-[1fr_150px_100px] gap-2 items-center pb-3 border-b border-light-grey">
          <h3 className="text-sm font-medium text-light-black">Daniel Smith</h3>
          <h3 className="text-sm font-medium text-light-black">236</h3>
          <h3 className="text-sm font-medium text-light-black">4.5</h3>
        </div>
      </div>
    </div>
  );
}
