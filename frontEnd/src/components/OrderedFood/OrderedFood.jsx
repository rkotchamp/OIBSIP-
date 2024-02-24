import { ordered } from "../../ordered.json";
import "./OrderedFood.css";

const table = ["Customer", "Food", "Price", "Status", "Action"];
function OrderedFood() {
  return (
    <div className="orderedContainer">
      <div className="orderHeader">
        <h4>Recent Online Orders</h4>
      </div>
      <div className="tabular">
        <table>
          <tr className="tabularHeaders__container">
            {table.map((tab, i) => {
              return <th key={i}>{tab}</th>;
            })}
          </tr>
          {ordered.map((value, i) => {
            return (
              <tr key={i} className="">
                <td>{value.customer}</td>
                <td>{value.food}</td>
                <td>{value.price}</td>
                <td>{value.status}</td>
                <td className="tableBtnContainer">
                  <button className="tableBtn accept">Accept</button>
                  <button className="tableBtn decline">Decline</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default OrderedFood;
