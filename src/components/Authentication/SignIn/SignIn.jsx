/** @format */

import { ToastContainer } from "react-toastify";
import logo from "../../../assets/signup/uppist.svg";
import google from "../../../assets/signup/Google.svg";

import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const submit = details.email && details.password.length >= 8;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  function Forgot() {
    navigate("/signin/forgot-password");
  }
  return (
    <>
      {" "}
      <div className='flex flex-col gap-y-18 p-20 pb-140 animate-fade-up overflow-scroll no-scrollbar'>
        <div className='flex flex-col gap-y-6 justify-center items-center'>
          <img src={logo} alt='Uppist Logo' />
          <span className='text-light font-normal text-xl'>
            AI omnichannel customer support platform
          </span>
        </div>

        <div className='flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-3xl text-black font-bold'>Welcome Back! </h2>
              <span className='text-light font-normal text-base'>
                Track, optimize, and scale your support{" "}
              </span>
            </div>
            <form action='' className='flex flex-col gap-y-4'>
              <Form details={details} handleChange={handleChange} />
            </form>
            <p
              onClick={Forgot}
              className='text-light font-normal text-sm text-center cursor-pointer'
            >
              Forgot Password?
            </p>

            <button
              type='submit'
              disabled={!submit}
              className='bg-bg disabled:bg-disabled disabled:text-black disabled:cursor-not-allowed w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
            >
              Login{" "}
            </button>
          </div>

          <div className='flex flex-col gap-y-8'>
            <div className='flex items-center gap-x-4'>
              <hr className='w-full border border-border' />
              <span>or</span>
              <hr className='w-full border border-border' />
            </div>

            <button
              type='button'
              className='flex items-center justify-center px-2 py-4 gap-x-4 bg-white border border-border2 text-black font-medium text-base cursor-pointer rounded-lg hover:bg-gray-100'
            >
              <img src={google} alt='Google Logo' />
              Login with Google
            </button>

            <span className='text-sm font-medium text-light text-center'>
              Don't have an account?{" "}
              <span className='text-bg cursor-pointer'>Create Account</span>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
