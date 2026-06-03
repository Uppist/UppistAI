/** @format */

import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className='py-5 border border-light-grey'>
      <span className='text-black text-xl font-semibold py-4 px-6'>
        {location.pathname === "/dashboard"
          ? "Dashboard"
          : location.pathname === "/settings"
            ? "Settings"
            : ""}
      </span>
    </div>
  );
}
