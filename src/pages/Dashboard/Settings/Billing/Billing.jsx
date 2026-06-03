/** @format */

import { useContext, useState } from "react";
import BillingInfo from "./BillingInfo";
import PaymentActivity from "./PaymentActivity";
import PaymentMethod from "./PaymentMethod";
import AddFunds from "./Payment/AddFunds";
import Providers from "../../../../contexts/Providers";

export default function Billing() {
  const [addFunds, setAddFunds] = useState(false);
  const { availableBalance, amountDue } = useContext(Providers);

  console.log();
  function handleAddFunds() {
    setAddFunds(true);
  }
  return (
    <div className='flex flex-col gap-y-10 md:h-110 lg:h-110 2xl:h-full overflow-scroll no-scrollbar'>
      {/*Billing summary */}
      <div className='flex flex-col gap-y-10'>
        {/*Billing summary */}
        <div className='flex items-center gap-x-10'>
          {/*AI Interaction */}
          <div className='border border-light-grey flex flex-col gap-y-2.5 w-full justify-between p-4 rounded-lg'>
            <span className='text-[10px] font-normal text-grey'>
              Total AI interactions this month
            </span>
            <p className='text-xl font-semibold text-black'> 10,000</p>
            <span className='text-[10px] font-normal text-grey'>
              Across all channels · ₦50 per interaction
            </span>
          </div>
          {/*Payment due */}
          <div className='border border-light-grey flex flex-col gap-y-2.5 w-full justify-between p-4 rounded-lg'>
            <span className='text-[10px] font-normal text-grey'>
              Payment due
            </span>
            <p className='text-xl font-semibold text-bg'>
              {" "}
              ₦{amountDue.toLocaleString()}
            </p>
            <span className='text-[10px] font-normal text-grey'>
              Due May 31, 2026{" "}
            </span>
          </div>{" "}
        </div>
        {/*Available funds */}
        <div className='border  border-light-grey flex items-center justify-between p-4 rounded-lg'>
          <div className='flex items-center gap-x-2'>
            {/*Wallet Svg */}
            <div className='w-11 h-11 rounded-lg bg-pink flex items-center justify-center'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.5 12.5C12.5 13.1904 13.0596 13.75 13.75 13.75C14.4404 13.75 15 13.1904 15 12.5C15 11.8096 14.4404 11.25 13.75 11.25C13.0596 11.25 12.5 11.8096 12.5 12.5Z'
                  stroke='#FF9200'
                  strokeWidth='1.5'
                />
                <path
                  d='M12.5031 6.50234C7.98016 6.18893 4.25392 5.51778 2.5 5V12.5512C2.5 14.2132 2.5 15.0442 3.01632 15.722C3.53263 16.3997 4.24103 16.5911 5.65781 16.9739C7.94686 17.5924 10.3529 17.9608 12.5089 18.1715C14.7433 18.3898 15.8604 18.4989 16.6802 17.7498C17.5 17.0006 17.5 15.7972 17.5 13.3902V11.7122C17.5 9.37478 17.5 8.20608 16.8274 7.48073C16.1549 6.75539 14.9376 6.67104 12.5031 6.50234Z'
                  stroke='#FF9200'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.6882 6.66602C15.0029 5.47996 15.2877 3.32287 14.4392 2.25178C13.9013 1.57291 13.1019 1.63813 12.3182 1.70706C8.19826 2.0694 5.28787 2.80544 3.66084 3.30549C2.96123 3.52051 2.5 4.2037 2.5 4.96638'
                  stroke='#FF9200'
                  stroke-width='1.5'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            {/*Available funds */}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text-[10px] font-normal text-grey'>
                Available funds
              </span>
              <p className='text-xl font-semibold text-black'>
                ₦{Number(availableBalance).toLocaleString()}
              </p>
            </div>
          </div>
          {/*Add funds */}
          <button
            className='button flex items-center gap-x-1.5'
            onClick={handleAddFunds}
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
            Add Funds
          </button>

          {addFunds && <AddFunds onClose={() => setAddFunds(false)} />}
        </div>
      </div>
      <BillingInfo />
      <PaymentMethod />
      <PaymentActivity />
    </div>
  );
}
