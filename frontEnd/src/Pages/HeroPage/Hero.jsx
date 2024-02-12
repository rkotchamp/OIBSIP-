import { useState, useEffect } from "react";
import PizzaComponent from "../../components/PizzaComponent/PizzaComponent";
import { pizzaImages } from "../../pizzaDetails.json";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { sauceImages } from "../../sauceDetails.json";
import { cheeseImages } from "../../cheese.json";
import { veggiesImages } from "../../veggies.json";
import FoodDetails from "../../components/FoodDeatils/FoodDetails";
import { Link } from "react-router-dom";
import "./Hero.css";

const types = ["Pizza", "Sauce", "Cheese", "Veggies", "Pizza Details"];
function Hero({ data }) {
  const [slides, setSlides] = useState(0);
  const [choice, setChoice] = useState(0);
  const [chosenPizza, setChosenPizza] = useState(null);
  const [chosenSauce, setChosenSauce] = useState(null);
  const [chosenCheese, setChosenCheese] = useState(null);
  const [chosenVeggies, setChosenVeggies] = useState(null);
  const [error, setError] = useState(false);

  const handleChosenPizza = (id) => {
    setChosenPizza(id);
  };
  const handleChosenSauce = (id) => {
    setChosenSauce(id);
  };
  const handleChosenCheese = (id) => {
    setChosenCheese(id);
  };
  const handleChosenVeggies = (id) => {
    setChosenVeggies(id);
  };

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
    setChoice(choice === types.length - 1 ? types.length - 1 : choice + 1);
    types.filter;
  };
  const backSlide = () => {
    setChoice(choice === 0 ? 0 : choice - 1);
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
          {choice !== types.length - 1 ? "Choose your" : "Finalise your"}{" "}
          Favorite {type}
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
        <div
          className={
            choice === types.length - 1 ? "foodDetails" : "foodCategory"
          }
        >
          {choice === 0 && (
            <PizzaComponent
              pizzaImages={pizzaImages}
              onPizzaSelect={handleChosenPizza}
            />
          )}

          {choice === 1 && (
            <PizzaComponent
              pizzaImages={sauceImages}
              onPizzaSelect={handleChosenSauce}
            />
          )}
          {choice === 2 && (
            <PizzaComponent
              pizzaImages={cheeseImages}
              onPizzaSelect={handleChosenCheese}
            />
          )}
          {choice === 3 && (
            <PizzaComponent
              pizzaImages={veggiesImages}
              onPizzaSelect={handleChosenVeggies}
            />
          )}
          {choice === 4 && (
            <FoodDetails
              pizzaId={chosenPizza}
              sauceId={chosenSauce}
              cheeseId={chosenCheese}
              veggiesId={chosenVeggies}
              pizzaData={pizzaImages}
              sauceData={sauceImages}
              cheeseData={cheeseImages}
              veggiesData={veggiesImages}
            />
          )}
        </div>
        <div className="btn__container">
          <button
            className={
              choice === types.length - 1
                ? "hidden"
                : choice === 0 && chosenPizza === null
                ? "btnInactive"
                : "btn"
            }
            onClick={() => {
              if (choice === 0 && chosenPizza === null) {
                setError(true);
                setChoice(0);
              } else {
                continueSlide();
              }
            }}
          >
            Continue
          </button>
          <Link to="/checkout">
            <button
              className={choice !== types.length - 1 ? "hidden" : "btn"}
              onClick={continueSlide}
            >
              Finalise Details
            </button>
          </Link>
          {error && <p>Select at least one Pizza</p>}
        </div>
      </div>
    </div>
  );
}

export default Hero;
