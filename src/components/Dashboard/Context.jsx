/** @format */

import { useState } from "react";
import { CardContext } from "./CardContext";

export default function Context({ children }) {
  const [cardAvailable, setCardAvailable] = useState([]);
  const [openCard, setOpenCard] = useState(null);
  const [availableBalance, setAvailableBalance] = useState(125000);
  const [amountDue, setAmountDue] = useState(500000);

  const baseUrl = "http://localhost:3000/api/";
  const token = localStorage.getItem("token");

  return (
    <CardContext.Provider
      value={{
        cardAvailable,
        setCardAvailable,
        openCard,
        setOpenCard,
        baseUrl,
        token,
        availableBalance,
        setAvailableBalance,
        amountDue,
        setAmountDue,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
