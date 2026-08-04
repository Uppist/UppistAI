/** @format */

import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuthState = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("Token")));
    };

    syncAuthState();
    window.addEventListener("auth:token-updated", syncAuthState);
    window.addEventListener("auth:token-removed", syncAuthState);

    return () => {
      window.removeEventListener("auth:token-updated", syncAuthState);
      window.removeEventListener("auth:token-removed", syncAuthState);
    };
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    api
      .get("users/me", { headers })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response?.status === 401) {
          localStorage.removeItem("Token");
          window.dispatchEvent(new Event("auth:token-removed"));
          navigate("/signin");
        }
      });

    api.get("dashboard/notifications", { headers }).then((res) => {
      setNotifications(res.data.notifications || []);
    });
  }, [isAuthenticated, navigate]);

  return (
    <UserContext.Provider
      value={{ userDetails, setUserDetails, notifications, setNotifications }}
    >
      {children}
    </UserContext.Provider>
  );
}
