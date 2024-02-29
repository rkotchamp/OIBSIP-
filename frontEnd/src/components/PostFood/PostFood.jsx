import { useState, useRef, useEffect } from "react";
import { BsImage } from "react-icons/bs";
import api from "../../api/api";
import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./PostFood.css";

function PostFood() {
  // Hooks
  const countRef = useRef(0);
  const [uploadIcon, setUploadIcon] = useState(true);
  const [imageSelectedText, setImageSelectedText] = useState("Upload an Image");
  const [formError, setFormError] = useState("");
  const [formCheck, setFormCheck] = useState(false);
  // const [price, setPrice] = useState("");

  // Methods
  const handleSelectedImage = (e) => {
    const fileInput = e.target;
    if (fileInput.files.length > 0) {
      setImageSelectedText(fileInput.files[0].name);
      setUploadIcon(false);
    } else {
      setImageSelectedText("Upload an Image");
      setUploadIcon(true);
    }
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const body = {};
    if (
      !form.get("ingredients") ||
      !form.get("price") ||
      !form.get("foodType") ||
      !form.get("image")
    ) {
      setFormCheck(true);
      setFormError("Please Fill Out All Spaces");

      return;
    } else {
      for (const [key, value] of form.entries()) {
        body[key] = value;
      }
      setFormCheck(false);

      const imageName = body.image;
      const imageRef = ref(storage, `${imageName.name + v4()}`);

      uploadBytes(imageRef, imageName)
        .then(() => getDownloadURL(imageRef))
        .then((url) => {
          body.image = url;
          console.log(body);
          // configure and push to api after my user authentication
        });
    }
  };

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (
    <div className="postFoodContainer">
      <h3>Post New Food</h3>
      <form action="" className="form" onSubmit={handleFoodSubmit}>
        <div className="inputContents">
          <div className="custom-select">
            <select name="foodType" id="">
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
        </div>
        <div className="inputContents">
          <textarea
            name="ingredients"
            placeholder="Write your ingredients"
            // onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>
        <div className="inputContents">
          <label htmlFor="image" className="label">
            {uploadIcon && <BsImage />}
            {imageSelectedText}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="file"
            onChange={handleSelectedImage}
          />
        </div>
        <div className="inputContents">
          <input
            type="text"
            placeholder="Add your price"
            className="price"
            name="price"
            // onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {formCheck && <p>{formError}</p>}

        <button type="submit" className="postButton">
          Post Food
        </button>
      </form>
    </div>
  );
}

export default PostFood;
