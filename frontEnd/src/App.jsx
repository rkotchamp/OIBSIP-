import { Routes, Route } from "react-router-dom";
import { slideImages } from "./carousel.json";
import Checkout from "../src/Pages/check/Checkout";
import Hero from "./Pages/HeroPage/Hero";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Admin from "./Pages/Admin/Admin";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero data={slideImages} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
