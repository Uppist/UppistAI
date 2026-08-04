/** @format */
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useContext } from "react";
import { DashboardContext } from "../../../contexts/Context";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FF9200",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

export default function ActiveConversation() {
  const list = [
    {
      channel: "WhatsApp Business",
      value: "2140",
    },
    {
      channel: "Website ",
      value: "1480",
    },
    {
      channel: "Email ",
      value: "920",
    },
    {
      channel: "Facebook ",
      value: "680",
    },
    {
      channel: "Instagram",
      value: "540",
    },
    {
      channel: "X",
      value: "210",
    },
  ];

  const { activeChannels } = useContext(DashboardContext);
  return (
    <>
      {activeChannels.length > 0 && (
        <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 '>
          {/*Text */}
          <div className='mt-2'>
            <h3 className='text-base font-semibold text-black'>
              Active conversations by channel{" "}
            </h3>
            <span className='text-xs font-normal text-grey'>
              Results across all channels.{" "}
            </span>
          </div>{" "}
          <div className='flex flex-col gap-y-6'>
            {list.map((data, index) => {
              const maxValue = Math.max(
                ...list.map((item) => Number(item.value)),
              );
              return (
                <div className='flex flex-col gap-y-1.5' key={index}>
                  <div className='flex items-center justify-between text-grey text-sm'>
                    <span className='font-medium'>{data.channel}</span>
                    <p className='font-normal'>{data.value}</p>
                  </div>
                  <BorderLinearProgress
                    variant='determinate'
                    value={(Number(data.value) / maxValue) * 100}
                    aria-label='Export data'
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
