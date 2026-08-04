/** @format */
// import { styled } from "@mui/material/styles";
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

const data = [
  { month: "Jan", "AI resolved": 18, "Live Agent resolved": 12, Fallback: 9 },
  { month: "Feb", "AI resolved": 22, "Live Agent resolved": 16, Fallback: 11 },
  { month: "Mar", "AI resolved": 20, "Live Agent resolved": 14, Fallback: 10 },
  { month: "Apr", "AI resolved": 25, "Live Agent resolved": 18, Fallback: 13 },
  { month: "May", "AI resolved": 30, "Live Agent resolved": 21, Fallback: 15 },
  { month: "Jun", "AI resolved": 35, "Live Agent resolved": 24, Fallback: 17 },
];

export default function Conversation() {
  return (
    <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-4 h-80'>
      {/*Text */}
      <div className='mt-2'>
        <h3 className='text-base font-semibold text-black'>
          Active conversations by channel{" "}
        </h3>
        {/* <span className='text-xs font-normal text-grey'>
          Results across all channels.{" "}
        </span> */}
      </div>{" "}
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
          barGap={12}
          barCategoryGap='25%'
        >
          <CartesianGrid
            // strokeDasharray='3'
            vertical={false}
            stroke='#E5E7EB'
          />
          <XAxis
            dataKey='month'
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Legend
            verticalAlign='top'
            align='right'
            wrapperStyle={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontSize: "12px",
              marginTop: "-17px",
            }}
          />

          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Bar
            dataKey='AI resolved'
            fill='#FF9200'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey='Live Agent resolved'
            fill='#FFE6C0'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey='Fallback'
            fill='rgba(255, 146, 0, 0.1)'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
