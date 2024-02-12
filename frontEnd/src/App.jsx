import { Routes, Route } from "react-router-dom";
import { slideImages } from "./carousel.json";
import Checkout from "./components/check/Checkout";
import Hero from "./Pages/HeroPage/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero data={slideImages} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
