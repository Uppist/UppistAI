/** @format */
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/Animation/Loader";
export default function EighthScreen({ appLoading, setAppLoading }) {
  const navigate = useNavigate();

  if (appLoading) {
    return <Loader />;
  }
  function Next() {
    setAppLoading(true);

    setTimeout(() => {
      setAppLoading(false);
      navigate("/signin");
    }, 2000);
  }

  return (
    <div className='flex flex-col lg:h-screen justify-center gap-y-10 lg:p-20 animate-fade-up overflow-scroll no-scrollbar sm: p-7 sm: -mt-30'>
      {/* */}
      <div className='mt-50 flex items-center justify-between'>
        <Link to={-1}>
          {" "}
          <span className='text-black text-sm font-normal flex items-center gap-x-2'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.6041 17.5837L5.58331 10.5837C5.49997 10.5003 5.44081 10.41 5.40581 10.3128C5.37081 10.2156 5.35358 10.1114 5.35414 10.0003C5.35414 9.88921 5.37164 9.78505 5.40664 9.68783C5.44164 9.5906 5.50053 9.50033 5.58331 9.41699L12.6041 2.39616C12.7986 2.20171 13.0416 2.10449 13.3333 2.10449C13.625 2.10449 13.875 2.20866 14.0833 2.41699C14.2916 2.62533 14.3958 2.86838 14.3958 3.14616C14.3958 3.42394 14.2916 3.66699 14.0833 3.87533L7.95831 10.0003L14.0833 16.1253C14.2778 16.3198 14.375 16.5595 14.375 16.8445C14.375 17.1295 14.2708 17.3759 14.0625 17.5837C13.8541 17.792 13.6111 17.8962 13.3333 17.8962C13.0555 17.8962 12.8125 17.792 12.6041 17.5837Z'
                fill='#2B2B2B'
                fillOpacity='0.8'
              />
            </svg>
            Back
          </span>
        </Link>{" "}
      </div>
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2 items-center'>
          <svg
            width='80'
            height='80'
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M39.9997 3.33398C19.753 3.33398 3.33301 19.754 3.33301 40.0006C3.33301 60.2473 19.753 76.6673 39.9997 76.6673C60.2463 76.6673 76.6663 60.2473 76.6663 40.0006C76.6663 19.754 60.2463 3.33398 39.9997 3.33398ZM34.9997 55.0006L19.9997 40.0006L24.9997 35.0006L34.9997 45.0006L54.853 25.1473L59.853 29.8573L34.9997 55.0006Z'
              fill='#21CA97'
            />
          </svg>

          <h2 className='m-0px text-black text-3xl font-bold text-center'>
            Onboarding Successful{" "}
          </h2>
        </div>

        <div>
          <button
            onClick={Next}
            className='bg-bg mt-5  w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
