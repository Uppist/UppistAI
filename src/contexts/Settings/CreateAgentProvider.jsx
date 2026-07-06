/** @format */

import { useEffect, useState } from "react";
import { CreateAgentContext } from "../Context";
import api from "../../api/axios";

export default function CreateAgentProvider({ children }) {
  const [getAgents, setGetAgents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    api
      .get("/agents", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setGetAgents(res.data.agents);
      });
  }, []);
  return (
    <CreateAgentContext.Provider value={{ getAgents, setGetAgents }}>
      {children}
    </CreateAgentContext.Provider>
  );
}
