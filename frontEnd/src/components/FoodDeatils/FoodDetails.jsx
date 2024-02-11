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

  return <div className="details__container"></div>;
}

export default FoodDetails;
