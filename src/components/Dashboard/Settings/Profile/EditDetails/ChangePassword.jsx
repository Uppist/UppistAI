/** @format */

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ChangePassword({ onClose }) {
  const [resetPassword, setResetPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function handleChange(e) {
    setResetPassword({ ...resetPassword, [e.target.name]: e.target.value });
  }

  const submit =
    resetPassword.currentPassword &&
    resetPassword.newPassword.length >= 8 &&
    resetPassword.confirmNewPassword.length >= 8;

  function handleSubmit() {
    if (resetPassword.newPassword !== resetPassword.confirmNewPassword) {
      toast.error("New password and confirm new password do not match.");
      return;
    } else if (resetPassword.currentPassword === resetPassword.newPassword) {
      toast.error("New password cannot be the same as current password.");
      return;
    } else {
      toast.success("Password changed successfully.");
      setTimeout(() => {
        onClose();
      }, 2500);
    }
  }
  return (
    <div className='absolute top-17 right-0 left-18 bottom-0 flex item-center justify-center z-10'>
      {/*overlay */}

      <div
        className='fixed top-0 left-0 right-0 bottom-0 bg-overlay cursor-pointer'
        onClick={onClose}
      ></div>
      {/*User Container */}
      <div className='absolute flex flex-col gap-y-4 w-1/2  bg-white rounded-lg p-4  items-end justify-center'>
        <svg
          className='cursor-pointer flex'
          onClick={onClose}
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
        <div className='flex flex-col gap-y-6.5 w-full'>
          {" "}
          {/*Create Agent text */}
          <div className='flex flex-col gap-y-2 items-center'>
            <span className='text-xl font-semibold text-bg'>
              Change Password
            </span>
            <p className='text-grey text-base font-normal w-auto text-center'>
              Don’t worry we can help.
            </p>
          </div>
          {/*Change Password */}
          <div className='flex flex-col gap-y-6 px-20'>
            {/*Current Password */}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text'>Current Password</span>
              <input
                type='password'
                name='currentPassword'
                value={resetPassword.currentPassword}
                onChange={handleChange}
                className='input'
                id=''
              />
            </div>
            {/*New Password */}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text'>New Password</span>
              <input
                type='password'
                name='newPassword'
                value={resetPassword.newPassword}
                onChange={handleChange}
                className='input'
                id=''
              />
            </div>
            {/*Confirm New Password */}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text'>Confirm New Password</span>
              <input
                type='password'
                name='confirmNewPassword'
                value={resetPassword.confirmNewPassword}
                onChange={handleChange}
                className='input'
                id=''
              />
            </div>

            {/*Submit Button */}
            <button
              className='button'
              onClick={handleSubmit}
              disabled={!submit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
