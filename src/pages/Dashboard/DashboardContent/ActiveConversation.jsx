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
  const { activeChannels } = useContext(DashboardContext);
  return (
    <>
      {activeChannels.length > 0 && (
        <div className='border border-light-grey h-fit rounded-2xl p-4 flex flex-col gap-y-9 '>
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
            {activeChannels.map((data, index) => {
              const maxValue = Math.max(
                ...activeChannels.map((item) => Number(item.count)),
              );
              return (
                <div className='flex flex-col gap-y-1.5' key={index}>
                  <div className='flex items-center justify-between text-grey text-sm'>
                    <span className='font-medium'>{data.label}</span>
                    <p className='font-normal'>{data.count}</p>
                  </div>
                  <BorderLinearProgress
                    variant='determinate'
                    value={(Number(data.count) / maxValue) * 100}
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
