/** @format */

import { useState } from "react";
import reply from "../../../assets/Onboarding/rules/reply.svg";
import route from "../../../assets/Onboarding/rules/route.svg";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

export default function SixthScreen() {
  const [checked, setChecked] = useState({
    autoReply: false,
    smartRouting: false,
  });

  const handleChange = (event, key) => {
    setChecked({ ...checked, [key]: event.target.checked });
  };
  const socials = [
    {
      img: reply,
      text: "Auto Reply",
      p: "AI responds instantly to common queries",
      link: "",
    },
    {
      img: route,
      text: "Smart Routing",
      p: "Direct chats to the right team",
      link: "",
    },
  ];
  const navigate = useNavigate();

  function Next() {
    navigate("/onboarding/7");
  }
  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <span className='text-bg text-sm font-normal'>Skip</span>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h2 className='m-0px text-black text-3xl font-bold'>
          Automation Rules{" "}
        </h2>
        <span className='text-light text-base font-normal'>
          Configure how your AI handles conversations
        </span>
      </div>

      <div className='flex flex-col gap-y-6'>
        {socials.map((item, index) => {
          const keys = Object.keys(checked);
          const key = keys[index];
          return (
            <div
              key={index}
              className='flex items-center justify-between p-4 border border-light-grey rounded-lg'
            >
              <div className='flex items-center gap-x-3'>
                <img src={item.img} alt='' />
                <div>
                  <span className='text-sm text-black font-medium'>
                    {item.text}
                  </span>
                  <p className='text-xs text-light font-normal'>{item.p}</p>
                </div>
              </div>

              <Switch
                checked={checked[key]}
                onChange={(event) => handleChange(event, key)}
                size='small'
                color='warning'
              />
            </div>
          );
        })}
      </div>

      <div>
        <button
          type='button'
          className='bg-bg w-full p-4 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
          onClick={Next}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
}
