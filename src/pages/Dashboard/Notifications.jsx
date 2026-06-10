/** @format */

import { useContext } from "react";
import { UserContext } from "../../contexts/Context";

export default function Notifications() {
  const { notifications } = useContext(UserContext);
  return (
    <div
      className='absolute flex flex-col top-13 right-9 ml-4 z-9999 w-90 h-82 rounded-2xl bg-white shadow-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      {notifications.length === 0 ? (
        <>
          {/*No Notifications yet */}
          <div className='flex items-center justify-center h-full flex-col text-center'>
            <span className='text2'>No Notifications yet.</span>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className='flex items-center justify-between p-5 border-b border-light-grey'>
            <h3 className='text-base font-medium text-black'>Notifications</h3>
            <span className='text.sm font-medium text-bg'>
              Mark all as read
            </span>
          </div>
          <div className='h-110 overflow-scroll no-scrollbar'>
            <div className='p-5 border-b border-light-grey'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                  svg
                  <div>
                    <h4 className='text'>Conversation needs review.</h4>
                    <span className='text-xs font-normal text-light-black'>
                      AI flagged a refund request from Amara O. on WhatsApp.
                    </span>
                  </div>
                </div>

                <span className='text-xs font-normal text-light-black'>1m</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
