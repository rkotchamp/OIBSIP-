import { useState } from "react";
import "./Hero.css";

function Hero({ data }) {
  const [slides, setSlides] = useState(0);
  console.log(data);
  return (
    <div className="hero__container">
      <div className="color first__gradient"></div>
      <div className="color second__gradient"></div>
      <div className="carousel">
        {data.map((images, i) => {
          return (
            <>
              <div className="textHeader">
                <h1>{images.textHeader}</h1>
              </div>
              <img src={images.src} alt="" key={i} className="slides" />;
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
