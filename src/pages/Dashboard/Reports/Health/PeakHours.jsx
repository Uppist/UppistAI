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
export default function PeakHours() {
  const data = [
    { month: "Jan", sales: 4000, profit: 2400 },
    { month: "Feb", sales: 3000, profit: 1398 },
    { month: "Mar", sales: 2000, profit: 9800 },
    { month: "Apr", sales: 2780, profit: 3908 },
    { month: "May", sales: 1890, profit: 4800 },
    { month: "Jun", sales: 2390, profit: 3800 },
    { month: "Jul", sales: 3490, profit: 4300 },
  ];
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 pr-0"
    >
      <label htmlFor="" className="mt-2 text-base font-semibold text-black">
        Peak Hours
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
