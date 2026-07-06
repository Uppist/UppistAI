/** @format */

import { useNavigate } from "react-router-dom";
import icon1 from "../../../assets/Onboarding/icon1.svg";
import icon2 from "../../../assets/Onboarding/icon2.svg";
import icon3 from "../../../assets/Onboarding/icon3.svg";
export default function FirstScreen() {
  const list = [
    { img: icon1, text: "Omnichannel inboxes" },
    { img: icon2, text: "AI-powered replies" },
    { img: icon3, text: "Analytics & insights" },
  ];

  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/onboarding/2");
  }

  return (
    <div className='flex flex-col lg:h-screen justify-center gap-y-10 p-10 animate-fade-up sm: mt-20'>
      <div className='flex flex-col gap-y-2'>
        <h2 className='m-0px text-black text-3xl font-bold sm: w-50'>
          Welcome to Uppist AI
        </h2>
        <span className='text-light text-base font-normal'>
          Let's set up your AI support in a few quick steps
        </span>
      </div>

      <div className='flex flex-col gap-y-6'>
        {list.map((item) => (
          <div className='flex items-center gap-x-3 p-4 border border-light-grey rounded-lg'>
            <img src={item.img} alt='' />
            <span className='text-sm text-light font-normal'>{item.text}</span>
          </div>
        ))}
      </div>

      <div>
        <button
          type='button'
          className='bg-bg w-full p-4 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
