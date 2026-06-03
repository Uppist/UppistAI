/** @format */

import { useContext } from "react";
import SelectPaymentMethod from "./SelectPaymentMethod";
import Providers from "../../../../../contexts/Providers";

export default function PayDueAmount({ onClose }) {
  const { amountDue } = useContext(Providers);

  let vat = 0;
  const total = amountDue + vat;

  //   function Confirm() {}
  return (
    <div className='dropdown'>
      {/*overlay */}

      <div className='overlay' onClick={onClose}></div>

      <div className='absolute flex flex-col  gap-y-4 bg-white rounded-lg p-8  items-end justify-center'>
        {/* Close Icon */}
        <svg
          className='cursor-pointer flex'
          onClick={onClose}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.75 11.236L5.993 5.993L11.236 11.236M11.236 0.75L5.992 5.993L0.75 0.75'
            stroke='#2B2B2B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='flex flex-col gap-y-6.5 w-full'>
          {/* text */}
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              Review your payment{" "}
            </span>
            <p className='text-grey text-base font-normal w-auto text-center'>
              Verify the payment information before confirming.{" "}
            </p>
          </div>

          {/* Payment details */}
          <div className='border border-light-grey rounded-lg p-4 flex flex-col gap-y-4'>
            {/*Subtotal */}
            <div className='flex items-center justify-between'>
              <span className='text-base font-normal text-black'>Subtotal</span>
              <span className='text-base font-medium text-black'>
                {" "}
                ₦{amountDue.toLocaleString()}
              </span>
            </div>
            {/*VAT */}
            <div className='flex items-center justify-between'>
              <span className='text-base font-normal text-black'>VAT</span>
              <span className='text-base font-medium text-black'>
                ₦{Number(vat).toFixed(2)}
              </span>
            </div>
            <hr className='border border-light-grey' />
            {/*Total */}
            <div className='flex items-center justify-between'>
              <span className='text-base font-normal text-black'>Total</span>
              <span className='text-base font-medium text-black'>
                ₦{total.toLocaleString()}
              </span>
            </div>
          </div>

          <SelectPaymentMethod method='pay' />

          <div className='flex justify-end mt-5'>
            <button className='button'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
