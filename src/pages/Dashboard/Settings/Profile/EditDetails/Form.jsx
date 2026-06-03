/** @format */

import { useState } from "react";
import ChangePassword from "./ChangePassword";

export default function Form() {
  const [openPassword, setOpenPassword] = useState(false);

  function handleOpenPassword() {
    setOpenPassword(true);
  }
  return (
    <div className='w-screen flex flex-col gap-y-8'>
      <form action='' className='flex flex-col gap-y-4'>
        <div className='grid grid-cols-2 gap-x-9 justify-between'>
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>First Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name=''
              id=''
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Last Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name=''
              id=''
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-9 justify-between'>
          {" "}
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>Work Email</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='email'
              name=''
              id=''
            />
          </div>
          <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Company Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name=''
              id=''
            />
          </div>
        </div>
      </form>

      <div className='flex items-center justify-end gap-x-5'>
        <button
          type='button'
          onClick={handleOpenPassword}
          className='py-3 px-3 border border-light-grey rounded-lg text-sm font-bold text-black cursor-pointer hover:bg-light-grey'
        >
          Change Password
        </button>
        <button
          type='button'
          className='py-3 px-3 bg-bg border-none text-white rounded-lg cursor-pointer hover:opacity-50 text-sm font-bold '
        >
          Save Changes
        </button>

        {openPassword && (
          <ChangePassword onClose={() => setOpenPassword(false)} />
        )}
      </div>
    </div>
  );
}
