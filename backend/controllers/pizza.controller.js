const PizzaModels = require("../models/pizza.model");

const getAllPizza = (req, res) => {
  console.log("it is running control");

  PizzaModels.getAllFromPizza()
    .then((results) => {
      if (results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send("No Pizza Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving pizza");
    });
};

module.exports = {
  getAllPizza,
};
