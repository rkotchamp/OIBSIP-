import { Routes, Route } from "react-router-dom";
import { slideImages } from "./carousel.json";
import Checkout from "../src/Pages/check/Checkout";
import Hero from "./Pages/HeroPage/Hero";
import SignUp from "./Pages/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero data={slideImages} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
