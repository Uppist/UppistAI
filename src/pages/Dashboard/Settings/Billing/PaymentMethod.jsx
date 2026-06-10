/** @format */

import { useContext, useEffect, useRef, useState } from "react";
import AddPaymentMethod from "./Payment/AddPaymentMethod";
import { formatExpiry, getCardType } from "../../../../utils/cardUtils";
import { CardContext } from "../../../../contexts/Context";

export default function PaymentMethod() {
  const [cardOpen, setCard] = useState(false);
  // const [openPayment, setOpenPayment] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [details, setDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiry: "",
    cvc: "",
    card_type: "",
  });
  const { cardAvailable, openCard, setOpenCard } = useContext(CardContext);

  const selectedCardData = selectedCard;

  function handleChange(e) {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "cardholderName") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "expiry") {
      newValue = formatExpiry(value);
    }

    setDetails((prev) => ({
      ...prev,
      [name]: newValue,
      card_type: getCardType(details.cardNumber),
    }));
  }
  function handleCard(card, id) {
    setCard((prevId) => (prevId === id ? null : id));
    setSelectedCard(card);
  }

  function Create() {
    setDetails({
      cardNumber: "",
      cardholderName: "",
      expiry: "",
      cvc: "",
      card_type: "",
    });
    setOpenCard("new");
  }

  function Edit() {
    setDetails({
      cardNumber: selectedCard.cardNumber || "",
      cardholderName: selectedCard.cardholderName || "",
      expiry: selectedCard.expiry || "",
      cvc: selectedCard.cvc || "",
      card_type: selectedCard.card_type || "",
    });
    setOpenCard("edit");
    setCard(false);
  }

  //clicking outside to close
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setCard(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='flex flex-col gap-y-6' ref={menuRef}>
      {/*Add payment method */}
      <div className='flex items-center justify-between'>
        {/*Heading */}
        <div className='flex flex-col gap-y-0.5'>
          <h3 className='text-black font-semibold text-base'>
            Payment methods
          </h3>
          <span className='text-xs font-normal text-grey'>
            Cards used for billing and wallet top-ups
          </span>
        </div>

        <div
          onClick={Create}
          className='border border-bg p-2 rounded-lg text-bg text-sm font-semibold cursor-pointer'
        >
          <span>Add payment method</span>
        </div>
      </div>

      {(openCard === "new" || openCard === "edit") && (
        <AddPaymentMethod
          onClose={() => setOpenCard(null)}
          openCard={openCard}
          selectedCard={selectedCardData}
          handleChange={handleChange}
          details={details}
        />
      )}

      {cardAvailable.length === 0 ? (
        <p className='text-grey text-sm text-center'>
          You haven't added any payment methods yet.
        </p>
      ) : (
        // Type of cards
        cardAvailable.map((card, id) => {
          const lastFourDigits = card.cardNumber.replace(/\s/g, "").slice(-4);
          return (
            <>
              <div
                className='flex relative items-center border border-light-grey p-4 rounded-lg justify-between'
                ref={menuRef}
              >
                <div className='flex items-center gap-x-2'>
                  {/*MasterCard svg */}
                  {card.card_type === "visa" ? (
                    <svg
                      width='44'
                      height='18'
                      viewBox='0 0 30 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='30' height='17.8571' rx='4' fill='#15195A' />
                      <path
                        d='M13.8466 11.7422H12.3267L13.2774 6.22461H14.7973L13.8466 11.7422Z'
                        fill='white'
                      />
                      <path
                        d='M19.3569 6.35991C19.0571 6.24826 18.5815 6.125 17.9936 6.125C16.4926 6.125 15.4355 6.87629 15.4291 7.95041C15.4166 8.7429 16.1858 9.18306 16.7612 9.4473C17.3492 9.71731 17.5491 9.89355 17.5491 10.1342C17.5432 10.5039 17.074 10.6743 16.6363 10.6743C16.0295 10.6743 15.7043 10.5864 15.2102 10.3808L15.0101 10.2926L14.7974 11.5312C15.1539 11.6836 15.8107 11.8189 16.4926 11.8248C18.0874 11.8248 19.1257 11.0852 19.138 9.94051C19.1441 9.31241 18.7379 8.83113 17.8622 8.43785C17.3305 8.18539 17.005 8.01516 17.005 7.75685C17.0112 7.52203 17.2803 7.2815 17.8805 7.2815C18.3746 7.26972 18.7376 7.38121 19.0127 7.49277L19.1502 7.55136L19.3569 6.35991Z'
                        fill='white'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M22.0771 6.22656H23.2528L24.479 11.7441H23.0717C23.0717 11.7441 22.9339 11.1101 22.8903 10.9164H20.9388L20.6198 11.7441H19.0249L21.2826 6.68436C21.4391 6.32627 21.7145 6.22656 22.0771 6.22656ZM21.9835 8.24628C21.9835 8.24628 21.5018 9.47308 21.3766 9.79006H22.64C22.5775 9.51419 22.2897 8.19347 22.2897 8.19347L22.1835 7.71804C22.1387 7.84047 22.074 8.00878 22.0304 8.12231C22.0008 8.19927 21.9809 8.25104 21.9835 8.24628Z'
                        fill='white'
                      />
                      <path
                        d='M8.18652 6.22656C8.51795 6.23819 8.78744 6.33816 8.875 6.69043L9.40625 9.22656L9.56934 9.98926L11.0576 6.22656H12.665L10.2754 11.7383H8.66797L7.31348 6.94434C6.84603 6.68782 6.31229 6.48203 5.71582 6.33887L5.74121 6.22656H8.18652Z'
                        fill='white'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='44'
                      height='27'
                      viewBox='0 0 44 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='44' height='26.1905' rx='4' fill='#2B2B2B' />
                      <path
                        d='M25.8645 19.8061H18.422V6.51953H25.8645V19.8061Z'
                        fill='#FF5F00'
                      />
                      <path
                        d='M18.8941 13.1633C18.8941 10.4681 20.1645 8.06727 22.1427 6.52007C20.6961 5.38868 18.8703 4.7134 16.8861 4.7134C12.1887 4.7134 8.38095 8.4965 8.38095 13.1633C8.38095 17.8302 12.1887 21.6133 16.8861 21.6133C18.8703 21.6133 20.6961 20.938 22.1427 19.8066C20.1645 18.2594 18.8941 15.8586 18.8941 13.1633Z'
                        fill='#EB001B'
                      />
                      <path
                        d='M35.9051 13.1633C35.9051 17.8302 32.0973 21.6133 27.3999 21.6133C25.4157 21.6133 23.5899 20.938 22.1427 19.8066C24.1215 18.2594 25.3919 15.8586 25.3919 13.1633C25.3919 10.4681 24.1215 8.06727 22.1427 6.52007C23.5899 5.38868 25.4157 4.7134 27.3999 4.7134C32.0973 4.7134 35.9051 8.4965 35.9051 13.1633Z'
                        fill='#F79E1B'
                      />
                    </svg>
                  )}

                  <div className='flex flex-col gap-y-1'>
                    <span className='text-sm font-medium text-black capitalize'>
                      {card.card_type} ···· {lastFourDigits}
                    </span>
                    <p className='text-xs font-normal text-grey'>
                      Expires {card.expiry}
                    </p>
                  </div>
                </div>
                {/*Menu svg */}
                <svg
                  cursor={"pointer"}
                  onClick={() => handleCard(card, id)}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 11.3333C8.26522 11.3333 8.51957 11.4387 8.70711 11.6262C8.89464 11.8138 9 12.0681 9 12.3333C9 12.5985 8.89464 12.8529 8.70711 13.0404C8.51957 13.228 8.26522 13.3333 8 13.3333C7.73478 13.3333 7.48043 13.228 7.29289 13.0404C7.10536 12.8529 7 12.5985 7 12.3333C7 12.0681 7.10536 11.8138 7.29289 11.6262C7.48043 11.4387 7.73478 11.3333 8 11.3333ZM8 6.66667C8.26522 6.66667 8.51957 6.77202 8.70711 6.95956C8.89464 7.1471 9 7.40145 9 7.66667C9 7.93188 8.89464 8.18624 8.70711 8.37377C8.51957 8.56131 8.26522 8.66667 8 8.66667C7.73478 8.66667 7.48043 8.56131 7.29289 8.37377C7.10536 8.18624 7 7.93188 7 7.66667C7 7.40145 7.10536 7.1471 7.29289 6.95956C7.48043 6.77202 7.73478 6.66667 8 6.66667ZM8 2C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3C9 3.26522 8.89464 3.51957 8.70711 3.70711C8.51957 3.89464 8.26522 4 8 4C7.73478 4 7.48043 3.89464 7.29289 3.70711C7.10536 3.51957 7 3.26522 7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2Z'
                    fill='#667085'
                  />
                </svg>
                {/*Open edit/delete card */}
                {cardOpen === id && (
                  <div className='absolute flex flex-col bg-white top-10 z-10 right-0 shadow-lg rounded-lg p-3.5 gap-y-2.5 '>
                    {/*Edit card */}
                    <span
                      onClick={Edit}
                      className='flex items-center gap-x-1.5  text-sm font-medium text-light-black p-2 cursor-pointer hover:bg-slate-100'
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_596_1729)'>
                          <path
                            d='M11.7279 3.2382C12.3489 2.56539 12.6594 2.22899 12.9893 2.03276C13.7855 1.55929 14.7657 1.54457 15.5751 1.99393C15.9106 2.18016 16.2306 2.50709 16.8707 3.16096C17.5108 3.81483 17.8308 4.14176 18.0131 4.48443C18.453 5.31126 18.4386 6.31265 17.9751 7.12591C17.783 7.46296 17.4537 7.78014 16.7951 8.4145L8.95869 15.9622C7.71057 17.1644 7.0865 17.7655 6.30655 18.0701C5.5266 18.3747 4.66917 18.3523 2.95431 18.3075L2.72099 18.3014C2.19893 18.2877 1.9379 18.2809 1.78616 18.1087C1.63442 17.9365 1.65514 17.6706 1.69657 17.1388L1.71907 16.85C1.83568 15.3533 1.89398 14.6049 2.18626 13.9322C2.47854 13.2594 2.9827 12.7132 3.99103 11.6207L11.7279 3.2382Z'
                            stroke='#2B2B2B'
                            strokeOpacity='0.8'
                            strokeWidth='1.5'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10.8335 3.33301L16.6668 9.16634'
                            stroke='#2B2B2B'
                            strokeOpacity='0.8'
                            strokeWidth='1.5'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M11.6665 18.333L18.3332 18.333'
                            stroke='#2B2B2B'
                            strokeOpacity='0.8'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_596_1729'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                      Edit Card{" "}
                    </span>

                    {/*Delete card */}
                    <span className='flex items-center gap-x-1.5 text-sm font-medium text-red p-2 cursor-pointer hover:bg-slate-100'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.99979 1.66699C8.53799 1.66699 7.32079 2.75926 7.11649 4.16699H4.26574C4.23025 4.16092 4.19431 4.15793 4.15832 4.15804C4.12721 4.15871 4.0962 4.1617 4.06554 4.16699H2.70812C2.6253 4.16582 2.54307 4.18112 2.46622 4.21201C2.38936 4.24289 2.31941 4.28874 2.26043 4.34689C2.20145 4.40504 2.15462 4.47434 2.12265 4.55075C2.09068 4.62716 2.07422 4.70916 2.07422 4.79199C2.07422 4.87482 2.09068 4.95682 2.12265 5.03323C2.15462 5.10964 2.20145 5.17894 2.26043 5.23709C2.31941 5.29524 2.38936 5.3411 2.46622 5.37198C2.54307 5.40286 2.6253 5.41816 2.70812 5.41699H3.59923L4.64822 16.2625C4.76117 17.432 5.7547 18.3337 6.92931 18.3337H13.0694C14.2441 18.3337 15.2376 17.4321 15.3505 16.2625L16.4003 5.41699H17.2915C17.3743 5.41816 17.4565 5.40286 17.5334 5.37198C17.6102 5.3411 17.6802 5.29524 17.7391 5.23709C17.7981 5.17894 17.845 5.10964 17.8769 5.03323C17.9089 4.95682 17.9254 4.87482 17.9254 4.79199C17.9254 4.70916 17.9089 4.62716 17.8769 4.55075C17.845 4.47434 17.7981 4.40504 17.7391 4.34689C17.6802 4.28874 17.6102 4.24289 17.5334 4.21201C17.4565 4.18112 17.3743 4.16582 17.2915 4.16699H15.9348C15.8685 4.15624 15.8009 4.15624 15.7346 4.16699H12.8831C12.6788 2.75926 11.4616 1.66699 9.99979 1.66699ZM9.99979 2.91699C10.7828 2.91699 11.4251 3.44539 11.6087 4.16699H8.3909C8.57447 3.44539 9.21681 2.91699 9.99979 2.91699ZM4.85412 5.41699H15.1446L14.1062 16.1421C14.0541 16.6817 13.6114 17.0837 13.0694 17.0837H6.92931C6.38809 17.0837 5.94458 16.681 5.89253 16.1421L4.85412 5.41699ZM8.53169 7.49137C8.36607 7.49396 8.20825 7.56218 8.09289 7.68105C7.97754 7.79991 7.91408 7.9597 7.91645 8.12533V14.3753C7.91528 14.4581 7.93058 14.5404 7.96147 14.6172C7.99235 14.6941 8.0382 14.764 8.09635 14.823C8.15451 14.882 8.2238 14.9288 8.30021 14.9608C8.37662 14.9928 8.45863 15.0092 8.54145 15.0092C8.62428 15.0092 8.70628 14.9928 8.7827 14.9608C8.85911 14.9288 8.9284 14.882 8.98655 14.823C9.04471 14.764 9.09056 14.6941 9.12144 14.6172C9.15232 14.5404 9.16762 14.4581 9.16645 14.3753V8.12533C9.16765 8.04167 9.15205 7.95863 9.12056 7.88112C9.08908 7.80361 9.04235 7.73321 8.98316 7.67409C8.92396 7.61497 8.8535 7.56834 8.77595 7.53695C8.6984 7.50556 8.61534 7.49007 8.53169 7.49137ZM11.4484 7.49137C11.2827 7.49396 11.1249 7.56218 11.0096 7.68105C10.8942 7.79991 10.8307 7.9597 10.8331 8.12533V14.3753C10.8319 14.4581 10.8472 14.5404 10.8781 14.6172C10.909 14.6941 10.9549 14.764 11.013 14.823C11.0712 14.882 11.1405 14.9288 11.2169 14.9608C11.2933 14.9928 11.3753 15.0092 11.4581 15.0092C11.5409 15.0092 11.623 14.9928 11.6994 14.9608C11.7758 14.9288 11.8451 14.882 11.9032 14.823C11.9614 14.764 12.0072 14.6941 12.0381 14.6172C12.069 14.5404 12.0843 14.4581 12.0831 14.3753V8.12533C12.0843 8.04167 12.0687 7.95863 12.0372 7.88112C12.0057 7.80361 11.959 7.73321 11.8998 7.67409C11.8406 7.61497 11.7702 7.56834 11.6926 7.53695C11.6151 7.50556 11.532 7.49007 11.4484 7.49137Z'
                          fill='#DE3730'
                        />
                      </svg>
                      Delete Card
                    </span>
                  </div>
                )}
              </div>
            </>
          );
        })
      )}
    </div>
  );
}
