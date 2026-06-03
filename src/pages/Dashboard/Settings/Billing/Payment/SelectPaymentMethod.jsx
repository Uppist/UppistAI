/** @format */

import master from "../../../../../assets/Dashboard/settings/billing/master.svg";
import visa from "../../../../../assets/Dashboard/settings/billing/visa.svg";
export default function SelectPaymentMethod({
  cardAvailable,
  selectedRadio,
  method,
}) {
  return (
    <>
      {/*Select Payment Method */}
      <div className='flex flex-col gap-y-0.5'>
        <span className='text'>Select payment method</span>

        {/*Past Card */}
        <div className='flex flex-col gap-y-4'>
          {cardAvailable?.map((card) => {
            const lastFourDigits = card.cardNumber.replace(/\s/g, "").slice(-4);
            return (
              <div className='flex items-center justify-between'>
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

                {/*Radio button */}
                <div>
                  <input
                    type='radio'
                    name='defaultCard'
                    id={`radio-${card.id}`}
                    className='peer hidden'
                    //                        checked={selectedCardId === card.id}
                    onChange={() => selectedRadio(card)}
                  />

                  <label
                    htmlFor={`radio-${card.id}`}
                    className='block relative w-5.5 h-5.5 rounded-full border-4 border-light-grey cursor-pointer peer-checked:border-bg'
                  >
                    <span className='absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-bg -translate-x-1/2 -translate-y-1/2 scale-0 transition peer-checked:scale-100' />
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/*Bank transfer option */}
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-x-2'>
            <span className='text-sm font-medium text-black'>
              Pay by Bank Transfer
            </span>
            {/*Bank transfer svg */}
            <div className='w-5 h-5 bg-pink rounded-sm flex items-center justify-center'>
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_796_3668)'>
                  <path
                    d='M0.833252 3.5711C0.833252 3.07269 1.03424 2.76724 1.45018 2.53577L3.16237 1.58292C4.05954 1.08363 4.50813 0.833984 4.99992 0.833984C5.4917 0.833984 5.94029 1.08363 6.83747 1.58292L8.54966 2.53577C8.96559 2.76724 9.16659 3.07269 9.16659 3.5711C9.16659 3.70625 9.16658 3.77382 9.15183 3.82938C9.07428 4.12125 8.80981 4.16732 8.55438 4.16732H1.44545C1.19003 4.16732 0.925552 4.12125 0.848011 3.82938C0.833252 3.77382 0.833252 3.70625 0.833252 3.5711Z'
                    stroke='#FF9200'
                    stroke-width='0.7'
                  />
                  <path
                    d='M4.99821 2.91602H5.00195'
                    stroke='#FF9200'
                    stroke-width='0.7'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M1.66675 4.16602V7.70768M3.33341 4.16602V7.70768'
                    stroke='#FF9200'
                    stroke-width='0.7'
                  />
                  <path
                    d='M6.66675 4.16602V7.70768M8.33341 4.16602V7.70768'
                    stroke='#FF9200'
                    stroke-width='0.7'
                  />
                  <path
                    d='M7.91659 7.70898H2.08325C1.3929 7.70898 0.833252 8.26863 0.833252 8.95898C0.833252 9.07404 0.926526 9.16732 1.04159 9.16732H8.95825C9.07331 9.16732 9.16659 9.07404 9.16659 8.95898C9.16659 8.26863 8.60694 7.70898 7.91659 7.70898Z'
                    stroke='#FF9200'
                    stroke-width='0.7'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_796_3668'>
                    <rect width='10' height='10' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/*Radio button */}
          <div>
            <input
              type='radio'
              name='defaultCard'
              id={`radio`}
              className='peer hidden'
              //                        checked={selectedCardId === card.id}
              onChange={() => selectedRadio("bank_transfer")}
            />

            <label
              htmlFor={`radio`}
              className='block relative w-5.5 h-5.5 rounded-full border-4 border-light-grey cursor-pointer peer-checked:border-bg'
            >
              <span className='absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-bg -translate-x-1/2 -translate-y-1/2 scale-0 transition peer-checked:scale-100' />
            </label>
          </div>
        </div>

        {/*Add payment method */}
        {method === "pay" ? (
          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-x-2'>
              <span className='text-sm font-medium text-black'>
                Pay by Wallet
              </span>
              {/*Bank transfer svg */}
              <div className='w-5 h-5 bg-pink rounded-sm flex items-center justify-center'>
                <svg
                  width='10'
                  height='10'
                  viewBox='0 0 10 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_796_3668)'>
                    <path
                      d='M0.833252 3.5711C0.833252 3.07269 1.03424 2.76724 1.45018 2.53577L3.16237 1.58292C4.05954 1.08363 4.50813 0.833984 4.99992 0.833984C5.4917 0.833984 5.94029 1.08363 6.83747 1.58292L8.54966 2.53577C8.96559 2.76724 9.16659 3.07269 9.16659 3.5711C9.16659 3.70625 9.16658 3.77382 9.15183 3.82938C9.07428 4.12125 8.80981 4.16732 8.55438 4.16732H1.44545C1.19003 4.16732 0.925552 4.12125 0.848011 3.82938C0.833252 3.77382 0.833252 3.70625 0.833252 3.5711Z'
                      stroke='#FF9200'
                      stroke-width='0.7'
                    />
                    <path
                      d='M4.99821 2.91602H5.00195'
                      stroke='#FF9200'
                      stroke-width='0.7'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M1.66675 4.16602V7.70768M3.33341 4.16602V7.70768'
                      stroke='#FF9200'
                      stroke-width='0.7'
                    />
                    <path
                      d='M6.66675 4.16602V7.70768M8.33341 4.16602V7.70768'
                      stroke='#FF9200'
                      stroke-width='0.7'
                    />
                    <path
                      d='M7.91659 7.70898H2.08325C1.3929 7.70898 0.833252 8.26863 0.833252 8.95898C0.833252 9.07404 0.926526 9.16732 1.04159 9.16732H8.95825C9.07331 9.16732 9.16659 9.07404 9.16659 8.95898C9.16659 8.26863 8.60694 7.70898 7.91659 7.70898Z'
                      stroke='#FF9200'
                      stroke-width='0.7'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_796_3668'>
                      <rect width='10' height='10' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {/*Radio button */}
            <div>
              <input
                type='radio'
                name='defaultCard'
                id={`radio-wallet`}
                className='peer hidden'
                //                        checked={selectedCardId === card.id}
                // onChange={() => selectedRadio("bank_transfer")}
              />

              <label
                htmlFor={`radio-wallet`}
                className='block relative w-5.5 h-5.5 rounded-full border-4 border-light-grey cursor-pointer peer-checked:border-bg'
              >
                <span className='absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-bg -translate-x-1/2 -translate-y-1/2 scale-0 transition peer-checked:scale-100' />
              </label>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-y-4 mt-10'>
            <span className='text'>Add payment method</span>

            {/*Card option */}
            <div className='flex items-center justify-between'>
              {/*Card icons and text */}
              <div className='flex items-center gap-x-3'>
                <span className='text-sm font-medium text-black'>
                  Debit or credit card
                </span>
                <img src={visa} alt='Visa icon' />
                <img src={master} alt='Mastercard icon' />
              </div>
              {/*Radio button */}
              <div>
                <input
                  type='radio'
                  name='defaultCard'
                  id={`radio-two`}
                  className='peer hidden'
                  //                        checked={selectedCardId === card.id}
                  onChange={() => selectedRadio("add_card")}
                />

                <label
                  htmlFor={`radio-two`}
                  className='block relative w-5.5 h-5.5 rounded-full border-4 border-light-grey cursor-pointer peer-checked:border-bg'
                >
                  <span className='absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-bg -translate-x-1/2 -translate-y-1/2 scale-0 transition peer-checked:scale-100' />
                </label>
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
