/** @format */

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { UserContext } from "../../contexts/Context";
import { useContext, useEffect } from "react";

export default function Dashboard({ showRoute }) {
  const location = useLocation();
  const path = location.pathname.startsWith("/channels");
  const navigate = useNavigate();
  const { userDetails } = useContext(UserContext);
  // useEffect(() => {
  //   if (
  //     userDetails?.user?.role === "agent" &&
  //     location.pathname === "/dashboard"
  //   ) {
  //     navigate("/channels/whatsapp");
  //   }
  // }, [userDetails, location.pathname, navigate]);

  return (
    <div className="flex ">
      <Sidebar />

      {showRoute && (
        <div className="w-auto lg:absolute lg:left-18 lg:right-0 lg:h-full">
          {!path && <Navbar />}

          <Outlet />
        </div>
      )}
    </div>
  );
}
