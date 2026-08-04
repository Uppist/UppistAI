/** @format */

import { useEffect, useState } from "react";
import { CreateUserContext } from "../Context";
import api from "../../api/axios";

export default function CreateUserProvider({ children }) {
  const [getUsers, setGetUsers] = useState([]);
  const [listAPI, setListAPI] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    //get users
    api.get("/users", { headers }).then((res) => {
      console.log(res.data);
      setGetUsers(res.data.users);
    });

    //get All APIs

    api.get("/keys", { headers }).then((res) => {
      console.log(res.data);
      setListAPI(res.data.keys);
    });
  }, []);
  return (
    <CreateUserContext.Provider
      value={{ getUsers, setGetUsers, listAPI, setListAPI }}
    >
      {children}
    </CreateUserContext.Provider>
  );
}
