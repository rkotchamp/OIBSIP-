const pizzaRouter = require("./pizza.routes");

const setupRoutes = (server) => {
  server.use("/pizza", pizzaRouter);
};
module.exports = setupRoutes;
