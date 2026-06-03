/** @format */

import { useNavigate } from "react-router-dom";

export default function SeventhScreen() {
  const navigate = useNavigate();
  function Next() {
    navigate("/onboarding/8");
  }
  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <span className='text-bg text-sm font-normal'>Skip</span>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h2 className='m-0px text-black text-3xl font-bold'>Test your AI </h2>
        <span className='text-light text-base font-normal'>
          Preview how your assistant responds{" "}
        </span>
      </div>

      <div>
        <button
          type='button'
          className='bg-bg w-full p-4 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
          onClick={Next}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
}
