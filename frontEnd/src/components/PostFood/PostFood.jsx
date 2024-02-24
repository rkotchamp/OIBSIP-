import "./PostFood.css";

function PostFood() {
  return (
    <div className="postFoodContainer">
      <h3>Post New Food</h3>
      <form action="" className="form">
        <div className="inputContents">
          <select name="" id="">
            <option value="" name="">
              Select your type of Food
            </option>
            <option value="pizza" name="pizza">
              Pizza
            </option>
            <option value="sauce" name="sauce">
              Sauce
            </option>
            <option value="cheese" name="cheese">
              Cheese
            </option>
            <option value="veggies" name="veggies">
              Veggies
            </option>
            <option value="meat" name="meat">
              Meat
            </option>
          </select>
        </div>
        <div className="inputContents">
          <textarea name="" placeholder="Write your ingredients"></textarea>
        </div>
        <div className="inputContents">
          <label htmlFor="image">
            <input type="file" id="image" />
          </label>
        </div>
        <div className="inputContents">
          <input type="text" placeholder="Add your price" />
        </div>
        <button>Post Food</button>
      </form>
    </div>
  );
}

export default PostFood;
