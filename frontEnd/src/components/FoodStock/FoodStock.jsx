import "./FoodStock.css";

function FoodStock({ stockData, activeTab }) {
  console.log(activeTab);
  // const newClassValue=stockData.find((food)=>)
  return (
    <div className={activeTab === 0 ? "foodGrid" : "foodStock__container"}>
      {stockData.map((stock, i) => {
        return (
          <div
            className={activeTab === 0 ? "foodElements" : "foodElementsB"}
            key={i}
          >
            <h4>{stock.food}</h4>
            <div className="stocksAndPrices">
              <span className="stocks">
                <p>Total {stock.food} Sold</p>
                <p className="stockPrice">{stock.TotalSold}</p>
              </span>
              <span className="stocks">
                <p>Available {stock.food}</p>
                <p className="stockPrice">{stock.Available}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FoodStock;
