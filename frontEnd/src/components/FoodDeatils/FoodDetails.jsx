import { useState, useEffect, useContext } from "react";
import { OrderedContext } from "../../Context/OrderedContext";
import UserContext from "../../Context/UserContext";

import "./FoodDetails.css";

function FoodDetails({
  pizzaId,
  sauceId,
  cheeseId,
  veggiesId,
  pizzaData,
  sauceData,
  cheeseData,
  veggiesData,
}) {
  const { ordered, setOrdered } = useContext(OrderedContext);
  const { user } = useContext(UserContext);
  const selectedPizza = pizzaData.find((p) => p._id === pizzaId);
  const selectedSauce = sauceData.find((s) => s._id === sauceId);
  const selectedCheese = cheeseData.find((c) => c._id === cheeseId);
  const selectedVeggies = veggiesData.find((v) => v._id === veggiesId);
  const totalPrice =
    (selectedCheese ? selectedCheese?.price : 0) +
    (selectedPizza ? selectedPizza.price : 0) +
    (selectedSauce ? selectedSauce?.price : 0) +
    (selectedVeggies ? selectedVeggies?.price : 0);

  useEffect(() => {
    const selectedFood = [];
    if (user) {
      selectedFood.push({ user: user.fullName });
    }
    if (selectedPizza) {
      selectedFood.push({
        foodType: selectedPizza.foodType,
        price: selectedPizza.price,
      });
    }
    if (selectedSauce) {
      selectedFood.push({
        foodType: selectedSauce.foodType,
        price: selectedSauce.price,
      });
    }
    if (selectedCheese) {
      selectedFood.push({
        foodType: selectedCheese.foodType,
        price: selectedCheese.price,
      });
    }
    if (selectedVeggies) {
      selectedFood.push({
        foodType: selectedVeggies.foodType,
        price: selectedVeggies.price,
      });
    }
    if (totalPrice) {
      selectedFood.push({ total: totalPrice });
    }
    setOrdered(selectedFood);
  }, [selectedCheese, selectedPizza, selectedSauce, selectedVeggies]);

  console.log(ordered);
  // console.log(user);

  return (
    <div className="details__container">
      <div className="pizza foodItems ">
        <p className="boldTitle">Pizza</p>
        <p>{selectedPizza.name}</p>
        <p className="boldTitle priceColor">{selectedPizza.price}</p>
      </div>
      <div className="sauce foodItems ">
        <p className="boldTitle">{selectedSauce && "Sauce"}</p>
        <p>{selectedSauce?.name}</p>
        <p className="boldTitle priceColor">{selectedSauce?.price}</p>
      </div>
      <div className="cheese foodItems ">
        <p className="boldTitle">{selectedCheese && "Cheese"}</p>
        <p>{selectedCheese?.name}</p>
        <p className="boldTitle priceColor">{selectedCheese?.price}</p>
      </div>
      <div className="veggies foodItems ">
        <p className="boldTitle">{selectedVeggies && "Veggies"}</p>
        <p>{selectedVeggies?.name}</p>
        <p className="boldTitle priceColor">{selectedVeggies?.price}</p>
      </div>
      <div className="foodItems totalPrice">
        <p className="boldTitle priceColor">Total Price</p>
        <p className="boldTitle priceColor">${totalPrice}</p>
      </div>
    </div>
  );
}

export default FoodDetails;
