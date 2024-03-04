import { createContext, useState, useEffect } from "react";
import api from "../api/api";

const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    api.get("/food").then((res) => {
      if (res.status === 200 && res.length !== null) {
        setFood(res.data.data);
      }
    });
  }, []);

  return (
    <FoodContext.Provider value={{ food, setFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
