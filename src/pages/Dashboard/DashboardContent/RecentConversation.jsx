/** @format */

import { getInitials } from "../../../utils/dashboardUtils";
import circle from "../../../assets/Dashboard/dashboard/circle.svg";
import { useContext } from "react";
import { DashboardContext } from "../../../contexts/Context";

export default function RecentConversation() {
  const list = [
    {
      initials: getInitials("Nora Williams"),
      name: "Nora Williams",
      message: "I need help with my order",
      channel: "Whatsapp",
      agent: "Josh",
      time: "10m ago",
      svg: circle,
    },
    {
      initials: getInitials("Nora Williams"),
      name: "Nora Williams",
      message: "I need help with my order",
      channel: "Website",
      agent: "Tomiwa",
      time: "10m ago",
      svg: circle,
    },
    {
      initials: getInitials("Sarah Johnson"),
      name: "Sarah Johnson",
      message: "Shipping internationally?",
      channel: "Website",
      agent: "Ben",
      time: "10m ago",
      svg: circle,
    },
    {
      initials: getInitials("Tomoko Sato"),
      name: "Tomoko Sato",
      message: "How do I reset my password?",
      channel: "Instagram",
      agent: "Josh",
      time: "10m ago",
      svg: circle,
    },
    {
      initials: getInitials("Tomoko Sato"),
      name: "Tomoko Sato",
      message: "Shipping internationally?",
      channel: "Instagram",
      agent: "Tolu",
      time: "10m ago",
      svg: circle,
    },
  ];

  const { recentConversation } = useContext(DashboardContext);
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
            {list.map((data, index) => (
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
                        {data.name}
                      </span>
                      {/*channel */}
                      <div className='border border-light-grey px-1.5 py-1 flex items-center rounded-sm'>
                        <span className='text-[8px] font-medium text-light-black'>
                          {data.channel}
                        </span>
                      </div>
                    </div>
                    <span className='text-xs font-normal text-grey'>
                      {data.message}
                    </span>
                  </div>
                </div>

                {/*Time and agent handling */}
                <div className='flex flex-col gap-y-2.5 items-end'>
                  <span className='text-[10px] font-light text-grey'>
                    {data.time}
                  </span>
                  <span className='text-[10px] font-normal text-grey flex items-center gap-x-1.5'>
                    <svg
                      width='6'
                      height='6'
                      viewBox='0 0 6 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='6' height='6' rx='3' fill='#59C0B6' />
                    </svg>
                    {data.agent} Handling
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
