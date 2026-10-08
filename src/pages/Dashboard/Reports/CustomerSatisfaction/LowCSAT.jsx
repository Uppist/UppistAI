import React from "react";

export default function LowCSAT() {
  return (
    <div className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 ">
      {/*Text */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">
          Low CSAT alert log (1-2 stars)
        </h3>
        <span className="text-xs font-normal text-grey">
          Results across all channels.{" "}
        </span>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="border-b border-b-light-grey flex items-center justify-between pb-2.5">
          <div className="flex items-center gap-x-2.5">
            {/*Initials */}
            <div className="w-9 h-3 border border-light-grey px-4 py-3 rounded-sm flex items-center justify-center text-xs font-bold text-black">
              <span>2</span>
            </div>

            <div className="w-full">
              <div className="flex items-center gap-x-2">
                {/*Name */}
                <span className="text-sm font-medium text-blacks">
                  Nora Williams
                </span>
                {/*channel */}
                <div className="border border-light-grey px-1.5 py-1 flex items-center rounded-sm">
                  <span className="text-[8px] font-medium text-light-black capitalize">
                    whatsapp
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-normal text-grey">
                  29 Interactions{" "}
                </span>
              </div>
            </div>
          </div>

          {/*Time and agent handling */}
          <div className="flex flex-col gap-y-2.5 items-end">
            <span className="text-[10px] font-light text-grey">10m</span>

            <span className="text-[10px] font-normal text-grey">
              John Handled{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
