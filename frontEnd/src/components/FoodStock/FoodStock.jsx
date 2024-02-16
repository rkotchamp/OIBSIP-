import "./FoodStock.css";

function FoodStock({ stockData }) {
  console.log(stockData);
  return (
    <div className="foodStock__container">
      {stockData.map((stock, i) => {
        return (
          <>
            <h4>{stock.food}</h4>
            <div className="stocksAndPrices" key={i}>
              <span className="stocks">
                <p>Total Pizza Sold</p>
                <p className="stockPrice">{stock.TotalSold}</p>
              </span>
              <span className="stocks">
                <p>Available Pizza</p>
                <p className="stockPrice">{stock.Available}</p>
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FoodStock;
