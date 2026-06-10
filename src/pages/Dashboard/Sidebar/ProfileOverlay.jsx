/** @format */
import { useContext } from "react";
import img from "../../../assets/Dashboard/img.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/Context";

export default function ProfileOverlay({ setProfile }) {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("Token");
    navigate("/signin");
  }

  const { userDetails } = useContext(UserContext);
  console.log(userDetails.user);

  return (
    <div
      className='absolute top-2 left-full ml-4 z-9999 w-90 h-82 rounded-2xl bg-white shadow-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='flex flex-col items-center gap-3  p-6 '>
        <img src={img} className='w-16 h-16' alt='' />
        <h3 className='text-lg font-medium text-black'>
          {" "}
          {userDetails?.user?.fullName}
        </h3>
        <span className='text-sm font-normal text-grey'>
          {userDetails?.user?.email}
        </span>
        <button
          className='w-1/2 rounded-full border cursor-pointer border-light-grey px-6 py-2 text-base font-medium text-light-black  hover:bg-slate-50'
          onClick={() => {
            navigate("/settings");
            setProfile(false);
          }}
        >
          Edit Profile
        </button>
      </div>

      <hr className='border-2 border-light-grey' />

      {/*Log out*/}
      <div className='p-6 flex items-center justify-center gap-x-2'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.5 14.6875C7.56133 16.2308 8.84742 17.5412 10.5703 17.499C10.9711 17.4892 11.4666 17.3495 12.4574 17.07C14.842 16.3974 16.912 15.267 17.4087 12.7346C17.5 12.2691 17.5 11.7453 17.5 10.6977L17.5 9.30229C17.5 8.25468 17.5 7.73087 17.4087 7.26538C16.912 4.73304 14.842 3.60263 12.4574 2.93002C11.4666 2.65054 10.9711 2.5108 10.5703 2.50099C8.84743 2.45884 7.56134 3.76923 7.5 5.31251'
            stroke='#667085'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M2.5 10.0003H11.6667M2.5 10.0003C2.5 9.4168 4.16192 8.3266 4.58333 7.91699M2.5 10.0003C2.5 10.5838 4.16192 11.6741 4.58333 12.0837'
            stroke='#667085'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <button
          className='cursor-pointer text-base font-medium text-light-black'
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
