const { getDb } = require("../database/db");

const findUserByEmail = (email) => {
  const db = getDb();
  return db.collection("users").findOne({ email: email });
};

const RegisterUser = (user) => {
  const db = getDb();
  return db.collection("users").insertOne(user);
};

const Ordered = (items) => {
  const db = getDb();
  return db.collection("order").insertOne(items);
};
module.exports = {
  findUserByEmail,
  RegisterUser,
  Ordered,
};
