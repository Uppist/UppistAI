/** @format */

import { formatTime } from "../../../../utils/Time";

export default function Chats({ eachConversations, assignedUserId }) {
  console.log(eachConversations, "eachConversations");
  return (
    <div className='p-4 px-6 flex flex-col gap-y-2 h-130 overflow-scroll no-scrollbar'>
      {/*Customer side */}
      {eachConversations?.map((conversation, index) => {
        const isAgentMessage = conversation?.role === "agent";

        // Find the first agent message
        const firstAgentMessageIndex = eachConversations.findIndex(
          (message) => message?.role === "agent",
        );

        const showAgentJoinedMessage =
          assignedUserId && isAgentMessage && index === firstAgentMessageIndex;

        return (
          <div key={conversation?.id || conversation?.created_at}>
            {/*Live agent joined conversation */}
            {showAgentJoinedMessage && (
              <div className='flex items-center justify-center my-3'>
                <div className='flex items-center gap-x-2 w-full'>
                  <div className='h-px bg-light-grey flex-1'></div>

                  <span className='text-[10px] text-grey whitespace-nowrap'>
                    Live agent joined the conversation
                  </span>

                  <div className='h-px bg-light-grey flex-1'></div>
                </div>
              </div>
            )}
            {conversation?.role === "assistant" ||
            conversation?.role === "agent" ? (
              //bot conversation
              <div className='flex items-start gap-x-2 justify-end'>
                <div className='flex flex-col gap-y-1'>
                  <span className='px-4 py-2.5 w-auto  rounded-b-2xl rounded-l-2xl mt-1.5 bg-[#F7F7F7] text-wrap max-w-95'>
                    {conversation?.content}
                  </span>
                  <p className='text-[10px] font-normal text-grey text-end'>
                    {formatTime(conversation?.created_at)}
                  </p>
                </div>
                {/*AI bot svg */}
                <div className='bg-[#F7F7F7] rounded-full text-xs font-bold text-black w-9 h-9 flex items-center justify-center'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.99996 4.66634V2.33301H4.66663'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.5 4.66699H3.50004C2.85571 4.66699 2.33337 5.18933 2.33337 5.83366V10.5003C2.33337 11.1447 2.85571 11.667 3.50004 11.667H10.5C11.1444 11.667 11.6667 11.1447 11.6667 10.5003V5.83366C11.6667 5.18933 11.1444 4.66699 10.5 4.66699Z'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1.16663 8.16699H2.33329'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.6666 8.16699H12.8333'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.75 7.58301V8.74967'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.25 7.58301V8.74967'
                      stroke='#2B2B2B'
                      strokeWidth='1.16667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            ) : (
              //customer side
              <div className='flex items-start gap-x-2'>
                <span className='bg-[#F7F7F7] rounded-full text-xs font-bold text-black w-9 h-9 flex items-center justify-center'></span>
                <div className='flex flex-col gap-y-1'>
                  <span className='px-4 py-2.5 border border-light-grey rounded-b-2xl rounded-r-2xl mt-1.5'>
                    {conversation?.content}
                  </span>
                  <p className='text-[10px] font-normal text-grey'>
                    {formatTime(conversation?.created_at)}
                  </p>
                </div>
              </div>
            )}

            {}
          </div>
        );
      })}{" "}
    </div>
  );
}
