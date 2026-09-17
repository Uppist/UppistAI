import active from "../../../../assets/Dashboard/dashboard/active.svg";
import ai from "../../../../assets/Dashboard/dashboard/ai.svg";
import time from "../../../../assets/Dashboard/dashboard/time.svg";
import score from "../../../../assets/Dashboard/dashboard/score.svg";
import { Link } from "react-router-dom";
export default function AgentDashboard() {
  const list = [
    {
      svg: active,
      text: "In queue",
      number: "5",
      increase: `↑ 18 in the last hour`,
    },
    {
      svg: ai,
      text: "Resolved today",
      number: 10,
      increase: `↑ 11% vs yesterday`,
    },

    {
      svg: time,
      text: "Avg. handle time",
      number: `9m 14s`,
      increase: `↑ faster by 0.5s`,
    },
    {
      svg: score,
      text: "Avg. CSAT score",
      number: `4.6/5`,
      increase: `↑ 0.2s vs yesterday`,
    },
  ];
  return (
    <div className="flex flex-col gap-y-6">
      {/*first Container */}
      <div className="grid grid-cols-4 gap-x-10 w-full">
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
      <div className="grid grid-cols-[60%_40%] gap-x-6 pr-10">
        <div className="border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 h-fit">
          <div className="flex items-center justify-between">
            <div className="mt-2">
              <h3 className="text-base font-semibold text-black">My queue</h3>
              <span className="text-xs font-normal text-grey">
                Results across all channels.
              </span>
            </div>

            <Link to="/channels/whatsapp">
              <button className="flex items-center gap-x-1 text-xs font-normal text-grey cursor-pointer">
                View all
                <svg
                  className="rotate-180"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6041 17.5837L5.58331 10.5837C5.49997 10.5003 5.44081 10.41 5.40581 10.3128C5.37081 10.2156 5.35358 10.1114 5.35414 10.0003C5.35414 9.88921 5.37164 9.78505 5.40664 9.68783C5.44164 9.5906 5.50053 9.50033 5.58331 9.41699L12.6041 2.39616C12.7986 2.20171 13.0416 2.10449 13.3333 2.10449C13.625 2.10449 13.875 2.20866 14.0833 2.41699C14.2916 2.62533 14.3958 2.86838 14.3958 3.14616C14.3958 3.42394 14.2916 3.66699 14.0833 3.87533L7.95831 10.0003L14.0833 16.1253C14.2778 16.3198 14.375 16.5595 14.375 16.8445C14.375 17.1295 14.2708 17.3759 14.0625 17.5837C13.8541 17.792 13.6111 17.8962 13.3333 17.8962C13.0555 17.8962 12.8125 17.792 12.6041 17.5837Z"
                    fill="#2B2B2B"
                    fillOpacity="0.8"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="border-b border-b-light-grey flex items-center justify-between pb-2.5">
              <div className="flex items-center gap-x-2.5">
                {/*Initials */}
                <div className="w-9 h-9 rounded-full bg-border2 flex items-center justify-center text-xs font-bold text-black">
                  <span>NW</span>
                </div>

                <div>
                  <div className="flex items-center gap-x-2">
                    {/*Name */}
                    <span className="text-sm font-medium text-blacks">
                      Nora Williams
                    </span>
                    {/*channel */}
                    <div className="border border-light-grey px-1.5 py-1 flex items-center rounded-sm">
                      <span className="text-[8px] font-medium text-light-black">
                        whatsapp
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-normal text-grey">
                    I need help with my order{" "}
                  </span>
                </div>
              </div>

              {/*Time and agent handling */}
              <div className="flex flex-col gap-y-2.5 items-end">
                <span className="text-[10px] font-light text-grey">10m</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 h-fit">
          <div className="flex flex-col gap-y-1.5">
            <h3 className="text-base font-semibold text-black">
              Ticket closures
            </h3>
            <p className="text-xs text-light-black">
              Closure performance for live agents
            </p>
          </div>
          <span className="text-base font-semibold text-black pb-7 border-b border-b-light-grey">
            Metric
          </span>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between text-sm text-grey border-b border-b-light-grey pb-5">
              <span className="font-medium">Ticket closed</span>
              <p className="font-normal">50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
