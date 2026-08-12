/** @format */

import Logo1 from "./Logo1";
import Logo2 from "./Logo2";
import logo from "../../../assets/Dashboard/logo.svg";
import { useContext, useState } from "react";
import ProfileOverlay from "./ProfileOverlay";
import { UserContext } from "../../../contexts/Context";

export default function Sidebar() {
  const [profile, setProfile] = useState(false);

  const { userDetails } = useContext(UserContext);

  const role = userDetails?.user?.role;

  return (
    <div className='border border-light-grey h-screen w-18 p-4 fixed z-50 flex flex-col justify-between'>
      <div className='flex flex-col  items-center gap-y-10'>
        <div className='relative'>
          <div className='w-10 h-10 rounded-full bg-light-grey'></div>
          {profile && (
            <>
              <div
                className='fixed inset-0 z-40'
                onClick={() => setProfile(false)}
              />
              <ProfileOverlay setProfile={setProfile} />
            </>
          )}
        </div>

        <Logo1 role={role} />
      </div>
      <div className='flex flex-col gap-y-10 items-center'>
        <Logo2 role={role} />
        <div className='flex items-center border-t border-t-light-grey w-max justify-center'>
          <img className='' src={logo} alt="Company's Logo" />
        </div>
      </div>
    </div>
  );
}
