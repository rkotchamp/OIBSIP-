const { getDb } = require("../database/db");

const findUserByEmail = (email) => {
  const db = getDb();
  return db.collection("users").findOne({ email: email });
};

const RegisterUser = (user) => {
  const db = getDb();
  return db.collection("users").insertOne(user);
};

module.exports = {
  findUserByEmail,
  RegisterUser,
};
