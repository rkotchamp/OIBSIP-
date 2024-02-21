const express = require("express");
const pizzaRouter = express.Router();
const PizzaController = require("../controllers/pizza.controller");

pizzaRouter.get("/pizza", PizzaController.getAllPizza);

module.exports = pizzaRouter;
