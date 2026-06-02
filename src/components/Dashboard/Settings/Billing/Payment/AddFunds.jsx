/** @format */

import { useContext, useState } from "react";
import { CardContext } from "../../../CardContext";

import AddPaymentMethod from "./AddPaymentMethod";
import PayByBank from "./PayByBank";
import Review from "./Review";
import SelectPaymentMethod from "./SelectPaymentMethod";

export default function AddFunds({ onClose }) {
  const [amount, setAmount] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [openBank, setOpenBank] = useState(false);
  const [reviewPayment, setReviewPayment] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { cardAvailable } = useContext(CardContext);
  const { openCard, setOpenCard } = useContext(CardContext);

  {
    /* */
  }
  function handleAmountChange(e) {
    const rawValue = e.target.value.replace(/,/g, "");

    if (/^\d*$/.test(rawValue)) {
      setAmount(rawValue);
    }
  }

  {
    /* */
  }
  function selectedRadio(cardId) {
    console.log("Selected card ID:", cardId);
    setIsSelect(cardId);
  }

  {
    /* */
  }
  function Next() {
    // console.log("Next button clicked");

    if (isSelect === "add_card") {
      setOpenCard("new");
      onClose();
    } else if (isSelect === "bank_transfer") {
      // console.log("Bank transfer selected");
      setOpenBank(true);
    } else {
      setReviewPayment(true);
      console.log(isSelect);
      setSelectedCard({ ...isSelect, amount: amount });
    }
  }

  const next = amount !== "" && isSelect !== false;
  return (
    <>
      {openCard === "new" ? (
        <AddPaymentMethod onClose={onClose} />
      ) : (
        <div className='dropdown'>
          {/*overlay */}

          <div className='overlay' onClick={onClose}></div>
          {/*Conditional rendering for bank transfer and add funds container */}
          {reviewPayment ? (
            <Review selectedCard={selectedCard} onClose={onClose} />
          ) : openBank ? (
            <PayByBank onClose={onClose} />
          ) : (
            <>
              {/*Add funds Container */}
              <div className='absolute flex flex-col  gap-y-4 w-1/2  bg-white rounded-lg p-15  items-end justify-center'>
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
                  {" "}
                  {/* text */}
                  <div className='flex flex-col gap-y-2 text-center'>
                    <span className='text-xl font-semibold text-bg'>
                      Add funds
                    </span>
                    <p className='text-grey text-base font-normal w-auto text-center'>
                      Add funds Top up your account to cover usage and future
                      activity.
                    </p>
                  </div>
                </div>

                {/*Amount sent container */}
                <div className='flex flex-col gap-y-6 w-full'>
                  <div className='flex flex-col gap-y-2'>
                    <span className='text'>Enter amount</span>
                    <input
                      type='text'
                      className='input'
                      value={
                        isFocused
                          ? amount
                          : amount
                            ? Number(amount).toLocaleString()
                            : ""
                      }
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={handleAmountChange}
                    />
                  </div>

                  <SelectPaymentMethod
                    cardAvailable={cardAvailable}
                    selectedRadio={selectedRadio}
                  />

                  {/* Next button */}
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      disabled={!next}
                      className='button'
                      onClick={Next}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
