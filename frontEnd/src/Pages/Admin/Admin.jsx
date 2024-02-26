import { useState } from "react";
import FoodStock from "../../components/FoodStock/FoodStock";

import { AllStockData } from "../../allStockData.json";
import OrderedFood from "../../components/OrderedFood/OrderedFood";
import { MdUpdate } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import PostFood from "../../components/PostFood/PostFood";
import UserProfile from "../../components/userProfile/UserProfile";

import "./Admin.css";

const btn = ["Dashboard", "Post New Food", "Profile"];
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
            <div className="listButtons">
              {btn.map((b, i) => {
                return (
                  <button
                    className={
                      activeTab === i ? "foodBtn foodBtnActive" : "foodBtn"
                    }
                    key={i}
                    onClick={() => setActiveTab(i)}
                  >
                    {i === 0 && <MdOutlineDashboard className="listIcons" />}
                    {i === 1 && <MdUpdate className="listIcons" />}
                    {i === 2 && <FaRegUser className="listIcons" />}
                    {b}
                  </button>
                );
              })}
            </div>
            <div className="logoutContainer">
              <button className="logOut">
                <MdOutlineLogout />
                Logout
              </button>
            </div>
          </div>
          <div className="renderedAndOrdered">
            <div className="render__table">
              {activeTab === 0 && (
                <FoodStock stockData={AllStockData} activeTab={activeTab} />
              )}
              {activeTab === 1 && <PostFood />}
              {activeTab === 2 && <UserProfile />}
            </div>
            <div className="ordered">{activeTab === 0 && <OrderedFood />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
