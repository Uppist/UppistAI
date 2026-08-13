/** @format */
import whatsapp from "../../../assets/Onboarding/socials/whatsapp.svg";
import web from "../../../assets/Onboarding/socials/website.svg";
import facebook from "../../../assets/Onboarding/socials/facebook.svg";
import ig from "../../../assets/Onboarding/socials/ig.svg";
import x from "../../../assets/Onboarding/socials/x.svg";
import email from "../../../assets/Dashboard/integrations/email.svg";
import { useContext, useState } from "react";
import Disconnect from "./Disconnect";
import Connect from "./Connect/Connect";
import { ChannelContext } from "../../../contexts/Context";

export default function Container({ active }) {
  const { activeChannel } = useContext(ChannelContext);
  const list = [
    {
      svg: whatsapp,
      channel: "WhatsApp Business API",
      text: "Connect WhatsApp Business API to enable seamless customer conversations on WhatsApp.",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: web,
      channel: "Website Chat",
      text: "Create and add website chat functionality on your website to engage with visitors and convert prospects into customers.",
      button: "Connect",
      button2: "Disconnect",
    },
    {
      svg: facebook,
      channel: "Facebook Messenger",
      text: "Connect Facebook Messenger to engage with your customers on the world's largest social platform.",
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
      svg: email,
      channel: "Email",
      text: "Connect and Communicate with your business support inbox.",
      button: "Connect",
      button2: "Disconnect",
    },
  ];

  const [openModal, setOpenModal] = useState(null);
  const [detail, setDetail] = useState("");
  const [channelStatus, setChannelStatus] = useState(() =>
    Object.fromEntries(list.map((item) => [item.channel, "none"])),
  );

  function normalizeChannel(channel) {
    return channel?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";
  }

  // Check if a channel is active
  function isChannelActive(channelName) {
    const normalizedName = normalizeChannel(channelName);

    return activeChannel?.some((channel) => {
      const normalizedChannel = normalizeChannel(channel.channel);

      return (
        channel.status?.toLowerCase() === "active" &&
        (normalizedName.includes(normalizedChannel) ||
          normalizedChannel.includes(normalizedName))
      );
    });
  }

  function handleClick(index, channel) {
    setOpenModal(index);
    setDetail(channel);
  }

  function handleConnect(channelName) {
    setChannelStatus((prev) => ({ ...prev, [channelName]: "connected" }));
    setOpenModal(null);
  }

  const normalizedActive = active?.toLowerCase();

  const visibleList =
    normalizedActive === "whatsapp"
      ? list.filter((item) => item.channel === "WhatsApp Business API")
      : normalizedActive === "website"
        ? list.filter((item) => item.channel === "Website Chat")
        : normalizedActive === "social_media"
          ? list.filter((item) =>
              ["Facebook Messenger", "Instagram", "X"].includes(item.channel),
            )
          : normalizedActive === "email"
            ? list.filter((item) => item.channel === "email")
            : list;

  function handleDisconnect(channelName) {
    setChannelStatus((prev) => ({ ...prev, [channelName]: "disconnected" }));

    setOpenModal(null);
  }
  return (
    <div className='grid grid-cols-4 items-center gap-10 relative'>
      {visibleList.map((data, index) => {
        const status = channelStatus[data.channel] || "none";
        const isConnected =
          status === "connected" ||
          (isChannelActive(data.channel) && status !== "disconnected");

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
                    onDisconnect={() => handleDisconnect(data.channel)}
                    isDisconnected={false}
                  />
                ) : (
                  <Connect
                    detail={detail}
                    onClose={() => setOpenModal(null)}
                    onConnect={() => handleConnect(data.channel)}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
