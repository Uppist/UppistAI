/** @format */

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { UserContext } from "../../contexts/Context";
import { useContext, useEffect } from "react";

export default function Dashboard() {
  const location = useLocation();
  const path = location.pathname.startsWith("/channels");
  const navigate = useNavigate();
  const { userDetails } = useContext(UserContext);
  useEffect(() => {
    if (
      userDetails?.user?.role === "agent" &&
      location.pathname === "/dashboard"
    ) {
      navigate("/channels/whatsapp");
    }
  }, [userDetails, location.pathname, navigate]);
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
