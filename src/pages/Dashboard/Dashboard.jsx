/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Dashboard() {
  const location = useLocation();
  const path = location.pathname.startsWith("/channels");

  return (
    <div className='flex '>
      <Sidebar />

      <div className='w-auto absolute left-18 right-0 h-full'>
        {!path && <Navbar />}

        <Outlet />
      </div>
    </div>
  );
}
