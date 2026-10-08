/** @format */
import { PieChart } from "@mui/x-charts/PieChart";
import star from "../../../../assets/Dashboard/dashboard/star.svg";
const data = [
  { label: `AI deflection`, value: 52, color: "#FF9200" },
  { label: "Faster handle times", value: 24, color: "#FFAE40" },
  { label: "Co-pilot suggestions", value: 14, color: "#FFE6C0" },
  {
    label: "Context lookup savings",
    value: 10,
    color: "rgba(255, 146, 0, 0.1)",
  },
];

export default function ProductivityGain() {
  return (
    <div className="border border-light-grey rounded-2xl p-4 flex h-fit flex-col gap-y-4 ">
      <div>
        <label htmlFor="" className="text-base font-semibold text-black">
          Productivity gain from AI co-pilot
        </label>

        <p className="text-xs font-normal text-grey">
          Share of 1,286 saved hours
        </p>
      </div>
      <div className="flex items-center gap-x-1">
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

        <div className="flex flex-col gap-y-3 mt-1">
          {data.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-x-2 min-w-0">
                <span
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-xs text-light-black truncate">
                  {item.label}
                </span>
              </div>

              <span className="text-xs font-normal text-light-black ml-4 shrink-0">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
