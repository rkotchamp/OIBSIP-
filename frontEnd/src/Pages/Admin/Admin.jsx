import "./Admin.css";

const btn = ["All", "Pizza", "Sauce", "Cheese", "Veggies", "Meat"];
function Admin() {
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
                <button className="foodBtn" key={i}>
                  {b}
                </button>
              );
            })}
          </div>
          <div className="render__table"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
