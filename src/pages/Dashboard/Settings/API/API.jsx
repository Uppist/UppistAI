/** @format */

import { useContext, useEffect, useState } from "react";
import Generate from "./Generate";
import api from "../../../../api/axios";
import { CreateUserContext } from "../../../../contexts/Context";
import { formatDateTime } from "../../../../utils/DateTime";

export default function API() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [ApiGenerated, setApiGenerated] = useState([]);
  const { listAPI, setListAPI } = useContext(CreateUserContext);
  function handleGenerateAPI() {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    api
      .post("/keys", { label: "Website Widget" }, { headers })
      .then((res) => {
        setApiGenerated(res.data.key);
        setListAPI((listAPI) => {
          return [
            ...listAPI,
            {
              label: "Website Widget",
              created_at: new Date().toISOString(),
            },
          ];
        });
        setTimeout(() => {
          setOpenDropdown(true);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  console.log(listAPI);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleGenerateAPI();
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <>
      <div className='flex flex-col gap-y-3'>
        <div className='flex items-center justify-between'>
          {/*Search input */}
          <input
            className='input'
            placeholder='Search'
            type='search'
            name=''
            id=''
          />
          {/*Generate API button */}
          <button
            className='flex relative items-center gap-x-2 text-white text-sm font-semibold bg-bg p-3 rounded-lg cursor-pointer hover:opacity-50'
            onClick={handleGenerateAPI}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 3.33398V16.6673'
                stroke='white'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.3335 10H16.6668'
                stroke='white'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Generate API Key
          </button>

          {openDropdown && (
            <Generate
              onClose={() => setOpenDropdown(false)}
              apiKey={ApiGenerated}
              key={ApiGenerated}
            />
          )}
        </div>

        {/*Loop for generated APIs */}
        {listAPI.length === 0 && (
          <span className='text-sm text-grey font-medium'>
            No Keys Generated yet
          </span>
        )}
        <div className='grid grid-cols-4 gap-4'>
          {listAPI.map((api, index) => (
            <div
              className='p-4.5 border border-light-grey rounded-lg w-70.5 flex flex-col gap-y-5.5'
              key={index}
            >
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-black'>
                  {api.label}
                </span>
                {/*Menu */}
                <svg
                  className='cursor-pointer'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 11.3333C8.26522 11.3333 8.51957 11.4387 8.70711 11.6262C8.89464 11.8138 9 12.0681 9 12.3333C9 12.5985 8.89464 12.8529 8.70711 13.0404C8.51957 13.228 8.26522 13.3333 8 13.3333C7.73478 13.3333 7.48043 13.228 7.29289 13.0404C7.10536 12.8529 7 12.5985 7 12.3333C7 12.0681 7.10536 11.8138 7.29289 11.6262C7.48043 11.4387 7.73478 11.3333 8 11.3333ZM8 6.66667C8.26522 6.66667 8.51957 6.77202 8.70711 6.95956C8.89464 7.1471 9 7.40145 9 7.66667C9 7.93188 8.89464 8.18624 8.70711 8.37377C8.51957 8.56131 8.26522 8.66667 8 8.66667C7.73478 8.66667 7.48043 8.56131 7.29289 8.37377C7.10536 8.18624 7 7.93188 7 7.66667C7 7.40145 7.10536 7.1471 7.29289 6.95956C7.48043 6.77202 7.73478 6.66667 8 6.66667ZM8 2C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3C9 3.26522 8.89464 3.51957 8.70711 3.70711C8.51957 3.89464 8.26522 4 8 4C7.73478 4 7.48043 3.89464 7.29289 3.70711C7.10536 3.51957 7 3.26522 7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2Z'
                    fill='#667085'
                  />
                </svg>
              </div>

              <span className='text-[10px] font-normal text-grey'>
                {formatDateTime(api.created_at)}
              </span>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
}
