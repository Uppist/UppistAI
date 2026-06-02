/** @format */

import { useState } from "react";
import Uploaded from "../../../Authentication/Onboarding/Fifth/Upload/Uploaded";
import img from "../../../../assets/Onboarding/Upload.svg";

export default function UploadKnowledge() {
  const [details, setDetails] = useState({
    file: "",
    website: "",
  });

  const [fileName, setFileName] = useState({ name: "", size: "" });
  function handleFile(e) {
    setDetails({ ...details, file: e.target.files[0] });
    setFileName({ name: e.target.files[0].name, size: e.target.files[0].size });
  }

  return (
    <div className='flex flex-col'>
      <div className='relative rounded-lg px-4 py-2'>
        <svg className='absolute inset-0 w-full h-full pointer-events-none'>
          <rect
            x='1'
            y='1'
            width='calc(100% - 2px)'
            height='calc(100% - 2px)'
            fill='none'
            opacity='0.5'
            stroke='var(--color-bg)'
            strokeWidth='2'
            strokeDasharray='16 8'
            rx='8'
          />
        </svg>
        <div className='flex items-center justify-between rounded-lg px-4 py-2 gap-x-4'>
          <img src={img} alt='Upload' />
          <div className='flex items-center gap-x-3'>
            <input
              type='file'
              name='file'
              id='upload-file'
              className='hidden'
              onChange={handleFile}
            />
            <label
              htmlFor='upload-file'
              o
              className='bg-bg text-white px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer'
            >
              Upload
            </label>
          </div>
        </div>
      </div>

      {fileName.name && (
        <Uploaded fileName={fileName} handleFile={handleFile} />
      )}
    </div>
  );
}
