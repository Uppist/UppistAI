/** @format */

import { toast } from "react-toastify";
import api from "../../../../api/axios";
import { useContext, useState } from "react";
import { GetDocumentContext } from "../../../../contexts/Context";
import { Box, CircularProgress } from "@mui/material";

export default function DeleteBase({ onClose, id }) {
  const { setDocuments } = useContext(GetDocumentContext);
  const [isClick, setIsClick] = useState(false);

  function Delete() {
    setIsClick(true);
    api
      .delete(`kb/documents/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setDocuments((documents) => documents.filter((data) => data.id !== id));

        toast.success("Deleted Successfully");
        setTimeout(() => {
          onClose();
        }, 2000);
        setIsClick(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsClick(false);
      });
    // alert(id);
  }
  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      {/*Knowledge base Container */}
      <div className='absolute flex flex-col gap-y-4 w-[40%] p-8  bg-white rounded-lg items-end justify-center'>
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
        <div className='flex flex-col gap-y-6.5 w-full'>
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              Delete Knowledge Base?
            </span>
            <p className='text-grey text-base font-normal'>
              This will permanently remove this knowledge base and its
              configuration. This action cannot be undone.{" "}
            </p>
          </div>

          <div className='flex items-center justify-center gap-x-2'>
            <button
              type='button'
              onClick={onClose}
              className='p-3 px-10 rounded-lg border cursor-pointer border-light-grey text-sm font-semibold text-light-black'
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={Delete}
              className='bg-red p-3 px-10 cursor-pointer rounded-lg text-sm font-semibold text-white hover:bg-red-400 '
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
                    aria-label='loading...'
                    sx={{ color: "white" }}
                  />
                </Box>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
