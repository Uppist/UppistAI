/** @format */

import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (!token) {
      navigate("/");
      return;
    }

    api
      .get("users/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response?.status === 401) {
          localStorage.removeItem("Token");
          navigate("/signin");
        }
      });
  }, [navigate]);

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, notifications, setNotifications }}
    >
      {children}
    </UserContext.Provider>
  );
}
