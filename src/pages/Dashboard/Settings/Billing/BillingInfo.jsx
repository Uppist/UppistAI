/** @format */

import { useContext, useState } from "react";
import PayDueAmount from "./Payment/PayDueAmount";
import Providers from "../../../../contexts/Providers";

export default function BillingInfo() {
  const [isPay, setIsPay] = useState(false);
  const { amountDue } = useContext(Providers);

  function handlePay() {
    setIsPay(true);
  }
  return (
    <div className='flex flex-col gap-y-6'>
      {" "}
      <div className='flex items-center justify-between'>
        {/*Heading */}
        <div className='flex flex-col gap-y-0.5'>
          <h3 className='text-black font-semibold text-base'>Billing Info</h3>
          <span className='text-xs font-normal text-grey'>
            Upcoming invoices and payment schedule{" "}
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
        </div>
      </div>
      <div className='flex flex-col gap-y-6'>
        <div className='grid grid-cols-4 border-b pb-4.5 border-light-grey'>
          <span className='text-sm font-semibold text-[#4A4549]'>Date</span>
          <span className='text-sm font-semibold text-[#4A4549]'>Amount</span>
          <span className='text-sm font-semibold text-[#4A4549]'>Status</span>
          <span className='text-sm font-semibold text-[#4A4549]'>Actions</span>
        </div>
        <div className='grid grid-cols-4 border-b pb-4.5 border-light-grey items-center'>
          <span className='text-sm font-semibold text-grey'>May 31, 2026</span>
          <span className='text-sm font-semibold text-grey'>
            ₦{amountDue.toLocaleString()}
          </span>
          <span className='text-sm font-semibold text-grey'>Due</span>
          <span className='button' onClick={handlePay}>
            Pay
          </span>

          {isPay && <PayDueAmount onClose={() => setIsPay(false)} />}
        </div>{" "}
      </div>
    </div>
  );
}
