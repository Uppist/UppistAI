/** @format */

import { useEffect, useState } from "react";
import { ContactContext } from "./Context";
import api from "../api/axios";

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [contactDetail, setContactDetail] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );

  function getContactDetail(id) {
    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    return api
      .get(`/dashboard/contacts/${id}`, { headers })
      .then((res) => {
        const detail = res.data.contact || res.data;
        console.log(res.data);
        setContactDetail(detail);
        return detail;
      })
      .catch((err) => {
        console.log(err.response?.data || err.message);
        throw err;
      });
  }

  //
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
    if (!isAuthenticated) return;

    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    api
      .get("/dashboard/contacts", { headers })
      .then((res) => {
        setContacts(res.data.contacts || []);
      })
      .catch((err) => {
        console.log(err.response?.data || err.message);
      });
  }, [isAuthenticated]);
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        contactDetail,
        setContactDetail,
        getContactDetail,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
