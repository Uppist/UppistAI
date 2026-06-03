/** @format */

import logo from "../../../../assets/signup/uppist.svg";
import google from "../../../../assets/signup/Google.svg";
import Name from "./Form/Name";
import Password from "./Form/Password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
import api from "../../../../api/axios";

export default function Step1() {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  const submit =
    details.full_name &&
    details.email &&
    details.password.length >= 8 &&
    details.confirm_password.length >= 8;
  function handleChange(e) {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const data = {
    email: details.email,
    password: details.password,
    companyName: "companyName",
  };

  function Create() {
    if (details.password !== details.confirm_password) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
      });
      return;
    } else {
      api
        .post("auth/register", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("Token", res.data.accessToken);
          setIsClick(true);
        })
        .catch((err) => {
          console.log(err);
        });

      setTimeout(() => {
        setIsClick(false);
        navigate("/email-verification/verify-code", {
          state: { flow: "signup" },
        });
      }, 2000);
    }
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
              <h2 className='text-3xl text-black font-bold'>
                Create your account
              </h2>
              <span className='text-light font-normal text-base'>
                Get started under 2 minutes
              </span>
            </div>
            <form action='' className='flex flex-col gap-y-4'>
              <Name handleChange={handleChange} details={details} />
              <Password handleChange={handleChange} details={details} />
            </form>
            <p className='text-light font-normal text-sm'>
              By creating your account, you are agreeing to our{" "}
              <span className='text-bg cursor-pointer'>
                Terms and Conditions
              </span>
            </p>

            <button
              type='submit'
              disabled={!submit}
              className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
              onClick={Create}
            >
              {isClick ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress
                    size={20}
                    aria-label='loading...'
                    sx={{ color: "white" }}
                  />
                </Box>
              ) : (
                "Create Account"
              )}
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
              Sign up with Google
            </button>

            <span className='text-sm font-medium text-light text-center'>
              Already have an account?{" "}
              <span className='text-bg cursor-pointer'>Login</span>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
