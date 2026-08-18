/** @format */
import active from "../../../assets/Dashboard/dashboard/active.svg";
import ai from "../../../assets/Dashboard/dashboard/ai.svg";
import time from "../../../assets/Dashboard/dashboard/time.svg";
import contact from "../../../assets/Dashboard/dashboard/contact.svg";
import score from "../../../assets/Dashboard/dashboard/score.svg";
import Conversation from "./Conversations";
import Distribution from "./Distribution";
import Performance from "./Performance";
import { useContext } from "react";
import { ReportContext } from "../../../contexts/Context";
import ActiveConversation from "../DashboardContent/ActiveConversation";
import TopIntent from "../DashboardContent/TopIntent";

const safeMetricValue = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "")
    return Number(value) || 0;
  if (Array.isArray(value)) return value.length;
  return 0;
};
export default function Reports() {
  const {
    totalConversations,
    resolved,
    responseTime,
    Csat,
    liveAgentResolved,
    contacts,
  } = useContext(ReportContext);
  const list = [
    {
      svg: active,
      text: "Total conversations",
      number: safeMetricValue(totalConversations.value),
      increase: `↑ ${safeMetricValue(totalConversations.percentChange)}% vs last week`,
    },
    {
      svg: ai,
      text: "Resolved by AI",
      number: `${safeMetricValue(resolved.percent)}%`,
      increase: `↑ ${safeMetricValue(resolved.percentChange)}% vs last week`,
    },
    {
      svg: ai,
      text: "Live Agents Resolved",
      number: `${safeMetricValue(liveAgentResolved.percent)}%`,
      increase: `↑ ${safeMetricValue(liveAgentResolved.percentChange)}% vs last week`,
    },
    {
      svg: time,
      text: "Avg. response time",
      number: `${responseTime.seconds}s`,
      increase: `↑ faster by ${safeMetricValue.deltaSeconds}s`,
    },
    {
      svg: contact,
      text: "New contacts",
      number: safeMetricValue(contacts.value),
      increase: `↑ ${safeMetricValue(contacts.percentChange)}% vs last week`,
    },
    {
      svg: score,
      text: "Avg. CSAT score",
      number: `${safeMetricValue(Csat.value)}/${safeMetricValue(Csat.scale)}`,
      increase: `↑ ${safeMetricValue(Csat.delta)}s vs yesterday`,
    },
  ];
  return (
    <div className='flex flex-col  gap-y-10 pl-6 mt-5 lg:h-140 2xl:h-190 overflow-scroll no-scrollbar w-auto pr-6'>
      <div className='flex items-center justify-between'>
        <input
          type='search'
          className='input'
          placeholder='Search'
          name=''
          id=''
        />
        {/*Details */}
        <div className='flex relative items-center gap-x-5'>
          {/*dropdown for all channels */}
          <div className='flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm'>
            <span className='text-light-black text-sm font-semibold'>
              All Channels{" "}
            </span>
            <svg
              cursor={"pointer"}
              width='24'
              height='24'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.5'>
                <path
                  d='M4 6L8 10L12 6'
                  stroke='currentColor'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </div>
          {/*dropdown for all time */}
          <div className='flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M6.6665 0.833008C7.12674 0.833008 7.49984 1.2061 7.49984 1.66634V2.49967H12.4998V1.66634C12.4998 1.2061 12.8729 0.833008 13.3332 0.833008C13.7934 0.833008 14.1665 1.2061 14.1665 1.66634V2.49967H14.9998C16.8408 2.49967 18.3332 3.99206 18.3332 5.83301V14.9997C18.3332 16.8406 16.8408 18.333 14.9998 18.333H4.99984C3.15889 18.333 1.6665 16.8406 1.6665 14.9997V5.83301C1.6665 3.99206 3.15889 2.49967 4.99984 2.49967H5.83317V1.66634C5.83317 1.2061 6.20627 0.833008 6.6665 0.833008ZM12.4998 4.16634C12.4998 4.62658 12.8729 4.99967 13.3332 4.99967C13.7934 4.99967 14.1665 4.62658 14.1665 4.16634H14.9998C15.9203 4.16634 16.6665 4.91253 16.6665 5.83301V6.24967H3.33317V5.83301C3.33317 4.91253 4.07936 4.16634 4.99984 4.16634H5.83317C5.83317 4.62658 6.20627 4.99967 6.6665 4.99967C7.12674 4.99967 7.49984 4.62658 7.49984 4.16634H12.4998ZM16.6665 7.91634H3.33317V14.9997C3.33317 15.9201 4.07936 16.6663 4.99984 16.6663H14.9998C15.9203 16.6663 16.6665 15.9201 16.6665 14.9997V7.91634Z'
                fill='#2B2B2B'
                fillOpacity='0.8'
              />
            </svg>
            <span className='text-light-black text-sm font-semibold'>
              All time{" "}
            </span>
            <svg
              cursor={"pointer"}
              width='24'
              height='24'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g opacity='0.5'>
                <path
                  d='M4 6L8 10L12 6'
                  stroke='currentColor'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </div>

          {/*Download CSV button */}
          <button className='flex items-center gap-x-2 rounded-lg bg-bg border-none text-white text-sm font-semibold py-2.5 px-3 cursor-pointer hover:opacity-50'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.3333 14.1667L9.99996 17.5L6.66663 14.1667M9.99996 17.5V10M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613'
                stroke='white'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Download CSV
          </button>
        </div>
      </div>

      {/*first container */}
      <div className='grid grid-cols-6 gap-x-7 w-full'>
        {list.map((data, index) => (
          <div
            className='border border-light-grey p-4 flex flex-col gap-y-2.5 rounded-lg'
            key={index}
          >
            <div className='flex items-center gap-x-2'>
              <img src={data.svg} alt='' />
              <span className='text-xs font-normal text-grey'>{data.text}</span>
            </div>
            <span className='text-xl font-semibold text-black'>
              {data.number}
            </span>
            <p className='text-[10px] font-medium text-green'>
              {data.increase}
            </p>
          </div>
        ))}
      </div>

      {/*Second container */}
      <div className='grid grid-cols-2 gap-x-10'>
        <Conversation />
        <Distribution />
      </div>

      {/*third */}
      {/* <Performance /> */}
      <div className='grid grid-cols-2 gap-5'>
        <ActiveConversation />
        <TopIntent />
      </div>
    </div>
  );
}
