/** @format */

import { useContext, useState } from "react";
import Chats from "./Chats";
import Input from "./Input";
import { ChannelContext, UserContext } from "../../../../contexts/Context";
import { CircularProgress } from "@mui/material";
// import api from "../../../../api/axios";
// import Assign from "./Assign";

export default function SecondGrid({
  assignedUserId,
  selectedEmail,
  isLoadingConversation,
  type,
}) {
  const { eachConversations } = useContext(ChannelContext);
  const { userDetails } = useContext(UserContext);
  // console.log(filteredConversations);

  // const data = filteredConversations.map((data) => data.name);
  // console.log(data);

  // console.log(eachConversations);

  // function handOverAgent() {
  //   alert("Hello");
  // }

  function handleCloseChat() {
    console.log(userDetails);
  }

  const [dropdown, setDropdown] = useState(false);
  return (
    <div className='border border-light-grey flex flex-col h-full min-h-0'>
      {/*Details */}

      <div className='border-b border-b-light-grey p-4 px-6 flex items-center justify-between relative'>
        <div className='flex items-center gap-x-2.5'>
          {type !== "website" && (
            <svg
              width='36'
              height='36'
              viewBox='0 0 36 36'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='36' height='36' rx='18' fill='#F3F4F6' />
              <path
                d='M13.4813 20.4016C12.3023 21.1037 9.21114 22.5371 11.0939 24.3308C12.0136 25.207 13.0379 25.8337 14.3257 25.8337H21.6743C22.9621 25.8337 23.9864 25.207 24.9061 24.3308C26.7889 22.5371 23.6977 21.1037 22.5187 20.4016C19.754 18.7554 16.246 18.7554 13.4813 20.4016Z'
                stroke='#2B2B2B'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M21.75 12.917C21.75 14.9881 20.0711 16.667 18 16.667C15.9289 16.667 14.25 14.9881 14.25 12.917C14.25 10.8459 15.9289 9.16699 18 9.16699C20.0711 9.16699 21.75 10.8459 21.75 12.917Z'
                stroke='#2B2B2B'
                stroke-width='1.5'
              />
            </svg>
          )}
          <span className='bg-[#F7F7F7] rounded-full text-xs font-bold text-black w-9 h-9 flex items-center justify-center'></span>{" "}
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-medium text-black'>
              {selectedEmail || "select a conversation"}
            </span>{" "}
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
              AI agent Handling
            </p>
          </div>
          {/* <button className='button' onClick={handOverAgent}>
            Handoff to Agent
          </button> */}
        </div>
        <svg
          onClick={() => setDropdown(!dropdown)}
          width='16'
          className='cursor-pointer relative'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 11.3333C8.26522 11.3333 8.51957 11.4387 8.70711 11.6262C8.89464 11.8138 9 12.0681 9 12.3333C9 12.5985 8.89464 12.8529 8.70711 13.0404C8.51957 13.228 8.26522 13.3333 8 13.3333C7.73478 13.3333 7.48043 13.228 7.29289 13.0404C7.10536 12.8529 7 12.5985 7 12.3333C7 12.0681 7.10536 11.8138 7.29289 11.6262C7.48043 11.4387 7.73478 11.3333 8 11.3333ZM8 6.66667C8.26522 6.66667 8.51957 6.77202 8.70711 6.95956C8.89464 7.1471 9 7.40145 9 7.66667C9 7.93188 8.89464 8.18624 8.70711 8.37377C8.51957 8.56131 8.26522 8.66667 8 8.66667C7.73478 8.66667 7.48043 8.56131 7.29289 8.37377C7.10536 8.18624 7 7.93188 7 7.66667C7 7.40145 7.10536 7.1471 7.29289 6.95956C7.48043 6.77202 7.73478 6.66667 8 6.66667ZM8 2C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3C9 3.26522 8.89464 3.51957 8.70711 3.70711C8.51957 3.89464 8.26522 4 8 4C7.73478 4 7.48043 3.89464 7.29289 3.70711C7.10536 3.51957 7 3.26522 7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2Z'
            fill='#667085'
          />
        </svg>

        {dropdown && (
          <div className='flex flex-col gap-y-3 absolute top-14 p-4 right-5 bg-white drop-shadow-2xl w-40 rounded-sm'>
            {/*Close chat */}
            <div
              className='flex items-center gap-x-2 cursor-pointer'
              onClick={handleCloseChat}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1261_2949)'>
                  <path
                    d='M18.3334 9.99967C18.3334 5.3973 14.6025 1.66634 10.0001 1.66634C5.39771 1.66634 1.66675 5.3973 1.66675 9.99967C1.66675 14.602 5.39771 18.333 10.0001 18.333C14.6025 18.333 18.3334 14.602 18.3334 9.99967Z'
                    stroke='#2B2B2B'
                    strokeOpacity='0.8'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M6.66675 10.4167L8.75008 12.5L13.3334 7.5'
                    stroke='#2B2B2B'
                    strokeOpacity='0.8'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1261_2949'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>

              <span className='font-medium text-sm text-light-black'>
                Close Chat
              </span>
            </div>

            {/*Assign agent */}
            <div>
              <div className='flex relative items-center gap-x-2 cursor-pointer'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_1721_13700)'>
                    <path
                      d='M3.1574 7.53123C2.56792 7.85032 1.02232 8.50188 1.96369 9.31721C2.42354 9.71548 2.9357 10.0003 3.57961 10.0003H7.25389C7.89779 10.0003 8.40995 9.71548 8.86981 9.31721C9.81118 8.50188 8.26558 7.85032 7.67609 7.53123C6.29375 6.78295 4.53974 6.78295 3.1574 7.53123Z'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                    />
                    <path
                      d='M7.29175 3.56093C7.29175 4.60693 6.45228 5.45487 5.41675 5.45487C4.38121 5.45487 3.54175 4.60693 3.54175 3.56093C3.54175 2.51494 4.38121 1.66699 5.41675 1.66699C6.45228 1.66699 7.29175 2.51494 7.29175 3.56093Z'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                    />
                    <path
                      d='M3.33325 12.5C3.33325 15.2643 5.56897 17.5 8.33325 17.5L7.61897 16.0714'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.6667 7.5C16.6667 4.73572 14.431 2.5 11.6667 2.5L12.381 3.92857'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.3239 15.8642C11.7344 16.1833 10.1888 16.8349 11.1302 17.6502C11.59 18.0485 12.1022 18.3333 12.7461 18.3333H16.4204C17.0643 18.3333 17.5765 18.0485 18.0363 17.6502C18.9777 16.8349 17.4321 16.1833 16.8426 15.8642C15.4603 15.116 13.7062 15.116 12.3239 15.8642Z'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                    />
                    <path
                      d='M16.4583 11.8939C16.4583 12.9399 15.6188 13.7879 14.5833 13.7879C13.5477 13.7879 12.7083 12.9399 12.7083 11.8939C12.7083 10.8479 13.5477 10 14.5833 10C15.6188 10 16.4583 10.8479 16.4583 11.8939Z'
                      stroke='#2B2B2B'
                      strokeOpacity='0.8'
                      strokeWidth='1.5'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1721_13700'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='font-medium text-sm text-light-black'>
                  Assign
                </span>
              </div>

              {/* {assignAgent && <Assign setAssignAgent={setAssignAgent} />} */}
            </div>
          </div>
        )}
      </div>

      {isLoadingConversation ? (
        <div className='flex items-center justify-center h-full'>
          <CircularProgress size={24} sx={{ color: "#FF9200" }} />
        </div>
      ) : eachConversations?.length === 0 ? (
        <span className='text-center flex items-center justify-center h-full text-grey'>
          Select a conversation
        </span>
      ) : (
        <Chats
          eachConversations={eachConversations}
          assignedUserId={assignedUserId}
        />
      )}

      {(userDetails?.user?.role === "agent" ||
        userDetails?.user?.role === "admin") && (
        <div className='mt-auto border-t border-light-grey p-3'>
          <Input />
        </div>
      )}
    </div>
  );
}
