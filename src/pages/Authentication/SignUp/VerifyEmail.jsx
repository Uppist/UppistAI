/** @format */

import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../components/Animation/Loader";

export default function VerifyEmail({ appLoading, setAppLoading }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    setAppLoading(true);

    if (location.state?.flow === "reset") {
      setTimeout(() => {
        setAppLoading(false);
        navigate("/signin/change-password");
      }, 2000);
    } else {
      setTimeout(() => {
        setAppLoading(false);
        navigate("/onboarding/1");
      }, 2000);
    }
  }

  console.log(location.state?.flow);

  if (appLoading) {
    return <Loader />;
  }
  return (
    <div className='flex flex-col justify-center gap-y-6 lg:p-20 lg:pb-140 animate-fade-up overflow-scroll no-scrollbar sm: p-10 sm:pb-30 sm: mt-20'>
      <div className='flex flex-col gap-y-2 justify-center'>
        <h2 className='m-0px text-black text-3xl font-bold'>
          Email Verification
        </h2>{" "}
        <span className='text-light font-normal text-xl'>
          Your email has been verified.{" "}
        </span>
        <button
          onClick={handleClick}
          className='mt-10 bg-bg w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
        >
          {location.state?.flow === "reset" ? "Change Password" : "Get Started"}
        </button>
      </div>{" "}
    </div>
  );
}
