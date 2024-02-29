const { getAllFromPizza } = require("../models/pizza.model");

const getAllPizza = (req, res) => {
  getAllFromPizza()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving pizza");
    });
};

module.exports = {
  getAllPizza,
};
