/** @format */
import { PieChart } from "@mui/x-charts/PieChart";
import star from "../../../assets/Dashboard/dashboard/star.svg";
const data = [
  { label: `5 0%`, value: 400, color: "#FF9200" },
  { label: "4 0%", value: 300, color: "#FFAE40" },
  { label: "3 0%", value: 200, color: "#FFE6C0" },
  { label: "2 0%", value: 100, color: "rgba(255, 146, 0, 0.1)" },
];

export default function Distribution() {
  return (
    <div className='border border-light-grey rounded-2xl p-4 flex h-fit flex-col gap-y-4 '>
      <label htmlFor='' className='text-base font-semibold text-black'>
        CSAT Distribution
      </label>
      <PieChart
        width={300}
        height={300}
        series={[
          {
            id: "csat",
            data: [data[0]],
            cx: "50%",
            cy: "50%",
            innerRadius: 65,
            outerRadius: 115,
            startAngle: 180,
            endAngle: 0,
            cornerRadius: 16,
          },
          {
            id: "resolved",
            data: [data[1]],
            cx: "50%",
            cy: "50%",
            innerRadius: 65,
            outerRadius: 115,
            startAngle: 130,
            endAngle: 270,
            cornerRadius: 16,
          },
          {
            id: "data",
            data: [data[2]],
            cx: "50%",
            cy: "50%",
            innerRadius: 65,
            outerRadius: 115,
            startAngle: 330,
            endAngle: 240,
            cornerRadius: 16,
          },
          {
            id: "background",
            data: [data[3]],

            cx: "50%",
            cy: "50%",
            innerRadius: 65,
            outerRadius: 115,
            startAngle: -40,
            endAngle: 0,
            cornerRadius: 16,
          },
        ]}
        hideLegend
      />

      <div className='flex items-start  gap-6 mt-4'>
        {data.map((item) => (
          <div key={item.id} className='flex items-center gap-2'>
            <div className='flex items-center gap-x-1'>
              <span
                className='w-3 h-3 rounded-xs'
                style={{ backgroundColor: item.color }}
              />
              <img src={star} alt='' />
            </div>
            <span className='text-[10px] text-light-black'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
