/** @format */
// import { styled } from "@mui/material/styles";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ReportContext } from "../../../../contexts/Context";
import dayjs from "dayjs";

export default function SentimentTrend() {
  const { activeChannels } = useContext(ReportContext);

  // console.log(activeChannels);
  return (
    <div className="border border-light-grey rounded-2xl p-4 flex flex-col gap-y-4 h-90">
      {/*Text */}
      <div className="mt-2">
        <h3 className="text-base font-semibold text-black">Sentiment trend </h3>
      </div>{" "}
      {/*Legend */}
      <div className="flex justify-end gap-5 text-sm mt-[-35px]">
        <div className="flex items-center gap-2 text-[#667085] text-xs font-normal">
          <span className="w-3 h-3 rounded-xs bg-[#FF9200]" />
          <span>Positive</span>
        </div>

        <div className="flex items-center gap-2 text-[#667085] text-xs font-normal">
          <span className="w-3 h-3 rounded-xs bg-[#FFB966]" />
          <span>Neutral</span>
        </div>

        <div className="flex items-center gap-2 text-[#667085] text-xs font-normal">
          <span className="w-3 h-3 rounded-xs bg-[#FFE6C0]" />
          <span>Negative</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activeChannels.series}
          margin={{ top: 40, right: 10, left: -10, bottom: 5 }}
          barGap={12}
          barCategoryGap="15%"
        >
          <CartesianGrid
            // strokeDasharray="3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="label"
            tickFormatter={(value) => dayjs(value).format("MMMM D, YYYY")}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              border: "none",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          />

          <Bar
            dataKey="aiResolved"
            name="AI resolved"
            fill="#FF9200"
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="liveAgentsResolved"
            name="Live Agent resolved"
            fill=" rgba(255, 146, 0, 0.6)"
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey="fallback"
            fill="#FFE6C0"
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
