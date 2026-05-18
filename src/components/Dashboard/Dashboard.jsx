/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className='flex '>
      <Sidebar />

      <div className='w-screen'>
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
}
