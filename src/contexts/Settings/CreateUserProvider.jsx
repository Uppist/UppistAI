/** @format */

import { useEffect, useState } from "react";
import { CreateUserContext } from "../Context";
import api from "../../api/axios";

export default function CreateUserProvider({ children }) {
  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    api
      .get("/users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setGetUsers(res.data.users);
      });
  }, []);
  return (
    <CreateUserContext.Provider value={{ getUsers, setGetUsers }}>
      {children}
    </CreateUserContext.Provider>
  );
}
