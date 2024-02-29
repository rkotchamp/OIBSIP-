const express = require("express");
const pizzaRouter = express.Router();
const { getAllPizza } = require("../controllers/pizza.controller");

pizzaRouter.get("/pizza", getAllPizza);

module.exports = pizzaRouter;
