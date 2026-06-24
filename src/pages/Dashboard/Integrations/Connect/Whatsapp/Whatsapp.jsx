/** @format */

import { useState } from "react";
import ng from "../../../../../assets/Dashboard/integrations/ng.svg";
import Verify from "./Verify";
export default function Whatsapp({ onClose, onConnect, Success }) {
  const [number, setNumber] = useState("");
  const [isNext, setIsNext] = useState(false);

  function handleClick(e) {
    const rawValue = e.target.value.replace(/,/g, "");

    if (/^\d*$/.test(rawValue)) {
      setNumber(rawValue);
    }
  }

  function Next() {
    setIsNext(true);
  }

  const isNumber = number.length >= 10;
  return (
    <div className='flex flex-col gap-y-5'>
      {isNext ? (
        <Verify onClose={onClose} onConnect={onConnect} Success={Success} />
      ) : (
        <>
          <div className='flex items-baseline flex-col gap-y-2'>
            <label htmlFor='' className='text-sm font-bold text-black'>
              WhatsApp Business number
            </label>
            <div className='border border-light-grey w-full rounded-lg p-2.5 flex items-center'>
              {/*Country code */}
              <div className='flex items-center gap-x-1.5'>
                <img src={ng} alt='' />
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M4 6L8 10L12 6'
                      stroke='#2B2B2B'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                </svg>
              </div>

              <span className='ml-4 text-sm font-normal text-black'>+234</span>
              <input
                type='text'
                className='outline-none bg-transparent text-sm font-normal text-black ml-1'
                name='number'
                value={number}
                onChange={handleClick}
                id=''
                maxLength={10}
              />
            </div>
          </div>

          {/*Next button */}
          <div className='flex items-center gap-x-4 justify-end'>
            <span
              className='text-sm font-semibold text-bg cursor-pointer'
              onClick={() => {
                onConnect();
                onClose();
              }}
            >
              Skip and Connect via Facebook
            </span>
            <button
              type='button'
              disabled={!isNumber}
              className='button'
              onClick={Next}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
