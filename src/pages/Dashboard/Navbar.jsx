/** @format */

import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/Context";
import Notifications from "./Notifications";

export default function Navbar() {
  const { notifications } = useContext(UserContext);
  const [isNotify, setIsNotify] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  let title = "";

  if (path === "/dashboard") {
    title = "Dashboard";
  } else if (path === "/settings") {
    title = "Settings";
  } else if (path === "/contacts") {
    title = "Contacts";
  } else if (path === "/reports") {
    title = "Reports";
  } else if (path === "/Integrations") {
    title = "Integrations";
  }
  return (
    <div className='py-5 border border-light-grey flex items-center justify-between'>
      <span className='text-black text-2xl font-semibold px-6'>{title}</span>

      <div className='pr-6 cursor-pointer'>
        {notifications.length === 0 ? (
          <svg
            width='20'
            onClick={() => setIsNotify(true)}
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.10819 12.3083C1.93098 13.47 2.72325 14.2763 3.6933 14.6782C7.41226 16.2188 12.5876 16.2188 16.3065 14.6782C17.2766 14.2763 18.0689 13.47 17.8916 12.3083C17.7827 11.5944 17.2442 10.9999 16.8452 10.4194C16.3227 9.64971 16.2707 8.81018 16.2706 7.91699C16.2706 4.46521 13.4631 1.66699 9.99992 1.66699C6.53669 1.66699 3.72919 4.46521 3.72919 7.91699C3.72911 8.81018 3.67719 9.64971 3.15459 10.4194C2.75562 10.9999 2.2171 11.5944 2.10819 12.3083Z'
              stroke='#2B2B2B'
              stroke-opacity='0.8'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M6.66675 15.833C7.04882 17.2707 8.39636 18.333 10.0001 18.333C11.6038 18.333 12.9513 17.2707 13.3334 15.833'
              stroke='#2B2B2B'
              stroke-opacity='0.8'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        ) : (
          <svg
            width='20'
            onClick={() => setIsNotify(true)}
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.10843 12.3083C1.93122 13.47 2.72349 14.2763 3.69354 14.6782C7.4125 16.2188 12.5878 16.2188 16.3068 14.6782C17.2768 14.2763 18.0691 13.47 17.8919 12.3083C17.783 11.5944 17.2445 10.9999 16.8455 10.4194C16.3229 9.64971 16.271 8.81018 16.2709 7.91699C16.2709 4.46521 13.4634 1.66699 10.0002 1.66699C6.53694 1.66699 3.72943 4.46521 3.72943 7.91699C3.72936 8.81018 3.67743 9.64971 3.15484 10.4194C2.75586 10.9999 2.21734 11.5944 2.10843 12.3083Z'
              stroke='#2B2B2B'
              strokeOpacity='0.8'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6.66675 15.833C7.04882 17.2707 8.39636 18.333 10.0001 18.333C11.6038 18.333 12.9513 17.2707 13.3334 15.833'
              stroke='#2B2B2B'
              stroke-opacity='0.8'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.5 7C17.433 7 19 5.433 19 3.5C19 1.567 17.433 0 15.5 0C13.567 0 12 1.567 12 3.5C12 5.433 13.567 7 15.5 7Z'
              fill='#DE3730'
            />
          </svg>
        )}

        {isNotify && (
          <>
            <div
              className='fixed inset-0 z-40'
              onClick={() => setIsNotify(false)}
            />

            <Notifications />
          </>
        )}
      </div>
    </div>
  );
}
