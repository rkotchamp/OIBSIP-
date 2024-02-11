import "./PizzaComponent.css";

function PizzaComponent({ pizzaImages, onPizzaSelect }) {
  const checkboxChange = (e, pizza) => {
    if (e.target.checked) {
      onPizzaSelect(pizza.id);
    } else {
      onPizzaSelect(null);
    }
  };

  return (
    <>
      {pizzaImages.map((pizza, i) => {
        return (
          <div className="pizza__container" key={i}>
            <div className="pizza__image__container">
              <img src={pizza.image} alt="" className="imageFood" />
            </div>
            <div className="title__and__price">
              <p>{pizza.name}</p>
              <p className="price">${pizza.price}</p>
            </div>
            <div className="description__and__radio">
              <p className="description">{pizza.ingredient}</p>
              <input
                type="checkbox"
                name={pizza.name}
                value={pizza.name}
                onChange={(e) => checkboxChange(e, pizza)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PizzaComponent;
