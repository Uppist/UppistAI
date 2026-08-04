/** @format */

import { useState } from "react";
import CreateUser from "./CreateUser";
import UserContainer from "./UserContainer";
import CreateUserProvider from "../../../../../contexts/Settings/CreateUserProvider";

export default function Sub() {
  const [userClick, setUserClick] = useState(false);
  function Create() {
    setUserClick(true);
  }
  return (
    <>
      <CreateUserProvider>
        <div className='mt-10 flex flex-col gap-y-9.5'>
          <div className='flex items-center justify-between'>
            {/*Heading */}
            <div className='flex flex-col gap-y-0.5'>
              <h3 className='text-black font-semibold text-base'>Sub users</h3>
              <span className='text-xs font-normal text-grey'>
                Invite team members to collaborate{" "}
              </span>
            </div>

            {/*Details */}
            <div className='flex relative items-center gap-x-5'>
              <input
                type='search'
                className='input'
                placeholder='Search'
                name=''
                id=''
              />

              {/*dropdown for all time */}
              <div className='flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.6665 0.833008C7.12674 0.833008 7.49984 1.2061 7.49984 1.66634V2.49967H12.4998V1.66634C12.4998 1.2061 12.8729 0.833008 13.3332 0.833008C13.7934 0.833008 14.1665 1.2061 14.1665 1.66634V2.49967H14.9998C16.8408 2.49967 18.3332 3.99206 18.3332 5.83301V14.9997C18.3332 16.8406 16.8408 18.333 14.9998 18.333H4.99984C3.15889 18.333 1.6665 16.8406 1.6665 14.9997V5.83301C1.6665 3.99206 3.15889 2.49967 4.99984 2.49967H5.83317V1.66634C5.83317 1.2061 6.20627 0.833008 6.6665 0.833008ZM12.4998 4.16634C12.4998 4.62658 12.8729 4.99967 13.3332 4.99967C13.7934 4.99967 14.1665 4.62658 14.1665 4.16634H14.9998C15.9203 4.16634 16.6665 4.91253 16.6665 5.83301V6.24967H3.33317V5.83301C3.33317 4.91253 4.07936 4.16634 4.99984 4.16634H5.83317C5.83317 4.62658 6.20627 4.99967 6.6665 4.99967C7.12674 4.99967 7.49984 4.62658 7.49984 4.16634H12.4998ZM16.6665 7.91634H3.33317V14.9997C3.33317 15.9201 4.07936 16.6663 4.99984 16.6663H14.9998C15.9203 16.6663 16.6665 15.9201 16.6665 14.9997V7.91634Z'
                    fill='#2B2B2B'
                    fillOpacity='0.8'
                  />
                </svg>
                <span className='text-light-black text-sm font-semibold'>
                  All time{" "}
                </span>
                <svg
                  cursor={"pointer"}
                  width='24'
                  height='24'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M4 6L8 10L12 6'
                      stroke='currentColor'
                      strokeWidth='1.33333'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </div>

              {/*Create agent button */}
              <button
                className='flex items-center gap-x-2 rounded-lg bg-bg border-none text-white text-sm font-semibold py-2.5 px-3 cursor-pointer hover:opacity-50'
                onClick={Create}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.8332 7.50033C10.8332 7.04009 10.4601 6.66699 9.99984 6.66699C9.5396 6.66699 9.1665 7.04009 9.1665 7.50033V9.16699H7.49984C7.0396 9.16699 6.6665 9.54009 6.6665 10.0003C6.6665 10.4606 7.0396 10.8337 7.49984 10.8337H9.1665V12.5003C9.1665 12.9606 9.5396 13.3337 9.99984 13.3337C10.4601 13.3337 10.8332 12.9606 10.8332 12.5003V10.8337H12.4998C12.9601 10.8337 13.3332 10.4606 13.3332 10.0003C13.3332 9.54009 12.9601 9.16699 12.4998 9.16699H10.8332V7.50033Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699ZM3.33317 10.0003C3.33317 6.31843 6.31794 3.33366 9.99984 3.33366C13.6817 3.33366 16.6665 6.31843 16.6665 10.0003C16.6665 13.6822 13.6817 16.667 9.99984 16.667C6.31794 16.667 3.33317 13.6822 3.33317 10.0003Z'
                    fill='white'
                  />
                </svg>
                Create User
              </button>
            </div>

            {userClick && <CreateUser onClose={() => setUserClick(false)} />}
          </div>

          <UserContainer />
        </div>
      </CreateUserProvider>
    </>
  );
}
