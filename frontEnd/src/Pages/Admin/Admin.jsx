import { useState } from "react";
import FoodStock from "../../components/FoodStock/FoodStock";
import { PizzaStockData } from "../../PizzastockData.json";
import { cheeseStockData } from "../../cheeseStockData.json";
import { sauceStockData } from "../../sauceStockData.json";
import { veggiesStockData } from "../../veggiesStockData.json";
import { meatStockData } from "../../meatStockData.json";
import { AllStockData } from "../../allStockData.json";

import "./Admin.css";

const btn = ["All", "Pizza", "Sauce", "Cheese", "Veggies", "Meat"];
function Admin() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="admin__container">
      <div className="gradeStyle firstGradient"></div>
      <div className="gradeStyle secondGradient"></div>
      <div className="adminContent">
        <h1>Admin Dashboard</h1>
        <div className="tables">
          <div className="food__table">
            {btn.map((b, i) => {
              return (
                <button
                  className={
                    activeTab === i ? "foodBtn foodBtnActive" : "foodBtn"
                  }
                  key={i}
                  onClick={() => setActiveTab(i)}
                >
                  {b}
                </button>
              );
            })}
          </div>
          <div className="render__table">
            {activeTab === 0 && <FoodStock stockData={AllStockData} />}
            {activeTab === 1 && <FoodStock stockData={PizzaStockData} />}
            {activeTab === 2 && <FoodStock stockData={sauceStockData} />}
            {activeTab === 3 && <FoodStock stockData={cheeseStockData} />}
            {activeTab === 4 && <FoodStock stockData={veggiesStockData} />}
            {activeTab === 5 && <FoodStock stockData={meatStockData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
