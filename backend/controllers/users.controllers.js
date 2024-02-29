const jwt = require("jsonwebtoken");
require("dotenv").config();

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

module.exports = {
  loginUser,
};
