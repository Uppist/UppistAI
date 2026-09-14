/** @format */

import { useCallback, useEffect, useState } from "react";
import { CreateUserContext } from "../Context";
import api from "../../api/axios";

export default function CreateUserProvider({ children }) {
  const [getUsers, setGetUsers] = useState([]);
  const [listAPI, setListAPI] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );
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

  const fetchUserData = useCallback(async () => {
    if (!isAuthenticated) return;

    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    //get users
    api.get("/users", { headers }).then((res) => {
      // console.log(res.data);
      setGetUsers(res.data.users);
    });

    //get All APIs

    api.get("/keys", { headers }).then((res) => {
      // console.log(res.data);
      setListAPI(res.data.keys);
    });
  }, [isAuthenticated, setGetUsers]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      fetchUserData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, fetchUserData]);
  return (
    <CreateUserContext.Provider
      value={{ getUsers, setGetUsers, listAPI, setListAPI }}
    >
      {children}
    </CreateUserContext.Provider>
  );
}
