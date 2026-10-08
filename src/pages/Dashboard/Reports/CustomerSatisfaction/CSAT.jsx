import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function CSAT() {
  const data = [
    { month: "Mon", sales: 4.4, profit: 2400 },
    { month: "Tue", sales: 4.3, profit: 1398 },
    { month: "Wed", sales: 4.7, profit: 9800 },
    { month: "Thu", sales: 4.5, profit: 3908 },
    { month: "Fri", sales: 4.6, profit: 4800 },
    { month: "Sat", sales: 4.4, profit: 3800 },
    { month: "Sun", sales: 4.7, profit: 4300 },
  ];
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 pr-0"
    >
      <label htmlFor="" className="mt-2 text-base font-semibold text-black">
        CSAT Trend
      </label>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Grid lines in the background */}
          <CartesianGrid strokeDasharray="6 6" />

          {/* X and Y Axes mapping to keys in the data array */}
          <XAxis dataKey="month" />
          <YAxis strokeWidth={1} />

          {/* Interactive hover tooltip */}
          <Tooltip contentStyle={{ border: "none" }} />

          {/* Area definitions. type="monotone" creates a smooth curved line */}
          <Area
            type="monotone"
            dataKey="sales"
            strokeWidth={4}
            stroke="#FF9200"
            fill="#FF9200"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
