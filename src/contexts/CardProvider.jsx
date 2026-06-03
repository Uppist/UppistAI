/** @format */

import { useState } from "react";
import { CardContext } from "./Context";

export function CardProvider({ children }) {
  const [cardAvailable, setCardAvailable] = useState([]);
  const [openCard, setOpenCard] = useState(null);
  const [availableBalance, setAvailableBalance] = useState(125000);
  const [amountDue, setAmountDue] = useState(500000);

  return (
    <CardContext.Provider
      value={{
        cardAvailable,
        setCardAvailable,
        openCard,
        setOpenCard,
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
