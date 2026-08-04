/** @format */

import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function Assign() {
  const [isAssign, setIsAssign] = useState(false);
  function Enter() {
    setIsAssign(true);
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'></div>
      <div className='bg-white p-4 flex flex-col items-end gap-y-2.5 w-1/2'>
        <div className='flex flex-col z-100 items-center gap-y-2'>
          <h3 className='text-center text-xl text-bg font-semibold'>
            Assign New Agent{" "}
          </h3>
          <p className='text-base font-normal text-center text-grey w-9/12'>
            To assign new agent, select an agent from below, the chat will
            forwarded to another agent.
          </p>
          <div className='flex items-center gap-x-2'>
            <input type='password' name='api' className='input' id='' />
          </div>
          <button className='button w-full' onClick={Enter}>
            {isAssign ? (
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
              "Enter"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
