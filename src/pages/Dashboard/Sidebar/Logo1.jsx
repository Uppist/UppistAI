/** @format */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";
import { ChannelContext } from "../../../contexts/Context";

export default function Logo1({ role, isSocials, setIsSocials }) {
  const { activeChannel } = useContext(ChannelContext);

  function handleSocials() {
    setIsSocials(!isSocials);
  }
  return (
    <div className='flex flex-col items-center gap-y-4.5'>
      {/*Dashboard */}

      {(role === "owner" || role === "admin") && (
        <NavLink
          to='/dashboard'
          onClick={() => setIsSocials(false)}
          className={({ isActive }) =>
            `group relative ${
              isActive
                ? "cursor-pointer bg-pink border text-bg border-pink px-4 py-2 rounded-lg before:content-[''] before:absolute before:w-1 before:h-4.5 before:bg-bg before:left-2 before:rounded-r-lg"
                : "cursor-pointer text-grey px-4 py-2"
            }`
          }
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.5 9.99101V12.083C2.5 14.8328 2.5 16.2078 3.35427 17.0621C4.20854 17.9163 5.58347 17.9163 8.33333 17.9163H11.6667C14.4165 17.9163 15.7914 17.9163 16.6457 17.0621C17.5 16.2078 17.5 14.8328 17.5 12.083V9.99101C17.5 8.58992 17.5 7.88945 17.2034 7.28305C16.9068 6.67665 16.3539 6.24657 15.248 5.38643L13.5813 4.09013C11.8609 2.75205 11.0007 2.08301 10 2.08301C8.99925 2.08301 8.13908 2.75205 6.41868 4.09013L4.75201 5.38643C3.64611 6.24657 3.09316 6.67665 2.79658 7.28305C2.5 7.88945 2.5 8.58992 2.5 9.99101Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12.5002 14.167C11.8339 14.6857 10.9587 15.0003 10.0002 15.0003C9.04158 15.0003 8.16642 14.6857 7.50015 14.167'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='hidden group-hover:block absolute left-full ml-2 bg-light-black rounded-lg text-light-grey font-bold text-sm px-3 py-2 '>
            Dashboard
          </span>
        </NavLink>
      )}

      {/*Channels */}
      <div className='group flex flex-col relative z-300'>
        <div className='cursor-pointer' onClick={handleSocials}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_454_2127)'>
              <path
                d='M18.3333 9.63926C18.3333 14.0419 14.6018 17.6115 10 17.6115C9.4589 17.6122 8.91937 17.5622 8.38785 17.4624C8.00527 17.3905 7.81398 17.3546 7.68044 17.375C7.54689 17.3954 7.35765 17.496 6.97915 17.6973C5.90845 18.2667 4.65996 18.4678 3.45926 18.2445C3.91562 17.6832 4.22729 17.0097 4.36481 16.2876C4.44815 15.846 4.24167 15.417 3.93241 15.1029C2.52778 13.6766 1.66667 11.7546 1.66667 9.63926C1.66667 5.23663 5.39815 1.66699 10 1.66699C14.6018 1.66699 18.3333 5.23663 18.3333 9.63926Z'
                stroke='#667085'
                strokeWidth='1.5'
                strokeLinejoin='round'
              />
              <path
                d='M10 10H10.0075'
                stroke='#667085'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.5 6.66699C6.49542 7.38361 5.83333 8.60901 5.83333 10.0003C5.83333 11.3916 6.49542 12.617 7.5 13.3337M12.5 6.66699C13.5046 7.38361 14.1667 8.60901 14.1667 10.0003C14.1667 11.3916 13.5046 12.617 12.5 13.3337'
                stroke='#667085'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_454_2127'>
                <rect width='20' height='20' fill='white' />
              </clipPath>
            </defs>
          </svg>

          <span className='hidden group-hover:block absolute left-full ml-2 bg-light-black rounded-lg text-light-grey font-bold text-sm px-3 py-2 '>
            Channels
          </span>
        </div>

        {isSocials && (
          <>
            {" "}
            <div
              className='fixed z-1000 '
              onClick={() => setIsSocials(false)}
            />{" "}
            <Socials
              setIsSocials={setIsSocials}
              activeChannel={activeChannel}
            />
          </>
        )}
      </div>

      {/*Contact */}
      {(role === "owner" || role === "admin") && (
        <NavLink
          to='/contacts'
          onClick={() => setIsSocials(false)}
          className={({ isActive }) =>
            `group relative ${
              isActive
                ? "cursor-pointer bg-pink border text-bg border-pink px-4 py-2 rounded-lg before:content-[''] before:absolute before:w-1 before:h-4.5 before:bg-bg before:left-2 before:rounded-r-lg"
                : "cursor-pointer text-grey px-4 py-2"
            }`
          }
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='3.33333'
              y='1.66699'
              width='14.5833'
              height='16.6667'
              rx='4'
              stroke='currentColor'
              stroke-width='1.5'
            />
            <path
              d='M8.82503 11.4503C8.30104 11.8013 6.92717 12.5181 7.76395 13.4149C8.17271 13.853 8.62796 14.1663 9.20032 14.1663H12.4663C13.0387 14.1663 13.494 13.853 13.9027 13.4149C14.7395 12.5181 13.3656 11.8013 12.8416 11.4503C11.6129 10.6272 10.0538 10.6272 8.82503 11.4503Z'
              stroke='currentColor'
              stroke-width='1.5'
            />
            <path
              d='M12.5 7.49967C12.5 8.42015 11.7538 9.16634 10.8333 9.16634C9.91286 9.16634 9.16667 8.42015 9.16667 7.49967C9.16667 6.5792 9.91286 5.83301 10.8333 5.83301C11.7538 5.83301 12.5 6.5792 12.5 7.49967Z'
              stroke='currentColor'
              stroke-width='1.5'
            />
            <path
              d='M4.16667 5L2.08333 5M4.16667 10L2.08333 10M4.16667 15H2.08333'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span className='hidden group-hover:block absolute left-full ml-2 bg-light-black rounded-lg text-light-grey font-bold text-sm px-3 py-2 '>
            Contacts
          </span>
        </NavLink>
      )}

      {/*Reports */}
      {role === "owner" && (
        <NavLink
          to='/reports'
          onClick={() => setIsSocials(false)}
          className={({ isActive }) =>
            `group relative ${
              isActive
                ? "cursor-pointer bg-pink border text-bg border-pink px-4 py-2 rounded-lg before:content-[''] before:absolute before:w-1 before:h-4.5 before:bg-bg before:left-2 before:rounded-r-lg"
                : "cursor-pointer text-grey px-4 py-2"
            }`
          }
        >
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.4167 15.25L7.58335 15.25'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M13.4167 11.4502L10.9167 11.4502'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M17.1667 12.4C17.1667 15.9827 17.1667 17.774 16.1294 18.887C15.092 20 13.4225 20 10.0834 20H9.43941C6.72174 20 5.36291 20 4.41924 19.2421C4.14887 19.0249 3.90884 18.7674 3.70644 18.4773C3.00002 17.4648 3.00002 16.0068 3.00002 13.0909V10.6727C3.00002 7.85772 3.00002 6.45022 3.3908 5.32607C4.01903 3.51886 5.34763 2.09335 7.03199 1.4193C8.07971 1.00001 9.39153 1.00001 12.0152 1.00001C13.5144 1.00001 14.264 1.00001 14.8627 1.2396C15.8252 1.62478 16.5844 2.43935 16.9434 3.47204C17.1667 4.11441 17.1667 4.9187 17.1667 6.52728V12.4Z'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linejoin='round'
            />
            <path
              d='M3.00004 10.5C3.00004 8.7511 4.24369 7.33334 5.77782 7.33334C6.33264 7.33333 6.98674 7.44416 7.52618 7.27938C8.00547 7.13298 8.37984 6.70619 8.50827 6.1598C8.65281 5.54484 8.5556 4.79916 8.5556 4.16667C8.5556 2.41777 9.79925 1.00001 11.3334 1.00001'
              stroke='currentColor'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span className='hidden group-hover:block absolute left-full ml-2 bg-light-black rounded-lg text-light-grey font-bold text-sm px-3 py-2 '>
            Reports
          </span>
        </NavLink>
      )}
    </div>
  );
}
