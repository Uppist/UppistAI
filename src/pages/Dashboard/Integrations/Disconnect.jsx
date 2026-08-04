/** @format */

import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../api/axios";

export default function Disconnect({ detail, onClose, onDisconnect }) {
  const [loading, setLoading] = useState(false);
  console.log(detail);
  function handleDisconnect() {
    setLoading(true);

    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    //channel === whatsapp
    if (detail === "WhatsApp Business API") {
      api.delete("/channels/whatsapp", { headers }).then((res) => {
        console.log(res.data);
      });
    } else if (detail === "Instagram") {
      api.delete("/channels/instagram", { headers }).then((res) => {
        console.log(res.data);
      });
    }

    setTimeout(() => {
      toast.success("Disconnected Successfully!");
    }, 1000);
    setTimeout(() => {
      onDisconnect();
      onClose();
    }, 2000);
  }

  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      <div className='relative z-50 flex flex-col gap-y-4 bg-white rounded-lg p-8 items-end justify-center shadow-lg'>
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

        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <h3 className='text-sm font-semibold text-bg'>Disconnect {detail}</h3>

          <p className='w-90 text-center font-normal text-grey'>
            This will remove {detail} integration and its configuration.
          </p>

          <div className='flex items-center gap-x-6 mt-5'>
            <button
              type='button'
              className='border border-light-grey p-3 px-10 rounded-lg text-sm font-semibold text-light-black cursor-pointer'
              onClick={onClose}
            >
              Cancel
            </button>

            <button type='button' className='button' onClick={handleDisconnect}>
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
                "Disconnect"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
