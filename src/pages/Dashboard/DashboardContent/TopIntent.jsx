/** @format */

import { useContext } from "react";
import { DashboardContext } from "../../../contexts/Context";

export default function TopIntent() {
  const { topIntent } = useContext(DashboardContext);
  console.log(topIntent);
  return (
    <>
      {topIntent.length > 0 && (
        <div className='border border-light-grey rounded-2xl p-4 flex flex-col gap-y-9 h-fit'>
          <h3 className='text-base font-semibold text-black'>
            Top Intent Tags
          </h3>
          {topIntent.map((data) => (
            <div className='flex flex-col gap-y-4'>
              <div className='flex items-center justify-between text-sm text-grey'>
                <span className='font-medium'>{data.tag}</span>
                <p className='font-normal'>{data.count}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
