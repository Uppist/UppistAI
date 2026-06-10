/** @format */
import active from "../../../assets/Dashboard/dashboard/active.svg";
import ai from "../../../assets/Dashboard/dashboard/ai.svg";
import time from "../../../assets/Dashboard/dashboard/time.svg";
import contact from "../../../assets/Dashboard/dashboard/contact.svg";
import score from "../../../assets/Dashboard/dashboard/score.svg";
import RecentConversation from "./RecentConversation";
import ActiveConversation from "./ActiveConversation";
import TopIntent from "./TopIntent";

export default function Content() {
  const list = [
    {
      svg: active,
      text: "Active conversations",
      number: "142",
      increase: "↑ 18 in last hour",
    },
    {
      svg: ai,
      text: "Resolved by AI today",
      number: "3,841",
      increase: "↑ 11% vs yesterday",
    },
    {
      svg: time,
      text: "Avg. response time",
      number: "1.2s",
      increase: "↑ faster by 0.3s",
    },
    {
      svg: contact,
      text: "New contacts",
      number: "276",
      increase: "↑ 0.2 vs yesterday",
    },
    {
      svg: score,
      text: "Avg. CSAT score",
      number: "4.6/5",
      increase: "↑ 0.2 vs yesterday",
    },
  ];
  return (
    <div className='flex flex-col  gap-y-10 pl-6 mt-5 lg:h-140 2xl:h-190 overflow-scroll no-scrollbar w-auto pr-6'>
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
            <p className='text-[10px] font-medium text-green'>
              {data.increase}
            </p>
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
