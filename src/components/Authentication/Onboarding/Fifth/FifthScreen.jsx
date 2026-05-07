/** @format */
import { useState } from "react";
import Upload from "./Upload/Upload";
import { useNavigate } from "react-router-dom";

export default function FifthScreen() {
  const [details, setDetails] = useState({
    file: "",
    website: "",
  });

  const [fileName, setFileName] = useState({ name: "", size: "" });
  const navigate = useNavigate();

  function handleFile(e) {
    setDetails({ ...details, file: e.target.files[0] });
    setFileName({ name: e.target.files[0].name, size: e.target.files[0].size });
  }
  const submit = details.file && details.website;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function Next() {
    navigate("/onboarding/6");
  }
  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <span className='text-bg text-sm font-normal'>Skip</span>
      </div>
      {/* */}
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='m-0px text-black text-3xl font-bold'>
            Train your AI{" "}
          </h2>
          <span className='text-light text-base font-normal'>
            Give it knowledge so it can help your customers{" "}
          </span>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col gap-y-1'>
              <h3 className='text-black text-sm font-bold'>Upload Files</h3>
              <span className='text-light-black text-xs font-normal'>
                Accepted file types: img, png, jpeg.
                <br />
                Max size: 5mb
              </span>
            </div>

            <Upload handleFile={handleFile} fileName={fileName} />
          </div>

          <div className='flex flex-col gap-y-3 '>
            <label className='text-base text-black font-bold' htmlFor=''>
              Train from Website
            </label>
            <input
              type='text'
              className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
              name='website'
              id=''
              value={details.website}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button
            disabled={!submit}
            onClick={Next}
            className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
          >
            Train AI
          </button>
        </div>
      </div>
    </div>
  );
}
