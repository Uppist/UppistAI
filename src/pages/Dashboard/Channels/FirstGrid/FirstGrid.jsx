/** @format */

import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/Context";
import { getInitials } from "../../../../utils/dashboardUtils";

export default function FirstGrid({
  title,
  filteredConversations,
  handleEmailClick,
  type,
}) {
  const [active, setActive] = useState("All");

  const { userDetails } = useContext(UserContext);

  const conversationsToDisplay =
    userDetails?.user?.role === "agent"
      ? filteredConversations.filter(
          (conversation) => conversation.assignedUserId === userDetails.user.id,
        )
      : filteredConversations;

  console.log(filteredConversations);

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

          {type === "chats" && (
            <>
              <span
                className={
                  active === "closed"
                    ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                    : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
                }
                onClick={() => setActive("instagram")}
              >
                Instagram
              </span>
              <span
                className={
                  active === "closed"
                    ? "bg-pink text-bg py-1.5 px-2.5 rounded-sm text-[8px] font-medium cursor-pointer"
                    : "py-1.5 px-2.5 rounded-sm text-[8px] font-medium text-grey border border-light-grey cursor-pointer"
                }
                onClick={() => setActive("x")}
              >
                X
              </span>
            </>
          )}
          {/* <span
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
          </span> */}
        </div>
      </div>
      {/*Customer details */}
      {conversationsToDisplay.length === 0 ? (
        <span className='text-black p-4 text-center w-full mt-40 flex items-center justify-center'>
          No message yet
        </span>
      ) : (
        <div className='h-110 overflow-scroll no-scrollbar'>
          {conversationsToDisplay.map((data) => (
            <div
              className='flex items-center justify-between cursor-pointer p-4 px-6 border-b border-b-light-grey hover:bg-[#FCFCFC] '
              onClick={() => handleEmailClick(data)}
            >
              <div className='flex items-center gap-x-2'>
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
                <span className='bg-[#F7F7F7] rounded-full text-xs font-bold text-black w-9 h-9 flex items-center justify-center'>
                  {getInitials(data.name)}
                </span>
                <div className='flex flex-col gap-y-2'>
                  <div className='flex flex-col gap-y-1'>
                    <span className='text-sm font-medium text-black'>
                      {data.contactIdentifier}
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
                    AI agent Handling
                  </p>
                </div>
              </div>
              {/* <span className='text-[10px] font-light text-grey'>6m ago</span> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
