/** @format */
import { useState } from "react";
import Upload from "./Upload/Upload";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import api from "../../../../api/axios";
import { toast } from "react-toastify";

export default function FifthScreen() {
  const [details, setDetails] = useState({
    file: "",
    url: "",
  });

  const [fileName, setFileName] = useState({ name: "", size: "" });
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();

  function handleFile(e) {
    setDetails({ ...details, file: e.target.files[0] });
    setFileName({ name: e.target.files[0].name, size: e.target.files[0].size });
  }
  const submit = details.file && details.url;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  async function Next() {
    const formData = new FormData();
    formData.append("file", details.file);

    const payload = {
      url: details.url,
    };

    const token = localStorage.getItem("Token");

    setIsClick(true);

    try {
      const [fileRes, urlRes] = await Promise.all([
        api.post("kb/upload", formData, {
          headers: { Authorization: `Bearer ${token}` },
        }),

        api.post("kb/url", payload, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      console.log(fileRes.data);
      console.log(urlRes.data);

      toast.success("Upload successful!");

      setTimeout(() => {
        navigate("/onboarding/6");
      }, 2000);
    } catch (err) {
      console.log(err.response);
      toast.error("Upload failed. Try again.");
    } finally {
      setIsClick(false);
    }
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
              name='url'
              id=''
              value={details.url}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button
            disabled={!submit}
            onClick={Next}
            className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
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
              "Train AI"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
