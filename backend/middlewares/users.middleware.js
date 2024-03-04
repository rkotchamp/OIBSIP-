const UserModel = require("../models/user.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const hashingOptions = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const verifyEmail = (req, res, next) => {
  UserModel.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null) {
        return res.status(400).json({ error: "This user already exist" });
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "There was an error fetching user" });
    });
};

const verifyEmailLogin = (req, res, next) => {
  UserModel.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null) {
        next();
      } else {
        res.status(401).json({ error: "This email is not registered" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error fetching email" });
    });
};
// const verifyAdminLogin = (req, res, next) => {
//   UserModel.findUserByEmail(req.body.email)
//     .then((user) => {
//       if (user !== null) {
//         next();
//       } else {
//         res.status(401).json({ error: "This email is not registered" });
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: "Error fetching email" });
//     });
// };

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashValue) => {
      delete req.body.password;
      req.body.hashed_password = hashValue;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error hashing password");
    });
};

const verifyPassword = (req, res, next) => {
  UserModel.findUserByEmail(req.body.email)
    .then((user) => {
      if (user !== null) {
        argon2
          .verify(user.hashed_password, req.body.password)
          .then((isVerified) => {
            if (isVerified) {
              delete user.hashed_password;
              req.user = user;
              next();
            } else {
              res.status(401).json({ error: "An Invalid Password" });
            }
          });
      } else {
        res.status(401).json({ error: "This email is not registered" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error Retrieving user" });
    });
};

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.get("Authorization");

  if (authorizationHeader === null) {
    res.status(403).json({ error: "Missing authorization header" });
  }

  const [type, token] = authorizationHeader.split(" ");
  if (type !== "Bearer") {
    res.status(403).json({ error: "Authorisation header has no Bearer type" });
  }

  jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
    if (error) {
      res.status(403).json({ error: "Error decoding authorization header" });
    } else {
      req.userId = decoded.userId;
      req.email = decoded.email;

      next();
    }
  });
};

const stripeHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "{{PRICE_ID}}",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: true },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
module.exports = {
  verifyEmail,
  hashPassword,
  verifyEmailLogin,
  verifyPassword,
  verifyToken,
  stripeHandler,
};
