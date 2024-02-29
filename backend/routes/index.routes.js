const pizzaRouter = require("./pizza.routes");

const setupRoutes = (server) => {
  server.use("/api", pizzaRouter);
};
module.exports = setupRoutes;
