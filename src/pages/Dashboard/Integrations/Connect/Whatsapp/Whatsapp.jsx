/** @format */

import { useState } from "react";
import api from "../../../../../api/axios";
import { toast } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
export default function Whatsapp({ onClose, onConnect, Success }) {
  const [number, setNumber] = useState({
    number: "",
    business: "",
    token: "",
  });
  const [isClick, setIsClick] = useState(false);

  function handleClick(e) {
    setNumber({ ...number, [e.target.name]: e.target.value });
  }

  function Next() {
    const data = {
      phoneNumberId: number.number,
      wabaId: number.business,
      accessToken: number.token,
    };
    setIsClick(true);
    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };
    api
      .post("/channels/whatsapp", data, { headers })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          Success();
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response.message);
        setIsClick(false);
      });
  }

  const isNumber = number.number && number.business && number.token;
  return (
    <div className='flex flex-col gap-y-5'>
      {" "}
      <div className='flex items-baseline flex-col gap-y-2 px-8'>
        {/*Number ID */}
        <div className='w-full flex flex-col gap-y-2 items-baseline'>
          <label htmlFor='' className='text-sm font-bold text-black'>
            Phone Number ID
          </label>
          <input
            type='text'
            className='border border-light-grey w-full rounded-lg p-2.5 flex items-center outline-none bg-transparent text-sm font-normal text-black ml-1'
            name='number'
            value={number.number}
            onChange={handleClick}
            id=''
          />
        </div>

        {/*Whatsapp Business ID */}
        <div className='w-full flex flex-col gap-y-2 items-baseline'>
          <label htmlFor='' className='text-sm font-bold text-black'>
            Whatsapp Business ID
          </label>
          <input
            type='text'
            className='border border-light-grey w-full rounded-lg p-2.5 flex items-center outline-none bg-transparent text-sm font-normal text-black ml-1'
            name='business'
            value={number.business}
            onChange={handleClick}
            id=''
          />
        </div>

        {/**Access token */}
        <div className='w-full flex flex-col gap-y-2 items-baseline'>
          <label htmlFor='' className='text-sm font-bold text-black'>
            Access Token
          </label>
          <input
            type='password'
            className='border border-light-grey w-full rounded-lg p-2.5 flex items-center outline-none bg-transparent text-sm font-normal text-black ml-1'
            name='token'
            value={number.token}
            onChange={handleClick}
            id=''
          />
        </div>
      </div>
      {/*Next button */}
      <div className='flex items-center gap-x-4 justify-end'>
        <span
          className='text-sm font-semibold text-bg cursor-pointer'
          onClick={() => {
            onConnect();
            onClose();
          }}
        >
          Skip and Connect via Facebook
        </span>
        <button
          type='button'
          disabled={!isNumber}
          className='button'
          onClick={Next}
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
            "Connect"
          )}
        </button>
      </div>
    </div>
  );
}
