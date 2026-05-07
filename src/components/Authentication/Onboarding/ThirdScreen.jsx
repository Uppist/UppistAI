/** @format */

import social1 from "../../../assets/Onboarding/socials/website.svg";
import social2 from "../../../assets/Onboarding/socials/whatsapp.svg";
import social3 from "../../../assets/Onboarding/socials/facebook.svg";
import social4 from "../../../assets/Onboarding/socials/ig.svg";
import social5 from "../../../assets/Onboarding/socials/x.svg";
import { useNavigate } from "react-router-dom";
export default function ThirdScreen() {
  const socials = [
    {
      img: social1,
      text: "Website Chat",
      p: "Embed widget",
      link: "",
    },
    {
      img: social2,
      text: "WhatsApp Business API",
      p: "Connect WhatsApp Business API",
      link: "",
    },
    {
      img: social3,
      text: "Facebook",
      p: "Messenger",
      link: "",
    },
    {
      img: social4,
      text: "Instagram",
      p: "Direct messages",
      link: "",
    },
    {
      img: social5,
      text: "X",
      p: "Direct messages",
      link: "",
    },
  ];
  const navigate = useNavigate();
  function Next() {
    navigate("/onboarding/4");
  }
  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <span className='text-bg text-sm font-normal'>Skip</span>
      </div>
      {/* */}
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='m-0px text-black text-3xl font-bold'>
            Connect channels
          </h2>
          <span className='text-light text-base font-normal'>
            Where do your customers reach you?{" "}
          </span>
        </div>
        <div className='flex flex-col gap-y-6'>
          {socials.map((item) => (
            <div className=' flex items-center justify-between p-4 border border-light-grey  rounded-lg '>
              <div className='flex items-center gap-x-3'>
                <img src={item.img} alt='' />
                <div>
                  <span className='text-sm text-black font-medium'>
                    {item.text}
                  </span>
                  <p className='text-xs text-light font-normal'>{item.p}</p>
                </div>
              </div>

              <button
                type='button'
                className='rounded-lg border border-light-grey p-2 text-xs font-medium text-black cursor-pointer hover:bg-light-grey'
              >
                Connect
              </button>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={Next}
            className='bg-bg  w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
