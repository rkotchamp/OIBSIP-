const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();
const setupRoutes = require("./routes/index.routes");
const { connectToDb, getDb } = require("./database/db");

const server = express();
const port = process.env.SERVER_PORT;

server.use(express.json());
server.use(cookieParser());

let db;
setupRoutes(server);
connectToDb((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log("Server is running ");
    });
    db = getDb();
  }
});
