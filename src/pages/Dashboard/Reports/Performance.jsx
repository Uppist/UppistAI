/** @format */
import React from "react";

export default function Performance() {
  return (
    <div className='flex flex-col gap-y-7.5'>
      <div className='flex flex-col gap-y-1.5'>
        <h3 className='font-semibold text-black'>
          Omni-Channel performance breakdown Results across all channels.
        </h3>
        <span className='text-sm font-normal text-grey'>
          Results across all channels.
        </span>
      </div>

      <div className='grid grid-cols-8'>
        <span className='text-sm font-normal text-light-black'>Channel</span>
        <span className='text-sm font-normal text-light-black'>
          Conversations
        </span>
        <span className='text-sm font-normal text-light-black'>
          AI Resolved
        </span>
        <span className='text-sm font-normal text-light-black'>
          Live Agents Resolved
        </span>
        <span className='text-sm font-normal text-light-black'>
          Fallback Rate
        </span>
        <span className='text-sm font-normal text-light-black'>
          Avg. Response
        </span>
        <span className='text-sm font-normal text-light-black'>CSAT</span>
        <span className='text-sm font-normal text-light-black'>Trend</span>
      </div>
    </div>
  );
}
