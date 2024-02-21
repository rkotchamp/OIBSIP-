const getDb = require("../database/db");

const getAllFromPizza = () => {
  let pizzas = [];
  return getDb()
    .collection("pizza")
    .find()
    .toArray()
    .then(([results]) => results)
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

module.exports = {
  getAllFromPizza,
};
