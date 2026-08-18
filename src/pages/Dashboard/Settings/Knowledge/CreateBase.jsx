/** @format */

import { useState } from "react";
import Upload from "../../../Authentication/Onboarding/Fifth/Upload/Upload";
import { Box, CircularProgress } from "@mui/material";
import api from "../../../../api/axios";
import { toast } from "react-toastify";

export default function CreateBase({ onClose }) {
  const [details, setDetails] = useState({
    file: "",
    url: "",
  });

  const [fileName, setFileName] = useState({ name: "", size: "" });
  const [isClick, setIsClick] = useState(false);

  function handleFile(e) {
    setDetails({ ...details, file: e.target.files[0] });
    setFileName({ name: e.target.files[0].name, size: e.target.files[0].size });
  }
  const submit = details.file || details.url;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  async function Next() {
    const payload = {
      url: `https://${details.url}`,
    };

    const token = localStorage.getItem("Token");

    setIsClick(true);

    try {
      // Upload PDF
      if (details.file) {
        const formData = new FormData();
        formData.append("file", details.file);

        const fileRes = await api.post("kb/upload", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("File response:", fileRes.data);

        // newDocuments.push(fileRes.data);
      }

      // Add URL
      if (details.url) {
        const urlRes = await api.post("kb/url", payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("URL response:", urlRes.data);

        // newDocuments.push(urlRes.data);
      }

      // Add the newly created documents to the existing frontend state
      //   setDocuments((documents) => [...documents, ...newDocuments]);

      toast.success("Upload successful!");
      onClose();
    } catch (err) {
      console.log(err.response);
      toast.error("Upload failed. Try again.");
    } finally {
      setIsClick(false);
    }
  }

  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      {/*Knowledge base Container */}
      <div className='absolute flex flex-col gap-y-4 w-[50%] p-8  bg-white rounded-lg items-end justify-center'>
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
          {" "}
          {/*Create Knowledge base text */}
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              Add Knowledge Base
            </span>
            <p className='text-grey text-base font-normal'>
              Teach your AI what it needs to know.
            </p>
          </div>
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-y-3'>
              <div className='flex flex-col gap-y-1'>
                <h3 className='text-black text-sm font-bold'>Upload Pdf</h3>
                <span className='text-light-black text-xs font-normal'>
                  Train AI on your documents
                </span>
              </div>

              <Upload handleFile={handleFile} fileName={fileName} />
            </div>

            <div className='flex flex-col gap-y-3 '>
              <label className='text-base text-black font-bold' htmlFor=''>
                Add Website URL
              </label>
              <span className='text-xs font-normal text-light-black -mt-3'>
                Crawl your website for AI training
              </span>
              <input
                type='text'
                className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
                name='url'
                id=''
                value={details.url}
                placeholder='Enter your website URL example: www.google.com'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              disabled={!submit}
              onClick={Next}
              className='bg-bg disabled:bg-disabled disabled:text-black  p-4 w-32 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
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
                "Add"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
