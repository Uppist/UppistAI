/** @format */

import { toast } from "react-toastify";
import logo from "../../../assets/signup/uppist.svg";
import google from "../../../assets/signup/Google.svg";

import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Animation/Loader";
import api from "../../../api/axios";
import { Box, CircularProgress } from "@mui/material";

export default function SignIn({ appLoading, setAppLoading }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [isClick, setIsClick] = useState(false);

  const submit = details.email && details.password.length >= 8;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  function Forgot() {
    navigate("/signin/forgot-password");
  }

  function Next() {
    const data = {
      email: details.email,
      password: details.password,
    };

    setIsClick(true);

    setTimeout(() => {
      api
        .post("auth/login", data)
        .then((res) => {
          console.log(res);
          setAppLoading(true);
          localStorage.setItem("Token", res.data.accessToken);
          setTimeout(() => {
            navigate("/dashboard");
            setAppLoading(false);
            setIsClick(false);
          }, 4000);
        })
        .catch((err) => {
          console.log(err.response);
          setAppLoading(false);
          setTimeout(() => {
            setAppLoading(false);
            setIsClick(false);
            toast.error("Email or password is incorrect! Try again");
          }, 2000);
        });
    }, 2500);
  }

  if (appLoading) {
    <Loader />;
    return;
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
              onClick={Next}
              className='bg-bg disabled:bg-disabled disabled:text-black disabled:cursor-not-allowed w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
            >
              {isClick ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    size={20}
                    sx={{ color: "white" }}
                    aria-label='loading...'
                  />
                </Box>
              ) : (
                "Login"
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
              Login with Google
            </button>

            <span className='text-sm font-medium text-light text-center'>
              Don't have an account?{" "}
              <span
                className='text-bg cursor-pointer'
                onClick={() => navigate("/")}
              >
                Create Account
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
