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
  const selectedPizza = pizzaData.find((p) => p.id === pizzaId);
  const selectedSauce = sauceData.find((s) => s.id === sauceId);
  const selectedCheese = cheeseData.find((c) => c.id === cheeseId);
  const selectedVeggies = veggiesData.find((v) => v.id === veggiesId);
  const totalPrice =
    (selectedCheese ? selectedCheese?.price : 0) +
    (selectedPizza ? selectedPizza.price : 0) +
    (selectedSauce ? selectedSauce?.price : 0) +
    (selectedVeggies ? selectedVeggies?.price : 0);

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
