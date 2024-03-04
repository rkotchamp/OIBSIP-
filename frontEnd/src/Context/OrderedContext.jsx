import { createContext, useState } from "react";

export const OrderedContext = createContext();

export const OrderedContextProvider = ({ children }) => {
  const [ordered, setOrdered] = useState({});
  return (
    <OrderedContext.Provider value={{ ordered, setOrdered }}>
      {children}
    </OrderedContext.Provider>
  );
};
