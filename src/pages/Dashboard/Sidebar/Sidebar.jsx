/** @format */

import Logo1 from "./Logo1";
import Logo2 from "./Logo2";
import img from "../../../assets/Dashboard/img.svg";
import logo from "../../../assets/Dashboard/logo.svg";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  return (
    <div className='border border-light-grey relative h-screen w-18 p-4 flex flex-col justify-between'>
      <div className='flex flex-col items-center gap-y-10'>
        <img className='' src={img} alt='Profile picture' />
        <Logo1 active={active} setActive={setActive} />
      </div>
      <div className='flex flex-col gap-y-10 items-center'>
        <Logo2 active={active} setActive={setActive} />
        <div className='flex items-center border-t border-t-light-grey w-max justify-center'>
          <img className='' src={logo} alt="Company's Logo" />
        </div>
      </div>
    </div>
  );
}
