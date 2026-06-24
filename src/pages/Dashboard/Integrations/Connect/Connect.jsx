/** @format */

import { useState } from "react";
import Whatsapp from "./Whatsapp/Whatsapp";
import Successful from "./Whatsapp/Successful";
import Buttons from "./Website/Buttons";
import Facebook from "./Facebook/Facebook";

export default function Connect({ detail, onClose, onConnect }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  let text_message = "";

  if (detail === "WhatsApp Business API") {
    text_message = "Follow the steps below to connect your WhatsApp business.";
  } else if (detail === "Website Chat") {
    text_message =
      "You will need to add a script to add website chat to your website.";
  } else if (detail === "Facebook Messenger") {
    text_message =
      "After clicking Connect with Facebook, you will be redirected to Facebook to select the account you want to connect and grant Partner permissions. Once completed, you will be redirected to select a Facebook page to connect. Then, you're all set up and ready to go!";
  } else if (detail === "Instagram") {
    text_message =
      "After clicking Connect with Instagram, you will be redirected to Instagram to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  } else if (detail === "X") {
    text_message =
      "After clicking Connect with X, you will be redirected to X to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  } else {
    text_message =
      "After clicking Connect with Email, you will be redirected to Email to select the account you want to connect and grant Partner permissions. Then, you're all set up and ready to go!";
  }

  function Success() {
    setIsSuccessful(true);
  }
  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>
      <div className='absolute -mt-10.5  z-50 flex flex-col gap-y-4 w-141 bg-white rounded-lg p-8 items-end justify-center shadow-lg'>
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

        {isSuccessful ? (
          <Successful onClose={onClose} onConnect={onConnect} detail={detail} />
        ) : (
          <>
            {/*Container */}
            <div className='flex flex-col gap-y-4 w-full text-center'>
              <div className='flex flex-col gap-y-4 w-full text-center items-center'>
                <h3 className='text-xl font-semibold text-center text-bg'>
                  Connect {detail}
                </h3>
                <p className='w-90 text-center font-normal text-grey'>
                  {text_message}
                </p>
              </div>
              {detail === "WhatsApp Business API" ? (
                <Whatsapp
                  onClose={onClose}
                  onConnect={onConnect}
                  Success={Success}
                />
              ) : (
                <div className='flex justify-center w-full'>
                  {detail === "Website Chat" ? (
                    <Buttons onClose={onClose} Success={Success} />
                  ) : detail === "" ? (
                    <Facebook />
                  ) : (
                    <button
                      type='button'
                      className='button'
                      onClick={() => {
                        onConnect();
                      }}
                    >
                      Connect {detail}
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
}
