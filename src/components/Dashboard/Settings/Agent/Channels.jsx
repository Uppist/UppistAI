/** @format */

import website from "../../../../assets/Dashboard/settings/agent/website.svg";
import whatsapp from "../../../../assets/Dashboard/settings/agent/whatsapp.svg";
import facebook from "../../../../assets/Dashboard/settings/agent/facebook.svg";
import ig from "../../../../assets/Dashboard/settings/agent/ig.svg";
import x from "../../../../assets/Dashboard/settings/agent/x.svg";
export default function Channels({
  selectedChannels = [],
  onChannelChange = () => {},
}) {
  const channels = [
    {
      id: "website",
      img: website,
      title: "Website Chat",
      p: "Embed widget",
    },
    {
      id: "whatsapp",
      img: whatsapp,
      title: "WhatsApp Business API",
      p: "Connect WhatsApp Business",
    },
    {
      id: "facebook",
      img: facebook,
      title: "Facebook",
      p: "Messenger",
    },
    {
      id: "instagram",
      img: ig,
      title: "Instagram",
      p: "Direct messages",
    },
    {
      id: "x",
      img: x,
      title: "X",
      p: "Direct messages",
    },
  ];

  function toggleChannel(channelId) {
    const updatedChannels = selectedChannels.includes(channelId)
      ? selectedChannels.filter((item) => item !== channelId)
      : [...selectedChannels, channelId];

    onChannelChange(updatedChannels);
  }

  return (
    <div className='flex flex-col gap-y-2'>
      <span className='text-sm font-bold text-black'>Assign to Channels</span>
      <div className='grid grid-cols-2 gap-4'>
        {channels.map((assign) => (
          <div
            className='flex items-center border border-light-grey p-4 rounded-xl justify-between'
            key={assign.id}
          >
            <div className='flex items-center gap-x-2'>
              <img src={assign.img} alt='' />
              <div className='flex flex-col gap-y-1'>
                <h3 className='text-xs text-black font-medium'>
                  {assign.title}
                </h3>
                <span className='text-[10px] font-normal text-grey'>
                  {assign.p}
                </span>
              </div>
            </div>

            {/*Checkbox button */}
            <input
              type='checkbox'
              className='hidden peer'
              id={`checkbox-${assign.id}`}
              checked={selectedChannels.includes(assign.id)}
              onChange={() => toggleChannel(assign.id)}
            />

            <label
              htmlFor={`checkbox-${assign.id}`}
              className=' w-5.5 h-5.5 rounded-full border-4 border-light-grey cursor-pointer block relative peer-checked:border-bg'
            >
              <span
                className='
      absolute
      top-1/2 left-1/2
      w-2.5 h-2.5
      rounded-full
      bg-bg
      -translate-x-1/2 -translate-y-1/2
      scale-0
      peer-checked:scale-100
      transition
    '
              ></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
