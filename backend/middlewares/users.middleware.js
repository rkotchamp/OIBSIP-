const UserModel = require("../models/user.model");
const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyEmail = (req, res, next) => {
  UserModel.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null) {
        return res.status(400).json({ error: "This user already exist" });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "There was an error fetching user" });
    });
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashValue) => {
      delete req.body.password;
      req.body.hashed_password = hashValue;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error hashing password");
    });
};

module.exports = {
  verifyEmail,
  hashPassword,
};
