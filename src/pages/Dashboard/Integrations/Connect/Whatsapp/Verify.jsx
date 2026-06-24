/** @format */

import { Box, CircularProgress } from "@mui/material";
import { useRef, useState } from "react";

export default function Verify({ onClose, Success }) {
  const length = 6;
  const inputsRef = useRef([]);
  const [code, setCode] = useState(Array(length).fill(""));
  const [loading, setLoading] = useState(false);

  {
    /*Verify Code */
  }
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

  function Connect() {
    setLoading(true);

    // toast.success("Connected Successfully!");

    setTimeout(() => {
      Success();

      //   onConnect();
    }, 2000);
  }
  return (
    <div className='flex flex-col gap-y-9'>
      {" "}
      <div className='flex items-baseline flex-col gap-y-2'>
        <label htmlFor='' className='text-sm font-bold text-black'>
          Enter the 6-digit code
        </label>
        <div className='flex justify-center items-center gap-8'>
          {Array.from({ length }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              value={code[i]}
              maxLength={1}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className='w-12 h-12 border uppercase border-light-grey rounded-md text-center text-lg outline-none'
            />
          ))}
        </div>{" "}
      </div>
      {/*Next button */}
      <div className='flex items-center gap-x-4 justify-center'>
        <button
          type='button'
          className='border border-light-grey p-3 px-10 rounded-lg text-sm font-semibold text-light-black cursor-pointer'
          onClick={onClose}
        >
          Cancel
        </button>{" "}
        <button
          type='button'
          className='button'
          disabled={!submit}
          onClick={Connect}
        >
          {loading ? (
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
            "Verify & Connect"
          )}
        </button>
      </div>
    </div>
  );
}
