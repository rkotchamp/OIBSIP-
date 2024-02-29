const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
// const setupRoutes = require("./routes/index.routes");
const { connectToDb, getDb } = require("./database/db");
const { ObjectId } = require("mongodb");
const server = express();
const UserModel = require("./models/user.model");
const { verifyEmail, hashPassword } = require("./middlewares/users.middleware");

const port = process.env.SERVER_PORT;

server.use(express.json());
server.use(cookieParser());
server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

let db;
connectToDb((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log("Server is running ");
    });
    db = getDb();
  }
});
// setupRoutes(server);

// connectToDb((err) => {
//   if (!err) {
//     server.listen(port, () => {
//       console.log("Server is running ");
//     });
//   }
// });
// routes
server.get("/pizza", (req, res) => {
  let pizzas = [];
  db.collection("pizza")
    .find()
    .sort({ pizzaName: 1 })
    .forEach((pizza) => pizzas.push(pizza))
    .then(() => res.status(200).json(pizzas))
    .catch(() =>
      res.status(500).json({ errorMess: "Error connecting to server" })
    );
});

server.get("/pizza/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("pizza")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json({ error: "could not be fetched" }));
  } else {
    res.status(500).json({ error: "Not a valid user Pizza Name" });
  }
});

server.post("/pizza", (req, res) => {
  const body = req.body;
  db.collection("pizza")
    .insertOne(body)
    .then((response) => res.status(201).json(response))
    .catch((err) =>
      res.status(500).json({ error: "Data could not be fetched" })
    );
});

server.delete("/pizza/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("pizza")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json({ error: "could not be deleted" }));
  } else {
    res.status(500).json({ error: "Not a valid user Pizza Name" });
  }
});

server.post("/register", verifyEmail, hashPassword, (req, res) => {
  const body = req.body;
  UserModel.RegisterUser(body)
    .then((response) => res.status(201).send(response))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "User registration failed" });
    });
});
