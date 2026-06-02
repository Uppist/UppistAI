/** @format */
import visa from "../../../../../assets/Dashboard/settings/billing/visa.svg";
import mastercard from "../../../../../assets/Dashboard/settings/billing/master.svg";
import { getCardType } from "../../../../../utils/cardUtils";
import { formatCardNumber } from "../../../../../utils/cardUtils";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Succesful from "./Succesful";
import { CardContext } from "../../../CardContext";
import EditCard from "./EditCard";

export default function AddPaymentMethod({
  onClose,
  openCard,
  selectedCard,
  details,
  handleChange,
}) {
  const { setCardAvailable } = useContext(CardContext);

  const [save, setSave] = useState(false);

  // console.log(openCard);
  function Save() {
    const allowed = ["visa", "mastercard"];

    const type = details?.cardNumber
      ? getCardType(details?.cardNumber)
      : selectedCard.card_type;

    if (openCard === "new") {
      if (!allowed.includes(type)) {
        toast.error(
          "Unsupported card type. Please enter a Visa or Mastercard.",
        );
        return;
      }

      setCardAvailable((prev) => [
        ...prev,
        {
          ...details,
          id: Date.now(),
          card_type: type,
        },
      ]);
    } else if (openCard === "edit") {
      setCardAvailable((prev) =>
        prev.map((card) =>
          card.id === selectedCard.id
            ? {
                ...card,
                ...details,
                card_type: selectedCard.card_type,
              }
            : card,
        ),
      );
    } else {
      return;
    }

    setSave(true);
  }
  function Successful() {
    setSave(false);
    onClose();
  }

  const submit =
    details?.cardholderName?.trim() !== "" &&
    details?.cardNumber?.replace(/\s/g, "").length === 16 &&
    details?.expiry?.replace(/\D/g, "").length === 4 &&
    /^\d{3}$/.test(details?.cvc);
  return (
    <div className='dropdown'>
      {/*overlay */}

      <div className='overlay' onClick={onClose}></div>
      {/*payment method Container */}

      {save ? (
        <Succesful onClose={Successful} openCard={openCard} />
      ) : (
        <div className='absolute flex flex-col gap-y-4 w-1/2  bg-white rounded-lg p-4  items-end justify-center'>
          {/*Close button */}
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
          {/*Container */}
          <div className='flex flex-col gap-y-6.5 w-full'>
            {" "}
            {/* text */}
            <div className='flex flex-col gap-y-2 text-center'>
              <span className='text-xl font-semibold text-bg'>
                {openCard === "edit" ? "Edit card" : "Add payment method"}
              </span>
              <p className='text-grey text-base font-normal w-auto text-center'>
                {openCard === "edit"
                  ? "Edit your card information for future payments"
                  : "Add a debit or credit card to make payments quickly and securely."}
              </p>
            </div>
            {/*Form Container */}
            <div className='flex flex-col gap-y-6 pl-15 pr-15'>
              {/*Card field */}
              {openCard === "new" ? (
                <form action='' className='flex flex-col gap-y-6'>
                  {/*Cardholder name*/}
                  <div className='flex flex-col gap-y-1.5'>
                    <span className='text'>Cardholder name</span>
                    <input
                      className='input'
                      type='text'
                      name='cardholderName'
                      id='cardholderName'
                      value={details?.cardholderName}
                      onChange={handleChange}
                    />
                  </div>
                  {/*Card number */}
                  <div className='flex flex-col gap-y-1.5'>
                    <span className='text'>Card number</span>
                    <div className='flex items-center justify-between border border-light-grey rounded-lg px-3 py-2 gap-x-2'>
                      <input
                        type='text'
                        name='cardNumber'
                        id='cardNumber'
                        className='outline-none w-full'
                        value={details?.cardNumber}
                        onChange={handleChange}
                        onInput={(e) => {
                          e.target.value = formatCardNumber(e.target.value);
                        }}
                      />

                      {/*Card type icon */}
                      {getCardType(details?.cardNumber) === "visa" && (
                        <img src={visa} alt='Visa' />
                      )}
                      {getCardType(details?.cardNumber) === "mastercard" && (
                        <img src={mastercard} alt='Mastercard' />
                      )}
                    </div>
                  </div>
                  {/*Expiration date and CVC */}
                  <div className='grid grid-cols-2 gap-x-4'>
                    {/*Expiration date */}
                    <div className='flex flex-col gap-y-1.5'>
                      <span className='text'>Expiry (MM/YY)</span>
                      <input
                        className='input'
                        type='text'
                        name='expiry'
                        id='expiry'
                        value={details?.expiry}
                        onChange={handleChange}
                      />
                    </div>

                    {/*CVC */}
                    <div className='flex flex-col gap-y-1.5'>
                      <span className='text'>CVC</span>
                      <input
                        className='input'
                        type='text'
                        name='cvc'
                        id='cvc'
                        maxLength={3}
                        value={details?.cvc}
                        onChange={handleChange}
                        onInput={(e) => {
                          e.target.value = formatCardNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <EditCard
                  selectedCard={selectedCard}
                  details={details}
                  handleChange={handleChange}
                />
              )}

              {/*Secure Container */}
              <div className='flex flex-col items-center'>
                {/*Secure Icon */}
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 10.9993V9.66602'
                    stroke='#2B2B2B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                  <path
                    d='M2.84553 12.5632C2.99545 13.6767 3.91774 14.549 5.0401 14.6006C5.98451 14.644 6.94386 14.6667 8.00033 14.6667C9.05679 14.6667 10.0161 14.644 10.9606 14.6006C12.0829 14.549 13.0052 13.6767 13.1551 12.5632C13.253 11.8365 13.3337 11.0917 13.3337 10.3333C13.3337 9.57492 13.253 8.83021 13.1551 8.1035C13.0052 6.99001 12.0829 6.11766 10.9606 6.06606C10.0161 6.02265 9.05679 6 8.00033 6C6.94386 6 5.98451 6.02265 5.0401 6.06606C3.91774 6.11766 2.99545 6.99001 2.84553 8.1035C2.74769 8.83021 2.66699 9.57492 2.66699 10.3333C2.66699 11.0917 2.74769 11.8365 2.84553 12.5632Z'
                    stroke='#2B2B2B'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M5 6.00065V4.33398C5 2.67713 6.34315 1.33398 8 1.33398C9.65685 1.33398 11 2.67713 11 4.33398V6.00065'
                    stroke='#2B2B2B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span className='text-sm font-normal text-grey'>
                  Your payment methods are saved and stored securely.
                </span>
              </div>

              {/*Save Button */}
              <div className='flex justify-end'>
                <button
                  className='button'
                  disabled={openCard === "new" && !submit}
                  onClick={Save}
                >
                  Save {openCard === "edit" && "Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
