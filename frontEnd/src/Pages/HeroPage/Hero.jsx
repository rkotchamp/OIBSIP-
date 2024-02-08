import { useState, useEffect } from "react";
import PizzaComponent from "../../components/PizzaComponent/PizzaComponent";
import { pizzaImages } from "../../pizzaDetails.json";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { sauceImages } from "../../sauceDetails.json";
import "./Hero.css";

const types = ["Pizza", "Sauce", "Cheese", "Veggies"];
function Hero({ data }) {
  const [slides, setSlides] = useState(0);
  const [choice, setChoice] = useState(0);
  const [categoryRender, setCategoryRender] = useState(true);

  const nextSlides = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  useEffect(() => {
    const intervalID = setInterval(() => {
      nextSlides();
    }, 8000);
    return () => clearInterval(intervalID);
  });

  const continueSlide = () => {
    setChoice(choice + 1);
    types.filter;
  };
  const backSlide = () => {
    setChoice(choice - 1);
  };

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
      {types.map((type, i) => (
        <h3
          className={choice === i ? "food__choice__header" : "slide_hidden"}
          key={i}
        >
          Choose your Favorite {type}
        </h3>
      ))}
      {/* <h3 className="food__choice__header">Choose your Favourite Pizza</h3> */}
      <div className="food__choice__container">
        <div className="navigation__bars">
          <button className="back__button" onClick={backSlide}>
            <MdOutlineArrowBackIosNew /> Back
          </button>
          <div className="bars_container">
            {types.map((_, i) => {
              return (
                <div
                  className={choice === i ? "bars active" : "bars"}
                  key={i}
                ></div>
              );
            })}
            {/* <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div> */}
          </div>
        </div>
        <div className="foodCategory">
          <PizzaComponent pizzaImages={pizzaImages} />
          <PizzaComponent pizzaImages={sauceImages} />
        </div>
        <div className="btn__container">
          <button className="btn" onClick={continueSlide}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
