/** @format */

import { useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import api from "../../../api/axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export default function Step2() {
  const length = 6;
  const inputsRef = useRef([]);
  const [code, setCode] = useState(Array(length).fill(""));
  const [isClick, setIsClick] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const submit = code.every((digit) => digit !== "");
  const navigate = useNavigate();
  const location = useLocation();

  function Verify() {
    const data = {
      email: location?.state.email,
      code: code.join(""),
    };

    console.log(data.email);
    setIsClick(true);
    api
      .post("/auth/verify-email", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Token", res.data.accessToken);
        navigate("/email-verification", { state: location.state });
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.error);
        setIsClick(false);
      });
  }

  function resendCode() {
    api
      .post("/auth/resend-verification", { email: location?.state.email })
      .then((res) => {
        console.log(res.data);
        toast.success("Please check your mail for the new code");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  }

  return (
    <div className='flex flex-col justify-center gap-y-6 lg:p-20 lg:pb-140 animate-fade-up overflow-scroll no-scrollbar sm: p-10 sm: pb-30 sm: mt-20'>
      {location.state?.flow === "reset" && (
        <Link to={-1}>
          {" "}
          <div className='cursor-pointer flex items-center gap-x-2 text-black text-base font-normal'>
            <svg
              width='9'
              height='16'
              viewBox='0 0 9 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.74978 15.5008C7.55778 15.5008 7.36575 15.4278 7.21975 15.2808L0.21975 8.28079C-0.07325 7.98779 -0.07325 7.51275 0.21975 7.21975L7.21975 0.21975C7.51275 -0.07325 7.98779 -0.07325 8.28079 0.21975C8.57379 0.51275 8.57379 0.987785 8.28079 1.28079L1.81081 7.75076L8.28079 14.2207C8.57379 14.5137 8.57379 14.9888 8.28079 15.2818C8.13379 15.4278 7.94178 15.5008 7.74978 15.5008Z'
                fill='#2B2B2B'
              />
            </svg>

            <span>Back</span>
          </div>{" "}
        </Link>
      )}

      <div className='flex flex-col gap-y-2 justify-center'>
        <h2 className='m-0px text-black text-3xl font-bold'>
          Email Verification
        </h2>{" "}
        <span className='text-light font-normal text-xl'>
          Enter the 6-digit verification code sent to your email{" "}
        </span>
      </div>

      <div className='flex justify-center items-center lg:gap-8 sm: gap-3.5'>
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            value={code[i]}
            maxLength={1}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className='lg:w-14 lg:h-14 lg:mt-10 border uppercase border-light-grey rounded-md text-center text-lg outline-none sm: w-10 sm: h-10 sm: mt-2'
          />
        ))}
      </div>

      <button
        type='button'
        disabled={!submit}
        onClick={Verify}
        className='bg-bg disabled:bg-disabled disabled:text-black disabled:cursor-not-allowed w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
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
          "Verify Code"
        )}{" "}
      </button>

      <p className='text-center text-sm font-medium text-light'>
        Didn’t receive code?{" "}
        <span className='text-bg cursor-pointer' onClick={resendCode}>
          Resend
        </span>
      </p>
    </div>
  );
}
