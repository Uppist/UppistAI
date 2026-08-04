/** @format */
import active from "../../../assets/Dashboard/dashboard/active.svg";
import ai from "../../../assets/Dashboard/dashboard/ai.svg";
import time from "../../../assets/Dashboard/dashboard/time.svg";
import agent from "../../../assets/Dashboard/dashboard/agent.svg";
import score from "../../../assets/Dashboard/dashboard/score.svg";
import RecentConversation from "./RecentConversation";
import ActiveConversation from "./ActiveConversation";
import TopIntent from "./TopIntent";
import { useContext, useState } from "react";
import { DashboardContext, UserContext } from "../../../contexts/Context";
import { useNavigate } from "react-router-dom";

const safeMetricValue = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "")
    return Number(value) || 0;
  if (Array.isArray(value)) return value.length;
  return 0;
};

export default function Content() {
  const { conversations, resolved, responseTime, onlineAgent, Csat } =
    useContext(DashboardContext);
  const list = [
    {
      svg: active,
      text: "Active conversations",
      number: safeMetricValue(conversations),
      increase: "↑ 18 in last hour",
    },
    {
      svg: ai,
      text: "Resolved by AI today",
      number: safeMetricValue(resolved),
      increase: "↑ 11% vs yesterday",
    },
    {
      svg: agent,
      text: "Online Live Agents",
      number: safeMetricValue(onlineAgent),
      increase: "↑ 0.2 vs yesterday",
    },
    {
      svg: time,
      text: "Avg. response time",
      number: safeMetricValue(responseTime),
      increase: "↑ faster by 0.3s",
    },
    {
      svg: score,
      text: "Avg. CSAT score",
      number: safeMetricValue(Csat),
      increase: "↑ 0.2 vs yesterday",
    },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const { userDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const shouldShowOnboardingBanner =
    userDetails?.tenant?.onboardingCompleted === false && isVisible;

  return (
    <div className='flex flex-col  gap-y-10 pl-6 mt-5 lg:h-140 2xl:h-190 overflow-scroll no-scrollbar w-auto pr-6'>
      {/*If onboarding is not completed */}
      {shouldShowOnboardingBanner ? (
        <div className='flex flex-col gap-y-5 items-end bg-pink border border-bg p-8 w-full  rounded-2xl'>
          {/*Cancel */}
          <svg
            className='cursor-pointer flex'
            onClick={() => setIsVisible(false)}
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
          {/*Content */}
          <div className='flex w-full justify-between '>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-base font-semibold text-black'>
                You're almost ready to go
              </h3>
              <span className='text-base font-normal text-black'>
                Some setup steps are still incomplete. Complete your onboarding
                to unlock the full experience and ensure everything works
                correctly.
              </span>
            </div>
            <button
              className='bg-bg rounded-lg py-1 px-2 text-sm font-semibold text-white cursor-pointer hover:opacity-50'
              onClick={() => navigate("/integrations")}
            >
              Continue Setup
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/*first container */}
      <div className='grid grid-cols-5 gap-x-10 w-full'>
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
            {/* <p className='text-[10px] font-medium text-green'>
              {data.increase}
            </p> */}
          </div>
        ))}
      </div>

      {/*Second container */}
      <div className='grid grid-cols-3 gap-x-10'>
        <RecentConversation />
        <ActiveConversation />
        <TopIntent />
      </div>
    </div>
  );
}
