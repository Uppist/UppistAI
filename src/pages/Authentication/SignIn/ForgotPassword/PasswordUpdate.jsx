/** @format */

import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/Animation/Loader";

export default function PasswordUpdate({ appLoading, setAppLoading }) {
  const navigate = useNavigate();
  function Next() {
    setAppLoading(true);

    setTimeout(() => {
      setAppLoading(false);
      navigate("/signin");
    }, 2000);
  }

  if (appLoading) {
    <Loader />;
    return;
  }
  return (
    <div className='flex flex-col justify-center gap-y-6 p-20 pb-140 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='flex flex-col gap-y-2 justify-center'>
        <h2 className='m-0px text-black text-3xl font-bold'>
          Password Update Successful{" "}
        </h2>{" "}
        <span className='text-light font-normal text-xl'>
          Your password has been updated{" "}
        </span>
        <button
          onClick={Next}
          className='mt-10 bg-bg w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
        >
          Login
        </button>
      </div>{" "}
    </div>
  );
}
