import { useState, useEffect } from "react";
import "./Hero.css";

function Hero({ data }) {
  const [slides, setSlides] = useState(2);

  const nextSlides = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  useEffect(() => {
    const intervalID = setInterval(() => {
      nextSlides();
    }, 8000);
    return () => clearInterval(intervalID);
  });

  return (
    <div className="hero__container">
      <div className="color first__gradient"></div>
      <div className="color second__gradient"></div>
      <div className="carousel">
        {data.map((images, i) => {
          return (
            <>
              <div className="textHeader">
                <h1
                  className={
                    slides === i
                      ? "headersLetters"
                      : "headersLetters slide_hidden"
                  }
                >
                  {images.textHeader}
                </h1>
              </div>
              <img
                src={images.src}
                alt=""
                key={i}
                className={slides === i ? "image slides" : "image slide_hidden"}
              />
              <span className="indicators">
                {data.map((_, i) => {
                  return (
                    <button
                      onClick={() => setSlides(i)}
                      className={
                        slides === i
                          ? "indicator-btn active-indicator"
                          : "indicator-btn"
                      }
                      key={i}
                    ></button>
                  );
                })}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
