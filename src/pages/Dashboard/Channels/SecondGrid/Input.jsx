/** @format */

import { toast } from "react-toastify";
import api from "../../../../api/axios";
import { useContext, useState } from "react";
import { ChannelContext } from "../../../../contexts/Context";

export default function Input() {
  const [text, setText] = useState("");

  const { selectedSessionId } = useContext(ChannelContext);

  async function Send() {
    const data = {
      message: text,
      takeover: true,
    };
    try {
      const res = await api.post(
        `/dashboard/conversations/${selectedSessionId}/agent-reply`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        },
      );
      console.log(res.data, "res.data");
      setText("");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send message");
    }
  }
  return (
    <div className='flex items-center z-1000 justify-between w-full bg-white rounded-lg border border-light-grey px-3 py-2'>
      <textarea
        className=' text-sm text-grey outline-none w-full resize-none'
        placeholder='Type a reply....'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/*Button send */}
      <svg
        width='32'
        onClick={Send}
        className='cursor-pointer hover:opacity-45'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='32' height='32' rx='12' fill='#FF9200' />
        <g clip-path='url(#clip0_508_4123)'>
          <path
            d='M17.6907 22.4577C17.716 22.5208 17.7601 22.5747 17.8169 22.6121C17.8737 22.6494 17.9406 22.6685 18.0086 22.6668C18.0766 22.665 18.1424 22.6426 18.1973 22.6023C18.2521 22.5621 18.2933 22.506 18.3154 22.4417L22.6487 9.77503C22.67 9.71596 22.6741 9.65203 22.6604 9.59073C22.6468 9.52943 22.6159 9.47329 22.5715 9.42888C22.5271 9.38447 22.471 9.35363 22.4097 9.33996C22.3484 9.32629 22.2844 9.33036 22.2254 9.3517L9.5587 13.685C9.49436 13.7071 9.43832 13.7483 9.39808 13.8031C9.35785 13.858 9.33535 13.9238 9.33361 13.9918C9.33186 14.0598 9.35096 14.1267 9.38834 14.1835C9.42571 14.2403 9.47958 14.2844 9.5427 14.3097L14.8294 16.4297C14.9965 16.4966 15.1483 16.5967 15.2757 16.7238C15.4032 16.851 15.5035 17.0027 15.5707 17.1697L17.6907 22.4577Z'
            stroke='white'
            stroke-width='1.33333'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M22.5693 9.43164L15.276 16.7243'
            stroke='white'
            stroke-width='1.33333'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_508_4123'>
            <rect
              width='16'
              height='16'
              fill='white'
              transform='translate(8 8)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
