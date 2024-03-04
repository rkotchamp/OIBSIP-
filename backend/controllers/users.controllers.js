const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModel = require("../models/user.model");

const loginUser = (req, res) => {
  //   console.log(req.user);
  if (req.user !== null) {
    const { _id, email } = req.user;
    const token = jwt.sign(
      { userId: _id, email: email },
      process.env.PRIVATE_KEY
    );

    res.status(200).json({ message: "Success", token: token });
  } else {
    res.status(404).json({ error: "Invalid user credentials" });
  }
};

const getUserInfo = (req, res) => {
  const email = req.email;
  UserModel.findUserByEmail(email)
    .then((results) => {
      if (results !== null && results.email === email) {
        delete results.hashed_password;
        res.status(200).json({ message: "Success", data: results });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error retrieving user data" });
    });
};

const OrderedFood = (req, res) => {
  const body = req.body;
};
module.exports = {
  loginUser,
  getUserInfo,
  OrderedFood,
};
