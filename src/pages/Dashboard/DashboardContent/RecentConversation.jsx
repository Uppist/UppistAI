/** @format */

import { useContext } from "react";
import { DashboardContext } from "../../../contexts/Context";
import { formatTime } from "../../../utils/Time";

export default function RecentConversation() {
  const { recentConversation } = useContext(DashboardContext);
  console.log(recentConversation);
  return (
    <>
      {recentConversation.length > 0 && (
        <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 '>
          <div className='mt-2'>
            <h3 className='text-base font-semibold text-black'>
              Recent conversations by channel
            </h3>
            <span className='text-xs font-normal text-grey'>
              Results across all channels.
            </span>
          </div>

          {/*List of converstions and customer's texts */}
          <div className='flex flex-col gap-y-5'>
            {recentConversation.slice(0, 5).map((data, index) => (
              <div
                className='border-b border-b-light-grey flex items-center justify-between pb-2.5'
                key={index}
              >
                <div className='flex items-center gap-x-2.5'>
                  {/*Initials */}
                  <div className='w-9 h-9 rounded-full bg-border2 flex items-center justify-center text-xs font-bold text-black'>
                    <span>{data.initials}</span>
                  </div>

                  <div>
                    <div className='flex items-center gap-x-2'>
                      {/*Name */}
                      <span className='text-sm font-medium text-blacks'>
                        {data.name || data.identifier}
                      </span>
                      {/*channel */}
                      <div className='border border-light-grey px-1.5 py-1 flex items-center rounded-sm'>
                        <span className='text-[8px] font-medium text-light-black'>
                          {data.channel}
                        </span>
                      </div>
                    </div>
                    <span className='text-xs font-normal text-grey'>
                      {data.snippet}
                    </span>
                  </div>
                </div>

                {/*Time and agent handling */}
                <div className='flex flex-col gap-y-2.5 items-end'>
                  <span className='text-[10px] font-light text-grey'>
                    {formatTime(data.lastMessageAt)}
                  </span>
                  <span className='text-[10px] font-normal text-grey flex items-center gap-x-1.5'>
                    {data?.assignedAgent?.name && (
                      <>
                        <svg
                          width='6'
                          height='6'
                          viewBox='0 0 6 6'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='6' height='6' rx='3' fill='#59C0B6' />
                        </svg>
                        {data?.assignedAgent?.name || ""} Handling
                      </>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
