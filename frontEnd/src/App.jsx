import { Routes, Route } from "react-router-dom";
import { slideImages } from "./carousel.json";
import Hero from "./Pages/HeroPage/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero data={slideImages} />} />
      </Routes>
    </>
  );
}

export default App;
