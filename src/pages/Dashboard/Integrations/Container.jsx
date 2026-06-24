/** @format */
import whatsapp from "../../../assets/Onboarding/socials/whatsapp.svg";
import web from "../../../assets/Onboarding/socials/website.svg";
import facebook from "../../../assets/Onboarding/socials/facebook.svg";
import ig from "../../../assets/Onboarding/socials/ig.svg";
import x from "../../../assets/Onboarding/socials/x.svg";
import zoho from "../../../assets/Onboarding/socials/ZOHO.svg";
import { useState } from "react";
import Disconnect from "./Disconnect";
import Connect from "./Connect/Connect";

export default function Container() {
  const list = [
    {
      svg: whatsapp,
      channel: "WhatsApp Business API",
      text: "Connect WhatsApp Business API via Facebook to enable seamless customer...",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: web,
      channel: "Website Chat",
      text: "Create and add website chat functionality on your website to engage with visitors and convert prospects into...",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: facebook,
      channel: "Facebook Messenger",
      text: "Connect Facebook Messenger to engage with your customers on the...",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: ig,
      channel: "Instagram",
      text: "Connect Instagram to reply to private messages and build strong brand connections.",
      button: "Connect",
      button2: "Disconnect",
      button3: "Connected",
      button4: "Disconnected",
    },
    {
      svg: x,
      channel: "X",
      text: "Connect X to reply to private messages and build strong brand connections.",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: zoho,
      channel: "Zoho",
      text: "Connect and Communicate in Real-time — Keeps remote teams aligned and connected.",
      button: "Connect",
      button2: "Disconnect",
    },
  ];

  const [openModal, setOpenModal] = useState(null);
  const [detail, setDetail] = useState("");
  const [channelStatus, setChannelStatus] = useState(() =>
    list.map(() => "none"),
  );

  function handleClick(index, channel) {
    setOpenModal(index);
    setDetail(channel);
  }

  function handleConnect(index) {
    setChannelStatus((prev) =>
      prev.map((status, i) => (i === index ? "connected" : status)),
    );
    setOpenModal(null);
  }

  function handleDisconnect(index) {
    setChannelStatus((prev) =>
      prev.map((status, i) => (i === index ? "none" : status)),
    );
    setOpenModal(null);
  }

  return (
    <div className='grid grid-cols-4 items-center gap-10 relative'>
      {list.map((data, index) => {
        const status = channelStatus[index] || "none";
        const isConnected = status === "connected";

        return (
          <div
            key={index}
            className='border border-light-grey p-4.5 w-full rounded-lg flex flex-col gap-y-4'
          >
            <img className='w-fit' src={data.svg} alt='' />

            <h3 className='text-sm font-semibold text-black'>{data.channel}</h3>

            <p className='text-[10px] font-normal text-grey'>{data.text}</p>

            <hr className='border border-light-grey' />

            <div className='w-full flex justify-end'>
              <button
                type='button'
                onClick={() => handleClick(index, data.channel)}
                className={
                  isConnected
                    ? "border border-light-grey rounded-lg text-black p-1.5 cursor-pointer text-xs"
                    : "rounded-lg border border-bg p-1.5 text-xs font-medium text-bg cursor-pointer"
                }
              >
                {isConnected ? data.button2 : data.button}
              </button>

              {openModal === index &&
                (isConnected ? (
                  <Disconnect
                    detail={detail}
                    index={index}
                    onClose={() => setOpenModal(null)}
                    onDisconnect={() => handleDisconnect(index)}
                    isDisconnected={false}
                  />
                ) : (
                  <Connect
                    detail={detail}
                    onClose={() => setOpenModal(null)}
                    onConnect={() => handleConnect(index)}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
