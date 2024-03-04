import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext.jsx";
import { FoodContextProvider } from "./Context/FoodContext.jsx";
import { OrderedContextProvider } from "./Context/OrderedContext.jsx";
import { AuthContextProvider } from "./Context/Auth.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <OrderedContextProvider>
          <FoodContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </FoodContextProvider>
        </OrderedContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
