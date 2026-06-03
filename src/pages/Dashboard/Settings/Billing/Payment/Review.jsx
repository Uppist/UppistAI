/** @format */

import { useContext, useState } from "react";
import Providers from "../../../../../contexts/Providers";
import { Box, CircularProgress } from "@mui/material";
import Succesful from "./Succesful";

export default function Review({ selectedCard, onClose }) {
  console.log("Selected Card:", selectedCard);

  const [click, setClick] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const { openCard, setOpenCard } = useContext(Providers);

  const { availableBalance, setAvailableBalance } = useContext(Providers);
  const total = Number(availableBalance) + Number(selectedCard.amount);

  function handleClick() {
    setClick(true);

    setTimeout(() => {
      setClick(false);
      setOpenSuccess(true);
      setOpenCard("payment");
      setAvailableBalance(total);
    }, 5000);
  }

  return (
    <>
      {openSuccess ? (
        <Succesful openCard={openCard} onClose={onClose} />
      ) : (
        <div className='absolute flex flex-col  gap-y-4 w-1/2  bg-white rounded-lg p-8  items-end justify-center'>
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
            <div className='flex flex-col gap-y-6.5 items-center'>
              {/* Payment details */}
              <span className='text-base font-normal text-light-black text-center w-120'>
                Add <b>₦{Number(selectedCard.amount).toLocaleString()}</b> to
                your available funds balance. You’re paying with{" "}
                <b>
                  {selectedCard.card_type === "visa" ? " Visa" : " Mastercard"}{" "}
                  •••• {selectedCard.cardNumber.slice(-4)}.
                </b>{" "}
                Your available balance will be{" "}
                <b>₦{Number(total).toLocaleString()}</b> after this payment.
              </span>
              {/* Confirm Button */}
              <button type='button' className='button' onClick={handleClick}>
                {click ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress
                      size={20}
                      sx={{ color: "var(--color-white)" }}
                      aria-label='Loading…'
                    />
                  </Box>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
