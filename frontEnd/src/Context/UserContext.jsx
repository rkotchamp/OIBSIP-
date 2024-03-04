import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const UserContext = createContext();
export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      api
        .get("/user", config)
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
