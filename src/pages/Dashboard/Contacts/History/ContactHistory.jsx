/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import Prompt from "./Prompt";
import email from "../../../../assets/Dashboard/contact/email.svg";
import phone from "../../../../assets/Dashboard/contact/phone.svg";
import intent from "../../../../assets/Dashboard/contact/intent.svg";
import interact from "../../../../assets/Dashboard/contact/interact.svg";
import { ContactContext } from "../../../../contexts/Context";
import { getInitials } from "../../../../utils/dashboardUtils";
import { formatDateTime } from "../../../../utils/DateTime";

export default function ContactHistory() {
  const { contactDetail } = useContext(ContactContext);
  const detail = contactDetail?.contact || contactDetail || {};

  console.log(detail);
  return (
    <div className='flex flex-col gap-y-4'>
      {/*Back button */}
      <Link to={-1}>
        <div className='flex items-center gap-x-2 cursor-pointer'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.6041 17.5837L5.58331 10.5837C5.49997 10.5003 5.44081 10.41 5.40581 10.3128C5.37081 10.2156 5.35358 10.1114 5.35414 10.0003C5.35414 9.88921 5.37164 9.78505 5.40664 9.68783C5.44164 9.5906 5.50053 9.50033 5.58331 9.41699L12.6041 2.39616C12.7986 2.20171 13.0416 2.10449 13.3333 2.10449C13.625 2.10449 13.875 2.20866 14.0833 2.41699C14.2916 2.62533 14.3958 2.86838 14.3958 3.14616C14.3958 3.42394 14.2916 3.66699 14.0833 3.87533L7.95831 10.0003L14.0833 16.1253C14.2778 16.3198 14.375 16.5595 14.375 16.8445C14.375 17.1295 14.2708 17.3759 14.0625 17.5837C13.8541 17.792 13.6111 17.8962 13.3333 17.8962C13.0555 17.8962 12.8125 17.792 12.6041 17.5837Z'
              fill='#2B2B2B'
              fill-opacity='0.8'
            />
          </svg>
          <span className='text-balance font-normal text-light-black'>
            Back
          </span>
        </div>
      </Link>

      <div className=' border border-light-grey p-6 rounded-sm flex flex-col gap-y-15'>
        <div className='flex items-center gap-x-6'>
          {/*Name details */}

          <div className='flex items-center gap-x-2 border-r pr-6 border-r-light-grey'>
            <span className='w-11 h-11 rounded-full bg-light-grey flex items-center justify-center'>
              {getInitials(detail.name)}
            </span>
            <div className='flex flex-col gap-x-2'>
              <div className='flex items-center gap-x-1.5 '>
                <span className='text-sm font-medium text-black'>
                  {detail.name || detail.identifier || "Contact details"}
                </span>
                <span className='p-1.5 rounded-sm border border-light-grey text-[8px] font-medium text-black'>
                  {detail.channel || "—"}
                </span>
              </div>

              <span className='text-[10px] font-light text-grey'>
                Last seen {formatDateTime(detail.lastSeenAt) || "unavailable"}
              </span>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            {/**Email */}

            {detail.email && (
              <div className='flex flex-col gap-y-1.5'>
                <div className='flex items-center gap-x-2'>
                  <img src={email} alt='' />

                  <span className='text-[10px] font-medium text-grey uppercase'>
                    Email
                  </span>
                </div>
                <span className='text-[10px] font-normal text-black'>
                  {detail.email || "—"}
                </span>
              </div>
            )}

            {/**Phone Number */}
            {detail.phone && (
              <div className='flex flex-col gap-y-1.5'>
                <div className='flex items-center gap-x-2'>
                  <img src={phone} alt='' />
                  <span className='text-[10px] font-medium text-grey uppercase'>
                    phone
                  </span>
                </div>
                <span className='text-[10px] font-normal text-black'>
                  {detail.phone || detail.phoneNumber || "—"}{" "}
                </span>
              </div>
            )}

            {/*Intent tag */}
            <div className='flex flex-col gap-y-1.5'>
              <div className='flex items-center gap-x-2'>
                <img src={intent} alt='' />
                <span className='text-[10px] font-medium text-grey uppercase'>
                  Intent Tag
                </span>
              </div>
              <span className='text-[10px] font-normal text-black'>
                {detail.intent || detail.intentTag || "—"}
              </span>
            </div>

            {/**Interatcion */}
            <div className='flex flex-col gap-y-1.5'>
              <div className='flex items-center gap-x-2'>
                <img src={interact} alt='' />
                <span className='text-[10px] font-medium text-grey uppercase'>
                  interactions
                </span>
              </div>
              <span className='text-[10px] font-normal text-black'>
                {detail.interactionCount ?? "—"}{" "}
              </span>
            </div>
          </div>
        </div>
        <Prompt />
      </div>
    </div>
  );
}
