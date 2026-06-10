/** @format */

import { useState } from "react";
import ChangePassword from "./ChangePassword";
import { toast } from "react-toastify";

export default function Form() {
  const [openPassword, setOpenPassword] = useState(false);

  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
  });

  const changes =
    details.company_name ||
    details.first_name ||
    details.last_name ||
    details.email;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleOpenPassword() {
    setOpenPassword(true);
  }

  function Changes() {
    toast.success("Updated Succesfully");
  }

  return (
    <div className='w-screen flex flex-col gap-y-8'>
      <form action='' className='flex flex-col gap-y-4'>
        <div className='grid grid-cols-2 gap-x-9 justify-between'>
          {/*First Name */}
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>First Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='first_name'
              value={details.first_name}
              onChange={handleChange}
              id=''
            />
          </div>

          {/*Last Name */}
          <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Last Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='last_name'
              value={details.last_name}
              onChange={handleChange}
              id=''
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-9 justify-between'>
          {" "}
          {/*Email */}
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>Work Email</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='email'
              name='email'
              value={details.email}
              onChange={handleChange}
              id=''
            />
          </div>
          {/*Company Name */}
          <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Company Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='company_name'
              value={details.company_name}
              onChange={handleChange}
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
          disabled={!changes}
          className='button'
          onClick={Changes}
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
