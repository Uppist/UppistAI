/** @format */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../../api/axios";
import { Box, CircularProgress } from "@mui/material";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [isClick, setIsClick] = useState(false);

  const submit = email;

  const navigate = useNavigate();

  function Next() {
    setIsClick(true);
    api
      .post("/auth/forgot-password", { email: email })
      .then((res) => {
        console.log(res.data);
        navigate("/email-verification/verify-code", {
          state: { flow: "reset", email: email },
        });
      })
      .catch((err) => {
        console.log(err.response);
        setIsClick(false);
      });
  }

  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-10 animate-fade-up'>
      <Link to='/signin'>
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

      <div className='flex flex-col gap-y-2'>
        <h2 className='m-0px text-black text-3xl font-bold'>
          Forgot Password?
        </h2>
        <span className='text-light text-base font-normal'>
          Don’t worry we can help.{" "}
        </span>
      </div>

      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Work Email</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your company name'
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id=''
        />
      </div>

      <div>
        <button
          disabled={!submit}
          onClick={Next}
          className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
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
            "Next"
          )}
        </button>
      </div>
    </div>
  );
}
