/** @format */

import { NavLink } from "react-router-dom";

export default function Socials({ setIsSocials, activeChannel }) {
  console.log("activeChannel", activeChannel);
  return (
    <div className='flex absolute z-9999 bg-white shadow-2xl left-10 w-40 flex-col rounded-lg gap-y-1.5 p-4'>
      <span className='pb-2 border-b border-b-light-grey text-grey text-sm font-medium'>
        Channels
      </span>

      <div className='flex flex-col gap-y-5 items-baseline mt-2'>
        {activeChannel?.map((channel) => (
          <>
            {/*whatsapp channel */}
            {channel?.status === "active" &&
              channel?.channel === "whatsapp" && (
                //whatsapp channel
                <NavLink
                  to='/channels/whatsapp'
                  className='cursor-pointer text-grey flex items-center gap-x-2'
                  onClick={() => setIsSocials(false)}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_465_2591)'>
                      <path
                        d='M9.99999 18.3337C14.6024 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6024 1.66699 9.99999 1.66699C5.39762 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 11.1494 1.89922 12.2441 2.31984 13.24C2.55231 13.7904 2.66854 14.0657 2.68293 14.2736C2.69732 14.4816 2.63611 14.7104 2.51367 15.168L1.66666 18.3337L4.8323 17.4866C5.28989 17.3642 5.51869 17.303 5.72668 17.3174C5.93466 17.3318 6.20987 17.448 6.76028 17.6805C7.7562 18.1011 8.85093 18.3337 9.99999 18.3337Z'
                        stroke='#667085'
                        stroke-width='1.5'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M7.15681 10.3151L7.88259 9.41369C8.18848 9.03377 8.56663 8.68006 8.59623 8.1742C8.60371 8.04643 8.51381 7.47279 8.33401 6.32554C8.26335 5.87466 7.8424 5.83398 7.47778 5.83398C7.00263 5.83398 6.76506 5.83398 6.52914 5.94175C6.23096 6.07795 5.92483 6.46091 5.85765 6.78176C5.8045 7.03562 5.844 7.21054 5.923 7.56039C6.25853 9.04633 7.04569 10.5139 8.26624 11.7344C9.4868 12.955 10.9543 13.7421 12.4403 14.0777C12.7901 14.1567 12.965 14.1962 13.2189 14.143C13.5398 14.0758 13.9227 13.7697 14.0589 13.4715C14.1667 13.2356 14.1667 12.998 14.1667 12.5229C14.1667 12.1583 14.126 11.7373 13.6751 11.6667C12.5279 11.4869 11.9542 11.397 11.8265 11.4044C11.3206 11.434 10.9669 11.8122 10.587 12.1181L9.68556 12.8439'
                        stroke='#667085'
                        stroke-width='1.5'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_465_2591'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='text-sm font-normal text-grey'>
                    Whatsapp
                  </span>
                </NavLink>
              )}

            {/*Website channel */}
            {channel?.status === "active" && channel?.channel === "web" && (
              //Website
              <NavLink
                to='/channels/website'
                className='cursor-pointer text-grey flex items-center gap-x-2'
                onClick={() => setIsSocials(false)}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_465_2571)'>
                    <circle
                      cx='10.0001'
                      cy='10.0003'
                      r='8.33333'
                      stroke='#667085'
                      stroke-width='1.5'
                    />
                    <ellipse
                      cx='10.0001'
                      cy='10.0003'
                      rx='3.33333'
                      ry='8.33333'
                      stroke='#667085'
                      stroke-width='1.5'
                    />
                    <path
                      d='M1.66675 10H18.3334'
                      stroke='#667085'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_465_2571'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='text-sm font-normal text-grey'>Website</span>
              </NavLink>
            )}

            {/*Instagram channel */}
            {channel?.status === "active" &&
              (channel?.channel === "instagram" ||
                channel?.channel === "x") && (
                //Instagram
                <NavLink
                  to='/channels/chats'
                  className='cursor-pointer text-grey flex items-center gap-x-2'
                  onClick={() => setIsSocials(false)}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.2477 5.671C12.682 4.34675 11.6765 3.25843 10.401 2.59004C9.12553 1.92166 7.65839 1.7142 6.2476 2.00275C4.83682 2.2913 3.56895 3.05816 2.65834 4.17367C1.74773 5.28918 1.25025 6.68492 1.25 8.12491V13.2812C1.25 13.5712 1.36523 13.8494 1.57035 14.0546C1.77547 14.2597 2.05367 14.3749 2.34375 14.3749H6.77109C7.25882 15.4887 8.06026 16.4364 9.07758 17.1023C10.0949 17.7682 11.2841 18.1236 12.5 18.1249H17.6562C17.9463 18.1249 18.2245 18.0097 18.4296 17.8046C18.6348 17.5994 18.75 17.3212 18.75 17.0312V11.8749C18.7497 10.347 18.1897 8.8721 17.1759 7.729C16.1621 6.5859 14.7646 5.85378 13.2477 5.671ZM2.5 8.12491C2.5 7.136 2.79324 6.1693 3.34265 5.34706C3.89206 4.52481 4.67295 3.88395 5.58658 3.50551C6.50021 3.12707 7.50555 3.02806 8.47545 3.22098C9.44536 3.41391 10.3363 3.89011 11.0355 4.58937C11.7348 5.28864 12.211 6.17955 12.4039 7.14946C12.5969 8.11936 12.4978 9.12469 12.1194 10.0383C11.741 10.952 11.1001 11.7328 10.2779 12.2823C9.4556 12.8317 8.48891 13.1249 7.5 13.1249H2.5V8.12491ZM17.5 16.8749H12.5C11.6159 16.8739 10.7477 16.639 9.98375 16.194C9.21976 15.749 8.5871 15.1098 8.15 14.3413C9.00603 14.2525 9.83445 13.9877 10.5833 13.5635C11.3321 13.1393 11.9852 12.5649 12.5015 11.8763C13.0178 11.1878 13.3862 10.3999 13.5836 9.56226C13.7809 8.72457 13.803 7.85513 13.6484 7.0085C14.7447 7.26723 15.7216 7.88856 16.4206 8.77181C17.1197 9.65506 17.5 10.7485 17.5 11.8749V16.8749Z'
                      fill='#667085'
                    />
                  </svg>
                  <span className='text-sm font-normal text-grey'>
                    Social Media
                  </span>
                </NavLink>
              )}

            {/*Email channel */}
            {channel?.status === "active" && channel?.channel === "email" && (
              <NavLink
                to='/channels/email'
                className='cursor-pointer text-grey flex items-center gap-x-2'
                onClick={() => setIsSocials(false)}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.33334 5.83305L8.50001 9.70801C9.38893 10.3747 10.6111 10.3747 11.5 9.70801L16.6667 5.83301'
                    stroke='#667085'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M15.8333 4.16699H4.16667C3.24619 4.16699 2.5 4.91318 2.5 5.83366V14.167C2.5 15.0875 3.24619 15.8337 4.16667 15.8337H15.8333C16.7538 15.8337 17.5 15.0875 17.5 14.167V5.83366C17.5 4.91318 16.7538 4.16699 15.8333 4.16699Z'
                    stroke='#667085'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                </svg>
                <span>Email</span>
              </NavLink>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
