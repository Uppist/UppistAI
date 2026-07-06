/** @format */

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { CreateIntentContext } from "../Context";

export default function CreateIntentProvider({ children }) {
  const [getIntents, setGetIntents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    api
      .get("/dashboard/intents", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setGetIntents(res.data.intents);
      });
  }, []);

  return (
    <CreateIntentContext.Provider value={{ getIntents, setGetIntents }}>
      {children}
    </CreateIntentContext.Provider>
  );
}
