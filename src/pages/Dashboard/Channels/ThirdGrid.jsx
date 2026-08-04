/** @format */

import { useContext } from "react";
import { ChannelContext } from "../../../contexts/Context";

export default function ThirdGrid() {
  const { eachConversations } = useContext(ChannelContext);

  console.log(eachConversations);

  return (
    <div className=' border border-light-grey flex flex-col '>
      <div className='p-6 flex flex-col gap-y-1.5 border-b border-b-light-grey'>
        <h3 className='text-xs font-semibold text-black uppercase'>AI Agent</h3>
        {/* <span className='text-sm font-normal text-grey'>Josh</span> */}
      </div>
      <div className='p-6 flex flex-col gap-y-1.5 border-b border-b-light-grey'>
        <h4 className='text-xs font-semibold text-black uppercase'>
          AI Summary
        </h4>
        {/* <p className='text-sm font-normal text-grey'>
          Visitor inquired about order status. AI provided initial response with
          relevant information.{" "}
        </p> */}
      </div>
      <div className='p-6 flex flex-col gap-y-1.5 border-b border-b-light-grey'>
        <h3 className='text-xs font-semibold text-black uppercase'>
          Intent Tag
        </h3>
        {/* <span className='bg-pink text-bg px-2.5 py-1.5 w-fit rounded-sm text-[10px] font-medium'>
          Order Status
        </span> */}
      </div>
      <div className='p-6 flex flex-col gap-y-1.5 border-b border-b-light-grey'>
        <h3 className='text-xs font-semibold text-black uppercase'>
          Recent Activity
        </h3>
        {/* <ul className='flex flex-col gap-y-3'>
          <li className='text-sm font-normal text-grey'>· Pricing — 12m ago</li>
          <li className='text-sm font-normal text-grey'>
            {" "}
            · Started chat — 28m ago
          </li>
          <li className='text-sm font-normal text-grey'>
            {" "}
            · Previous order #4521
          </li>
        </ul> */}
      </div>
    </div>
  );
}
