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
import { ReportContext } from "../../../contexts/Context";
import dayjs from "dayjs";

export default function Conversation() {
  const { activeChannels } = useContext(ReportContext);

  console.log(activeChannels);
  return (
    <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-4 h-90'>
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
          data={activeChannels.series}
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
            dataKey='label'
            tickFormatter={(value) => dayjs(value).format("MMMM D, YYYY")}
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
            dataKey='aiResolved'
            name='AI resolved'
            fill='#FF9200'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey='liveAgentsResolved'
            name='Live Agent resolved'
            fill='#FFE6C0'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
          <Bar
            dataKey='fallback'
            fill='rgba(255, 146, 0, 0.6)'
            radius={[6, 6, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
