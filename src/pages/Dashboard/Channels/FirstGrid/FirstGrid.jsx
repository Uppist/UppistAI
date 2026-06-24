/** @format */

import { useState } from "react";

export default function FirstGrid({ title }) {
  const [active, setActive] = useState("All");
  return (
    <div className='border border-light-grey'>
      <div className='flex flex-col gap-y-3.5 p-4 px-6 '>
        <h3 className='text-2xl font-semibold text-black'>{title}</h3>
        <input
          type='search'
          className='input'
          name=''
          placeholder='Search conversations'
          id=''
        />
        {/*All chats */}
        <div className='flex items-center gap-x-2 mt-2'>
          <span
            className={
              active === "All"
                ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
            }
            onClick={() => setActive("All")}
          >
            All
          </span>
          <span
            className={
              active === "closed"
                ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
            }
            onClick={() => setActive("closed")}
          >
            Closed
          </span>
          <span
            className={
              active === "josh"
                ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
            }
            onClick={() => setActive("josh")}
          >
            Josh
          </span>
          <span
            className={
              active === "ben"
                ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
            }
            onClick={() => setActive("ben")}
          >
            Ben
          </span>
        </div>
      </div>

      {/*Customer details */}
      <div className='h-110 overflow-scroll no-scrollbar'>
        <div className='flex items-center justify-between cursor-pointer p-4 px-6 border-b border-b-light-grey hover:bg-[#FCFCFC] '>
          <div className='flex items-center gap-x-2'>
            <span className='bg-[#F7F7F7] rounded-full text-xs font-bold text-black w-9 h-9 flex items-center justify-center'>
              NW
            </span>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-1'>
                <span className='text-sm font-medium text-black'>
                  Nora Williams
                </span>
                <span className='text-xs font-normal text-grey'>
                  I need help with my order
                </span>
              </div>
              <p className='flex items-center gap-x-1 text-[10px] font-normal text-grey'>
                <svg
                  width='6'
                  height='6'
                  viewBox='0 0 6 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='6' height='6' rx='3' fill='#59C0B6' />
                </svg>
                Josh Handling
              </p>
            </div>
          </div>
          <span className='text-[10px] font-light text-grey'>6m ago</span>
        </div>
      </div>
    </div>
  );
}
